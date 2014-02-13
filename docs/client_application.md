##Introduktion till uppgiften - Klientapplikation via AngularJS##
I förra uppgiften skapade vi ett restful webb-API som förhoppningsvis är redo för användning. Det är nu du får använda ditt API för att att skapa en webbaserad klientapplikation som genom asynkrona anrop anropar ditt API.

Uppgiften kan innebära vissa förändingar i din datamodell och ditt tidigare utvecklade API.


## Hantering av användare ##
En av fördelarna med att bygga ett RESTful API är att vi har ett stort oberoende mellan serv- och klientapplikation. Vi kommer kanske bryta det oberoendet genom att nu låta kientapplikationen logga in via githubs OAuth-lösning och därmed låta github ta hand om själva autensieringen av användarna via klientapplikationen och använda detta i vårt API.

Det kommer förmodligen innebära vissa förändringar i din datamodell till din användarhantering vilket tack och lov kan underlättas med migreringsmöjligheten som finns i Ruby On Rails. Github har en möjlighet att logga in användare via en 3-legged OAuth2.0. Detta ger oss möjlighet att på serversidan (webb-API:et) få reda på användaruppgifter från github och använda dessa i ditt API och aktorisera användarna av ditt API.

Du kan via github (och användarens tillstånd) läsa ut ett användarid samt användaruppgifter för att lagra dessa. Var dock noga med att inte spara dubletter av användare samt att en användare kan andra vissa uppgifter på sitt github-konto som då också bör ändras i din lagring (någon form av userID borde dock alltid vara konstant). OAuth-inloggningen borde också ge dig någon form av token med vilken du kan identifiera användarens anrop med för att kunna avgöra om denne har tillgång till resurserna i tjänsten.
Jag kan rekommendera att undersöka gem:et [OmniAuth](https://github.com/intridea/omniauth) samt denna [railscast](http://railscasts.com/episodes/241-simple-omniauth) för att göra din implemntation kring detta.

##Krav på applikationen##

* Inloggningen av användare ska nu istället ske via github via deras OAuth-inloggning. (Se punkt nedan)
* Klientapplikationen ska vara skriven i angularJS och använda asynkrona anrop mot ditt tidigare skrivna API.
* Anropen mot en OAuth provider behöver ej vara asynkront.
* Applikationen ska kunna bistå sin användare med följande:
	* Möjlighet att logga in med sina github uppgifter
	* Möjlighet att på ett genomtänkt och överskådligt sätt lista tjänstens alla resurser
	* Möjlighet att kunna söka specifika resurser i tjänsten genom sökord
	* Möjlighet att kunna filtrera ut resurser beroende på vald tagg, resurstyp, licens och användare
* Användaren ska hela tiden veta vad som pågår i applikationen med hjälp av tydliga meddelanden och uppdatering av gränssnitt
* Webbapplikationen ska ha en genomarbetad design och vara responsiv. Ett css-ramverk så som bootstrap eller foundation ska användas
* Gränssnittet ska vara utformat på sådant sätt att man enkelt förstår hur applikationen fungerar 
* Koden ska publiceras på github på ditt repositorie som är kopplat till kursen
