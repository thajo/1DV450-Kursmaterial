##Introduktion##
I denna kurs kommer vi jobba med dels ett webbramverk som fokuceras på back-end och dels ett javascriptramverk som fokuceras på front-end. 
Som utgångspunkt för backend kommer vi i år använda Ruby on Rails vilket kursen kommer fokucera på. 


##Utvecklingsmiljö##
Du är helt fri att välja din egen utvecklingsmiljö. Du har säkert redan hittat din favoriteditor. Många rekommenderar att använda editorn [RubyMine](https://www.jetbrains.com/ruby/) till Ruby on Rails och [WebStorm](https://www.jetbrains.com/webstorm/) till javascriptutvecklingen. Som student har man möjlighet att få en gratis version genom att efterfråga detta här [https://www.jetbrains.com/student/](https://www.jetbrains.com/student/)

Problemet med ruby on rails, åtminstone för er som använder Windows, är att det av många beskrivits som bökigt att installera och använda på sin egna dator. Därför kan en helt cloud-baserad lösning rekommenderas där man kan köra RoR samt ha ett webbaserat IDE. Tjänster så som [https://www.c9.io/](https://www.c9.io) har tidigare använts v studenter i denna kurs och fungerat. Det ska där finns möjlighet att köra en gratisversion som duger gott till utvecklingen i denna kurs. Tjänsten ska också ha integrering till github samt en möjlighet att synka ner kodutvecklingen lokalt till sin favoriteditor. Väl värt att undersöka.

Jag skulle dock rekommendera att använda en virtuell miljö så som vagrant att köra sin ruby on rails-installation på. Söker man runt på nätet på "vagrant ruby on rails" hittar man guider för hur man sätter ihop sin egna vagrant-fil för att skapa och installera en färdig server. Kanske kan det vara värt att lägga någon timme på att få lite förståelse för vagrant. En bra utgångspunkt kan vara denna artikel: https://gorails.com/guides/using-vagrant-for-rails-development

Vill man gå genvägen kan man använda en färdig vagrant-fil: https://github.com/thajo/ruby-on-rails-vagrant. Mer information finns i readme.md. En kortare film om hur man kan använda denna finns också på: http://orion.lnu.se/pub/education/course/1DV450/vt16/vagrantup.mp4


Om du trots allt väljer att installera Ruby on Rails på ditt eget system rekommenderar jag att följa guiderna på [http://railsapps.github.io/installing-rails.html](http://railsapps.github.io/installing-rails.html).


##Github
Som vanligt ska all din kod commitas upp till ett github-repositorie som du delar med kursens användare "1DV450". Jag utgår från att du har full koll på hur github och delning av konton fungerar sedan tidigare. Annars finns denna hjälp att tillgå: [http://coursepress.lnu.se/info](http://coursepress.lnu.se/info)


##Datorsalarna på campus##
Då allt fler av campusstunderna har egna bärbara datorer kommer det inte i denna kurs finnas någon specialanpassad utvecklingsmiljö installerad i salarna. Det finns dock möjlighet att köra vagrant i salarna. 
