import { createClient } from '@supabase/supabase-js'

// Reemplaza con tus datos reales de Supabase
const supabaseUrl = 'https://mnhqnhlraraqpispxvcd.supabase.co'
const supabaseAnonKey = 'sb_publishable_G4sw8WiAjQy77Sn7zi_nFQ_t789YpRs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)