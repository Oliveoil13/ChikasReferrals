

import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient('https://smstkcoswejjjelwwlfr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3RrY29zd2VqamplbHd3bGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyOTIyODIsImV4cCI6MjAyMDg2ODI4Mn0.9O5C9Ornt8f21ZzMzFUQgb8j_85RXsJHh-azVQ5CdOI');

export default supabase;
