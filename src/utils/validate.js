 export const checkValidDate = (email, password) => {

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isPasswordValid= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if (!isEmailValid) 
        return"Email Id is not valid";
    if (!isPasswordValid) 
        return "Password is not valid";
    return null
    }


    

