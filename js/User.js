class User {

    _userId;
    _password;
    
    constructor(userId,password){
        this._userId = userId;
        this._password = password;
    }

    get userId(){
        return this._userId;
    }
    get password(){
        return this._password;
    }


}