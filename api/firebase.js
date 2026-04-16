const firebaseConfig = {
      apiKey: "ISI_APIKEY",
        authDomain: "ISI_DOMAIN",
          projectId: "ISI_PROJECT"
          };

          firebase.initializeApp(firebaseConfig);

          export const auth = firebase.auth();
          export const db = firebase.firestore();