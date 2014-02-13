##Introduktion till uppgiften - Webb-API##

Innan du läser denna uppgiftsbeskrivning se till att du läst igenom [problembeskrivningen](https://coursepress.lnu.se/kurs/webbramverk/tjansten-toerh/) kring tjänsten vi ska bygga.
Tanken är alltså att vi denna uppgift ska utveckla ett Webb-API som stödjer tjänsten och som webbutvecklare senare kan bygga applikationer kring. Tanken är också att detta API ska utvecklas med stöd från de arkitektoniska tankarna som hör till REST (Representational State Transfer) vars teori kommer tas upp under kursen.

Följande krav ska implementeras för godkänt på uppgiften:

* API:et ska stödja de funktioner som beskrivs i tjänstens problembeskrivning
* API:et ska utvecklas med något av webbramverken Ruby on Rails eller Django
* Till API:et ska en dokumentation skrivas som vänder sig mot målgruppen webbutvecklare
* API:et ska vara utformat så det, i möjligaste mån, stödjer sig på teorin kring ett pragmatiskt RESTful API
* API:et ska ha stöd för minst två olika dataformat; förslagsvis XML och JSON
* API:et ska endast kunna anropas av klienter/användare som har en giltig API-nyckel
* API:et ska grunda sig på teorin kring "pragmatisk HATEOAS"
* API:et ska ha en tydlig och genomtänkt felhantering som tydligt visar för användaren eventuella felkoder och felmeddelanden
* API:et ska kunna kunna anropas på så sätt att man kan välja en "offset" och "limit" av resurser




**Ytterligare funktioner som kan implementeras (kan anses betyghöjande)**

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

##[Uppdatering] Hantering av applikation och användare (resursägare)##
Denna delen har varit vagt beskriven med vilje och implementationen är upp till dig att lösa. Här följer dock ett **litet förslag** efter några frågor jag fått.  

Tjänsten har en administratör(superuser) som kan logga in via ett webbgränssnitt (se ovan) och kan där hantera de registrerade applikationerna (API-nycklar).

Den i registreringformuläret registrerade applikationen får en giltig API-nykel som kan användas vid anrop och för spårbarhet hos API:et. Denna kan egentligen vem som helst skapa som vill bygga en klientapplikation kring API:et.

Användare/resursägare och deras “user credentials" kan skapas “manuellt”(rails console t.ex) tills vidare (även om det skulle kunna vara en feature att skapa dessa via API-anrop men det är inget krav enligt tjänsten). Vi kommer kanske ändra detta med en annan tjänsts OAuth-inloggning till klientdelen i kursen för att ta del av deras inloggning istället och koppla till våra users (även om det kommer bryta mot oberoendet mellan server/klient som ett RESTful API ger). 

Dock bör man lösa en implementation av API:et där både en klientapplikations (API_nyckel) och resursägaren (username/password alt. acces_token) bör kunna säkerställas vid förfrågor med “un-safe” methods. 

Hanteringen av resursägarnas "inloggning" kan man lösa på flera sätt:

* Bli en egen service provider i en 3-legged OAuth-implementation. 
* Använda någon form av 2-legged lösning för hanteringen av användaren. Studera hur de större aktörerna löser dessa delar via t.ex. en 2-legged OAuth. Eller gör en signerad lösning.
* HTTP Basic. Genom att använda HTTP-protokollet både för resursägare samt för API-nycklen. Dock får man fundera lite kring hur man gör denna implementation rent tekniskt men det lämnar jag till er.
