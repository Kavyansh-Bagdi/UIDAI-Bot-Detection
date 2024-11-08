from flask import Flask
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)

limiter = Limiter(get_remote_address, app=app, default_limits=["200 per day", "50 per hour"])

@app.route("/")
@limiter.limit("1 per 3 second")
def index():
    return  "React App login Page"

# @app.route('/store_data', methods=['POST'])
# @limiter.limit("100 per 10 minute")
# def store_data():
#     try:
#         data = request.get_json()

#         if not data:
#             raise ValueError("No data received")cle

#     except Exception as e:
#         # Log the error and send a more detailed error message
#         print(f"Error storing data: {e}")
#         return jsonify({"error": f"An error occurred: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0",debug=True)