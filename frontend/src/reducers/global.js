import { CHANGE_TITLE, GET_EXPERT } from '../actions/type';

const INITIAL_STATE = {
	title: '',
	expert: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_TITLE:
			return { ...state, title: action.title };
		case GET_EXPERT:
			return {...state, expert: action.person};
		default:
			return state;
	}
};
