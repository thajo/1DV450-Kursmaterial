##Webbapplikation för API-nyckel

Till tjänsten ska en registreringsapplikation utvecklas där utvecklare (som vill använda ditt API) ska kunna få tillgång till en giltig API-nyckel som kan användas i API-anropen för samtliga resurser. 

Detta blir en webbapplikation som är fristående från själva API:et. 

Registreringsapplikationen bör bestå av ett enkelt formulär där utvecklaren registrerar sin applikation och det genereras en hashad API-nyckel som visas för användaren. 

Applikationsutvecklaren registrerar sig med en e-postadress och gärna lämplig information kring applikationen. En registrerad e-post kan endast ha en giltig API-nyckel. Den registerade applikationsutvecklaren ska kunna logga in i systemet och se/ta bort sin genererade API-nyckel.
Applikationen ska ha ett administratörskonto (OK att hårdkoda in) med rättigheter att kunna ta bort befintliga API-nycklar (revoke application). Vi behöver alltså även något sätt för en administratör att logga in och enkelt hantera API-nycklar.

För att sammanfatta de minimala kraven på denna webb-applikation:

* Registreringsformulär för en utvecklare där en giltig API-nyckel skapas vid registrering och sparas undan för att använda när man kontrollerar anrop till API:et
* Inloggning för en registrerad applikationsutvecklare att kunna se / ta bort sin nykel.
* Inloggningsformulär för en administratör
* En sida där den inloggade administratören kan ta bort(revoke) befintliga API-nycklar
* Applikationen ska versionhanteras via ett öppet repo på Github
* Applikationen ska fungera väl och det ska i repositoriet finnas en beskrivning hur man installerar och kör igång applikationen (ni kommer göra peer-reviews på varandras applikationer)
* Eventuella frågor kring registreringsapplikationen kan diskuteras under de schemalagda handledningspassen.
