# game-of-life

##Résultat d'un kata provenant :
http://codingdojo.org/kata/GameOfLife/

et à partir d'une séance au Rookie-Club:
https://github.com/Rookie-Club/katas/tree/gameOfLife/nodejs

##Les règles du jeu :
  1 : Une cellule viante avec moins de deux voisins vivant, meurs au tour suivant(sous-population)
  2 : Une cellule vivante avec plus de trois voisins vivant, meurs au tour suivant(surpopulation)
  3 : Une cellule vivante avec 2 ou 3 voisins vivants, survie au tour suivant
  4 : Une cellule morte, entouré de trois cellule vivante exactement revient à la vie au tour suivant

##On distingue l'âge des cellule :
- Verte elles reviennent à la vie
- Jaune elles sont jeune
- Orange elles sont adulte
- Rouge elles ont survécu au moins 5 tours et sont souvent dans une position stable

##Pour commencer :
 npm install package.json
 Parfois mocha ne s'installe pas, npm install mocha

##Refactorisations possibles :
Intégrer les fonctions peutSurvivre comme méthode de la classe cellule,
Créer un mega object de type jeu qui aura la responsabilité de gérer l'affichage par exemple et de se mettre à jour,

Il suffit de lancer l'index dans le navigateur pour lancer le jeu
Une version est aussi disponible :
http://www.mo-lab.fr/experience.html
