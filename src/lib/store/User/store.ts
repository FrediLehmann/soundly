import type { User, UserInfo } from './User.type';

import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';

const session = supabase.auth.session();

const store = writable({
  isSignedIn: !!session,
  user: supabase.auth.user(),
  session: session
});

export { store };
