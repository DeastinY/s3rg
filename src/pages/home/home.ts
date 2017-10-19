import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  employeeArray = [
    "für die Regierung", 
    "für das Militär", 
    "für einen Policlub", 
    "für ein Krankenhaus", 
    "für einen Shadowrunner", 
    "für eine Gang", 
    "für ein Syndikat", 
    "für einen Lokalen Konzern", 
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
  jobtypeArray = [
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
  targetArray = [
    "ist ein Mitarbeiter",
    "ist ein Prototyp",
    "sind Forschungsergebnisse",
    "ist eine Genmanipulierte Lebensform",
    "ist ein Magisches Objekt",
    "ist Gebäude, Schauplatz oder eine Infrastruktur"
  ]
  issuesArray = [
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
  meetinglocationArray = [
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
  paymentArray = [
    "angemessene",
    "schlechte",
    "gute",
    "andere Art der"
  ]
  
  job_title = this.generate_title();
  job_description = this.generate_description();

  constructor(public navCtrl: NavController) {
    
  }

  getRandom(array) {
    var randomNumber = Math.floor(Math.random()*array.length);
    return array[randomNumber];
  }

  generate_new() {
    this.job_title = this.generate_title();
    this.job_description = this.generate_description();
  }

  generate_title() {
    return this.getRandom(this.jobtypeArray)+" "+this.getRandom(this.employeeArray);
  }

  generate_description() {
    var contentArray = [
        "<i>Hier die Auftragsdetails in Kürze:</i><br>",
        "Johnson trifft euch <strong>"+this.getRandom(this.meetinglocationArray)+".</strong>",
        "Das Ziel <strong>"+this.getRandom(this.targetArray)+".</strong>",
        "Erwartet eine <strong>"+this.getRandom(this.paymentArray)+" Bezahlung.</strong>",
        "Überraschung: <strong>"+this.getRandom(this.issuesArray)+"</strong>"
    ];
    return contentArray.join("</br>");
  }

}
