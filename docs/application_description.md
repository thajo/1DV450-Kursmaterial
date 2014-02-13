##Introduktion##
Under denna kurs ska vi utveckla ett webb-API som stödjer sig på en RESTful arkitektur. Till detta API ska det sedan byggas en tilltalande klientapplikation (SPA). Här nedan följer en beskrivning av ett förslag på en tjänst som kursens moment kan byggas kring. **Egna idéer kring andra tjänster/API:er uppskattas givetvis** så länge de har likvärdig omfattning som tjänsten som beskrivs i detta dokument. Kontakta kursansvarig om du har en idé till egen tjänst du vill utveckla under kursens gång för en diskussion kring detta.

##Förslag på tjänst (TOERH - The Open Education Resource Handler)##
Målgruppen till denna tjänst är främst lärare och utbildare som använder sig av öppna digitala lärresurser i sin undervisning, [OER](http://en.wikipedia.org/wiki/Open_educational_resources). Detta kan vara bilder, videoklipp, artiklar, blogginlägg, exempelkod m.m. som kan tänkas länkas in som lärresurser i en kurs. Tjänsten är tänkt att samla liknande resurser för ett kollegium.

Tjänsten är tänkt att användas för att samla länkar och beskrivningar till av kollegiet insamlade resurslänkar. Användaren av tjänsten vill ha information om följande delar kring en resurs:

* Lämpligt namn på resursern
* En utförlig beskrivning av resursen
* URL till resursen
* Vad resursen har för typ av licens - Är det Creative Commons (finns olika nivåer), GNU, MIT o.s.v.
* Vad resursen är för typ (bild, video....)
* Hur är resursen taggad? En resurs kan har flera taggar som i ett ord kategoriserar resursen.
* Information om när resursen lagts till
* Information om vem som lagt till resursen


Användaren av tjänsten vill bl. a. kunna göra följande:

* Läsa ut resurser, resurstyper, taggar, licenstyper, användare
* Söka resurser
* Filtrera resurser med avseende på:
	* Resurstyp (få ut alla resurser av en specifik resurstyp)
	* Tagg
	* Vem som skapade resursen
	* Licenstyp
* Logga in och därmed posta nya resurser, ändra sina befintliga resurser, ta bort sina befintliga resurser


Tjänsten ska innehålla/kunna hantera:

* Oändigt antal resurser (hårdvara kan sätta såklart stopp men inte tjänstens arkitektur) 
* Oändligt antal användare
* Välutformat API-dokumentation riktad till andra utvecklare som vill använda ditt API.


Här följer ett förslag på en modell som skulle kunna gälla för denna typ av tjänt. Observera att denna modell inte på något sätt är komplett vad gäller den data som ska sparas. Man är fri att modifiera och bygga ut modellen om man har idéer om ytterligare funktionallitet i tjänsten.

![Bild av datamodell](https://raw.github.com/thajo/1DV450-Kursmaterial/master/docs/db.png)

Eventuella frågeställningar kring tjänsten tas upp under de schemalagda handledningspassen.


