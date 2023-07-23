const user = {
    root: '/users',
    getAllUsers: '/',
    getUserById: '/:id',
    createUser: '/create',
    updateUser: '/:id',
    deleteUser: '/:id',
}
const signup = {
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