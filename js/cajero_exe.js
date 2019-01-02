var result_txt = document.getElementById("result_txt");
var result_img = document.getElementById("result_img");
var now_txt = document.getElementById("now_txt");
var now_img = document.getElementById("now_img");
var input_html = document.getElementById("text");
var button_html = document.getElementById("enviar");
button_html.addEventListener("click", extract_money);

var caj1 = new Cajero(500,"10KM", "KJJM101H");

caj1.push_back(new Ticket(500,"17-02-2018","101JHA"),20);
caj1.push_back(new Ticket(100,"17-02-2018","101JHA"),10);
caj1.push_back(new Ticket(200,"17-02-2018","101JHA"),8);
caj1.push_back(new Ticket(5,"17-02-2018","101JHA"),6);
caj1.push_back(new Ticket(2,"17-02-2018","101JHA"),10);
caj1.push_back(new Ticket(50,"17-02-2018","101JHA"),20);

var value_money, money = [];

update_money ();

function extract_money (event)
{
    result_txt.innerHTML = "";
    result_img.innerHTML = "";
    value_money = parseInt (input_html.value);
    money = caj1.retire_money (value_money);   
    if (money != -1)
    {
        update_money ();
        for (var di of money)
        {
            var img = document.createElement("img");
            img.setAttribute("id",di.object_money.denomination);
            img.setAttribute("src",di.object_money.image.src);
            img.setAttribute("width",84);
            img.setAttribute("height",100);
            result_img.appendChild (img);
            result_txt.innerHTML += "<br />" + di.number_tickets + " Billetes " + di.object_money.denomination +
                             "$: " + di.number_tickets * di.object_money.denomination +"$<br />";  
            
        }
    }
    else
        result_txt.innerHTML += "Sorry.<br />";
}

function update_money ()
{
    now_txt.innerHTML = "";
    now_img.innerHTML = "";
    var img_i;
    for (var obj of caj1.tickets)
    {
        if (obj.number_tck > 0)
        {
            img_i = document.createElement("img");
            img_i.setAttribute("src",obj.obj_tick.image.src);
            img_i.setAttribute("id","billete_"+obj.obj_tick.denomination);
            img_i.setAttribute("width",84);
            img_i.setAttribute("height",100);
            now_img.appendChild (img_i);
            now_txt.innerHTML += obj.number_tck + "-Billetes $" + obj.obj_tick.denomination +
                            ": " + obj.number_tck * obj.obj_tick.denomination + "$<br />";
        }
    }
}