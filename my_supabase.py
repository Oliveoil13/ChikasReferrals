from flask import Flask, render_template
import os
from dotenv import load_dotenv
from supabase import create_client, Client

app = Flask(__name__)

# Load environment variables
load_dotenv()

# Supabase setup
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)

@app.route('/')
def index():
    return "Hey"

if __name__ == '__main__':
    app.run(debug=True)
