##Introduktion till Webb-APIet

En av de stora delarna i denna kurs är att få erfarenhet av "API driven development” d.v.s. att bygga en tjänst som har ett webb-API i backend och en klient som efterfrågar data via detta API. 
Tanken med denna del är alltså att vi denna uppgift ska utveckla ett Webb-API som webbutvecklare senare kan bygga applikationer kring. Detta API ska utvecklas med stöd från de arkitektoniska tankarna som hör till REST (Representational State Transfer) vars teori kommer tas upp under kursen.
Följande krav ska implementeras för godkänt på uppgiften:


Följande är de minimala kraven för API-uppgiften

* API:et ska stödja de funktioner som beskrivs i tjänstens problembeskrivning
* API:et ska utvecklas med ramverket Ruby on Rails
* API:et ska vara utformat så det, i möjligaste mån, stödjer sig på teorin kring ett pragmatiskt RESTful API. Avvikelser ska kunna motiveras.
* API:et ska ha stöd för JSON
* API:et ska endast kunna anropas av klienter/användare som har en giltig API-nyckel
* API:et ska i möjligaste mån grunda sig på HATEOAS
* API:et ska ha en tydlig och genomtänkt felhantering som tydligt visar för användaren eventuella felkoder och felmeddelanden
* API:et ska kunna kunna anropas på så sätt att man kan välja en "offset" och "limit" av resurser
* Till API:et ska en POSTMAN-fil skapas som tester samtliga anrop man kan göra till API:et

Mer specifika krav till positioneringstjänsten:

* Man ska kunna få ut samtliga händelser på lämpligt sätt
* Man ska kunna få ut en enskild händelse
* Man ska kunna få ut alla händelser tillhörande en viss tagg
* Man ska kunna få ut samtliga taggar i systemet
* Man ska kunna få ut samtliga händelser skapade av en viss användare/resursägare
* Man ska kunna få ut samtliga resursägare
* Man ska kunna få ut samtliga händelser kopplade i närheten till en position (välj själv lämplig noggrannhet)
* Man ska kunna skriva en sökfråga som söker händelse på lämpligt sätt.
* Skapas en resurs med ett nytt taggnamn ska även en ny tagg skapas. Dock ska man undvika dubletter av taggnamn

* Utöver detta är du fri att implementera egna funktioner i ditt API
* Du ska var noggrann med att också dokumentera eventuella saker som personen som kör en peer-review på ditt projekt behöver veta. ALLA STEG i hur man får igång applikationerna!

Observera att bygget av API:et är en itterativ process och visa delar kan senare behöva modifieras och ändras när vi bygger en klientapplikation.

**För er som siktar på högre betyg än godkänd kan följande delar implementeras**

* API:et ska implementera en lämplig API rate limit på rekommenderat sätt
* API:et ska även ha stöd för att generera svar i XML
* tjänsten ska ha möjlighet för en applikationsutvecklare att registrera en web hook
* Genomtänkt versionhantering av API:et
* Filtrering av data via anropen 
* Till kodenbasen ska även tester skrivas med så god “code coverage” som möjligt
* Möjlighet att läsa ut anropsstatistik för respektive API-nyckel
* Egna övriga initiativ till mer avancerade funktioner

