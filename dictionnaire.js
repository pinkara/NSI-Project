const csv = '/departements%20(1)%20(1)%20(1)%20-%20departements%20(1)%20(1)%20(1).csv' //importe le dossier
function departement(stringVal, splitter, key){
  //transformation en tableau
   const [keys, ...rest] = stringVal
    .trim()
    .split("\n")
    .map((item) => item.split(splitter));

  // création d'un dictionnaire vide
  const dict = {};

  //ajoute des noms aux colonnes
  const collumnNames = ['dep', 'num'];
  const rest = lines;
  
  rest.forEach((item) => { //boucle pour chaque ligne de données
    const obj = {}; //création objet vide
    keys.forEach((key, index) => { //création des objets avec boucle
      obj[key] = item.at(index);
    });

    const key = obj[keyField]; //récupère la clée à utiliser dans le dico
    if (key !== undefined) { //ajoute l'objet dans le dictionnaire
      dict[key] = obj;
    }
  });

  return dict; //bah return quoi
}

const result = departement(csv, ',', 'num');
//temporaire 
console.log(result);
