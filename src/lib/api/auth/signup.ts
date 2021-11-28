import { supabase } from '$lib/db';
import type { ApiError, Session, User } from '@supabase/supabase-js';

const signup = async (
  email: string,
  pwd: string
): Promise<{ user: User; session: Session; error: ApiError }> =>
  supabase.auth.signUp({ email, password: pwd });

export default signup;
