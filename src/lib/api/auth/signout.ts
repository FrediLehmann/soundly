import { supabase } from '$lib/supabase';
import type { ApiError } from '@supabase/supabase-js';

const signout = async (): Promise<{ error?: ApiError }> =>
  supabase.auth.signOut();

export default signout;
