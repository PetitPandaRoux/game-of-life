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