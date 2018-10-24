# Udacity Mobile Flashcards
A React Native project that creates a mobile card app on iOS

### Compatible Platforms
This app has been tested and works correctly on iOS emulator. Below is a list of tested devices:
1. iPhone X
2. iPhone 8
3. iPhone 7

### Quick Start
You need to install `Node.js` at first if you haven't. Then you can clone this project to your preferred place
and run the following commands:
`npm install` and `npm run`

If you prefer to use `yarn`, you are welcome to use it.

### Technologies Used
1. React Native (Create React Native App)
2. React Redux
3. Expo (simulator)
4. React Navigation

### App Structure
```
APP
|
|--- DecksScreen
|         |
|         |--- DeckDetailsScreen (<DeckCard />)
|                       |
|                       |--- QuizScreen
|                       |        |
|                       |        |--- ScoreScreen
|                       |
|                       |--- AddCardScreen
|
|
|--- AddDeckScreen
|
|--- SettingsScreen
```
