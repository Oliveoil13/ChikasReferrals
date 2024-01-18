import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js';

const supabaseUrl = 'https://smstkcoswejjjelwwlfr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3RrY29zd2VqamplbHd3bGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyOTIyODIsImV4cCI6MjAyMDg2ODI4Mn0.9O5C9Ornt8f21ZzMzFUQgb8j_85RXsJHh-azVQ5CdOI'
const supabase = createClient(supabaseUrl, supabaseKey)
const tableName = 'Partners';





async function fetchData() {
  const { data, error } = await supabase.from(tableName).select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  console.log('Fetched data:', data);
}

// Call the fetchData function to retrieve data
fetchData();
