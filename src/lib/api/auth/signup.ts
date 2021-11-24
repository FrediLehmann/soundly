import { Auth } from 'aws-amplify';
import type { CognitoUser } from 'amazon-cognito-identity-js'

const signup = async (email: string, pwd: string): Promise<CognitoUser> => {
    const { user } = await Auth.signUp({
        username: email,
        password: pwd,
        attributes: {
            email
        }
    });

    return user
}

export default signup