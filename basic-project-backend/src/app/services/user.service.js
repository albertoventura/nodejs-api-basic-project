const helper = require('../../helpers/general');
const fs = require("fs");
const md5 = require("md5");
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
            const passwordHash = md5(data.password);
            const user = new User({
                name: data.name,
                email: data.email,
                password: passwordHash,
                img: data.img,
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
                    user.name = data.name ?? old.name;
                    user.email = data.email ?? old.email;
                    user.password = data.password ? md5(data.password) : old.password;
                    
                    if(data.img){
                        if(old.img){
                            fs.unlinkSync(old.img);
                        }
                        user.img = data.img
                    }
                    return user.save();
                })
                .catch(e => {
                    return e;
                });
        } catch (e) {
            return e;
        }
    },
    delete: async (id) => {
        try {
            return await User.findByIdAndDelete({_id: id})
                .then(data => {
                    if(data.img){
                        fs.unlinkSync(data.img);
                    }
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

module.exports = userService;