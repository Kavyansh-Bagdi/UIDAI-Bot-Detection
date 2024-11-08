import json
import numpy as np
import pandas as pd

# Load and parse JSON data from a text file
def load_json_data(filename):
    data = []
    failed = 0
    with open(filename, 'r') as f:
        for line in f:
            line = line.strip()
            if line:
                try:
                    data.append(json.loads(line))
                except json.JSONDecodeError as e:
                    print(f"JSONDecodeError for line: {line}\nError details: {e}")
                    failed += 1
    print("Data points failed to load:", failed)
    print("Data points loaded successfully:", len(data))
    return data

# Functions to extract and preprocess data points from each JSON object
def fetch_coordinates(data_point):
    return [(point["clientX"], point["clientY"]) for point in data_point.get("mouse_interaction", [])]

def fetch_keystrokes(data_point):
    return [point.get("key") for point in data_point.get("keystroke_interaction", []) if point.get("key")]

def fetch_typing(data_point):
    typing = []
    for point in data_point.get("typing_interaction", []):
        try:
            wpm = float(point["wpm"]) if point["wpm"] != 'infinity' else 500
        except (ValueError, TypeError):
            wpm = 50  # Default value for invalid entries
        typing.append(wpm)
    return typing

# Functions to calculate features based on coordinates and keystrokes
def calculate_speeds_and_total_distance(coordinates):
    total_distance, speeds = 0, []
    for i in range(1, len(coordinates)):
        x1, y1 = coordinates[i - 1]
        x2, y2 = coordinates[i]
        distance = np.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        speeds.append(distance)
        total_distance += distance
    avg_speed = total_distance / len(coordinates) if coordinates else 0
    return avg_speed, speeds

def calculate_angle_changes(coordinates):
    angle_changes = []
    for i in range(1, len(coordinates) - 1):
        x1, y1 = coordinates[i - 1]
        x2, y2 = coordinates[i]
        x3, y3 = coordinates[i + 1]
        v1 = (x2 - x1, y2 - y1)
        v2 = (x3 - x2, y3 - y2)
        mag_v1, mag_v2 = np.linalg.norm(v1), np.linalg.norm(v2)
        if mag_v1 > 0 and mag_v2 > 0:
            angle = np.arccos(np.clip(np.dot(v1, v2) / (mag_v1 * mag_v2), -1.0, 1.0))
            angle_changes.append(abs(angle))
    return angle_changes, sum(angle_changes)

def calculate_speed_variance(speeds):
    return np.var(speeds) if speeds else 0

def calculate_idle_time(coordinates):
    return sum(100 for i in range(1, len(coordinates)) if coordinates[i] == coordinates[i - 1])

# Preprocess and extract features from data
def preprocess_and_extract_features(data):
    features = {
        'avg_mouse_speed': [], 'speed_variance': [], 'total_angle_change': [],
        'idle_time': [], 'keystroke_speed': [], 'avg_speed_from_typing': []
    }
    
    
    coordinates = fetch_coordinates(data)
    keystrokes = fetch_keystrokes(data)
    typing_speeds = fetch_typing(data)
    
    avg_mouse_speed, speeds = calculate_speeds_and_total_distance(coordinates)
    _, total_angle_change = calculate_angle_changes(coordinates)
    speed_variance = calculate_speed_variance(speeds)
    idle_time = calculate_idle_time(coordinates)
    keystroke_speed = len(keystrokes) / (len(coordinates) * 0.1) if coordinates else 0
    avg_speed_from_typing = np.nanmean(typing_speeds) if typing_speeds else 0
    
    features['avg_mouse_speed'].append(avg_mouse_speed)
    features['speed_variance'].append(speed_variance)
    features['total_angle_change'].append(total_angle_change)
    features['idle_time'].append(idle_time)
    features['keystroke_speed'].append(keystroke_speed)
    features['avg_speed_from_typing'].append(avg_speed_from_typing)
        
    return pd.DataFrame(features)





