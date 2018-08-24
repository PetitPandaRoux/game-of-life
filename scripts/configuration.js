const canvas = document.getElementById("game_of_life")
const ctx = canvas.getContext("2d")

const imagesParSeconde = 10
const largeurUnivers = 30
const hauteurUnivers = 30
const nombreMaxCelluleVivante = 150

const largeurCellule = canvas.width/largeurUnivers
const hauteurCellule = canvas.height/hauteurUnivers
const dimensionCellule = [largeurCellule, hauteurCellule]