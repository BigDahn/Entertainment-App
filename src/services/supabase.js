import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yjgdsynbirzfxkcinjyh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZ2RzeW5iaXJ6ZnhrY2luanloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NzI5NDAsImV4cCI6MjA1NzA0ODk0MH0.71GOsglxAsDeMRJquCeyZl9S6z4XF8_LAIglRSBVd6I";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
