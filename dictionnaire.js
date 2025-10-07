const csv = '/departements%20(1)%20(1)%20(1)%20-%20departements%20(1)%20(1)%20(1).csv' //importe le dossier
function departement(stringVal, splitter, keyField) {
    // transformation en tableau
    const lines = stringVal
      .trim()
      .split("\n")
      .map((line) => line.split(splitter));
  
    // ajoute des noms aux colonnes
    const columnNames = ['dep', 'num'];
  
    // création d'un dictionnaire vide
    const dict = {};
  
    lines.forEach((item) => { // boucle pour chaque ligne de données
      const obj = {}; // création objet vide
  
      columnNames.forEach((col, index) => { // création des objets avec boucle
        obj[col] = item.at(index);
      });
  
      const key = obj[keyField]; // récupère la clé à utiliser dans le dico
      if (key !== undefined) { // ajoute l'objet dans le dictionnaire
        dict[key] = obj;
      }
    });
  
    return dict; // bah return quoi
  }
 
  const result = departement(csv, ",", "num");

  // temporaire
  console.log(result);
