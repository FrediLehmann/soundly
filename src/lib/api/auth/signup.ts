import { supabase } from '$lib/supabase';
import type { ApiError, Session, User } from '@supabase/supabase-js';

const signup = async (
  email: string,
  pwd: string,
  data: { username: string }
): Promise<{ user: User; session: Session; error: ApiError }> =>
  supabase.auth.signUp({ email, password: pwd }, { data });

export default signup;
