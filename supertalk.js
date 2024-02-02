
import createClient from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

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

fetchData();
