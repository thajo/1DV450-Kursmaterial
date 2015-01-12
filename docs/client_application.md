##Introduktion till uppgiften - Klientapplikation via AngularJS##
I förra uppgiften skapade vi ett webb-API som nu förhoppningsvis är redo för användning. Det är nu du ska använda ditt API för att att skapa en webbaserad klientapplikation som genom asynkrona anrop jobbar mot ditt API.

Uppgiften kan innebära vissa förändingar i ditt API och dess datamodell och ditt tidigare utvecklade API. Det är alltså helt OK att göra förändningar i sitt API även under detta steg.


##Krav på applikationen##

Klientapplikationen ska vara skriven i angularJS och använda asynkrona anrop mot ditt tidigare skrivna API.

Applikationen ska kunna bistå sin användare med följande:

* Möjlighet att på ett genomtänkt och överskådligt sätt visa tjänstens alla resurser (tänk på att det kan finnas obegränsat antal - Vi kan inte visa alla på en gång). Någon form av karttjänst bör användas.

* Möjlighet att kunna söka specifika resurser i tjänsten genom sökord

* Möjlighet att kunna filtrera ut resurser beroende på vald tagg, och resursägare

* Möjlighet att autentisera (logga in) användare/resursägare så att dessa kan skapa/ändra och ta bort egna resurser.

* Användaren ska hela tiden veta vad som pågår i applikationen med hjälp av tydliga meddelanden och uppdatering av gränssnitt

* Minst en "custom directives" och ett "custom filter" ska vara implementerat.

* Webbapplikationen ska ha en genomarbetad design och vara responsiv. Ett css-ramverk så som bootstrap eller foundation ska användas.

* Gränssnittet ska vara utformat på sådant sätt att man intuitivt förstår hur applikationen fungerar.

* Applikationen ska bete sig som en Single Page Application

* Webbläsarens bakåt- och framåtknappar ska fungera som på en "vanlig" webbsida

* Du ska i en readme-fil tydligt reflektera över eventuella förändringar du gjort i ditt API under tiden du byggde klientapplikationen.

* Du ska var nogrann med att också dokumentera eventuella saker som personen som kör en peer-review på ditt projekt behöver veta. ALLA STEG i hur man får igång applikationerna!


**Extra funktioner som kan anses betygshöjande

* Du sköter inloggning på annat sätt än HTTP Basic
* Skriv din applikation med tillhörande testfall med god “code coverage”
* Implementera en cache-strategi på klienten
* Full responsiv applikation med genomarbetad design
* Ytterligare applikationsmässiga funktioner som höjer upplevelsen


