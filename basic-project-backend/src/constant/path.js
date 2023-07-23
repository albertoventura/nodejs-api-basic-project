//const root = '/users';

const user = {
    root: '/users',
    getAllUsers: '/',
    getUserById: '/:id',
    createUser: '/create',
    updateUser: '/:id',
    deleteUser: '/:id',
}
const signup = {
    /* singin: "/signin",
    singup: "/signup", */
    root: '/signup'
}
const login = {
    root: "/login",
}

module.exports = {
    user,
    login,
    signup,
}