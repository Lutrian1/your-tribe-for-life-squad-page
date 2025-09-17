## Stappenplan om lokaal te testen:

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
