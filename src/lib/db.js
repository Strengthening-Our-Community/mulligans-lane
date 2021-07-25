import { createClient } from '@supabase/supabase-js'
import { variables } from '../variables'

const supabase = createClient(
  variables.supabaseUrl,
  variables.supabaseAnonKey
)

export default supabase
