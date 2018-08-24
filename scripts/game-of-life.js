const avanceTemps = (univers) => {
  let nouvelUnivers = []

  for (let cellule = 0 ; cellule < univers.length ; cellule ++) {
    let etatSuivantCellule = Object.assign({},univers[cellule])
    let tableauVoisin = recenseVoisins(univers, univers[cellule])

      if(etatSuivantCellule.estVivant) {
        etatSuivantCellule.estVivant = peutSurvivre(tableauVoisin)
      } else {
        etatSuivantCellule.estVivant = peutRevivre(tableauVoisin)
      }
    etatSuivantCellule = changeAge(etatSuivantCellule)
    nouvelUnivers.push(etatSuivantCellule)
  }
  return nouvelUnivers
}

class Cellule {
  constructor (positionX, positionY) {
    this.x = positionX
    this.y = positionY
    this.estVivant = Math.random() >= 0.5
    this.age = 0
  }
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

const initialiseUnivers = (hauteur, longueur) => {
  const univers = []
  for (let positionX = 0 ; positionX < longueur ; positionX++  ){
    for (let positionY = 0 ; positionY < hauteur ; positionY++){
      const cellule = new Cellule(positionX, positionY)
      univers.push(cellule)
    }
  }
  return univers;
}

const changeAge = (cellule) => {
  if (cellule.estVivant){
    cellule.age += 1 
  } else {
    cellule.age = 0
  }
  return cellule
}

module.exports = {peutSurvivre, recenseVoisins, changeAge, avanceTemps}