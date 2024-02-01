import os
from dotenv import load_dotenv

load_dotenv()
from supabase import create_client, Client

# Initialize Supabase client
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

# Search for the email in the Partners table
email_to_search = "abish@gmail.com"
response = supabase.table('Partners').select("*").eq('email', email_to_search).execute()

# Check for errors in the response
if 'error' in response:
    print("Error occurred:", response['error'])
else:
    data = response.data
    if data:
        # Assuming 'referral_code' is the column name containing the code
        code = data[0]['referral_code']
        print(f"{code}")
    else:
        print(f"No record found for email {email_to_search}")
