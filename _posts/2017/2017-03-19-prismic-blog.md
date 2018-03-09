---
layout: post
lang: de
title: "API-First CMS Prismic"
category: development
tags: node
shortkey: rms48
excerpt: "Mein Blog ist endlich fertig. Für das Backend habe ich mich für Prismic entschieden, einem API-basierten CMS. Hier gibt es einen kleinen Einblick in meinen Findungsprozess."
---
## Wieso kein fertiges System?

Eins ist klar, auf der eigenen Website will man etwas ausprobieren und ein bisschen tüfteln! Also bin ich schnell von bestehenden All-in-One-Lösungen weg gekommen. Grund war auch, dass diese das Backend meist eng mit dem Frontend koppeln und ich nicht nur für den Blog meine Website nachbauen wollte. Die Suche nach einem Blogsystem, bei dem man auf das Frontent verzichten kann war auch erfolglog. Da wurde ich auf Lösungen aufmerksam, die an sich genau das umsetzten, was ich nicht neu implementieren wollte: das Backend. Damit war ich bei den API-First CMS angekommen, die sich auf die Datenhaltung konzentrieren und diese mittels API bereitstellen. Nicht mehr und nicht weniger.

## Welches System soll es sein?

API-First CMS gibt es viele, darunter kostenlose und Abo-Varianten. Mein Anspruch war es, möglichst einfach eine generische Struktur vorgeben zu können, die für mich passend erscheint und mich nicht an ein System anpassen zu müssen. Zweitens wollte ich lediglich Daten in Textform ablegen. Bilder, Vieos und andere große Dateien sollten auf meinem Server bleiben, da ich sie dort auch besser kontrollieren kann. Ich habe mehrere Cloud-Angebote getestet:

## Cosmic JS

Zuerst stand [Cosmic JS](https://cosmicjs.com/) auf dem Programm, was mich als JavaScript-Fan natürlich sofort angesprochen hat. Hier wurde ich allerdings schnell wieder weggetrieben, da mir die Strukturen zu starr und die Erstellung neuer Posts zu aufwändig war. Es müssen zuerst Objekte erzeugt werden, die dann als Prototyp für den Inhalt gelten und nur eine beschränkte Anzahl an Typen oder andere Prototypen enthalten können. Das wurde mir für meinen Anwendungsbereich schnell zu komplex. Problematisch (man soll ja immer groß denken) war auch die Tatsache, dass die Anzahl der API-Calls pro Monat auf 5000 gedeckelt war. Da ich vorerst nicht dafür zahlen wollte und das Angebot dann schnell die monatlichen Kosten meines Webservers überschreiten würde, war dieser Versuch für mich leider gescheitert. Falls man jedoch immer die selben Strukturen für seine Inhalte will, ist es auf jeden Fall einen Versuch wert!

## Contentful

Eine weitere Alternative ist [Contentful](https://www.contentful.com/). Auch hier gibt es eine kostenlose Einstiegsvariante, die für bis zu drei Nutzer und monatlich 50000 API-Calls ausgelegt war. Contentful stellt für die gängigen Sprachen SDKs bereit, mit denen man schnell einen Einstieg findet und die Daten einfach verarbeiten kann. Objekte lassen sich leicht strukturieren und man kann neben den gängigen Datentypen auch JSON nutzen, um seine Inhalten möglichst generisch aufbauen zu können. Top! Was mich allerdings abschreckte, war das Pricing-Modell. Sobald die Grenzen des Lockmodells erreicht sind, darf man tief in die Tasche greifen, was mich leider wieder zur Suche quer durch Google und co. nach weiteren API CMS zwang.

## Prismic

Die letzte Alternative, die ich nach Contentful getestete, war [prismic.io](https://prismic.io). Prismic bietet wie auch die Konkurrenz einen gratis Plan und ist meiner Meinung nach darauf ausgelegt, Geld von den größeren Kunden zu holen und die kleinen Privatnutzer mitlaufen zu lassen, was mir sehr gelegen kam. Es gibt erstmals keine Begrenzung für die Anzahl an Requests. Die Abomodelle unterscheiden sich lediglich in der Anzahl an verschiedenen Nutzern und Gruppen (in der kostenlosen Variante kann man nur mit einer Person starten) und im Business-Bereich in der Verfügbarkeit. Auch das war für mich erst mal weniger wichtig, wenn der Blog kurz ausfällt kann der Besucher auch erst man den Rest der Website ansehen und wie du siehst funktioniert ja alles!

Prismic setzt ähnlich wie Contentful auf einen Mix aus vordefinierten Datentypen und JSON für alle, denen das nicht ausreicht. Der Online-Editor ist komfortabel und man kann sich entweder die einzelnen Bestandteile des (in meinem Fall) Posts zusammenklicken oder sie direkt in einem großen JSON-Objekt zusammen-nerden. Was hab ich wohl genutzt ... Auch hier gibt es SDKs für die modernen Sprachen, mit dem man sich schnell die gewünschten Daten beschaffen kann.

Was mir sehr gut gefällt ist auch die Vorschaufunktion: Der Online-Editor gliedert Artikel in die Status veröffentlicht, in Bearbeitung und archiviert. Standardmäßig werden nur veröffentlichte Artikel ausgegeben. Ist man in der Bearbeitung eines Artikels, kann man mit Klick auf einen Button auf eine vorher definierte URL springen, der dann ein Token übergeben wird. Dieser schaltet  den aktuell bearbeiteten Artikel (in der zu diesem Zeitpunkt neuesten Version) auf dem Client frei und man kann den Artikel live auf der eigenen Website ansehen. Der Token wird hierbei in einem Cookie gespeichert, das dann bei API-Requests beachtet wird. Im JavaScript-SDK vermisse ich diese Funktionalität jedoch und habe sie selbst implementiert.

Bisher bin ich nach ca. einem Monat Laufzeit sehr zufrieden und kann dir nur empfehlen, dich mit API-First CMS auseinander zu setzen. Sie bieten die optimale Mischung aus Komfort und Freiheit.

In diesem Post habe ich absichtlich auf eine technische Ebene verzichtet und mich auf den Funktionsumfang und meinen Findungsprozess fokusiert. Bei Bedarf erläutere ich die Funktionsweise aber gerne noch auf einer tieferen Ebene. Mich haben API-First CMS jedenfalls überzeugt, da sie leicht skalierbar, schnell und vor allem flexibel sind. Für die meisten Anwendungsfälle sollte eine solche Lösung gewappnet sein und durch die Versionierung und den Zugriffsschutz von Inhalten und sogar das Ablegen von Medieninhalten steht dem nächsten Projekt nichts mehr im Weg!
