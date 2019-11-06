
// NOTE::: remember you can access html tags inside the class and then Inject it to HTML
// PROBLEM : How to retrieve those data's from HTML
// - should I make it clickable -> then add it to an empty array? in able for me to print out to <aside> section

class Menulist extends Domer {

    _img;
    _name;
    _description;
    _price;
    constructor(img,name,description,price){
        super();
        this._img = img;
        this._name = name;
        this._description = description;
        this._price = price;
    }

    get image(){
        return this._img;
    }

    get name(){
        return this._name;
    }

    get description(){
        return this._description;
    }

    get price(){
        return this._price;
    }

    toString(){
        return `
            Name: ${this._name},
            Description: ${this._description},
            Price: ${this._price}`;
    }

    return(html){
        return html`
        
        `
    }
    

}