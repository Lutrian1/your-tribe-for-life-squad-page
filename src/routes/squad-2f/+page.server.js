// export async function load ({ url }) {
//     const membersResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 2"}}}},{"squads":{"squad_id":{"cohort":"2526"}}},{"squads":{"squad_id":{"name":"2F"}}}]}');
//     const membersData = await membersResponse.json();


//     return {members: membersData.data}


// }

export async function load({ url }) {

  // Dit leest de url af op de filter waarde is de filterwaarde geen morning, evening of is het null, dan pakt hij alle
  const filter = url.searchParams.get('filter') || 'alle';
  console.log(filter)

  const membersResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 2"}}}},{"squads":{"squad_id":{"cohort":"2526"}}},{"squads":{"squad_id":{"name":"2F"}}},{"mugshot":{"_nnull":true}}]}');
  
  const membersData = await membersResponse.json();
  let members = membersData.data;

  
  if (filter === 'morning') {
    members = members.filter(members => members.most_energy === 'morning');
  } else if (filter === 'evening') {
    members = members.filter(members => members.most_energy === 'evening');
  }
  console.log(members)
  console.log(filter)


  return { members, filter };
}
