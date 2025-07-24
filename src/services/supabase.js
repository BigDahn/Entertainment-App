import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const service_role_key = import.meta.env.VITE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export const adminAuthClient = supabase.auth.admin;

export default supabase;
