class App extends Domer {
    _changeText = "";
    _menu = new Menu();
    _login = new Login();
    _bookAtable = new Book();
    _home = new Home();


    constructor() {
        super();
        //this._menu = new Menu();
        //this._menu = new Menulist();
    }

    /*  Skapa ett input-fält, som ändrar rubriken när man skriver i den.
    Notera: med Domer hämtar vi inte värden från input-fält med querySelector(), 
    utan med html-attributet bind=”klassVariabel”. */

    render(html,route) {
        return html`
        <section id="App">
        <header class="header">
            <h1 class="logo"><a href="#">Jentlie Resto</a></h1>
                <nav class="main-nav">
                    <a href='/_home'>HOME</a>
                    <a href='/_menu'>MENU</a>
                    <a href='/_bookAtable'>BOOK NOW</a>
                    <a href='_login'>MEMBER</a>
                </nav>
        </header> 
        <main>

            ${route('/_home') ? this._home : ''}
            ${route('/_menu') ? this._menu : ''}
            ${route('/_login') ? this._login : ''}
            ${route('/_bookAtable') ? this._bookAtable : ''}
        </main>
        
        <hr>
        <footer> <p>&copy; Copyright 2019 Jentlie<br> 
                    Kontakt
                    <br>
                    0763200151
                    <br>
                    Bettys väg 66
                    <br>
                    218 73 Klagshamn
                 </p>
        <hr>
        
        </footer>
        
        </section>
        `
    }

}