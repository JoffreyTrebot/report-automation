#Compte Rendu d'activité - Automatique

Génération d'un compte rendu d'activité automatique, en PDF, avec son envoie par mail.

Avancement du projet: ⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️ 0%

####USECASES :
- ⬜️ Je crée un CR
- ⬜️ Je crée des projets
- ⬜️ Je crée des types de taches
- ⬜️ Je crée des status de taches
- ⬜️ Je crée une tache
  - Une tache est associé à un projet, un status et un type
- ⬜️ Je lance une génération de CR manuel
  - Je selectionne les projets
  - Je choisis une date de début, (la date de fin est la date du jour)
- ⬜️ Quand je génère un CR, un CR au format PDF est créer
- ⬜️ Dans un CR on y retrouve :
  - Toutes les taches trier par projet puis par status puis par date de fin la pluis ancienne à la plus recente.
- ⬜️ Quand je modifie un type de tache, toutes les taches sont mis à jour avec le nouveau type
- ⬜️ Quand je modifie un statut, toutes les taches sont mis à jour avec le nouveau statut
- ⬜️ Quand un compte rendu est généré, un nouveau CR est créé en y retrouvant les taches "non terminée"
  - L'état "non terminée" est un état de tache n'ayant pas de date de fin
- ⬜️ Quand un compte rendu est généré, il passe a l'état "Généré" et ne peut plus être modifié, n'y supprimé
  - L'état "Généré" est un état de CR ayant une date de fin
- ⬜️ J'accède à la liste des comptes rendu
- ⬜️ Quand je change le statut d'une tache en statut "terminée", la date de fin est automatique mise
- ⬜️ Il n'y a qu'un seul et unique statut de fin de tâche
- ⬜️ Je crée une génération de compte rendu automatique en selectionnant une date, une heure, et choisis si le compte rendu est journalier, hebdomadaire ou mensuel
- ⬜️ Je modifie la génération du compte rendu automatique
- ⬜️ J'annule la génération du compte rendu automatique

####Modèle de donnée :
- CR
  - ID
  - date de création
  - date de fin

- PROJET
  - ID
  - Nom

- TACHE
  - ID
  - Titre
  - date de création
  - date de fin
  - Description
  - STATUT ID
    - STATUT Nom
  - TYPE ID
    - TYPE Nom
  - PROJET ID
    - PROJET Nom
  - CR ID

- TYPE
  - ID
  - Nom

- STATUT
  - ID
  - Nom
  - EstTerminé

####TECHNO :
- ViteJS
- ReactJS
- Typescript
- SWC
- Clean architecture
- Tests unitaires (Jest)
- Tests d'intégration (Cypress)
- Redux
- Chakra UI
- Supabase
- Netlify