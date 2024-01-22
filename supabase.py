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
    # Fetch data from Supabase
    response = supabase.table('Partners').select("*").execute()
    data = response.get('data', [])

    # Pass data to the template
    return render_template('index.html', partners=data)

if __name__ == '__main__':
    app.run(debug=True)
