const generateId = _ => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
const getIndexOf = (id) => {
    return Users.findIndex( user => user.id == id);
}
module.exports = {
    generateId,
    getIndexOf,
}