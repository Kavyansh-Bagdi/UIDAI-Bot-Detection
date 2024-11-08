from flask import Flask, jsonify, request
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_cors import CORS
from dotenv import load_dotenv
from secrets import randbelow
from predict import predict
import os

load_dotenv()  # Ensure environment variables are loaded

UserData = {
    123456789012: "kavyanshbagdi224@gmail.com",
    234567890123: "2023ucp1701@mnit.ac.in",
    456789012345: "2023ucp1690@mnit.ac.in"
}
UserAaddhar = {
    123456789012: {"Name": "Ram", "DOB": "12/12/2004"},
    234567890123: {"Name": "RKP", "DOB": "12/12/2012"},
    456789012345: {"Name": "Shayam", "DOB": "23/2/2024"}
}

otp = {}
app = Flask(__name__)
CORS(app)  # Initialize CORS

limiter = Limiter(get_remote_address, app=app, default_limits=["200 per day", "50 per hour"])

@app.route("/", methods=['POST'])
@limiter.limit("2 per 3 minute")
def index():
    try:
        data = request.get_json()
        print(data)
        aadhar_no = int(data.get("aadharno"))
        del data["aadharno"]
        # checking for valid aadhar number
        if aadhar_no not in UserData:
            return jsonify({"error": "Invalid Aadhar Number"}), 400

        # checking for bot
        if(predict(data)):
            return jsonify({"error": "Bot Detected"}), 400
        

        otp_code = f"{randbelow(1000000):06}"
        otp[aadhar_no] = otp_code
        print("Generated OTP:", otp_code)
        email = UserData[aadhar_no]

        return jsonify({"isValid": True, "code": otp_code}), 200

    except Exception as e:
        print(f"Error: {str(e)}")  # Print error for debugging
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

@app.route("/verifyotp", methods=["POST"])
def verify():
    try:
        data = request.get_json()
        otpclient = int(data.get("otp"))
        aadharno = int(data.get("aadharno"))
        
        if otp.get(aadharno) and otpclient == int(otp[aadharno]):
            return jsonify({"isCorr": True, **UserAaddhar[aadharno]}), 200
        else:
            return jsonify({"isCorr": False}), 400

    except Exception as e:
        print(f"Verification error: {str(e)}")  # Print error for debugging
        return jsonify({"error": "Server Error"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
