var tablica = ["antyterrorysta","telekomunikacja","lekkoatletyka","wypatroszona żaba","dotkliwy dotyk","opatulona szczelnie szmatami","pokiereszowana kierownica","polisacharyd","onomatopeja","przypowieść o samarytance"];
var haslo = tablica[Math.floor(Math.random()*tablica.length)];


haslo = haslo.toUpperCase();

var litery = ["A","Ą","B", "C", "Ć","D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N","Ń", "O","Ó", "P","Q","R", "S","Ś", "T", "U", "V","W", "X", "Y", "Z", "Ź", "Ż"];
var dlugosc = haslo.length;
var ile_skuch = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";
for(i=0;i<dlugosc;i++)
{
    if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypiszHaslo()
{
    document.getElementById("plansza").innerHTML=haslo1;
}


window.onload = start;

function start()
{
var tresc_diva = "";

    for(i=0;i<=34;i++)
    {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'" >'+litery[i]+'</div>';
        if((i + 1) % 7==0) tresc_diva = tresc_diva + "<div style=clear:both></div>"
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;

    wypiszHaslo();

}

String.prototype.ustawZnak = function (miejsce, znak)
{
    if(miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz(nr)
{
    var trafiona = false;
    for(i=0;i<dlugosc;i++)
    {
        if(haslo.charAt(i)==litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
        
    }
    

    if(trafiona == true)
    {   
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300"
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";



        wypiszHaslo();
    }
    else
    {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000"
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick","e");

        ile_skuch++;
        var obraz = "img/s"+ile_skuch+".jpg";
        document.getElementById("szubienica").innerHTML='<img src="'+obraz+'" alt=""/>';
    }
    
    //win
    if(haslo == haslo1)
    document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: " + haslo + '<br/><br/><span onclick="location.reload()" class="reset">Jeszcze raz?</span>';


    //lose

    if(ile_skuch>=9)
    {
        document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło: " + haslo + '<br/><br/><span onclick="location.reload()" class="resetLose">Jeszcze raz?</span>';

    }
}