const SUPABASE_URL = "https://hgltgzmwzdpuopzkvibz.supabase.co";
const SUPABASE_KEY = "sb_publishable_wcApF4BaHAiIObgwUmEilg_8-eDsU7B";
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
console.log("Supabase подключён:", supabaseClient);
