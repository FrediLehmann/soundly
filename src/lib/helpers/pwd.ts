interface PasswordValidationResult {
    isValid: boolean,
    errors: PasswordValidationErrorTypes[]
}
//Test01?!

enum PasswordValidationErrorTypes {
    charCount = "Password has to contain at least 8 characters.",
    number = "Needs to contain at least one number.",
    specialChars = "Needs to contain at least one special character: ^ $ * . [] {}() ? - \" ! @ # % & / \\ , > < ' : ; | _ ~ ` + =",
    upperCase = "Needs to contain at least one uppercase letter.",
    lowerCase = "Needs to contain at least one lowercase letter."
}

export const validatePassword = (pwd: string): PasswordValidationResult => {
    const errors = []

    if (pwd.length < 8) errors.push(PasswordValidationErrorTypes.charCount)
    if (!/[0-9]/g.test(pwd)) errors.push(PasswordValidationErrorTypes.number)
    if (!/[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`+=]/g.test(pwd)) errors.push(PasswordValidationErrorTypes.specialChars)
    if (!/[A-Z]/g.test(pwd)) errors.push(PasswordValidationErrorTypes.upperCase)
    if (!/[a-z]/g.test(pwd)) errors.push(PasswordValidationErrorTypes.lowerCase)

    return {
        isValid: errors.length === 0,
        errors
    }
}