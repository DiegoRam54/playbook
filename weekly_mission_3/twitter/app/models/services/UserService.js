const User = require('./../../models/User'); //importamos la clase que ya habíamos creado para crear el objeto
class UserService{
    static create(detId, detUserName, getName){
        return new User(detId, detUserName, getName, "Sin bio"); //creamos el objeto a partir del new, sin asignarlo a nada
    }
    static getInfo(getUser){
        let array=new Array();
        array[0]=getUser.id;
        array[1]=getUser.userName;
        array[2]=getUser.name;
        array[3]=getUser.bio;
        return array;
    }
    static updateUserName(getUser, getNewUserName){

    }
}
module.exports = UserService;
