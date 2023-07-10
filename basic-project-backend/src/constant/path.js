const root = '/users';

const userPath = {
    root,
    getAllUsers: '/',
    getUserById: '/:id',
    createUser: '/create',
    updateUser: '/:id',
    deleteUser: '/:id',
}

module.exports = {
    userPath,
}