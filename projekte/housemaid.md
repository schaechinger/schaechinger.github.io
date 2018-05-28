---
layout: default
title: Housemaid
description: Ein auf Node.js aufbauendes System, das alle Informationen für das Digital Home zusammentragen und aufbereiten soll.
lang: de
class: projects
ref: projects-housemaid
---
# Housemaid

Housemaid befindet sich derzeit in einem sehr frühen Stadium und verfügt nur über den ursprünglich angedachten Funktionsumfang, der Anzeige verpasster Anrufe.

Ausgangspunkt war ein Fehler, der meinem Telefon den Abruf von verpassten Anrufen von meinem Router untersagte. Die Software läuft derzeit auf einem Raspberry π und ruft die aktuellen Anrufdaten vom Router ab. Nach einem initialen Abruf zur Festlegung der bereits vorhandenen Kommunikationsdaten wird jeder neu erfasste Datensatz auf einem kleinen 20x2 LCD angezeigt.

Geplant ist über dieses Modul hinweg der Aufbau eines Systems, das mit einem Leap Motion Controller gesteuert werden kann und aus einer variablen Anzahl an Modulen mit unterschiedlichen Einsatzgebieten besteht. Eines davon ist das Modul verpasster Anrufe.

Durch Wischgesten kann das Modul gewechselt, zu einer anderen Seite innerhalb eines Moduls gesprungen oder eine Aktion ausgeführt werden.

Folgende Module sind derzeit in der Entwicklung oder in der Ideenphase:

* Verwaltung der Geräte im WLAN
* Gäste-WLAN, das mittels MAC-Adresse neue Geräte zur Freigabe vermerkt, um sie zum Heimnetzwerk hinzuzufügen. Durch Anmeldung auf Facebook kann der Vorgang über eine bestehende Freundschaft auch automatisiert werden.
* U-Bahn-Plan ab der Haustür
* Wettervorhersage
* Heizungssteuerung
* Einbinden von Kontaktdaten aus der Cloud zur Anzeige bei Anrufen
* Anzeige von Kalenderevents des heutigen Tages

\\
<a href="https://github.com/schaechinger/housemaid" target="_blank">Zum GitHub Repository</a>
