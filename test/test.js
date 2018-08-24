const assert = require('assert');
const peutSurvivre = require('../scripts/game-of-life.js').peutSurvivre;
const recenseVoisins = require('../scripts/game-of-life.js').recenseVoisins;
const changeAge = require('../scripts/game-of-life.js').changeAge;
const avanceTemps = require('../scripts/game-of-life.js').avanceTemps;

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

  describe( 'La cellule change d\'age' , () => {
    it('elle vieillit si ne meurs pas', () => {
      const cellule = { x: 0, 
                        y: 0, 
                        estVivant: true, 
                        age: 0 }
      const celluleAttendue = { x: 0, 
                                y: 0, 
                                estVivant: true, 
                                age: 1 }
      const celluleVieillit = changeAge(cellule)

      assert.equal(JSON.stringify(celluleVieillit), JSON.stringify(celluleAttendue))
    })

    it('elle retourne à 0 si elle meurt', () => {
      const cellule = { x: 0, 
                        y: 0, 
                        estVivant: false, 
                        age: 4 }
      const celluleAttendue = { x: 0, 
                                y: 0, 
                                estVivant: false, 
                                age: 0 }
      const celluleVieillit = changeAge(cellule)

      assert.equal(JSON.stringify(celluleVieillit), JSON.stringify(celluleAttendue))
    })
  })

  describe('Le temps avance', () => {
    it('cas general', () => {    
      const univers = [
        { x: 0, y: 0, estVivant: true,  age:0 },
        { x: 1, y: 0, estVivant: true,  age:0 },
        { x: 2, y: 0, estVivant: false, age:0 },
        { x: 0, y: 1, estVivant: true,  age:0 },
        { x: 1, y: 1, estVivant: true,  age:0 },
        { x: 2, y: 1, estVivant: false, age:0 },
        { x: 0, y: 2, estVivant: false, age:0 },
        { x: 1, y: 2, estVivant: false, age:0 },
        { x: 2, y: 2, estVivant: false, age:0 }
      ]

      const universSuivant = [
        { x: 0, y: 0, estVivant: true,  age:1 },
        { x: 1, y: 0, estVivant: true,  age:1 },
        { x: 2, y: 0, estVivant: false, age:0 },
        { x: 0, y: 1, estVivant: true,  age:1 },
        { x: 1, y: 1, estVivant: true,  age:1 },
        { x: 2, y: 1, estVivant: false, age:0 },
        { x: 0, y: 2, estVivant: false, age:0 },
        { x: 1, y: 2, estVivant: false, age:0 },
        { x: 2, y: 2, estVivant: false, age:0 }

      ]
      const universObtenu = avanceTemps(univers)

      assert.equal(JSON.stringify(universObtenu), JSON.stringify(universSuivant));
      })
  })
});
