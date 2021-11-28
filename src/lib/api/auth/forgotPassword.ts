const forgotPassword = async (email: string): Promise<unknown> =>
  await new Promise(resolve => resolve({ email })); // Auth.forgotPassword(email)

const confirmReset = async (
  email: string,
  code: string,
  new_pwd: string
): Promise<string> =>
  await new Promise(resolve => resolve(`${email}, ${code}, ${new_pwd}`)); // Auth.forgotPasswordSubmit(email, code, new_pwd)

export { confirmReset, forgotPassword };
