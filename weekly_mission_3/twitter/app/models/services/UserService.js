const User = require('./../../models/User'); //importamos la clase que ya habíamos creado para crear el objeto
class UserService{
    static create(id, userName, name){
        return new User(id, userName, name, "Sin bio"); //creamos el objeto a partir del new, sin asignarlo a nada
    }
    static getInfo(user){
        let array=new Array();
        array[0]=user.id;
        array[1]=user.userName;
        array[2]=user.name;
        array[3]=user.bio;
        return array;
    }
}
module.exports = UserService;
