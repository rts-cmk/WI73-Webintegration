<div style='text-align:right; width:100%'>Frank Goldmann August 2017</div>

# Modules 

_Modules er et helt grundlæggende begreb i en strukturel opbygning af webapplikationer i Nodejs._

Vi skal kigge på node_modules der installereres via npm og vi skal konstruere vores egne modules.

I sin enkelthed kan man sige at udvalgte variable, konstanter og funktioner lægges ud i selvstændige filer organiseret i mapper med sigende navne - dels for at organisere sin kode, og dels for at kunne genbruge den i applikationen og måske nye applikationer.
Det er enda muligt at få et module op på npm, men det ligger pt. udenfor pensum.

Vi skal kende til flg. 3 koder
* exports
    * _Bruges til at referere til én værdi eller funktion (value or function/method)_
* module.exports
    * _Bruges til en samling værdier og/eller funktioner_
* require
    * _Metode til at importere et modul_

Modules-js-filer lægges altså ud i mapper med sigende navne - her opretter vi blot modules for læringens skyld, så læg dem bare i en mapppe kaldet modules.

1. Opret en mappe kaldet modules
2. Opret i modules en fil kaldet disney.js
3. Opret flg. 3 med exports
```javascript
exports.firstname = "Anders";

exports.fullname = function () {
    return "Anders And";
}

exports.birthday = '01-07-1932';
```
Opret en server.js fil på roden og lad den med res.write sende data til klienten.
```javascript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const figur = require('./modules/disney');

http.createServer(function (req, res) {
    res.write(figur.fullname());
    res.write(figur.birthday);
    res.end();
}).listen(port, hostname);

console.log(`serveren kører på http://${hostname}:${port}/`);

```
Eksemplet vi lige har set var med exports - nu ser vi på module.exports.

module.exports er en samling variable og/eller funktioner som kommasepareres i et sæt krøllede parranteser med følgende syntaks vist på 3 måder - firstname en `const`, lastname en `function` og birthday en `fat arrow-function`
```javascript
module.exports = {
    firstname: "Mickey",
    lastname: function () {
        return "Mouse";
    },
    birthday: () => 1932
};
```
* Referencer
> Sitepoint: https://www.sitepoint.com/understanding-module-exports-exports-node-js/ <br>
> w3schools: https://www.w3schools.com/nodejs/nodejs_modules.asp<br>
> tutorialsteacher: http://www.tutorialsteacher.com/nodejs/nodejs-module-exports

* Øvelser
1. Omskriv, og anvend, mindst 3 selvvalgte øvelser fra opstartsugerne til modules

2. Analyser et npm module
    1. Installer NPM modulet fra https://www.npmjs.com/package/date-format så du efterfølgende får en package.json fil og mappen node_modules med date-format modulet.
    2.	Find en makker og kig modulets filer igennem. Notér 3 væsentlige observationer 

    3. Fremlæggelse i klassen
