import { Auth } from 'aws-amplify';

const forgotPassword = async (email: string): Promise<unknown> => await Auth.forgotPassword(email)

const confirmReset = async (email: string, code: string, new_pwd: string): Promise<string> => await Auth.forgotPasswordSubmit(email, code, new_pwd)

export { confirmReset, forgotPassword }