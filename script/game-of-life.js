const avanceTemps = (univers) => {
  let nouvelUnivers = []

  for (let cellule = 0 ; cellule < univers.length ; cellule ++) {
    let etatSuivantCellule = Object.assign({},univers[cellule])
    let tableauVoisin = recenseVoisins(univers, univers[cellule])
      if(etatSuivantCellule.estVivant) {
        etatSuivantCellule.estVivant = peutSurvivre(tableauVoisin)
        if (etatSuivantCellule.estVivant){
          etatSuivantCellule.age += 1;
        } else {    
          etatSuivantCellule.age = 0;}
      } else {
        etatSuivantCellule.estVivant = peutRevivre(tableauVoisin)
        if (etatSuivantCellule.estVivant){
          etatSuivantCellule.age = 1;
        } else {    
          etatSuivantCellule.age = 0;}
       
      }
    nouvelUnivers.push(etatSuivantCellule)
  }
  return nouvelUnivers
}

const peutSurvivre = (tableauVoisins) => {
  let compteurVoisinVivant = 0 

  for(let voisin in tableauVoisins){
    if ( tableauVoisins[voisin].estVivant )
    {
      compteurVoisinVivant +=1
    }
  }
  return (compteurVoisinVivant > 1 && compteurVoisinVivant < 4)
}

const peutRevivre = (tableauVoisins) => {
  let compteurVoisinVivant = 0 

  for(let voisin in tableauVoisins){
    if ( tableauVoisins[voisin].estVivant )
    {
      compteurVoisinVivant +=1
    }
  }
  return (compteurVoisinVivant == 3)
}

const recenseVoisins = (univers, cellule) => {
  const enleveCelluleCourante = (celluleScrutee) =>
    !(celluleScrutee.x == cellule.x && celluleScrutee.y == cellule.y)

  const selectionneVoisins = (celluleScrutee) =>
    celluleScrutee.x <= (cellule.x + 1) &&
    celluleScrutee.x >= (cellule.x - 1) &&
    celluleScrutee.y <= (cellule.y + 1) &&
    celluleScrutee.y >= (cellule.y - 1)

  return univers.filter(selectionneVoisins).filter(enleveCelluleCourante)
}

const obtenirEntierAleatoire = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function genererCellule (id, positionX, positionY) {
  this.id = id
  this.x = positionX
  this.y = positionY
  this.estVivant = false
  this.age = 0
}

const initialiseUnivers = (hauteur, longueur) => {
  let univers = []
  for (let positionX = 0 ; positionX < longueur ; positionX++  ){
    for (let positionY = 0 ; positionY < hauteur ; positionY++){
      let cellule = new genererCellule(Math.floor(Math.random() * (10000 - 0 + 1)) + 0,positionX, positionY)
      univers.push(cellule)
    }
  }
  return univers;
}

const donnerVieCellule = (univers, positionXRecherchee, positionYRecherchee) => {
  for(let cellule = 0 ; cellule < univers.length ; cellule++ ) {
    if(univers[cellule].x == positionXRecherchee && univers[cellule].y == positionYRecherchee) {
      univers[cellule].estVivant = true;
      univers[cellule].age = 1 ;
    }
  }
}

const genererUniversAvecCelluleVivante = (univers, tableau) => {

  for (let cellule = 0 ; cellule < tableau.length ; cellule++) {
    donnerVieCellule(univers, tableau[cellule].x, tableau[cellule].y)
  }

  return univers;
}

//La fonction peut générer la même cellule vivante
const initialiseTableauVivantAleatoirement = (nombreDeCelluleVivante, largeurUnivers, hauteurUnivers) => {
  let tableauCelluleVivante = []
    for (let celluleVivante = 0 ; celluleVivante < nombreDeCelluleVivante ; celluleVivante++){
      let cellule = {x:'', y:''}
      cellule.x = obtenirEntierAleatoire (0, largeurUnivers)
      cellule.y = obtenirEntierAleatoire(0, hauteurUnivers)
      tableauCelluleVivante.push(cellule)
    }
  return tableauCelluleVivante
}

const afficherUnivers = (univers, dimensionCellule) => {
  for (let cellule = 0 ; cellule < univers.length ; cellule++) {
      dessinerCellule(univers[cellule].x*dimensionCellule[0], 
                      univers[cellule].y*dimensionCellule[1], 
                      univers[cellule].estVivant,
                      dimensionCellule,
                      univers[cellule].age)
    }
  }

const dict = { '0':'grey', '1':"green", '2':'yellow', '3':'yellow', '4':'orange', '5':'orange', '6':'red'}

const dessinerCellule = (x, y, vivant, dimensionCellule, age) => {
  if (age > 6) {
    age = 6
  }

  ctx.save();
  ctx.fillStyle = dict[age.toString()];
  ctx.fillRect(x, y, dimensionCellule[0], dimensionCellule[1]);
  ctx.restore();
  
}