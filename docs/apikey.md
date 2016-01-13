##Webbapplikation för API-nyckel

Till tjänsten ska en registreringsapplikation utvecklas där utvecklare (som vill använda ditt API) ska kunna få tillgång till giltig API-nyckel/nycklar som kan användas i API-anropen för samtliga resurser. 

Registreringsapplikationen bör bestå av ett enkelt formulär där utvecklaren registrerar sin applikation och det genereras en API-nyckel som visas för användaren. 

Applikationsutvecklaren registrerar sig på webbplatsen och kan då registrera en eller flera applikationen och på så sätt få en eller flera PI-nycklar. Den registerade applikationsutvecklaren ska kunna logga in i systemet och se/ta bort sina applikationer (och således  API-nyckelar).
Applikationen ska ha ett administratörskonto (OK att hårdkoda in dennes inloggningsuppgifter) med rättigheter att kunna ta bort befintliga applikationer (revoke application).

För att sammanfatta de minimala kraven på denna webb-applikation:

* Registreringsformulär för utvecklare som vill använda vårt API
* En inloggad utvecklare ska kunna registrera en eller flera applikationer och därmed få tillgång till en eller flera API-nycklar
* En inloggad utvecklare ska kunna se / ta bort sina applikationer (och därmed API-nyklar).
* Möjlighet att logga in med adminstratörsrättigheter
* En sida där den inloggade administratören kan ta bort(revoke) befintliga applikationer
* Applikationen ska versionhanteras via ett repo på Github
* Applikationen ska fungera väl och det ska i repositoriet finnas en beskrivning hur man installerar och kör igång applikationen (ni kommer göra peer-reviews på varandras applikationer)
