# REACT-FROM

Mise en place d'un module d'enregistrement et de connection avec systéme d'onglet pour passer de l'un à l'autre.

![Tab TabComponent](public/img/tab.png?raw=true "TabComponent")

## Installation :

Mise en place du projet et installation des différentes librairies :

```
npm install
```

Liste des librairies ajoutées au projet initial:

| Librairie           | Objectif                                                  |
| :------------------ | :-------------------------------------------------------- |
| `validate`          | _Vérifier le schéma de donnée User_                       |
| `is-valid-email`    | _Vérifier si le format de mail est valid_                 |
| `ghooks`            | _Lancer les tests avant un commit_                        |
| `commitizen`        | _Formater les commits_                                    |
| `@material-ui/core` | _Avoir un design attractif rapidement pour le formulaire_ |

## Commandes:

### lancement

Lancement du projet

```
npm run start
```

### Enregistrer le commit

Aprés un `git add (files)` lancer :

```
npm run commit
```

les tests seront lancés aprés avoir répondu au différente question relative au commit. Si les tests n'aboutissent pas il faudra alors corriger le code en conséquence puis relancer la commande.

## Project structure :

La structure du Dom se présente ainsi :

```html
<Tabs>
    <Tabs.Link filter={LOGIN}>J'ai un compte</Tabs.Link>
    <Tabs.Link filter={REGISTER}>Je n'ai pas de compte</Tabs.Link>

    <Tabs.Panel filter={LOGIN}>
        <Login />
    </Tabs.Panel>
    <Tabs.Panel filter={REGISTER}>
        <Registration />
    </Tabs.Panel>
</Tabs.Panel>
```

### Les composants du dossier `Form`

Dans le dossier `Form` il y a actuellement deux composants:

-   `<Registration/>` pour le formulaire d'enregistrement.
-   `<Login/>` pour le formulaire de connection.

#### la conception

Tous deux partent de l'emploie du hook `useFormValidate` disponible au chemin suivant `src/Form/helpers/UseFormValidate.js`.

#### Usage de `useFormValidate(initialState, validateLogin, handleSubmit)`

```JS
const {
        values,
        errors,
        onChangeHandler,
        onBlurHandler,
        onSubmitHandler
    } = useFormValidate(initialState, validateLogin, handleSubmit);
```

| Entrée          | Type       | Description                                  |
| :-------------- | :--------- | :------------------------------------------- |
| `initialState`  | _Object_   | Données initiales utilisées                  |
| `validateLogin` | _Function_ | Fonction de validation des données           |
| `handleSubmit`  | _Function_ | Fonction lancée une fois les données valides |

| Sortie            | Type       | Description                                                                                                       |
| :---------------- | :--------- | :---------------------------------------------------------------------------------------------------------------- |
| `values`          | _Object_   | Données utilisées et modifiées par l'utilisateur                                                                  |
| `errors`          | _Object_   | Données d'erreurs avec pour attribut le nom du champs erroné et pour valeur un tableau de description des erreurs |
| `onChangeHandler` | _Function_ | Fonction à lancer à chaque changement de valeur pour mettre à jours les données                                   |
| `onBlurHandler`   | _Function_ | Fonction à lancer à chaque changement de valeur avec vérification                                                 |
| `onSubmitHandler` | _Function_ | Fonction à lancer à lors de la soumission des données permet la veriffication par la même occasion                |

### Les composants du dossier `Tabs`

Dans le dossier `Tabs` il y a actuellement un seul composant:

-   `<Simpletabs/>` pour le systeme d'onglet simple.

#### la conception

Il part de l'emploie des hook `useLinkState` et `usePanelState` disponible au chemin suivant `src/Tabs/helpers/useTabs.js`.

#### Usage de `useLinkState({filter})`

```JS
    const { onClick, isActive } = useLinkState({ filter });
```

| Entrée       | Type     | Description                                                              |
| :----------- | :------- | :----------------------------------------------------------------------- |
| `{ filter }` | _Object_ | Objet avec attribut `filter` afin de donner un nom au panel à actionnner |

| Sortie     | Type       | Description                                                                            |
| :--------- | :--------- | :------------------------------------------------------------------------------------- |
| `onClick`  | _Function_ | Fonction à lancer à chaque click sur le composant `<Tabs.Link/>` pour changer de panel |
| `isActive` | _Boolean_  | Valeur afin de savoir si le `<Tabs.Link/>` est celui activé actuellement               |

#### Usage de `usePanelState({filter})`

```JS
    const { isActive } = usePanelState({ filter });
```

| Entrée       | Type     | Description                                                         |
| :----------- | :------- | :------------------------------------------------------------------ |
| `{ filter }` | _Object_ | Objet avec attribut `filter` afin de donner un nom au panel courant |

| Sortie     | Type      | Description                                                               |
| :--------- | :-------- | :------------------------------------------------------------------------ |
| `isActive` | _Boolean_ | Valeur afin de savoir si le `<Tabs.Panel/>` est celui activé actuellement |
