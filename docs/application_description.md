##Positioneringstjänst

I denna kurs kommer vi jobba med en och samma tjänst genom hela kursen. Tanken är att ni ska bygga någon typ av positioneringstjänst. Vad för typ är du fri att välja men någon form av tjänst som kopplar händelser med en position. Förslag på olika typer av specificerade tjänster kan vara:

* Evenemangshanterings tjänst som visar olika evenemang 
* Sportfisketjänst med fångstrapporter kopplat till position
* Turistinformationskarta
* Cafékarta
* Platsberättelser, en tjänst där personer kan lägga till berättelser om olika platser

Kort sagt ska du utgå från vissa mindre krav på din tjänst och sedan har du möjlighet att utveckla något eget under denna kurs. Tanken är att du ska skriva ett fullfjädrat webb-API med hjälp av backend-teknik samt sedan bygga en SPA-applikation som använder sig av detta API. Utöver detta ska du även skriva en mindre applikation där utvecklare kan begära ut en API-nyckel för att använda ditt API.

Tjänsten ska kunna hantera händelser/platsbeskrivning med en specifik position (longitude/latitude) knuten till sig. Varje händelse är skapad av en användare som har identifierat sig på tjänsten. Varje händelse/platsbeskrivning kan också taggas med en eller flera taggar som hjälper till att kategorisera informationen i tjänsten. Ett (ej fullständigt) förslag på datamodell skulle kunna se ut som följer:

![Bild av datamodell](https://raw.github.com/thajo/1DV450-Kursmaterial/master/docs/db.png)

Utöver denna modell är du fri att göra egna implementeringar som specificerar just din applikation. Se denna som en absolut minsta krav för komplexibiliteten i applikationen. Tjänsten ska som minst ha stöd för följande:

* I tjänsten ska en användare kunna logga in och lägga till, uppdatera och ta bort händelser/platsbeskrivningar. Denna del kommer kräva någon form av autentisering och auktorisering.
* En registrerad användare som kan skapa händelser kan också skapa egna taggar för dessa händelser.
* En användare av tjänsten ska kunna lista ut de tillagda händelserna sorterat på datum de lagts till.
* En användare ska kunna lista ut händelser tillhörande en speciell resursägare och/eller en speciell tagg.
* En användare av tjänsten ska kunna lista händelser i närheten av en angiven position

Tjänsten ska innehålla/kunna hantera:
* Oändigt antal resurser och användare (hårdvara kan sätta så klart stopp men inte tjänstens arkitektur)
* Välutformat API-dokumentation riktad till andra utvecklare som vill använda ditt API.
* Arbetets gång ska tydligt dokumenteras med tydliga commitmeddelanden i tjänstens repositorie på github.

##Tjänstens tre delar
Hela tjänsten kommer delas upp i tre efter varandra följande delar;

* En applikation där en utvecklare kan registrera sin applikation och efterfråga efter en API-nyckel för att kunna ställa frågor.

* Ett backend bestående av ett RESTful webb-API som hanterar all data som hanteras av tjänsten. Detta API ska utvecklas i Ruby on Rails.

* En Single Page Application (SPA) som klientapplikation och gränssnitt mot tjänsten.

Eventuella frågeställningar kring tjänsten tas upp under de schemalagda handledningspassen.
