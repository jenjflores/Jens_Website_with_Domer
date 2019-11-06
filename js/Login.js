class Login extends Domer{

_users = [];
_userName = "";
_paswrd = "";

    constructor(){
        super();

        this._users.push(new User("Jen","1234"));

    }

    reset(){
        this._userName = "";
        this._paswrd = "";
    }

    checkForm(){
        for(let user of this._users) {     
            if(this._userName == user.userId && this._paswrd == user.password){         
                    
                    alert("Congrats ur log in");            
                }
                else { // it goes here if 1 of them is correct
                    alert("Wrong userid or password");
                }
                
                console.log("Checking the  array:"+ user.userId + user.password); // checking the array value
        }
        console.log("Checking the bind value:" + this._userName + this._paswrd); // Igot the inputText correct through bind 
        this.reset();      
    }

    render(html) {
        return html`
        <div class="center-me">

            <div class="login-box" >
                <img src="image/avatar.png" class="avatar">
                <h1>Login Here</h1>
                <form>
                    <p>Username</p>
                    <input type="text" bind="_userName" placeholder="Enter Username">
                    <p>Password</p>
                    <input type="password" bind="_paswrd" placeholder="Enter Password">
                    <input type="button" click="checkForm" value="Login">
                    <a href="#">Register</a> 
                    <a href="#">Forget Password</a>
                </form>
            </div>

        </div>
        `
    }

}