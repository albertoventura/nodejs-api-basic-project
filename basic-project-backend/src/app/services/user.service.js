const helper = require('../../helpers/general');

const userService = {
    getAll: async _ => {
        return await Users;
    },
    getById: async (id) => {
        const i = _getIndexOf(id);
        const user = Users[i];
        return user ? user : false;
    },
    create: async (username, email) => {
        const user = {
            id: helper.generateId(),
            name: username,
            email: email
        }
        Users.push({
            id: user.id,
            nome: user.name,
            email: user.email
        });
        return user;
    },
    update: async (id, username, email) => {
        const i = _getIndexOf(id);

        if(i || i == 0) {
            Users[i].nome = username;
            Users[i].email = email;
            return Users[i];
        }
        return false;
    },
    delete: async (id) => {
        const user = userService.getById(id);
        console.log(user);
        if(user){
            const i = _getIndexOf(id);
            Users.splice(i,1);
            return true;
        }
        return false;
    }
}

const _getIndexOf = (id) => {
    return Users.findIndex( user => user.id == id);
}

module.exports = userService;


const Users = [
    { id: 1, nome: 'Ana', email: 'ana@gmail.com' },
    { id: 2, nome: 'João', email: 'joao@yahoo.com' },
    { id: 3, nome: 'Maria', email: 'maria@hotmail.com' },
    { id: 4, nome: 'Pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'Carla', email: 'carla@yahoo.com' },
    { id: 6, nome: 'Miguel', email: 'miguel@hotmail.com' },
    { id: 7, nome: 'Sofia', email: 'sofia@gmail.com' },
    { id: 8, nome: 'Lucas', email: 'lucas@yahoo.com' },
    { id: 9, nome: 'Julia', email: 'julia@hotmail.com' },
    { id: 10, nome: 'Rafael', email: 'rafael@gmail.com' }
];
