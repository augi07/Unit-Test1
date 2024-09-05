const { view } = require('./View');

test('view sollte den aktuellen Zähler korrekt anzeigen', () => {
    const state = { count: 5 };
    const result = view(state);
    
    expect(result).toBe('Current count: 5');
});
