from flask import Flask
from flask_cors import CORS
import json
from markupsafe import escape

app = Flask(__name__)
CORS(app)
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/items')
def get_items():
    with open('db.json') as f:
        data = json.load(f)
    return data