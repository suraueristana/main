const supabaseClient = supabase.createClient(
  window.SURAU_SUPABASE_URL,
  window.SURAU_SUPABASE_PUBLISHABLE_KEY
);

window.surauDb = {
  client: supabaseClient
};
