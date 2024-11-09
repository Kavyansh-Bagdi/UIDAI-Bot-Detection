# UIDAI Bot Detection

This project is designed to detect and identify bots interacting with UIDAI (Unique Identification Authority of India) systems. By using advanced machine learning and data analysis techniques, this system can help identify suspicious activities and automate bot detection for improved security.

## Features

- **Backend**: 
  - Prevent DOS (Denial Of Service) attack : 100 requests per 10 mintue
  - Cross-Origin Resource Sharing (CORS): Using Flask_cors
  - Secure OTP Generation : Generates a random, six-digit OTP using the randbelow
  (standard for mobile device).
- **Real-time Analysis**: Monitor live data to identify bot activities in real-time.
  - Mouse Coordinate
  - Scroll Distance
  - Time Between Successive KeyStroke
  - Analysis WPM (Word per Minute)
- **Machine Learning Model**: Utilizes advanced machine learning algorithms to predict and identify patterns that suggest bot-like behavior.
  - Random Forest : Accuracy 97% (approx)
  - SVM : Accuracy 96.8%
  - Nerual Network : Accuracy 96.7%
  - Ensembled : Accuracy 83.4%
- **User-friendly Interface**: Provides an interface for administrators to monitor and manage bot detection efforts.
  - CAPTCHA-free user experience
  - Responsive and lightweight frontend
  - EffortLess interaction
- **Data Collection**: Dataset collected using Data generation app build using javascript.
  - Features : Mouse speed, Mouse varience, Angle change score, idle time, k-interaction, typing speed
  - Size of Dataset : nearly 2500 x 6

## Tech Stack

- **Programming Language**: Python, React JS
- **Libraries**: 
  - TensorFlow/PyTorch (for machine learning models)
  - pandas (data analysis)
  - scikit-learn (for algorithms)
  - Flask (for backend API)
  - React JS & Tailwind CSS (for frontend)

## Installation

### Prerequisites

Ensure you have Python 3.x installed. You will also need `pip` to install dependencies.

### Steps to Install

1. Clone the repository:
    ```bash
    git clone https://github.com/Kavyansh-Bagdi/UIDAI-Bot-Detection.git
    cd UIDAI-Bot-Detection
    ```

2.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Install node pacckages and react-router-dom:
    - On Windows:
        ```bash
        cd front-end
        npm i 
        npm i react-router-dom
        ```

4. Run Flask and React app:
    ```bash
    npm run dev
    cd ..
    python .\\back-end\\server.py
    ```
5. Ports:
    ```bash
    React - http://localhost:5173/
    Server - http://localhost:5000/
    ```
## Screenshot

- ****

## Usage

- **Detection**: 
  Once the application is up and running, you can start detecting bots in real-time by providing input data (requests or logs from UIDAI systems). 


