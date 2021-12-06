import { writable } from 'svelte/store';
import { supabase } from '$lib/db';

const session = supabase.auth.session();

export const userStore = writable({
  isSignedIn: !!session,
  user: supabase.auth.user(),
  session: session
});
