const helper = require('../../helpers/general');
const fs = require("fs");
const User = require("../models/user.model");

const userService = {
    getAll: async _ => {
        try {
            return await User.find()
                .then( users => {                    
                    return users;
                })
                .catch(e => {
                    return e;
                });
        } catch(e){
            return e;
        }
    },
    getById: async (id) => {
        try {
            return await User.findById({_id: id})
                .then(user => {
                    return user;
                })
                .catch( e =>{
                    return e;
                });
        } catch(e){
            return e;
        }
    },
    create: async (data) => {
        try {
            const user = new User({
                name: data.name,
                email: data.email,
                //img: data.img
            });
            return user.save()
                .then(doc => {
                    return doc;
                })
                .catch( err => {
                    return err;
                });
        } catch(e){
            return e;
        }
    },
    update: async (data) => {
        try {
            return await User.findById({_id: data.id})
                .then( user => {
                    old = user;
                    user.name = data.name;
                    user.email = data.email;
                    return user.save();
                })
                .catch(e => {
                    return e;
                });
        } catch (e) {
            console.log('$', e);
        }
    },
    delete: async (id) => {
        try {
            return await User.findByIdAndDelete({_id: id})
                .then(data => {
                    return data;
                })
                .catch(e => {
                    return e;
                });
        } catch(e){
            return e;
        }
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
