const { model } = require('./Model');
const { view } = require('./View');
const { update } = require('./Update');

// Initialisiere die Anwendung
function runApp() {
    // Initiales Modell laden (Anfangszustand)
    let state = model();

    // Zeige die anfängliche Ansicht basierend auf dem Zustand
    console.log("Initial state:");
    console.log(view(state));

    // Simuliere eine Aktion "INCREMENT" (Zähler erhöhen)
    console.log("\nState after INCREMENT:");
    state = update(state, { type: 'INCREMENT' });
    console.log(view(state));

    // Simuliere eine Aktion "DECREMENT" (Zähler verringern)
    console.log("\nState after DECREMENT:");
    state = update(state, { type: 'DECREMENT' });
    console.log(view(state));

    // Simuliere eine unbekannte Aktion (Zustand bleibt unverändert)
    console.log("\nState after UNKNOWN action:");
    state = update(state, { type: 'UNKNOWN' });
    console.log(view(state));
}

// Starte die Anwendung
runApp();
