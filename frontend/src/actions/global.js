import {CHANGE_TITLE, GET_EXPERT} from './type';

export const title = (title) => ({
    type: CHANGE_TITLE,
    title,
});

export const expert = (person) => ({
    type: GET_EXPERT,
    person,
})