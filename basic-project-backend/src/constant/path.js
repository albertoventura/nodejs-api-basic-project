//const root = '/users';

const userPath = {
    root: '/users',
    getAllUsers: '/',
    getUserById: '/:id',
    createUser: '/create',
    updateUser: '/:id',
    deleteUser: '/:id',
}

const loginPath = {
    root: "/login",
}

module.exports = {
    userPath,
    loginPath,
}