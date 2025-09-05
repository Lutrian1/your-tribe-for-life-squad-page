














export async function load({ url }) {
  //hier komt het fetchen van data check oude server.js met alles
  const membersResponse = await fetch(
    "https://fdnd.directus.app/items/person?fields=*&filter[id][_in]=164,165,176"
  );
  const membersData = await membersResponse.json();

  //   console.log(membersData);

  // Return hier dus de data (Dit is geen render)
  return { members: membersData.data };
}
