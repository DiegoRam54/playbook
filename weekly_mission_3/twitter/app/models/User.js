class User {
    constructor(id, userName, name, bio){
        this.id=id;
        this.userName=userName;
        this.name=name;
        this.bio=bio;
        this.dateCreated= new Date();
        this.lastUpdated= new Date();
    }
    //getters
    get getUserName(){
        return this.userName;
    }
    get getBio(){
        return this.bio;
    }
    get getDateCreated(){
        return this.dateCreated;
    }
    get getLastUpdated(){
        return this.lastUpdated;
    }
}
module.exports = User;
