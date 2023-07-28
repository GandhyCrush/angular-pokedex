// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokedexBaseUrl: 'https://pokeapi.co/api/v2',
  pokeStatisticsUrl: 'wss://pokemon-statistics-be19c4542f3c.herokuapp.com/',
  firebase: {
    apiKey: 'AIzaSyCuaVWu0Y-vqxdkg7T5YAia0jfcdO85L2o',
    authDomain: 'pokemon-pokedex-948a8.firebaseapp.com',
    projectId: 'pokemon-pokedex-948a8',
    storageBucket: 'pokemon-pokedex-948a8.appspot.com',
    messagingSenderId: '268217806752',
    appId: '1:268217806752:web:cbd4bbcd711f41862ffec5',
    measurementId: 'G-DKQRHPVFPZ',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
