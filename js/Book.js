class Book extends Domer {

    _customerName = "";
    _nrOfAdults = "";
    _nrOfChild = "";
    _when;

    constructor(custName,nrAdults,nrChild,date){
        super();
        this._customerName = custName;
        this._nrOfAdults = nrAdults;
        this._nrOfChild = nrChild;
        this._when = date;

    }

    
    // When the Book Now button clicked print out the input into aside flex-box
    confirmBooking(){
        this._booking = new Booking(this._customerName,this._nrOfAdults,this._nrOfChild,this._when)
    }

    openTime() {
        this._openingTime = `
        <h3 style="color:whitesmoke;">Opening hours</h3>
        <table class="center t01">
            <tr>
                <td>Monday-Thursday</td>
                <td>10:00 – 22:00</td>
            </tr>
            <tr>
                <td>Friday-Saturday</td>
                <td>10:00 – 22:00</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>10:00 – 22:00</td>
            </tr>
        </table>
        <h4 style="color:whitesmoke;"><i>Köket stänger 30 min innan angiven stängningstid för restaurangen</i></h4>
        <table  class="center t01">
            <tr>
                <td>23 december</td>
                <td>10:00 – 22:00</td>
            </tr>
            <tr>
                <td>24 december</td>
                <td>10:00 –16.00</td>
            </tr>
            <tr>
                <td>25 december</td>
                <td>Close</td>
            </tr>
            <tr>
                <td>26 december</td>
                <td>10:00 – 22.00</td>
            </tr>
            <tr>
                <td>31 december</td>
                <td>10:00 – 22:00</td>
            </tr>
            <tr>
                <td>1 januari</td>
                <td>Close</td>
            </tr>

      </table>
        `
        return this._openingTime;
    } 



    render(html) {
        return html`
        <div id="flex-box">
        <section id="booking" class="content">

            <div class="booking-box border">
                <div>
                <form>
                <fieldset>
                    <legend><h1><b>Book a table</b></h1></legend>
                    <label>Name</label> <br>
                    <input type="text" placeholder="Enter Name" bind="_customerName"><br>
                    <label>No. of Adults</label><br>
                    <select name="nrOfAdults" bind="_nrOfAdults">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6 ">6</option>
                        <option value=">6">over 6</option>
                  </select> <br>
                  <label>No. of Children</label> <br>
                    <select name="nrOfAdults" bind="_nrOfChild">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6 ">6</option>
                        <option value=">6">over 6</option>
                    </select> 
                    <br>
                    <label for="datepricker">When</label>
                    <br>     
                    <input type="date" value="<?php echo date('Y-m-d'); ?>" bind="_when">
                    <br><br><br>
                    <hr>
                    <input type="button" click="confirmBooking" value="Book now">
                </fieldset>

                </form>
                </div>
            </div>

        </section>
        <aside id="showbooking">
            <div style="text-align:center;" class="aside-padding">
                ${this.openTime()}
             </div>
             <br>
             <br>
             <br>
                ${this._booking}
        </aside>
        </div>
        `
    }


}