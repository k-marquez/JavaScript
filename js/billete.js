class Ticket
{
    constructor (d, de, ser)
    {
        this.denomination = d;
        this.date = de;
        this.serial = ser;
        this.image = new Image();
        this.image.src = "img/billete" + this.denomination + ".jpg"; 
    }
}