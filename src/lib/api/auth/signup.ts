
const signup = async (email: string, pwd: string): Promise<{ email: string }> => {
    return await new Promise((resolve, reject) => resolve({ email }))

    // const { user } = await Auth.signUp({
    //     username: email,
    //     password: pwd,
    //     attributes: {
    //         email
    //     }
    // });

    // return user
}

export default signup