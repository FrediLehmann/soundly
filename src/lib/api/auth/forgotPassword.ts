
const forgotPassword = async (email: string): Promise<unknown> => await new Promise((resolve, reject) => resolve({ email }))// Auth.forgotPassword(email)

const confirmReset = async (email: string, code: string, new_pwd: string): Promise<string> => await await new Promise((resolve, reject) => resolve(email)) // Auth.forgotPasswordSubmit(email, code, new_pwd)

export { confirmReset, forgotPassword }