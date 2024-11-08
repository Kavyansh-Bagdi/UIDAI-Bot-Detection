
from flask import Flask, jsonify, request
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_mail import Mail, Message
from flask_cors import CORS
from secrets import randbelow
import os

UserData = {
    123456789012: "kavyanshbagdi224@gmail.com",
    234567890123: "2023ucp1701@mnit.ac.in",
    456789012345: "2023ucp1690@mnit.ac.in"
}

otp = {}
app = Flask(__name__)
CORS(app)  # Initialize CORS
mail = Mail(app)

# Secure email configuration using environment variables
app.config["MAIL_SERVER"] = 'smtp.gmail.com'
app.config["MAIL_PORT"] = 465
app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
app.config["MAIL_USE_TLS"] = False
app.config["MAIL_USE_SSL"] = True

limiter = Limiter(get_remote_address, app=app, default_limits=["200 per day", "50 per hour"])

@app.route("/", methods=['POST'])
@limiter.limit("2 per 3 minute")
def index():
    try:
        data = request.get_json()

        aadhar_no = data.get("aadhar_no")
        if aadhar_no not in UserData:
            return jsonify({"error": "Invalid Aadhar Number"}), 400

        
        otp_code = f"{randbelow(1000000):06}"
        otp[aadhar_no] = otp_code
        email = UserData[aadhar_no]

        return jsonify({"success":True , "otp":otp[aadhar_no]})
        msg = Message(
            subject="UIDAI SMS Verification",
            sender=app.config["MAIL_USERNAME"],
            recipients=[email]
        )
        msg.body = f"Your OTP for Aadhaar (XX{str(aadhar_no)[-4:]}) is {otp_code}. To update Aadhaar, upload documents on myaadhaar.uidai.gov.in or visit Aadhaar Center. Call 1947 for info. - UIDAI"
        mail.send(msg)

        return jsonify({"msg": "OTP sent successfully"}), 200

    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
