import { createClient } from '@supabase/supabase-js';
import { variables, SUPABASE_ANON_KEY, SUPABASE_URL } from '../variables';

let anonKey, url;

if (process.env.NODE_ENV === 'production') {
	// For production
	anonKey = SUPABASE_ANON_KEY;
	url = SUPABASE_URL;
	console.log('Production', url);
} else {
	// For development
	anonKey = variables.supabaseAnonKey;
	url = variables.supabaseUrl;
	console.log('Development');
}

const supabase = createClient(url, anonKey);

export default supabase;
