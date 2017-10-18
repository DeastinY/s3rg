var employeeArray = [
    "für die Regierung", 
    "für das Militär", 
    "für einen Policlub", 
    "für ein Krankenhaus", 
    "für einen Shadowrunner", 
    "für eine Gang", 
    "für ein Syndikat", 
    "für einen Lokaler Konzern", 
    "für einen B-Konzern", 
    "für einen A-Konzern", 
    "für einen AA-Konzern", 
    "für einen AAA-Konzern", 
    "für einen Kult", 
    "für eine Gruppierung", 
    "für einen Verein",
    "für eine Privatperson",
    "für eine Geheimgesellschaft",
    "für ein mysteriöses Wesen"
]
var jobtypeArray = [
    "Magische Unterstützung",
    "Vermisstensuche",
    "Hilfe bei Critterproblemen",
    "Untersuchung aussergewöhnlicher Ereignisse",
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
    "Nachforschungen anstellen",
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

function copy() {
    var doc = document
        , text = doc.getElementById("card")
        , range, selection;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
        $('#alert').fadeIn();
      } catch (err) {
        console.log('Oops, unable to copy');
      }
    selection.removeAllRanges()
}

function generate() {
    document.getElementById('header').innerHTML = getRandom(jobtypeArray)+" "+getRandom(employeeArray);
    document.getElementById('meetinglocation').innerHTML = "Johnson trifft euch <strong>"+getRandom(meetinglocationArray)+".</strong>";
    document.getElementById('target').innerHTML = "Das Ziel <strong>"+getRandom(targetArray)+".</strong>";
    document.getElementById('payment').innerHTML = "Erwartet eine <strong>"+getRandom(paymentArray)+" Bezahlung.</strong>";
    document.getElementById('issues').innerHTML = "Überraschung: <strong>"+getRandom(issuesArray)+"</strong>";
    $('#alert').fadeOut();
}
document.addEventListener('DOMContentLoaded', generate, false);