import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vite.dev/config/
dotenv.config();
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    "process.env.VITE_SUPABASE_URL": JSON.stringify(
      process.env.VITE_SUPABASE_URL
    ),
    "process.env.VITE_SERVICE_ROLE_KEY": JSON.stringify(
      process.env.VITE_SERVICE_ROLE_KEY
    ),
  },
});
