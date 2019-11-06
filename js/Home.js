class Home extends Domer {


    _welcomeGreeting;
    constructor(){
        super();
    }

    getGreeting(){
        this._welcomeGreeting = `
            <h1>Hello Welcome to Jentlie Resto where the Rice is life! </h1>
            <h2>Enjoy are very own delegacies and ambience that you must try that will never forgotten!</h2>
            <br>
            <p>Taste our own homemade <b>Kare-kare</b>. This slow-cooked Filipino oxtail stew is enriched with peanut butter. 
            <br>The recipe calls for annatto powder, which is derived from plant seeds, is used to add flavour and vibrant yellow-orange colour.
            <br>Take care when handling, as it can stain skin and fabrics.</p>
            <br>
            <p>And of course our very own <b>Adobo</b> which is so called Philippines national food!
            <br>along with special request pork or stay with the original chicken or mixed, simmered in soy sauce and vinegar with loads of black pepper and crushed garlic. Adobo is one of the few dishes in the Philippines with local origins as it was given the Spanish name later. This lip-smacking dish is as Filipino as you can get, and it goes with nothing else but rice.</p>

            <h3>And what is most attrative is that you can avail <b>10% discount</b> only by signing up or logging in your Jentlie account. </h3>
        `
        return this._welcomeGreeting;
    }
    



    render(html) {
        return html`
            <div class="center-text">
                ${this.getGreeting()};
            </div>
        
        `
    }

}