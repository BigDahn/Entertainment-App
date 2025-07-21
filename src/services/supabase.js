import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yjgdsynbirzfxkcinjyh.supabase.co";

const service_role_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZ2RzeW5iaXJ6ZnhrY2luanloIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTQ3Mjk0MCwiZXhwIjoyMDU3MDQ4OTQwfQ.J2CPurZY-aHdm3XlRcw5zeVHqbn_20WrgqqlutkqYX0";

const supabase = createClient(supabaseUrl, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export const adminAuthClient = supabase.auth.admin;

export default supabase;
