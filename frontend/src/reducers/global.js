import {CHANGE_TITLE} from './type';

const INITIAL_STATE = {
	title: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_TITLE:
			return { ...state, title: action.title };
	}

	return state;
};
