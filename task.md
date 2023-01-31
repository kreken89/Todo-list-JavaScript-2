Instruktioner


Du ska i denna inlämningsuppgift med hjälp av Jsonplaceholder, HTML, CSS och JS skapa en todo(att göra lista) applikation. Du kan använda dig av css-bibliotek som tex bootstrap om du vill, för att snabbare kunna få fram en bra styling på sidan, men det är inget krav. Det är upp till dig hur du vill styla din sida.



Jsonplaceholder är ett gratis fake online REST API där vi kan hämta färdiga todos från en databas och även simulera en skrivning till samma databas. 

Adress till jsonplaceholder: https://jsonplaceholder.typicode.com/todos

 

 För godkänt ska du göra följande:

Använda Fetch när sidan laddas för att hämta hem todos från databasen till en lista som sedan ska visas på sidan
<!-- Skapa ett formulär med en text input och en knapp där användare kan lägga till en ny todo. Denna input ska valideras så att det inte går att lägga till en tom todo. -->
När den nya todon läggs till så ska du använda fetch för att göra en POST till databasen och sedan använda ditt response för att lägga till todon i listan.
<!-- Det ska även skrivas ut en text som talar om för användaren vad som blivit fel om ingen text har skrivits in. -->
Det ska gå att ta bort en todo från listan och du ska även göra en DELETE mot databasen då.
 

 För väl godkänt ska du göra följande:

<!-- Förutom det som ingår i godkänt ska du även göra så att man kan klarmarkera en todo och visa tydligt att denna är färdig genom att ändra styling på den. Det ska även gå att ändra tillbaka till ”oklar” om det är så att man kanske tryckte fel. -->

Todos som är "klara" när de hämtas från databasen skall även dessa få samma styling.

Det ska inte gå att ta bort en todo om den inte är klarmarkerad. Om man ändå försöker ta bort en todo så skall en modal (popup) visas istället med en text som förklarar varför det inte går. Denna få inte vara en vanlig alert()

Du ska även begränsa hämtningen av antal todos från databasen när sidan laddas till 7 stycken med hjälp av en URL query.




Inlämning av uppgiften


Inlämningen sker genom att du skriver en kommentar med din github-länk till ditt projekt här under inlämningen. 

VIKTIGT! Se till att din github-länk faktiskt fungerar och att det finns innehåll på din repository.