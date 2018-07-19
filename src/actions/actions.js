import uuid from 'uuid';
import * as constants from '../constants/index.js';

export function addComment(text) {
	return {
		type: constants.ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

export function editComment(text, id)  {
	return {
		type: constants.EDIT_COMMENT,
		text,
		id
	}
};

export function removeComment(id) {
	return {
		type: constants.REMOVE_COMMENT,
		id
	}
};

export function thumbUpComment(id) {
    return {
        type: constants.THUMB_UP_COMMENT,
        id,
    }
};

export function thumbDownComment(id) {
    return {
        type: constants.THUMB_DOWN_COMMENT,
        id,
    }
};