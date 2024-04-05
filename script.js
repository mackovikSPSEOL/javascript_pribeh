document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        fortnite_start();
    }
});
let health = 100;

function fortnite_start() {
    let Username = prompt("Jak se jmenuješ?: ")
    let Age;

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
            case "1":
                alert("skočil jsi do lesa. Vidíš v dálce nějakou chatrč a vydáš se k ní.")
                alert("V dálce slyšíš střelbu ale to nevadí protože si našel truhlu, kterou si otevřel a spadl ti nožík..")
                let MeleeWeapon = True;
                let attack = prompt("Běží k tobě hráč chceš použít nůž na obranu? (+2damage) (ano/ne): ")
                if (attack === "ano") {
                    let health =- 10;
                    let MeleeWeapon = False;
                    alert("Zabil jsi hráče, ale zranil ses a během boje se ti rozbil nůž. Tvé zdraví je nyní " + health + " hp.")
                }
                else {
                    let health =- 20;
                    alert("Dal ti zabrat ale porazil si ho. Tvé zdraví je nyní " + health + " hp.")
                    alert("Inventář: Nůž")
                }
                break;
            case "2":
                alert("skočil jsi do města. Zde je hodně lidí a musíš být opatrný. Zaběhl jsi do první budovy, kterou jsi viděl.")
                alert("V budově jsi našel brokovnici")
                break;
            case "3":
                alert("skočil jsi na pláž. Zde je klid a pohoda.")
                break;
            default:
                alert("《 achjo musíš znovu jelikož používání cyklů je peklo v javascriptu 》")
                break;
        }

    }
    else {
        alert("jak? se to stalo jako")
    }
}
