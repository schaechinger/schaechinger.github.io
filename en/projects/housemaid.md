---
layout: default
title: Housemaid
description: A system based on Node.js that controls all the information about the digital home.
lang: en
class: projects
ref: projects-housemaid
---
# Housemaid

Housemaid is in a very early stage and has just the one feature that it was planned for originally: displaying missed phone calls.

The reason for the project was an error that did not allow my phone to display missed calls from my router. The software runs on a Raspberry π and crawls for new calls from the router. After an initial request of all missed calls so far it shows every new call with number and date on a small 20x2 LCD display.

I am currently working on a module system that integrates the missed call module. The system is controlled with a Leap Motion controller that can handle a various number of different modules with a wide area of features.

One can switch the current module with a single swipe gesture, navigate from page to page within the current module and even execute atomic actions.

The following modules are in development or planned right now:

* Managing devices in the wifi network
* Guest wifi that grants access through the MAC address and Facebook
* Subway timetables
* Weather forecast
* Heating control
* Contact information from the cloud
* Calendar events for today

\\
<a href="https://github.com/schaechinger/housemaid" target="_blank">Visit GitHub repository</a>
