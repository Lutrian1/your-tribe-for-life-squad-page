# TEAM: Sikje - Onze README

## Project Omschrijving

Onze opdracht was om een squadpage te bouwen in een nieuw framework genaamd sveltekit. In dit project moesten wij data dynamisch renderen uit onze 'directus' database door middle van API calls en hierop filters toe te passen. Ook moesten we een aantal animaties verwerken en leerden we meer te werken met code conventies, die wij [hier](https://github.com/Lutrian1/your-tribe-for-life-squad-page/blob/main/CONTRIBUTING.MD#afspraken-over-samenwerking) hebben beschreven. Daarnaast hebben we ook een nieuw ontwerp gemaakt, waarover hieronder meer informatie staat.

## Ontwerpkeuzes

Om te beginnen met de opdracht, zijn we bij elkaar gaan zitten, en gaven we elkaar 2 uur om een design te maken, en 1 uur om dit dan te refactoren. Dit hebben we gedaan in figma. We zijn begonnen met een moodboard. Om zo wat inspiratie op te wekken:

<img width="553" height="389" alt="image" src="https://github.com/user-attachments/assets/b89227fd-5812-4608-879f-6f6e70d3a080" />

Vervolgens hebben we designs gemaakt en kwamen we tot deze iteratie:

<img width="549" height="715" alt="image" src="https://github.com/user-attachments/assets/d84838e6-d6b0-49b6-81a0-962fc34de336" />

Dit hebben wij onderverdeeld in componenten:

<img width="509" height="486" alt="image" src="https://github.com/user-attachments/assets/bd9a85bf-3db0-45aa-9455-bc01571d4f59" />

### Belangrijke punten van ons ontwerp

1. Het volgt de kleuren van de herfst.
2. Logo gemaakt uit ons team naam.
3. Scribble feeling, met animaties die dit ondersteunen.
4. Carousel op 'Ons-Team'
5. Componenten gemaakt voor de pagina's, die we dan ook als componenten aanmaakte in ons project om zo het project eerlijk te verdelen, en goed in te schatten wie waar me bezig zal zijn en kan doen. De mappen vind je [hier](https://github.com/Lutrian1/your-tribe-for-life-squad-page/tree/main/src/lib/components), deze renderen we dan in de [homepage](https://github.com/Lutrian1/your-tribe-for-life-squad-page/blob/main/src/routes/%2Bpage.svelte).

### DESIGN:

<img width="1865" height="908" alt="image" src="https://github.com/user-attachments/assets/9f89cb23-f02c-45e0-be68-bad3d5b24fd2" />
<img width="1827" height="666" alt="image" src="https://github.com/user-attachments/assets/b29ab0a3-b1ef-4048-b276-5d6f31865d1b" />
<img width="1867" height="911" alt="image" src="https://github.com/user-attachments/assets/f69a95b4-7662-4587-916f-c5029be79c48" />

### ANIMATIES:

1. Scribble die de pagina onthult.
2. Bladeren die bewegen tijdens scrollen
3. Hover op de klassen navigatie die toont dat je naar een andere pagina gaat.
4. Zijwaartse slide-in op squadpage kaarten.

https://github.com/user-attachments/assets/9c7362bb-b54d-4a78-af47-ec0f3b99f920

## Aantal Extra Kenmerken

### 404:

Wanneer je een niet kloppende link intypt ga je naar de 404 pagina:

<img width="1873" height="905" alt="image" src="https://github.com/user-attachments/assets/ae466c06-f586-4a9c-9d2f-55c077698c66" />

Deze pagina staat in een [slug] map die [hier](https://github.com/Lutrian1/your-tribe-for-life-squad-page/blob/main/src/routes/blog/%5Bslug%5D/%2Bpage.server.js#L1-L14) te vinden is, sveltekit zelf voert foutmeldingen af. Echter om een custom pagina te renderen tijdens een van deze fout meldingen, zijn extra stappen voor nodig. Een beschrijving hierover staat [hier](https://svelte.dev/docs/kit/errors), deze documentatie is van sveltekit zelf, en is ook toegepast in het project. De 404 pagina staat [hier](https://github.com/Lutrian1/your-tribe-for-life-squad-page/blob/main/src/routes/%2Berror.svelte), deze moet +error genoemd worden, om zo de pagina te renderen bij een foutmelding.

### Componenten:

Onze pagina is onder verdeeld in componenten. Deze componenten renderen we in onze homepage:

https://github.com/Lutrian1/your-tribe-for-life-squad-page/blob/5ac339019755157dc5fcafe996caaa576c4e1873/src/routes/%2Bpage.svelte#L1C1-L32C23

### DATA Renderen:

Voor elke losse pagina word een een page-server.js aangemaakt met hierin een API Call:

https://github.com/Lutrian1/your-tribe-for-life-squad-page/blob/5ac339019755157dc5fcafe996caaa576c4e1873/src/routes/squad-2f/%2Bpage.server.js#L11-L33

Hierin vind je ook een filter script, dit script zorgt ervoor dat je kan filteren op ochtend en avond mensen. Om dit kort uit te leggen: Als de persoon een avond mens is, veranderd de filter API naar enkel personen die een avond mens zijn.

Deze data renderen we dan weer in een losse +page.svelte die de data afhandeld en verwerkt in een each loop:

https://github.com/Lutrian1/your-tribe-for-life-squad-page/blob/5ac339019755157dc5fcafe996caaa576c4e1873/src/routes/squad-2f/%2Bpage.svelte#L1-L41

## Stappenplan om lokaal te testen / Installatie Info:

Node.js controleren: Zorg ervoor dat Node.js op je computer is geïnstalleerd. Je controleert dit door node --version in je terminal of command prompt uit te voeren. Stel dit is niet geïnstalleerd, navigeer dan [hier](https://nodejs.org/en/download) naar toe.

Vervolgens moet je je terminal openen, dit kan door de windows-key + r, en vervolgens 'cmd' in te voeren. Of je typt 'terminal' in je taakbalk.

### Project aanmaken:

1. Open een terminal en navigeer naar de map waar je het project wilt maken.

2. Voer een van de volgende commando's uit:
```
# Optie A: Stel je heb al een map voor dit project aangemaakt, voor dan dit uit.
npx sv create

# Optie B: Al wil je een nieuwe map met de naam 'mijn-svelte-app' (dit kan natuurlijk alles zijn)
npx sv create mijn-svelte-app
```
3. Navigeer naar de projectmap (als je voor Optie B hebt gekozen):
```
cd mijn-svelte-app
```
4. Afhankelijkheden installeren:
```
npm install
```
5. Start de ontwikkelserver:
```
npm run dev
```
De terminal zal een URL tonen (meestal http://localhost:5173). Open deze URL in je browser om je werkende app te zien. 
