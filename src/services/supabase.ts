import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bkgbahmlgjxnefneogso.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrZ2JhaG1sZ2p4bmVmbmVvZ3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MDc0NDAsImV4cCI6MjA1Nzk4MzQ0MH0.hhh0WAI2KuwVqD5BrRzFlBeWL20nTK5R-lubni0vECc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
