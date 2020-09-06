# Tester l'App web immobilière(React) avec Docker-compose 
L'application à été réalisée avec Nodejs / React + Redux / Nginx et nécéssite Docker pour être lancée.
* L'application n'as pas été stylisée . 
* L'application possède 50% de ses fonctionnalités, plusieurs pages n'ont pas été créées

## Lancer l'application: 
> docker-compose up 
#### Se connecter en tant qu'admin : 
* mail : admin@gmail.com
* password : admin

## Le docker-compose :
Dans le but de laisser transparaitre le contenu des images(pour qui veut), leurs constructions se fait localement (elles ne sont donc pas téléchargées depuis mon Docker Hub) 

### 4 micros-services : 4 images , 4 containers
- [Site Web](https://github.com/enzo-cora/react-immo)
- [Api Rest](https://github.com/enzo-cora/Api-rest-immobilier) 
- Reverse Proxy 
- Base de données 

### Configuration par defaut : 
* PORT par défaut : 80 
* HOTE par défaut : localhost.

Les configurations peuvent être changées dans le fichier : 

### Changer la configuration : 
La création des micros-services est totalement configurable via le fichier ".env" 
>.env



