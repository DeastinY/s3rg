var employeeArray = [
    "Regierung", 
    "Militär", 
    "Policlub", 
    "Krankenhaus", 
    "Shadowrunner", 
    "Gang", 
    "Syndikat", 
    "Lokaler Konzern", 
    "B-Konzern", 
    "A-Konzern", 
    "AA-Konzern", 
    "AAA-Konzern", 
    "Kult", 
    "Gruppierung", 
    "Verein",
    "Privatperson",
    "Geheimgesellschaft",
    "Exotisches/Mysteriöses Wesen"
]
var jobtypeArray = [
    "Magische Bedrohung",
    "Vermisstensuche",
    "Critterprobleme",
    "Aussergewöhnliche Ereignisse",
    "Auftragsmord",
    "Erpressung",
    "Personenschutz",
    "Schmuggel",
    "Fälschung",
    "Transport",
    "Diebstahl",
    "Zerstörung",
    "Ablenkung",
    "Extraktion",
    "Hacking",
    "Nachforschungen",
    "Wiederbeschaffung",
    "Objektschutz",
    "Krieg"
]
var targetArray = [
    "ist ein Mitarbeiter",
    "ist ein Prototyp",
    "sind Forschungsergebnisse",
    "ist eine Genmanipulierte Lebensform",
    "ist ein Magisches Objekt",
    "ist Gebäude, Schauplatz oder eine Infrastruktur"
]
var issuesArray = [
    "Massive Sicherheit",
    "Eine Dritte Partei",
    "Der Johnson hat nicht alles gesagt",
    "Es werden ungewöhnliche Ausrüstung/Fähigkeit benötigt",
    "Das Ziel wird verlegt",
    "Das Ziel ist infiziert",
    "Ihr müsst an einen besonderer Ort (Kriegsgebiet, anderes Land)",
    "Schwieriger Transport (Angriff, größe, Grenzen)",
    "Probleme mit Vandalismus",
    "Ihr geratet in Proteste/Aufstände",
    "Das Ziel ist in erhöhter Alarmbereitschaft"
]
var meetinglocationArray = [
    "in einem Club",
    "in einer Bar",
    "in einem Restaurant",
    "in einem Lagerhaus",
    "am Dock",
    "in einer Fabrik",
    "in den Barrens",
    "in einem Fahrzeug",
    "in der Matrix",
    "im Astralraum"
]
var paymentArray = [
    "angemessene",
    "schlechte",
    "gute",
    "andere Art der"
]

function getRandom(array) {
    var randomNumber = Math.floor(Math.random()*array.length);
    return array[randomNumber];
}

function generate() {
    document.getElementById('header').innerHTML = getRandom(jobtypeArray)+" für "+getRandom(employeeArray);
    document.getElementById('meetinglocation').innerHTML = "Johnson trifft euch <strong>"+getRandom(meetinglocationArray)+".</strong>";
    document.getElementById('target').innerHTML = "Das Ziel <strong>"+getRandom(targetArray)+".</strong>";
    document.getElementById('payment').innerHTML = "Erwartet eine <strong>"+getRandom(paymentArray)+" Bezahlung.</strong>";
    document.getElementById('issues').innerHTML = "Überraschung: <strong>"+getRandom(issuesArray)+"</strong>";
}
document.addEventListener('DOMContentLoaded', generate, false);