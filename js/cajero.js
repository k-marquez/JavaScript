class Cajero
{
    constructor (cod = "", ser = "")
    {
        this.tickets = [];
        this.name = "Marquez.Inc";
        this.code = cod;
        this.serial = ser;
        this.MAX_TICKETS = 500;
        this.LIMIT_RETIRE = 1000;
    }
    push_back (ticket, num_tck)
    {
        if (num_tck <= (this.MAX_TICKETS - this.number_of_tickets()))
        {
            var pos = this.find (ticket.denomination);
            if (pos == this.tickets.size)
            {
                this.tickets.push({obj_tick: ticket, number_tck: num_tck});
                this.tickets.sort(function (a, b)
                {
                    return b.obj_tick.denomination - a.obj_tick.denomination;
                });
            }
            else 
                this.tickets[pos].number_tck += num_tck;
        }
    }
    find (key)
    {
        for (var i in this.tickets)
            if (this.tickets[i].obj_tick.denomination == key)
                return i;
        return this.tickets.size;
    }
    number_of_tickets ()
    {
        var total = 0;
        for (var p in this.tickets)
        {
            total += this.tickets[p].number_tck; 
        }
        return total;
    }
    retire_money (cant)
    {
        if (cant > this.LIMIT_RETIRE || cant < 1)
            return -1;
        var money = [];
        var aux;
        for (var p in this.tickets)
            if (cant > 0 && this.tickets[p].number_tck > 0)
            {
                aux = Math.floor(cant / this.tickets[p].obj_tick.denomination);
                if (aux > 0)
                {
                    if (aux > this.tickets[p].number_tck)
                        aux = this.tickets[p].number_tck;
                    money.push({object_money:this.tickets[p].obj_tick, number_tickets:aux});
                    cant -= aux * this.tickets[p].obj_tick.denomination;
                }
            }
        if (cant == 0)
        {
            for (var i in money)
            {
                var ps = this.find (money[i].object_money.denomination);
                this.tickets[ps].number_tck -= money[i].number_tickets;
            }
            return money;
        }
        else            
            return -1;            
    }
}