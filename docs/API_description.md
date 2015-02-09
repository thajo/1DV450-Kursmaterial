##Introduktion till Webb-APIet

En av de stora delarna i denna kurs är att få erfarenhet av "API driven development” d.v.s. att bygga en tjänst som har ett webb-API i backend och en klient som efterfrågar data via detta API. 
Tanken med denna del är alltså att vi denna uppgift ska utveckla ett Webb-API som webbutvecklare senare kan bygga applikationer kring. Detta API ska utvecklas med stöd från de arkitektoniska tankarna som hör till REST (Representational State Transfer) vars teori kommer tas upp under kursen.
Följande krav ska implementeras för godkänt på uppgiften:


Följande är de minsta kraven för godkänt API-uppgiften

* API:et ska stödja de funktioner som beskrivs i tjänstens problembeskrivning
* API:et ska vara utformat så det, i möjligaste mån, stödjer sig på teorin kring ett pragmatiskt RESTful API. Avvikelser ska kunna motiveras.
* API:et ska ha stöd för JSON
* API:et ska endast kunna anropas av klienter/användare som har en giltig API-nyckel
* API:et ska i möjligaste mån grunda sig på HATEOAS
* API:et ska ha en tydlig och genomtänkt felhantering som tydligt visar för användaren eventuella felkoder och felmeddelanden
* API:et ska kunna kunna anropas på så sätt att man kan välja en "offset" och "limit" av resurser
* Till API:et ska en [https://www.google.se/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCAQFjAA&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fpostman-rest-client%2Ffdmmgilgnpjigdojojpjoooidkmcomcm&ei=cXXYVMX8EcqkygPhsoHYBA&usg=AFQjCNFL71vN61QG0LKlw7VDJvIZDprjHA&sig2=pq3-HnenvWt4SuqSIqo4xw](POSTMAN-fil) skapas som tester samtliga anrop man kan göra till API:et
* En publik användare (ej inloggad) ska kunna få ut samtliga händelser sorterat på senaste datum 
* En publik användare ska kunna få ut en enskild händelse
* En publik användare ska kunna få ut alla händelser tillhörande en viss tagg
* En publik användare ska kunna få ut samtliga taggar i systemet
* En publik användare ska kunna få ut samtliga händelser skapade av en viss användare/resursägare
* En publik användare ska kunna få ut samtliga resursägare
* En publik användare ska kunna få ut samtliga händelser kopplade i närheten till en position (välj själv lämplig noggrannhet)
* En publik användare ska kunna skriva en sökfråga som söker händelse på lämpligt sätt.
* Skapas en resurs med ett nytt taggnamn ska även en ny tagg skapas. Dock ska man undvika dubletter av taggnamn

_Krav tagna från [https://coursepress.lnu.se/kurs/webbramverk/tjansten-toerh/](beskrivningen av tjänsten):
* I tjänsten ska en användare kunna logga in och lägga till, uppdatera och ta bort sina egna händelser/platsbeskrivningar. Denna del kommer kräva någon form av autentisering och auktorisering.
* En registrerad användare som kan skapa händelser kan också skapa taggar för dessa händelser.
* En publik användare av tjänsten ska kunna lista ut de tillagda händelserna sorterat på datum de lagts till.
* En publik användare ska kunna lista ut händelser tillhörande en speciell resursägare och/eller en speciell tagg.
* En publik användare av tjänsten ska kunna lista händelser i närheten av en angiven position

Tjänsten ska innehålla/kunna hantera:

* Oändigt antal resurser och användare (hårdvara kan sätta så klart stopp men inte tjänstens arkitektur)
* Arbetets gång ska tydligt dokumenteras med tydliga commitmeddelanden i tjänstens repositorie på github tillsammans med övrig relevant information för andra utvecklare som ska kunna forka (ta en kopia av din kod) och köra din aapplikationer._

* Utöver detta är du fri att implementera egna funktioner i ditt API för att skräddarsy din tjänst och visa din kunskapsnivå
* Du ska var noggrann med att också dokumentera eventuella saker som personen som kör en peer-review på ditt projekt behöver veta. ALLA STEG i hur man får igång applikationerna!

Observera att bygget av API:et är en itterativ process och visa delar kan senare behöva modifieras och ändras när vi bygger en klientapplikation.

**För er som siktar på högre betyg än godkänd kan följande delar implementeras**

* API:et ska implementera en lämplig API rate limit på rekommenderat sätt
* API:et ska även ha stöd för att generera svar i XML
* tjänsten ska ha möjlighet för en applikationsutvecklare att registrera en web hook
* Genomtänkt versionhantering av API:et
* Filtrering av data via anropen 
* Till kodenbasen skrivs även tester med så god “code coverage” som möjligt
* Möjlighet att läsa ut anropsstatistik för respektive API-nyckel
* Egna övriga initiativ till mer avancerade funktioner

