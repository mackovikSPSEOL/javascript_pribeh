document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        fortnite_start();
    }
});
let Health = 100;
let MeleeWeapon = false;
let RangedWeapon = false;
let Shotgun = false;
let Shield = 0;
let attack_les = 0;
let attack_mesto = 0;
let choice = 0;
let playercount = 100;
let randomNum = 0;
let choice_late_game = 0;

function fortnite_start() {
    let Username = prompt("Jak se jmenuješ?: ")
    let Age;
    document.getElementById("start").style.display = "none";

    do {
        Age = parseInt(prompt("Kolik ti je?:"))
    } while (isNaN(Age) || Age < 0);

    if (Age < 18) {
        alert("Seš moc malej na to abys to hrál.")
    } 
    else if (Age >= 18) {
        alert("Vítej " + Username + "!" + " Nyní si otevři konzoli (F12 nebo CTRL + SHIFT + I) a pusť si hru.")
        console.log("Jonesy: Ahoj, vítej v moji Javascriptové hře!")
        console.log("Jonesy: Máme toho spoustu co dohánět, tak se pusťme do toho!")
        
        let tutorial;
        do {
            tutorial = prompt("Jonesy: Víš jak hrát? Ano nebo ne? (ano/ne): ");
        } while (tutorial !== "ano" && tutorial !== "ne");

        switch (tutorial) {
            case "ano":
                break;
            case "ne":
                alert("Jonesy: Tak si to ještě projdeme.. Máš za úkol zůstat posledním hráčem ve hře. K tomu budeš potřebovat zbraně a zdraví. základní počet životů je 100. Každá zbraň má jedno použití. Hra končí pokud vyhraješ nebo zemřeš..  Hodně štěstí!")
                break;
            default:
                break;
        }
        alert("Objevil ses v disco autobuse letícím nad ostrovem. Musíš se rozhodnout, kam chceš skočit.")
        let choice = prompt("▐ 1. Spadnout do lesa▐ 2. Spadnout do města▐ 3. Spadnout na pláž▐ (1/2/3): ")

        
        switch(choice) {


                // LOKACE: LES
            case "1":
                
                alert("skočil jsi do lesa. Vidíš v dálce nějakou chatrč a vydáš se k ní.")
                alert("V dálce slyšíš střelbu ale to nevadí protože si našel truhlu, kterou si otevřel a spadl ti nožík..")
                let MeleeWeapon = true;
                let attack_les = prompt("Běží k tobě hráč chceš použít nůž na obranu? (+2damage) (ano/ne): ")
                // potkání hráče, použití zbraně 

                // hráč použil zbraň neztratil žádné hp
                if (attack_les == "ano") {
                    MeleeWeapon = false;
                    alert("Zabil jsi hráče, ale během boje se ti rozbil nůž. Tvé zdraví je nyní " + Health + " hp.")
                    alert("Inventář: Prázdný")
                    let randomNum = Math.floor(Math.random() * 6) + 1;
                    playercount = playercount - randomNum;
                    alert("Počet hráčů ve hře: " + playercount + " hráčů")
                  
                }
                

                // hráč nepoužil zbraň ztratil 15hp
                else {
                    Health = Health - 15;
                    alert("Dal ti zabrat ale porazil si ho. Tvé zdraví je nyní " + Health + " hp.")
                    alert("Inventář: Nůž")
                    let randomNum = Math.floor(Math.random() * 3) + 1;
                    playercount = playercount - randomNum;
                    alert("Počet hráčů ve hře: " + playercount + " hráčů")
                    
                }
                break;

            
            // LOKACE: MĚSTO    
            case "2":
                alert("skočil jsi do města. Zde je hodně lidí a musíš být opatrný. Zaběhl jsi do první budovy, kterou jsi viděl.")
                alert("V budově jsi našel brokovnici")
                let Shotgun = true;
                let attack_mesto = prompt("Začne se na tebe někdo řítit chceš použít brokovnici? (+10damage) (ano/ne): ")
            
                // potkání hráče, použití zbraně
                if (attack_mesto == "ano") {
                    Shotgun = false;
                    alert("Zabil jsi hráče, ale během boje se ti zasekla brokovnice. Tvé zdraví je nyní " + Health + " hp.")
                    alert("Inventář: Prázdný")
                    let randomNum = Math.floor(Math.random() * 10) + 1;
                    playercount = playercount - randomNum;
                    alert("Počet hráčů ve hře: " + playercount-randomNum + " hráčů")
                    
                }
                // hráč nepoužil zbraň ztratil 17hp
                else {
                    Health = Health - 17;
                    alert("Dal ti zabrat ale porazil si ho. Tvé zdraví je nyní " + Health + " hp.")
                    alert("Inventář: Brokovnice")
                    let randomNum = Math.floor(Math.random() * 3) + 1;
                    playercount = playercount - randomNum;
                    alert("Počet hráčů ve hře: " + playercount + " hráčů")
                    
                
                }
                break;




            // LOKACE: PLÁŽ    
            case "3":
                alert("skočil jsi na pláž. Zde je klid a pohoda.")
                alert("Našel si na zemi samopal a vzal sis ho.")
                let RangedWeapon = true;
                alert("Inventář: Samopal")
                let randomNum = Math.floor(Math.random() * 3) + 1;
                playercount = playercount - randomNum;
                alert("Počet hráčů ve hře: " + playercount + " hráčů")

                break;
            default:
                alert("《 achjo musíš znovu jelikož používání cyklů je peklo v javascriptu 》")
                break;
        }
    alert("Bezpečně si doběhl do zóny ale teď jsi narazil na nepřítele")
    alert("Nepřítel: Hej ty! Co tu děláš?!")


    if (MeleeWeapon == true) {
    let choice_late_game = prompt("Chceš použít nůž? (+5damage) (ano/ne): ")
    if (choice_late_game == "ano") {
        alert("Zabil jsi ho ale ztratil jsi nůž a tvé zdraví je nyní " + Health + " hp")
        alert("Inventář: Prázdný")
        let randomNum = Math.floor(Math.random() * 15) + 1;
        playercount = playercount - randomNum;
        alert("Počet hráčů ve hře: " + playercount + " hráčů")
    }}
    else {
        Health = Health - 10;
        alert("Bylo to těsné ale měl jsi štěstí! a tvé zdraví je nyní " + Health + " hp")
        alert("Tvůj inventář: Nůž")
        let randomNum = Math.floor(Math.random() * 5) + 1;
        playercount = playercount - randomNum;
        alert("Počet hráčů ve hře: " + playercount + " hráčů")
        
    }
    if (RangedWeapon == true) {
        let choice_late_game = prompt("Chceš použít samopal? (+10damage) (ano/ne): ")
        if (choice_late_game == "ano") {
            alert("Zabil jsi ho ale ztratil jsi samopal a tvé zdraví je nyní " + Health + " hp")
            alert("Inventář: Prázdný")
            let randomNum = Math.floor(Math.random() * 15) + 1;
            playercount = playercount - randomNum;
            alert("Počet hráčů ve hře: " + playercount + " hráčů")
        }
        else {
            Health = Health - 10;
            alert("Bylo to těsné ale měl jsi štěstí! a tvé zdraví je nyní " + Health + " hp")
            alert("Tvůj inventář: Samopal")
            let randomNum = Math.floor(Math.random() * 20) + 1;
            playercount = playercount - randomNum;
            alert("Počet hráčů ve hře: " + playercount + " hráčů")
            
        }
    }
    if (Shotgun == true) {
        let choice_late_game = prompt("Chceš použít brokovnici? (+15damage) (ano/ne): ")
        if (choice_late_game == "ano") {
            alert("Zabil jsi ho ale ztratil jsi brokovnici a tvé zdraví je nyní " + Health + " hp")
            alert("Inventář: Prázdný")
            let randomNum = Math.floor(Math.random() * 15) + 1;
            playercount = playercount - randomNum;
            alert("Počet hráčů ve hře: " + playercount + " hráčů")
        }
        else {
            Health = Health - 10;
            alert("Bylo to těsné ale měl jsi štěstí! a tvé zdraví je nyní " + Health + " hp")
            alert("Tvůj inventář: Brokovnice")
            let randomNum = Math.floor(Math.random() * 20) + 1;
            playercount = playercount - randomNum;
            alert("Počet hráčů ve hře: " + playercount + " hráčů")
            
        }
    }

    // let choice_late_game = prompt(" ")
    
    }
    else {
        alert("jak? se to stalo jako")
    }
}
