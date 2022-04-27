const User = require('./../../models/User');
class UserService{
    static create(id, userName, name){
        return new User(1, "DiegoRam", "Diego", "Sin bio");
    }
}
module.exports = UserService;
