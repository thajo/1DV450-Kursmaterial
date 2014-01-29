##Introduktion till uppgiften - Webb-API##

Innan du läser denna uppgiftsbeskrivning se till att du läst igenom [problembeskrivningen](https://coursepress.lnu.se/kurs/webbramverk/tjansten-toerh/) kring tjänsten vi ska bygga.
Tanken är alltså att vi denna uppgift ska utveckla ett Webb-API som stödjer tjänsten och som webbutvecklare senare kan bygga applikationer kring. Tanken är också att detta API ska utvecklas med stöd från de arkitektoniska tankarna som hör till REST (Representational State Transfer) vars teori kommer tas upp under kursen.

Följande krav ska implementeras för godkänt på uppgiften:

* API:et ska stödja de funktioner som beskrivs i tjänstens problembeskrivning
* API:et ska utvecklas med något av webbramverken Ruby on Rails eller Django
* Till API:et ska en dokumentation skrivas som vänder sig mot målgruppen webbutvecklare
* API:et ska vara utformat så det, i möjligaste mån, stödjer sig på teorin kring ett RESTful API
* API:et ska ha stöd för minst två olika dataformat; förslagsvis XML och JSON
* API:et ska endast kunna anropas av klienter/användare som har en giltig API-nyckel
* API:et ska grunda sig på teorin kring HATEOAS
* API:et ska ha en tydlig och genomtänkt felhantering som tydligt visar för användaren eventuella felkoder och felmeddelanden
* API:et ska kunna kunna anropas på så sätt att man kan välja en "offset" och "limit" av resurser




**Ytterligare funktioner som implementeras (kan anses betyghöjande)**

* API:et ska implementera en lämplig API rate limit på rekommenderat sätt
* Genomtänkt versionhantering av API:et
* Filtrering av data via anropen

* Utveckla en enkel testapplikation med ditt valda ramverk
* Egna övriga initiativ till funktioner...

Observera att bygget av API:et är en itterativ process och visa delar kan senare behöva modifieras och ändras när vi bygger en klientapplikation.

##Registrering för API-nyckel##
Tillsammans med API:et ska en registreringsapplikation utvecklas där utvecklare kan genom att registrera sig med sin e-post få tillgång till en giltig API-nyckel som ska användas i API-anropen för samtliga resurser. Detta blir en webbapplikation som är fristående från själva API:et. Det kan vara en vanlig enkel webbapplikation där användaren registrerar sina kontaktuppgifter och kan därmed få tillgång till en genererad API-nyckel som är giltlig för API-anrop. 

Registreringsapplikationen bör bestå av ett enkelt formulär där utvecklaren registrerar sin applikation och det genereras en hashad API-nyckel som visas för användaren. Användaren registrerar sig med en e-postadress. En registrerad e-post kan endast ha en giltig API-nyckel.

Som administratör till API-nyckelapplikationen ska vi kunna ta bort befintliga API-nycklar. Vi behöver alltså något sätt för en administratör att logga in och enkelt hantera API-nycklar.

För att sammanfatta de minimala kraven på denna applikation:

* Registreringsformulär för en utvecklare där en giltig API-nyckel skapas vid registrering och sparas undan för att använda när man kontrollerar anrop till API:et
* Inloggningsformulär för en administratör 
* En sida där den inloggade administratören kan ta bort(revoke) befintliga API-nycklar

Eventuella frågor kring API:et och registreringsapplikationen kan diskuteras under de schemalagda handledningspassen.