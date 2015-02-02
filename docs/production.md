## Publicering av Ruby on Rails
I denna guide kommer vi gå igenom lite olika steg man behäver göra för att publicera sin webbapplikation. I guiden kommer vi utgå från VPS-tänsten digitalocean.com. En tjänst som under en viss tid ingår i [github student-pack](https://education.github.com/pack). 


## Skapa en webbserver med stöd för Ruby on Rails
Vi kommer som sagt i denna guide utgå från tjänsten digitalocean.com där man har möjlighet att skapa så kallade droplets. En droplet kan jämföras med en virtuell maskin i molnet som vi kan använda som t.ex. webbservern. För att skapa en produktionsfärdig RoR-server finns en färdig mall som ger dig via några klick en i stort sätt färdig miljö för din applikation.

För att skapa en droplet enligt denna mall följer du bara följande guide:
[https://www.digitalocean.com/community/tutorials/how-to-use-the-1-click-ruby-on-rails-on-ubuntu-14-04-image](https://www.digitalocean.com/community/tutorials/how-to-use-the-1-click-ruby-on-rails-on-ubuntu-14-04-image)

Du kommer då få en webbservern med webbservern nginx och applikationsservern unicorn installerad och kan på ett bra sätt drifta din applikation. Du får också en förinstallerad mysql-server som du kan använda som databashanterare. Naturligtvis går det att använda SQLite3 om man vill men det är inget som rekommenderas i produktionsmiljö.

## Skicka över dina filer till webbservern
När du följt guiden ovan och startat igång din droplet så måste du ju föra över dina applikationsfiler till servern. Som det beskrivs i guiden finns en ssh-server installerad i paketet vilket vi kan använda för säker filöverföring (ssh är en säkrare variant av ftp vad gäller filöverföring).. Har du dina filer lokalt kan du använda ett vanligt filöverföringsprogram så som t.ex. filezilla för att föra överfilerna. Uppgifter för inloggning bör du ha fått när du skapat och loggat in på din droplet för första gången.

Arbetar du via nitrous.io och vill använda filezilla för att ladda upp filerna till webbservern måste du installera och köra synkroneringsapplikationen som synkroniserar dian filer lokalt från nitrous (ungefär som dropbox). Då har du dina applikation lokalt på din egen dator och kan skicka upp den via din SSH-klient. Du kan ladda ner programmet här: [https://www.nitrous.io/desktop](https://www.nitrous.io/desktop)

### Pusha upp filer till webbservern via git
Vill man kan man också använda git för att pusha upp sian filer till servern. Eftersom vår droplet är en ubuntu-maskin där vi har rättigheter att installera vad vi vill kan vi såklart installera git och använda git för att push upp filerna (precis på samma sätt som vi gör mot GitHub). Detta kräver lite mer inställningar på servern men finns bra beskrivet i denna guide:
[https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps).

Då git inte lär vara installerat på servern från början bör du göra det innan du följer guiden med två enkla kommando i terminalen (på din droplet såklart!)

´´´
apt-get update
apt-get install git
´´´
Om du följer guiden ser du att du på din lokala maskin behöver lägga till en koppling till din droplet för att kunna ha två olika "remotes" att pusha till. Vanlig koduppdatering till GitHub och publicering till din droplet/webbserver. Har du gjort rätt kommer dina pushningar till dropleten kopieras över till din applikationsmapp och ligga redo för din applikation.
