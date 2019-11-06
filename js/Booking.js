class Booking extends Domer {

        _openingTime = ``;

        constructor(custName,nrAdults,nrChild,date){
            super();
            this._customerName = custName;
            this._nrOfAdults = nrAdults;
            this._nrOfChild = nrChild;
            this._when = date;
    
    }


    render(html) {
        return html`
        
            <div class="border content" style="background-color:#1c8adb;">           
                <h4 style="color:whitesmoke;">Welcome ${this._customerName} ! Your booking is confirmed</h4>              
                <p>No. of adults: ${this._nrOfAdults}</p>
                <p>No. of child(en): ${this._nrOfChild}</p>
                <p>at: ${this._when}</p>
            </div>
        `
    }
}
