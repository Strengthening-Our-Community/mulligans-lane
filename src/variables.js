export const variables = {
	supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
	supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
	googleApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
	sheetId: import.meta.env.VITE_SHEET_ID
};
export const GOOGLE_API_KEY = process.env['GOOGLE_API_KEY'];
export const SHEET_ID = process.env['SHEET_ID'];
export const SUPABASE_URL = process.env['SUPABASE_URL'];
export const SUPABASE_ANON_KEY = process.env['SUPABASE_ANON_KEY'];
