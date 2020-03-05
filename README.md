# RückmeldungSammler
## Basis:
Ein Projekt zum Sammeln von Rückmeldungen der Mitarbeiter für den Projektleiter.

## Info: 
Projektanfang: 02.03.2020

## Ziel: 
Die Mitarbeiter bekommen am Ende jeder Woche eine Mail geschickt, in der sie zu einer Website weitergeleitet werden.
Auf der Webseite werden sie dann gefragt ihr aktuelles Stimmungsbild mit 1-5 Sternen zu bewerten. Sie können auch optional einen anonymen Kommentar hinterlassen.
Der Projektleiter kann sich danach das Stimmungsbild der Mitarbeiter anzeigen lassen.

## Installation:
### Api (cd api/):
Pakete installieren:
	npm install
	npm install --save cors

Api checken:
http://localhost:2999/testAPI

### Client (cd my-app/):
Folgende Packete müssen installiert werden:
	npm install react
	npm install react-dom
	npm install react-router-dom
	npm install @material-ui/core

Zum Ausführen:
	cd Mitarbeiter/
	cd my-app/
	npm start

Falls "EACCES: Permission denied...", dann:
	cd src/
	chmod 777 index.js
	chmod 777 leiter.js

Und erneut Versuchen:
	cd ..
	npm start

Client benutzen:
http://localhost:3000