# GAME OF LIFE - ENG

## CONTEXT 

Game of life is an exercice from http://codingdojo.org/kata/GameOfLife/ .It is a game where you model cells following certains rules. 

In our case the rule are :
- A living cell surounded by less than 2 neighboor living cell, died in the next round (underpopulation)
- A living cell surrounded by more than 3 neighboor living cell, died in the next round (overpopulation)
- A living cell surounded by 2 or 3 living cell survive the next round
- A dead cell surdounded by exactly 3 livin cell come back to life the next round

I dit everything in Canvas using javascript. In this version you can see how long a cellule is alive by colors :
- Green : Just alive
- Yellow : Young, alive for 2 rounds
- Orange : adults, alive for 3 or 4 rounds
- Red : Alive more than 5 rounds, most of the time they became stable

### TEST

You can test my game of life here :https://petitpandaroux.github.io/game-of-life/

## NEXT ITERATIONS 

- Refactoring of code 
- Writting everything using modern Javascript instead of actual ES5
- Let user choose parameter (number of cell alive at the beginning, round interval....)


# GAME OF LIFE - FR

## CONTEXTE

### Résultat d'un kata provenant :
http://codingdojo.org/kata/GameOfLife/

et à partir d'une séance au Rookie-Club:
https://github.com/Rookie-Club/katas/tree/gameOfLife/nodejs

### Les règles du jeu :
  1 : Une cellule viante avec moins de deux voisins vivant, meurs au tour suivant(sous-population)
  2 : Une cellule vivante avec plus de trois voisins vivant, meurs au tour suivant(surpopulation)
  3 : Une cellule vivante avec 2 ou 3 voisins vivants, survie au tour suivant
  4 : Une cellule morte, entouré de trois cellule vivante exactement revient à la vie au tour suivant

### On distingue l'âge des cellule :
- Verte elles reviennent à la vie
- Jaune elles sont jeune
- Orange elles sont adulte
- Rouge elles ont survécu au moins 5 tours et sont souvent dans une position stable

## Pour commencer :
 ```bash
 npm install package.json
 npm install mocha
 npm test
 ```

## PLUS TARD :
Réécrire les tests de manière à refactoriser de manière tranquille
Intégrer les fonctions peutSurvivre comme méthode de la classe cellule,
Créer un mega object de type jeu qui aura la responsabilité de gérer l'affichage par exemple et de se mettre à jour,


Il suffit de lancer l'index dans le navigateur pour lancer le jeu
Une version est aussi disponible :https://petitpandaroux.github.io/game-of-life/
