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
4. Componenten gemaakt voor de pagina's, die we dan ook als componenten aanmaakte in ons project om zo het project eerlijk te verdelen, en goed in te schatten wie waar me bezig zal zijn en kan doen. De mappen vind je [hier](https://github.com/Lutrian1/your-tribe-for-life-squad-page/tree/main/src/lib/components), deze renderen we dan in de [homepage](https://github.com/Lutrian1/your-tribe-for-life-squad-page/blob/main/src/routes/%2Bpage.svelte).

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
