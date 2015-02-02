## Publicering av Ruby on Rails
I denna guide kommer vi gå igenom lite olika steg man behäver göra för att publicera sin webbapplikation. I guiden kommer vi utgå från VPS-tänsten digitalocean.com. En tjänst som under en viss tid ingår i [github student-pack](https://education.github.com/pack). 


## Skapa en webbserver med stöd för Ruby on Rails
Vi kommer som sagt i denna guide utgå från tjänsten digitalocean.com där man har möjlighet att skapa så kallade droplets. En droplet kan jämföras med en virtuell maskin i molnet som vi kan använda som t.ex. webbservern. För att skapa en produktionsfärdig RoR-server finns en färdig mall som ger dig via några klick en i stort sätt färdig miljö för din applikation.

För att skapa en droplet enligt denna mall följer du bara följande guide:
[https://www.digitalocean.com/community/tutorials/how-to-use-the-1-click-ruby-on-rails-on-ubuntu-14-04-image](https://www.digitalocean.com/community/tutorials/how-to-use-the-1-click-ruby-on-rails-on-ubuntu-14-04-image)

Du kommer då få en webbservern med webbservern nginx och applikationsservern unicorn installerad och kan på ett bra sätt drifta din applikation. Du får också en förinstallerad mysql-server som du kan använda som databashanterare. Naturligtvis går det att använda SQLite3 om man vill men det är inget som rekommenderas i produktionsmiljö.
