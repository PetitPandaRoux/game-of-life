const assert = require('assert');

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

describe('Au jeu de la vie,', () => {
  xit('1 cellule morte reste une cellule morte !', () => {
    const univers = [
      {
        x: 0,
        y: 0,
        vivant: false,
      },
    ]
    const universObtenu = avance(univers)

    assert.equal(universObtenu[0].vivant, false)
  })

  xit('1 cellule vivante devient une cellule morte !', () => {
    const univers = [
      {
        x: 0,
        y: 0,
        vivant: true,
      },
    ]
    const universObtenu = avance(univers)

    assert.equal(universObtenu[0].estVivant, false)
  })

  describe('Je connais mes voisins,', () => {
    it('je suis au milieu, j\'ai huit voisins', () => {
      const univers = [
        { x: 0, y: 0, estVivant: true },
        { x: 1, y: 0, estVivant: true },
        { x: 2, y: 0, estVivant: true },
        { x: 0, y: 1, estVivant: true },
        { x: 1, y: 1, estVivant: true },
        { x: 2, y: 1, estVivant: true },
        { x: 0, y: 2, estVivant: true },
        { x: 1, y: 2, estVivant: true },
        { x: 2, y: 2, estVivant: true }

      ]

      const voisins = recenseVoisins(univers, univers[4])
      const voisinsAttendus = [
        { x: 0, y: 0, estVivant: true },
        { x: 1, y: 0, estVivant: true },
        { x: 2, y: 0, estVivant: true },
        { x: 0, y: 1, estVivant: true },
        { x: 2, y: 1, estVivant: true },
        { x: 0, y: 2, estVivant: true },
        { x: 1, y: 2, estVivant: true },
        { x: 2, y: 2, estVivant: true }
      ]

      assert.equal(JSON.stringify(voisins), JSON.stringify(voisinsAttendus))

    })

    it("Je survis si deux voisins sont vivants", () => {
      const univers = [
        { x: 0, y: 0, estVivant: false },
        { x: 1, y: 0, estVivant: false },
        { x: 2, y: 0, estVivant: false },
        { x: 0, y: 1, estVivant: true },
        { x: 1, y: 1, estVivant: true },
        { x: 2, y: 1, estVivant: true },
        { x: 0, y: 2, estVivant: false },
        { x: 1, y: 2, estVivant: false },
        { x: 2, y: 2, estVivant: false }
      ]

      const voisins = recenseVoisins(univers, univers[4])
      
      const estVivant = peutSurvivre(voisins)

      assert.equal(estVivant, true)

    })

    it("Je survis si 3 voisins sont vivants", () => {
      const univers = [
        { x: 0, y: 0, estVivant: false },
        { x: 1, y: 0, estVivant: false },
        { x: 2, y: 0, estVivant: false },
        { x: 0, y: 1, estVivant: true },
        { x: 1, y: 1, estVivant: true },
        { x: 2, y: 1, estVivant: true },
        { x: 0, y: 2, estVivant: true },
        { x: 1, y: 2, estVivant: false },
        { x: 2, y: 2, estVivant: false }
      ]

      const voisins = recenseVoisins(univers, univers[4])
      
      const estVivant = peutSurvivre(voisins)

      assert.equal(estVivant, true)

    })

    it("meurs si 4 voisins sont vivants", () => {
      const univers = [
        { x: 0, y: 0, estVivant: false },
        { x: 1, y: 0, estVivant: true },
        { x: 2, y: 0, estVivant: true },
        { x: 0, y: 1, estVivant: true },
        { x: 1, y: 1, estVivant: true },
        { x: 2, y: 1, estVivant: true },
        { x: 0, y: 2, estVivant: true },
        { x: 1, y: 2, estVivant: false },
        { x: 2, y: 2, estVivant: false }
      ]

      const voisins = recenseVoisins(univers, univers[4])
      
      const estVivant = peutSurvivre(voisins)

      assert.equal(estVivant, false)

    })
  })

  xit('Sur 3 cellules vivantes côte à côte, celle du centre survit et les autres meurent', () => {
    const univers = [
      { x: 0, y: 0, vivant: true },
      { x: 1, y: 0, vivant: true },
      { x: 2, y: 0, vivant: true },
    ]
    const universSuivant = [
      { x: 0, y: 0, vivant: false },
      { x: 1, y: 0, vivant: true },
      { x: 2, y: 0, vivant: false },
    ]
    const universObtenu = avance(univers)

    assert.equal(JSON.stringify(universObtenu), JSON.stringify(universSuivant));
  })
});
