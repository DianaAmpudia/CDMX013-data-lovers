
export const allFilters = (mainData, selectGen, selectType, selectWeakness, selectRarity, sortOrder) => {
  const filtrosPokemon = mainData.filter(mainData => selectGen === 'all'? true : mainData.generation.name == selectGen)
  .filter(mainData=>selectType === 'all' ? true : mainData.type.includes (selectType))
  .filter(mainData => selectWeakness === 'all' ? true : mainData.weaknesses.includes(selectWeakness))
  .filter (mainData=> selectRarity === 'all' ? true : mainData["pokemon-rarity"] == (selectRarity))
//  .sort ((a,b) => sortOrder === 'all' ? true : sortOrder == "1" ? a.name > b.name || sortOrder == "-1" : a.name < b.name)
.sort ((a,b) => sortOrder === 'all' ? true : sortOrder == "1" ? a.name.localeCompare(b.name) || sortOrder == "-1" : b.name.localeCompare(a.name))
  console.log (filtrosPokemon);
  return filtrosPokemon
}

// export const filterGen = (mainData, selectedGeneration) => {
//   const genPokemon = mainData.filter(mainData => {
//     if (mainData.generation.name == (selectedGeneration)) {
//       return true;
//     }
//   })
//   console.log(genPokemon);
//   if (genPokemon.length === 0) {
//     return mainData;
//   }
//   else { return genPokemon; }
// };
// export const filterType = (mainData, selectedType) => {
//   const typePokemon = mainData.filter(mainData => {
//     if (mainData.type.includes(selectedType)) {
//       return true;
//     }
//   })
//   console.log(typePokemon);
//   if (typePokemon.length === 0) {
//     return mainData;
//   }
//   else { return typePokemon; }
// };
// export const filterWeakness = (mainData, selectedWeakness) => {
//   const weaknessPokemon = mainData.filter(mainData => {
//     if (mainData.weaknesses.includes(selectedWeakness)) {
//       return true;
//     }
//   })
//   console.log(weaknessPokemon);
//   if (weaknessPokemon.length === 0) {
//     return mainData;
//   }
//   else { return weaknessPokemon; }
// };
// export const filterRarity = (mainData, selectedRarity) => {
//   const resultRarity = mainData.filter(mainData => {
//     if (mainData["pokemon-rarity"] == (selectedRarity)) {
//       return true;
//     }
//   })
//   console.log(resultRarity);
//   if (resultRarity.length === 0) {
//     return mainData;
//   }
//   else { return resultRarity; }
// }; 

// export const filterOrder = (mainData, sortOrder) => {
//   const resultOrder = mainData.sort((a, b) => {
//     if (sortOrder == a.name > b.name) {
//       return 1
//     }
//     if (sortOrder == a.name < b.name) {
//       return -1;
//     }
//     else {
//       return mainData;
//     }
//   })
//   console.log(resultOrder);
//   return resultOrder;
// }; 

// // .sort ((a,b) => sortOrder === 'all' ? true : sortOrder == "1" ? resultOrder= mainData.sort((a, b) => a.name.localeCompare(b.name)) || sortOrder == "-1" : resultOrder= mainData.sort((a, b) => b.name.localeCompare(a.name)))

// export const filterOrder = function (mainData, sortOrder) {
//   let resultOrder='';
//   if(sortOrder=="1"){ 
//     resultOrder= mainData.sort((a, b) => a.name.localeCompare(b.name));
//   }
//   if(sortOrder=="-1"){ 
//     resultOrder= mainData.sort((a, b) => b.name.localeCompare(a.name));
//   }
//   console.log(resultOrder);
//   return resultOrder;
// }; 