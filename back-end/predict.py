import pandas as pd
import numpy as np
import joblib
import json
from pre_process import preprocess_and_extract_features  # Correct import syntax

# Load the model and scaler
rf_model = joblib.load('back-end/model.joblib')
scaler = joblib.load('back-end/scaler.joblib')

def predict(data):
    try:
        # Preprocess and extract features from the single data point
        x = preprocess_and_extract_features(data)

        # Convert to DataFrame
        X_new = pd.DataFrame(x)

        # Replace infinity values with a large finite number
        X_new.replace([np.inf, -np.inf], 1000, inplace=True)

        # Scale the data
        X_new = scaler.transform(X_new)

        # Make the prediction
        y_pred_new = rf_model.predict(X_new)

        print("Prediction successful:", y_pred_new)
        return y_pred_new

    except Exception as e:
        print(f"Error during prediction: {e}")
        return None
