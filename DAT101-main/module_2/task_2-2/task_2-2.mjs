"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const result = 2 + 3 * (2 - 4) * 6;
printOut("2 + 3 * 2 - 4 * 6 = " + result.toString());
const result2 = "2 + 3 * (2 - 4) * 6;"
printOut ("Parantesen ble satt:" + result2.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meters =25.34;
const mmInInch = 25.4;
const MetersToMm = 1000;
const answer = (meters * MetersToMm) / mmInInch;
const exactAwnser = answer.toFixed (2);
printOut("svaret er " + exactAwnser.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const hoursInMinutes = 12 * 60;
const minutes = 14; // Definerer riktig variabel 'minutes'
const secondsInminutes = 45 / 60; 
const totalMinutes = 3 * 24 * 60 + hoursInMinutes + minutes + secondsInminutes;
printOut("Total minutter: " + totalMinutes.toString());
printOut(newLine);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalMinutes2 = 6322.52;
const days2 = Math.floor(totalMinutes2 / (24 * 60));
const remainingMinutes2 = totalMinutes2 % (24 * 60);
const hours2 = Math.floor(remainingMinutes2 / 60);
const minutes2 = Math.floor(remainingMinutes2 % 60);
const seconds2 = Math.floor((remainingMinutes2 % 1) * 60);
printOut(days2 + " dager, " + hours2 + " timer, " + minutes2 + " minutter, " + seconds2 + " sekunder.");
printOut(newLine);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const nokToUsdRate = 8.6 / 76;
const usdToNokRate = 76 / 8.6;
const dollars = 54;
const nok = Math.round(dollars * usdToNokRate);
const usd = Math.round(nok / usdToNokRate);
printOut("54 dollars til NOK: " + nok + " NOK.");
printOut(nok + " NOK til dollars: " + usd + " USD.");
printOut(newLine);
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "There is much between heaven and earth that we do not understand.";
printOut("Antall tegn: " + text.length);
printOut("Tegn på posisjon 19: " + text.charAt(19));
printOut("Tegn fra posisjon 35 og 8 tegn framover: " + text.substring(35, 35 + 8));
printOut(newLine);


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Er 5 større enn 3? " + (5 > 3)); // true
printOut("Er 7 større enn eller lik 7? " + (7 >= 7)); // true
printOut("Er 'a' større enn 'b'? " + ('a' > 'b')); // false
printOut("Er '1' mindre enn 'a'? " + ('1' < 'a')); // true (ASCII-verdi sammenligning)
printOut("Er '2500' mindre enn 'abcd'? " + ('2500' < 'abcd')); // true
printOut("'arne' er ikke lik 'thomas': " + ('arne' !== 'thomas')); // true
printOut("Er (2 lik 5)? " + (2 == 5)); // false
printOut("Er 'abcd' større enn 'bcd'? " + !('abcd' > 'bcd')); // true (fordi vi bruker '!' for å snu erdien)
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const num1 = parseInt("254");
printOut("Konvertert fra tekst '254' til tall: " + num1);

const num2 = parseFloat("57.23");
printOut("Konvertert fra tekst '57.23' til tall: " + num2);

const num3 = parseInt("25 kroner");
printOut("Konvertert fra tekst '25 kroner' til tall: " + num3);
printOut("Veldig usikker på om dette er det du mener med oppgaven! men jeg gjorde mitt beste ut i fra hva jeg lærte men får ikke til å bare få nr :)!");
printOut(newLine);  

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1;
printOut("Tilfeldig generert tall (r) fra 1 til 360: " + r);
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const days = totalDays % 7;
printOut(totalDays + " dager er " + weeks + " uker og " + days + " dager.");
printOut("Replace this with you answer!");
printOut(newLine);
git add task_2-2.html task_2-2.mjs
git commit -m "Updated task_2-2 with changes to HTML and JS"
git push origin main
