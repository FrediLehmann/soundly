import { Auth } from 'aws-amplify';
import type { CognitoUser } from 'amazon-cognito-identity-js'

const signin = async (email: string, pwd: string): Promise<CognitoUser> => {
    const user = await Auth.signIn(email, pwd)

    return user
}

export default signin