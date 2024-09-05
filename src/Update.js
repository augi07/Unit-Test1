// Update.js

// Update-Funktion, die den Zustand basierend auf der Aktion ändert
const update = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state; // Wenn die Aktion nicht erkannt wird, bleibt der Zustand unverändert
    }
};

module.exports = { update };
