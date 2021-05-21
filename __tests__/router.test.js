/**
 * @jest-environment jsdom
 */
import { pushToHistory } from '../scripts/router.js';

const historyLength = {
};

test('checks length of history', () => { 
    expect(pushToHistory('entry', 1).length).toBe(2);
    expect(pushToHistory('default', 0).length).toBe(3);
});

test('checks state of history', () => {
    expect(pushToHistory('settings', 0).state.page).toBe('settings');
});



