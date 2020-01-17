Fioulmarket: React.js technical test
==

For the need of our business, we will test your capacity on forms.

What we want you to do, is to do some refactoring on some code we wrote for you. And then, build the component that have some specifications that you will discover in the insructions part.

To fulfill this test, we want **clean and not repetitive code**. Feel free to **use any library**. Don't forget to be **dry and solid**.
Unit tests aren't mandatory, but they clearly are a bonus... ;)

Installation :
--
First, clone the project :
```
git@github.com:FioulMarket/test-dev-react.git
```
Then, all you have to do is to install the vendors :
```
npm install
```

Run the project :
--
You will only have to run it in dev mode.
```
npm run start
```
The open your browser on `http://localhost:3000`

Once you've done that, you're up & ready for the test !

Project structure :
--
For simplicity and efficiency, we're based on `create-react-app`.

`config` contains all the necessary configuration file for the project.

`src` contains all the application code, that's the place you will mainly be. Hope you'll like it as we do !

`public` contains all the public files, you won't have to touch it.

Instructions :
--
For this test, you will be assigned of two tasks :

### Task 1 :
In the `src/Form` directory, you will find two files `RegisterForm.jsx` and `RegisterForm.css`. 

What we want you to do is to do some refactoring on the `RegisterForm.jsx`. We want this component to be reusable and way more presentationnal over functionnal !

The cleaner it will be, the more chance you will have ! Be confident with yourself, this test will give us an overview of your coding skills.

Remember, feel free to use any library and to be dry and solid ! :)

### Task 2 :
In the `src/Tab` directory you will have build a TabComponent that looks like this: 

![Tab TabComponent](public/img/tab.png?raw=true "TabComponent")

The component will work like this :
```
<TabContainer>
    <TabHeader filter={LOGIN}>J'ai un compte</TabHeader>
    <TabHeader filter={REGISTER}>Je n'ai pas de compte</TabHeader>

    <TabContent filter={LOGIN}>
        <Login />
    </TabContent>
    <TabContent filter={REGISTER}>
        <RegisterForm />
    </TabContent>
</TabContainer>
```

The `<RegisterForm />` component will be the one you just refactored, and the `<Login />` one will be one you will create based on what you just did on the *Task 1*.

*Don't worry too much about css, the only required thing is the tab style working properly.*