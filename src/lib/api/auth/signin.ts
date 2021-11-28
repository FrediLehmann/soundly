import { supabase } from '$lib/db';
import type { ApiError, Provider, Session, User } from '@supabase/supabase-js';

const signin = async (
  email: string,
  pwd: string
): Promise<{
  session: Session;
  user: User;
  provider?: Provider;
  url?: string;
  error: ApiError;
}> => supabase.auth.signIn({ email, password: pwd });

export default signin;
