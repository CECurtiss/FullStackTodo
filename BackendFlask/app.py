from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from markupsafe import escape
import sqlite3

app = Flask(__name__)
CORS(app)

DB_PATH = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            priority TEXT NOT NULL,
            task TEXT NOT NULL,
            dueDate TEXT NOT NULL,
            completed INTEGER DEFAULT 0,
            dateCompleted TEXT
        )
    ''')
    conn.commit()
    conn.close()
    
init_db()

@app.route('/items', methods=['GET'])
def get_items():
    conn = get_db_connection()
    items = conn.execute('SELECT * FROM items').fetchall()
    conn.close()
    items_list = [dict(item) for item in items]
    return jsonify(items_list)

@app.route('/items', methods=['POST'])
def add_item():
    data = request.json
    conn= get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO items (priority, task, dueDate, completed, dateCompleted)
        VALUES (?, ?, ?, ?, ?)
    ''', (data['priority'], data['task'], data['dueDate'], data.get('completed', 0), data.get('dateCompleted')))
    conn.commit()
    new_id = cursor.lastrowid
    conn.close()
    return jsonify({'id': new_id}), 201

# @app.route('/items')
# def get_items():
#     with open('db.json') as f:
#         data = json.load(f)
#         # print(data)
#     return jsonify(data)