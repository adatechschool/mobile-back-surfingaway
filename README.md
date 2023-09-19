 # 🏄‍♂️ SurfingAway - Partie BACKEND🏄‍♂️

Bienvenue dans la partie backend du projet SurfingAway, l'application mobile dédiée aux amatrices de surf ! Notre équipe de développement backend est composée de Agathe, Alissia, Charlène, Elsa et Marion.

## Description
Le backend de SurfingAway est développé en utilisant Node.js, Express.js, et MongoDB avec Mongoose. Il sert de support pour l'application mobile frontend en fournissant des services et des données nécessaires aux fonctionnalités de l'application.

## Fonctionnalités
- Stockage des informations sur les spots de surf.
- Intégration avec l'API pour les données sur les spots.
- Gestion des conditions météorologiques et des marées.* en cours de développement
- API pour interagir avec l'application frontend.
- Gestion des utilisateurs et des profils. *en cours de développement


## Installation
Suivez ces étapes pour installer et exécuter le backend de SurfingAway sur votre machine locale :

### 1. Clonez ce dépôt sur votre machine locale.
```bash
git clone git@github.com:adatechschool/mobile-back-surfingaway.git
```

### 2.Installez les dépendances nécessaires.
```bash
npm install
```

### 3.Configurez les variables d'environnement en créant un fichier .env à la racine du projet et en y ajoutant les informations nécessaires :
```bash
PORT=3000
MONGODB_URI=mongodb+srv://SurfTeam:123456azerty@surfingaway.lg3w7hp.mongodb.net/surfspots
API_KEY=
BASE_ID=
```

### 4.Démarrez le serveur en mode développement.
```bash
nodemon server
```

### 5. Endpoints API
/api/users : Endpoints pour la gestion des utilisateurs et des profils.
/api/spots :
- Tous les spots : GET / localhost:3000
/api/weather : Endpoints pour les conditions météorologiques.
/api/tides : Endpoints pour les informations sur les marées.


## Contributeurs
Agathe : https://github.com/AgatheSz
Alissia : https://github.com/AlissiaLR
Charlène : https://github.com/CharleneBo
Elsa : https://github.com/elsacatoire
Marion : https://github.com/MarionLpz

Nous sommes ravies de vous avoir à bord de notre projet SurfingAway ! Si vous avez des questions, des suggestions ou des commentaires, n'hésitez pas à nous contacter.

Bon développement ! 🌊🏄‍♀️