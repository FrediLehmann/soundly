const signin = async (
  email: string,
  pwd: string
): Promise<{ email: string }> => {
  return await new Promise((resolve, reject) => resolve({ email }));

  // const user = await Auth.signIn(email, pwd)

  // return user
};

export default signin;
