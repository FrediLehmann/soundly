import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';

const session = supabase.auth.session();

const store = writable({
  isSignedIn: !!session,
  user: supabase.auth.user(),
  session
});

supabase.auth.onAuthStateChange((event, session) => {
  store.set({ isSignedIn: !!session, user: supabase.auth.user(), session });
});

export { store };
