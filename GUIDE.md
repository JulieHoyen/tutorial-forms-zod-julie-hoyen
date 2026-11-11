# Opgaven

I denne opgave skal du oprette en server action i filen `src/actions/action.js`.

Se dokumentationen her for inspiration:
https://nextjs.org/docs/13/app/api-reference/functions/server-actions#with-client-components

## Instruktioner

1. Sæt `"use server"` i toppen af filen `src/actions/action.js`
2. Opret en server action med navnet `postRecipe`
3. Brug formData til at Hente værdien fra input-feltet, der indeholder opskriftens navn
4. Udskriv værdien i konsollen med `console.log()`
5. Importer din server actionen i dit client-komponent (RecipeForm)
6. Knyt server actionen til formularen med proppen formAction
7. Submit formularen og observer resultatet i terminalen

## Vigtigt

Det er vigtigt at forstå, at server actions kører på serveren. Derfor vises `console.log()`-beskeden i terminalen, ikke i browserens udviklerværktøj.

Formålet med øvelsen er, at den studerende lærer at:

- oprette en server action i en separat fil
- arbejde med `formData`
- få adgang til værdien fra et input-felt
- bruge `console.log()` til at verificere, at data bliver modtaget korrekt

Når brugeren klikker på submit:

- formularen sender data til server actionen
- server actionen læser værdien af opskriftens navn
- værdien udskrives i terminalen

Dette er første trin i at arbejde med server-side håndtering af form data i Next.js.
