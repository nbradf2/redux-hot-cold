import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
	it('Should render without crashing', () => {
		shallow(<GuessForm />);
	});
});