/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her




//En funksjon som sier at om restverdi = 0, så er tallet et partall.

function oppgave1(number){
    if (number % 2 === 0){
        return "Partall";
    } else {
        return "Oddetall";
        
    }


}

console.log(oppgave1(5));






/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her


//Her bruker jeg arrowfunction med implicit return for å lage en function som tar inn et parameter og gjør det om til store bokstaver.
const myUpperString = (string) => string.toUpperCase() + "!";


//Her tester jeg function ved å kalle på den for å endre en ny string.
let myString = myUpperString("Dette er verdens kuleste string");

console.log(myString);

//Kunne så klart også bare gjort som jeg gjør her, som kanskje er mer riktig iht oppgaven.

console.log(myUpperString("Dette er verdens kuleste string"));





/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her


//En funksjon som tar inn parameterene (name, hour) og gir det forskjellige meldinger basert på når på døgnet/verdiene som blir lagt inn
function myDailyGreetings(name, hour){
    
    if (hour === undefined){
        return "Det har skjedd en feil, tidspunkt mangler."
    
    } else if(hour < 0) {
        return "Ugyldig tid";

    } else if (hour >= 0 && hour <= 5){
        return "Godnatt " + name;

    } else if (hour >= 6 && hour <= 11){
        return "God morgen " + name; 

    } else if (hour >= 12 && hour <= 17){
        return "God dag " + name;

    } else if (hour >= 18 && hour <= 23){
        return "God kveld " + name;

    } else if (hour > 23) {
        return "Ugyldig tid";

    } 
}

//Test av funksjonen
console.log(myDailyGreetings("Sander", 5));

 

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her


// Her løser jeg koden på ordinær måte med function hvor jeg beholder alt mellom første 1 og siste -1 steg i arrayet
function myArrayFunction(array){
    return array.slice(1, -1);

}

//consol.log kun for å teste min egen kode
console.log(myArrayFunction(["Rød","Grønn", "Blå", "Rosa", "Gul"]));


//Her løser jeg oppgaven med arrowfunction og tall istedet
const myArrayFunctionArrow = (array) => array.slice(1, -1);


//consol.log kun for å teste min egen kode
console.log(myArrayFunctionArrow([1,2,3,4]));






/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her


//Her bruker jeg replace og trim for å bytte ut (ord1, med ORD2) og fjerne eventuelle mellomrom på ytterkantene med .trim()

function myAlteredString(inputString){
    return inputString.replace("vanskelig", "gøy").trim();

}

//Test av funksjon
console.log(myAlteredString("     Javascript er vanskelig.        "))

//Kan også løses med arrowfunction

const myAlteredStringArrow = (inputString) => inputString.replace("vanskelig", "gøy").trim();


//Test av funksjon
console.log(myAlteredStringArrow("                  Det er vanskelig å sykle             "));



/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];


/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her


//Her sier funksjonen gå inn i items, fjern første punkt i arrayet, så går du inn i arrayet og finner "Viskelær", start der og fjern den, erstatt den med "Linjal", så starter du i begynnelsen av arrayet og fjerner 2 elementer, for så å kombinere de til en string
function myModifiedArray(items){
    items.shift();
    items.splice(items.indexOf("Viskelær"),1, "Linjal");
    items.splice(0, 2, "Markeringspenn")
    return items.join(" | ");
}


//For å teste egen funksjon

console.log(myModifiedArray(items))




//Ekstra utfordring - ble litt usikker på om oppgaven ville at jeg skulle filtrere ut elemtenter med ("e") fra eksisterende array eller lage et nytt array, men lagde hvertfall et nytt her.


const myItems = ["Telefon", "Kontroll", "Bil", "Flaske", "Penn"]


//Forsøk 1, funket dårlig.

// function checkIfContainsE(item){
//     myItems.filter(checkIfContainsE);
//     return item.includes("e");
    
// }



// Etter litt om og men på w3 schools og en del google søk, fant jeg ut at jeg må kalle på filteret utenfor funksjonen. Da gikk det


function checkIfContainsE(item){
    return item.includes("e");

}

const onlyE = myItems.filter(checkIfContainsE);


console.log(onlyE)









/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her