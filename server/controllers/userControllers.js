const register = (req, res) => {
    const { fullname, email, password } = req.body

    if (!fullname || !email || !password) {
        return next()
    }
}

const login = (req, res) => {

}

const logout = (req, res) => {

}

const profile = (req, res) => {

}

export { login, logout, profile, register }