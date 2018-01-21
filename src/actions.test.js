import {GENERATE_AURAL_UPDATE, 
		generateAuralUpdate, 
		RESTART_GAME,
		restartGame,
		MAKE_GUESS,
		makeGuess
		} from './actions.js';

describe('generateAuralUpdate', () => {
	it('Should return the action', () => {
		const action = generateAuralUpdate();
		expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
	});
});

describe('restartGame', () => {
	it('Should return the action', () => {
		const correctAnswer = '10';
		expect(action.type).toEqual(RESTART_GAME);
	});
});

describe('makeGuess', () => {

});