


export const ValidUsername = (username: string, setMessage?: (T:string) => void) => {
	if (username) {
		if (username.length >= 2) {
			setMessage?.("");
			return username;
		} else {
			setMessage?.("The username has to be up to 2 characters");
			return false;
		}
	} else {
		setMessage?.("The username field have to be filled");
		return false;
	}
};


export const ValidPassword = (password: string, Cpassword: string, setMessage?: (T:string) => void) => {
    if (password) {
        if (password.length >= 6) {
            if (Cpassword) {
                if (Cpassword === password) {
                    setMessage?.('')
                    return password
                } else {
                    setMessage?.('The passwords are not equal')
                }

            } else {
                setMessage?.('The password confirmation has to be filled')
            }

        } else {
            setMessage?.('The password has to be up to 6 characters')
            return false
        }

    } else {
        setMessage?.('The password field have to be filled')
        return false
    }
}


export const validEmail = (email: string,setMessage?: (T:string) => void) => {
    if (email) {
        if (/^[^@]+@\w+(\.\w+)+\w$/.test(email)) {
            setMessage?.('')
            return true
        } else {
            setMessage?.('Invalid Email')
            return false
        }

    } else {
        setMessage?.('The Email field have to be filled')
        return false
    }
}
