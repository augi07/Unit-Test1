// App.js

const { model } = require('./Model');
const { view } = require('./View');
const { update } = require('./Update');

// Funktion zur Ausführung der Anwendung
function runApp() {
    // Initialer Zustand, basierend auf dem Modell
    let state = model();

    // Anzeige des initialen Zustands
    console.log(view(state));

    // Ein Beispiel-Update durchführen (INCREMENT)
    const action = { type: 'INCREMENT' };
    state = update(state, action);

    // Den aktualisierten Zustand anzeigen
    console.log(view(state));

    // Ein weiteres Update durchführen (DECREMENT)
    const anotherAction = { type: 'DECREMENT' };
    state = update(state, anotherAction);

    // Den aktualisierten Zustand anzeigen
    console.log(view(state));
}

runApp();
