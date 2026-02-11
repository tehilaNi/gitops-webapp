from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route("/api/hello")
def hello():
    message = os.getenv("APP_MESSAGE", "This is the Default Message")
    return jsonify(message=message)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)