## Publicering av Ruby on Rails
I denna guide kommer vi gå igenom lite olika steg man behäver göra för att publicera sin webbapplikation. I guiden kommer vi utgå från VPS-tänsten digitalocean.com. En tjänst som under en viss tid ingår i [github student-pack](https://education.github.com/pack). 


## Skapa en webbserver med stöd för Ruby on Rails
Vi kommer som sagt i denna guide utgå från tjänsten digitalocean.com där man har möjlighet att skapa så kallade droplets. En droplet kan jämföras med en virtuell maskin i molnet som vi kan använda som t.ex. webbservern. För att skapa en produktionsfärdig RoR-server finns en färdig mall som ger dig via några klick en i stort sätt färdig miljö för din applikation.

För att skapa en droplet enligt denna mall följer du bara följande guide:
[https://www.digitalocean.com/community/tutorials/how-to-use-the-1-click-ruby-on-rails-on-ubuntu-14-04-image](https://www.digitalocean.com/community/tutorials/how-to-use-the-1-click-ruby-on-rails-on-ubuntu-14-04-image)

Du kommer då få en webbservern med webbservern nginx och applikationsservern unicorn installerad och kan på ett bra sätt drifta din applikation. Du får också en förinstallerad mysql-server som du kan använda som databashanterare. Naturligtvis går det att använda SQLite3 om man vill men det är inget som rekommenderas i produktionsmiljö.

## Skicka över dina filer till webbservern
När du följt guiden ovan och startat igång din droplet så måste du ju föra över dina applikationsfiler till servern. Som det beskrivs i guiden finns en ssh-server installerad i paketet vilket vi kan använda för säker filöverföring (ssh/ftps är en säkrare variant av ftp vad gäller filöverföring).. Har du dina filer lokalt kan du använda ett vanligt filöverföringsprogram så som t.ex. filezilla för att föra överfilerna. Uppgifter för inloggning bör du ha fått när du skapat och loggat in på din droplet för första gången.

Arbetar du via nitrous.io och vill använda filezilla för att ladda upp filerna till webbservern måste du installera och köra synkroneringsapplikationen som synkroniserar dian filer lokalt från nitrous (ungefär som dropbox). Då har du dina applikation lokalt på din egen dator och kan skicka upp den via din SSH-klient. Du kan ladda ner programmet här: [https://www.nitrous.io/desktop](https://www.nitrous.io/desktop)

### Pusha upp filer till webbservern via git
Vill man kan man också använda git för att pusha upp sian filer till servern. Eftersom vår droplet är en ubuntu-maskin där vi har rättigheter att installera vad vi vill kan vi såklart installera git och använda git för att push upp filerna (precis på samma sätt som vi gör mot GitHub). Detta kräver lite mer inställningar på servern men finns bra beskrivet i denna guide:
[https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps).

Då git inte lär vara installerat på servern från början bör du göra det innan du följer guiden med två enkla kommando i terminalen (på din droplet såklart!)

```
apt-get update
apt-get install git
```
Om du följer guiden ser du att du på din lokala maskin behöver lägga till en koppling till din droplet för att kunna ha två olika "remotes" att pusha till. Vanlig koduppdatering till GitHub och publicering till din droplet/webbserver. Har du gjort rätt kommer dina pushningar till dropleten kopieras över till din applikationsmapp och ligga redo för din applikation.

Du kommer förmodligen få använda det lösenord du fått till din droplet. Vill du slipp alösenord kan du ställa in uppkopplingen med hjälp av SSH-nycklar. Det är dock något som går utanför denna guide. Det finns dock gott om hjälp att läsa in för att få det att fungera.

## Få applikationen att fungera i produktionsläge
Det räcker dock inte att bara flytta över sin applikation för att få den i produktionsläge utan det finns vissa saker man måste göra. Detta är allså något man gör när applikationen är vältestad och klar för release.

### Problem med filer som innehåller hemliga nycklar
Skickar man över sina filer via git finns en stor risk att applikationen inte skickar med filerna "config/secrets.yml" och "config/initializers/secret_token.rb" vilket kan göra att applikationen inte fungerar. Detta få rman då göra manuellt.

Man kan också få fel på att "config/secrets.yml" i produktionsläge inte får någon "secret_key_base". Tittar man i denna fil ser man att man där istället försöker läsa in en så kallad miljövariabel. Den lär dock inte vara stt på servern så för att lösa detta kan man lägga in en egen nyckel. Antingen kopiera från test eller development eller skapa en ny (http://www.jamesbadger.ca/2012/12/18/generate-new-secret-token/). Detta gör man alltså manuellt på webbservern.

### Migrera databasen för produktion
I produktionsläge vill vi undvika att köra SQLite3 som databashanterare och eftersom digital ocean automatiskt ger oss en mysql bör vi kunna använda den. Det finns två saker vi då måste göra.
1. Lägg till gem "mysql2" i din Gemfile och kör "bundle install"
2. i filen config/database.yml lägger du på inställningarna i produktionsläge:
	production:
	  adapter: mysql2
	  encoding: utf8
	  database: rails
	  username: rails
	  password: *lösenord här*
	  host: 127.0.0.1
	  port: 3306

Därefter måste vi såklart köra en migrering på alla våra migreringsfiler

´´´
rake db:migrate RAILS_ENV=production
´´´
Detta kör migreringen till produktionsdatabasen. Du kan nu också köra in eventuella seeds.

###Kompilera alla statiska filer
Försöker man nu köra sidan kommer man förmodligen få fel sökvägar till sina assets. Vi måste även se till att dessa förkompileras så att vi kan använda dessa som det är tänkt i produktionsläge.

´´´
rake assets:precompile RAILS_ENV=production
´´´

Detta tar mycket resurser att göra om man t.ex. har större bibliotek så som bootstrap installerat. Det kan till och med vara som så att har man en lite server kan minnet ta slut. Då finns ett enkelt trick för att fixa detta på en linuxmaskin, nämligen att skapa en swapfil som utökar arbetsminnet. Digital Ocean har en guide över detta:
https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04

### Startar om servern och testa
Det brukar vara idé att starta om servern efter man gjort alla stegen för att ladda om applikationen:
´´´
service unicorn restart
´´´

Testa sedan applikationen genom att skriva in ip-nummret till den (om du inte bundigt något domännamn till din droplet)