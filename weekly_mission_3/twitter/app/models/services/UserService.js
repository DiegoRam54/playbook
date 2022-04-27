const User = require('./../../models/User'); //importamos la clase que ya habíamos creado para crear el objeto
class UserService{
    static create(id, userName, name){
        return new User(1, "DiegoRam", "Diego", "Sin bio"); //creamos el objeto a partir del new, sin asignarlo a nada
    }
}
module.exports = UserService;
