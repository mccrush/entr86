import { createClient } from '@supabase/supabase-js'

projectURL = import.meta.env.VITE_projectURL
anonKey = import.meta.env.VITE_anonKey

export const supabase = createClient(projectURL, anonKey)