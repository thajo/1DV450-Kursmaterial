##Introduktion till Webb-APIet

En av de stora delarna i denna kurs är att få erfarenhet av "API driven development” d.v.s. att bygga en tjänst som har ett webb-API i backend och en klient som efterfrågar data via detta API. För en förståelse för tjänsten läses denna
[beskrivning av tjänsten som helhet](https://coursepress.lnu.se/kurs/webbramverk/tjansten-toerh/).
Tanken med denna del är alltså att vi denna uppgift ska utveckla ett Webb-API som webbutvecklare senare kan bygga applikationer kring. Detta API ska utvecklas med stöd från de arkitektoniska tankarna som hör till REST (Representational State Transfer) vars teori kommer tas upp under kursen.   

Följande är de minsta kraven för godkänt API-uppgiften

* API:et ska stödja de funktioner som beskrivs i tjänstens problembeskrivning
* API:et ska vara utformat så det, i möjligaste mån, stödjer sig på teorin kring ett pragmatiskt RESTful API. Avvikelser ska kunna motiveras.
* API:et ska ha stöd för JSON
* Varje anrop ska kräva en giltig API-nyckel skapad i applikationen gjord i första delen
* API:et ska i möjligaste mån grunda sig på HATEOAS
* API:et ska ha en tydlig och genomtänkt felhantering som tydligt visar för användaren eventuella felkoder och felmeddelanden
* API:et ska kunna kunna anropas på så sätt att man kan välja en "offset" och "limit" av resurser
* Till API:et ska en [POSTMAN-fil](https://www.google.se/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCAQFjAA&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fpostman-rest-client%2Ffdmmgilgnpjigdojojpjoooidkmcomcm&ei=cXXYVMX8EcqkygPhsoHYBA&usg=AFQjCNFL71vN61QG0LKlw7VDJvIZDprjHA&sig2=pq3-HnenvWt4SuqSIqo4xw) skapas som testar samtliga anrop man kan göra till API:et
* Med hjälp av HTTP-anrop till API:et ska man kunna få ut samtliga händelser sorterat på senaste datum 
* Med hjälp av HTTP-anrop till API:et ska man kunna få ut en enskild händelse
* Med hjälp av HTTP-anrop till API:et ska man kunna få ut alla händelser tillhörande en viss tagg
* Med hjälp av HTTP-anrop till API:et ska man kunna få ut samtliga händelser kopplade i närheten till en position (välj själv lämplig noggrannhet)
* Med hjälp av HTTP-anrop till API:et ska man kunna skriva en sökfråga som söker händelse på lämpligt sätt.
  
Tjänsten kommer ju ha flera olika roller. Dels har vi utvecklarna som registrerar sina applikationer och får API-nycklar och därmed kan ställa frågor mot API:et men vi har också slutanvändare, dvs de webbanvändare som kommer köra vår klient vi skriver i del tre. Dessa användare ska kunna:

* Logga in och lägga till, uppdatera och ta bort sina egna händelser/platsbeskrivningar dvs alla "un-safe" methods i ditt API. Denna del kommer kräva någon form av autentisering och auktorisering byggs in i APIet. En person som skapat händelser/platsbeskrivningar brukar också kallas resursägare.
* Skapa händelser kan också skapa taggar i samband med skapandet av dessa dessa händelser. Tänk till på hur du undviker dubletter av taggar.

Det är OK att hårdkoda slutanvändarnas uppgifter i tjänsten.
 
Tänk också på:
* Att arbetets gång ska tydligt dokumenteras med tydliga commitmeddelanden i tjänstens repositorie på github tillsammans med övrig relevant information för andra utvecklare som ska kunna forka (ta en kopia av din kod) och köra din applikationer.
* Du utöver detta är fri att implementera egna funktioner i ditt API för att skräddarsy din tjänst och visa din kunskapsnivå
* Du ska var noggrann med att också dokumentera eventuella saker som personen som kör en peer-review på ditt projekt behöver veta. ALLA STEG i hur man får igång applikationerna!

Observera att bygget av API:et är en itterativ process och visa delar kan senare behöva modifieras och ändras när vi bygger en klientapplikation.

**För er som siktar på högre betyg än godkänd kan t.ex. följande delar också implementeras**

* API:et ska implementera en lämplig API rate limit på rekommenderat sätt
* API:et ska även ha stöd för att generera svar i XML
* tjänsten ska ha möjlighet för en applikationsutvecklare att registrera en web hook
* Filtrering av data via anropen 
* Till kodenbasen skrivs även tester
* Möjlighet att läsa ut anropsstatistik för respektive API-nyckel
* Egna övriga initiativ till mer avancerade funktioner

