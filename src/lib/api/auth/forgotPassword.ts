import { supabase } from '$lib/supabase';
import type { ApiError } from '@supabase/supabase-js';

const forgotPassword = async (
  email: string
): Promise<{
  data: unknown;
  error: ApiError;
}> => await supabase.auth.api.resetPasswordForEmail(email);

export default forgotPassword;
