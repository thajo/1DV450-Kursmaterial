##Introduktion till uppgiften - Webb-API##

Innan du läser denna uppgiftsbeskrivning se till att du läst igenom [problembeskrivningen](#) kring tjänsten vi ska bygga.
Tanken är alltså att vi denna uppgift ska utveckla ett Webb-API som stödjer tjänsten och utvecklare senare kan bygga applikationer kring. Tanken är också att detta API ska utvecklas med stöd från de arkitektoniska tankarna som hör till REST (Representational State Transfer) som kommer gås igenom under kursen.

Följande krav ska implementeras för godkänt på uppgiften:

* API:et ska stödja de funktioner som beskrivs i tjänstens problembeskrivning
* API:et ska utvecklas med något av webbramverken Ruby on Rails eller Django
* Till API:et ska en dokumentation skrivas som vänder sig mot målgruppen webbutvecklare
* API:et ska vara utformat så det stödjer sig på teorin kring ett RESTful API
* API:et ska ha stöd för minst två olika dataformat; förslagsvis XML och JSON
* API:et ska endast kunna anropas av utvecklare som registrerat sig för en API-nyckel
* API:et ska implementera en lämplig API rate limit  
* API:et ska grunda sig på teorin kring HATEOAS
* API:et ska ha en tydlig och genomtänkt felhantering som tydligt visar för användaren eventuella felkoder och meddelande
* Till API:et ska en enkel testapplikation utvecklas som testar de olika resurserna
* API:et ska implementera någon form av säkerhetslösning för "osäkra metoder". Säkra metoder kan vara öppna för de med giltlig API-nyckel


##Registrering för API-nyckel##
Tillsammans med API:et ska en registreringstjänst utvecklas där utvecklare kan genom att registrera sig med sin e-post få tillgång till en giltig API-nyckel som ska användas i API-anropen för samtliga resurser. Det kan vara en vanlig enkel webbapplikation där användaren registrerar sina kontaktuppgifter och kan därmed få tillgång till en genererad API-nyckel som är giltlig för API-anrop. 

Registreringsapplikationen bör bestå av ett enkelt formulär där utvecklaren registrerar sin applikation och det genereras en hashad API-nyckel som visas för användaren. Användaren registrerar sig med en e-postadress. En registrerad e-post kan endast ha en giltig API-nyckel.

Som administratör till API-nyckelapplikationen ska vi kunna ta bort befintliga API-nycklar om t.ex. någon missköter sig.

Eventuella frågor kring applikationen kan diskuteras under de schemalagda handledningspassen.