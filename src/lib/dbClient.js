import { createClient } from '@supabase/supabase-js';
import { variables } from '../variables';

const supabaseConnection = createClient(variables.supabaseUrl, variables.supabaseAnonKey);

export default supabaseConnection;
