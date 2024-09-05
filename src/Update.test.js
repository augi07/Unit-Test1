const { update } = require('./Update');

test('INCREMENT action sollte den Zähler erhöhen', () => {
    const initialState = { count: 0 };
    const newState = update(initialState, { type: 'INCREMENT' });
    
    expect(newState).toEqual({ count: 1 });
    expect(initialState).toEqual({ count: 0 });
});

test('unbekannte Action sollte den Zustand nicht ändern', () => {
    const initialState = { count: 1 };
    const newState = update(initialState, { type: 'UNKNOWN' });
    
    expect(newState).toEqual(initialState);
});
