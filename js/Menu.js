class Menu extends Domer {
  
    _mainDishes = [];
    _drinks = [];
    _desserts = [];
    _sideOrders = [];


    constructor() {
        super();
        this._mainDishes.push( new Menulist("/image/adobo.jpg","Adobo","Marinated chicken with soya, vinegar",95));
        this._mainDishes.push( new Menulist("/image/caldereta.jpg","Caldereta","Spicy beef with bell pepper and potato",85));
        this._mainDishes.push( new Menulist("/image/pinakbet.jpg","Pinakbet","A mixed of different exoctic veggies along with paste shrimp",85));
        this._mainDishes.push( new Menulist("/image/karekare.jpg","Kare kare","A traditional Filipino stew made with oxtail and vegetables cooked in a rich, creamy and thick peanut sauce that will make you addicted. It's simply divine!",85));

        this._drinks.push(new Menulist("/image/sagobubbles.jpg","Sago bubbles", "A cold beverage with crunchy Tapioca Pearls ",40));
        this._drinks.push(new Menulist("/image/chocomilkshake.jpg","Choco MilkShake","",40));

        this._desserts.push(new Menulist("/image/Puto-Cheese_.jpg","Puto Cheesecake","",50))
        this._desserts.push(new Menulist("/image/chocotruffle.jpg","Choco tryffle","",45));

        this._sideOrders.push(new Menulist("/image/greensalad.jpg","Green salad","Rukola, baby spinach",35))
        this._sideOrders.push(new Menulist("/image/garlic bread.jpg","Garlic bread","",35))
        
    }
    


    getMaindish(){
      let maindishList = ``;
      for(let maindish of this._mainDishes) {
        maindishList += `
          <div>
          <div><img width="250" height="200" src='${maindish.image}'></div>
            <div><b>${maindish.name}</b> </div>
            <div>${maindish.description}</div>
            <div >${maindish.price} sek</div>
          <br>
        </div>
        `
      }
      return maindishList;
    }

    getDrink(){
      let drinkList = ``;
      for(let drink of this._drinks) {
        drinkList += `
        <div>
        <div><img width="250" height="200" src='${drink.image}'></div>
          <div><b>${drink.name}</b></div>
          <div>${drink.description}</div>
          <div>${drink.price} sek </div>
        <br>
        </div>
        `
      }
      return drinkList;
    }

    getDessert(){
      let dessertList = ``;
      for(let dessert of this._desserts) {
        dessertList += `
        <div>
        <div><img width="250" height="200" src='${dessert.image}'></div>
          <div><b>${dessert.name}</b></div>
          <div>    ${dessert.description}</div>
          <div>    ${dessert.price} sek</div>
        <br> 
        </div>
        `
      }
      return dessertList;
    }

    getSideOrder(){
      let sideList = ``;
      for(let sideOrder of this._sideOrders) {
        sideList += `
        <div>
          <div><img width="250" height="200" src='${sideOrder.image}'></div>
          <div><b>${sideOrder.name}</b></div>
          <div>${sideOrder.description}</div>
          <div>${sideOrder.price} sek</div>
          <br> 
        </div>
        `
      }
      return sideList;
    }
    
    

    render(html) {
        return html`
        <div>
        <article>
            ${this.getMaindish()}
            ${this.getDessert()}
            ${this.getSideOrder()}
            ${this.getDrink()}
        </article>
        </div>
        `
    }
}