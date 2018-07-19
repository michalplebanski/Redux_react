import * as constants from '../constants/index.js';

function comments(state = [], action) {
    switch(action.type) {
        
        case constants.ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];

        case constants.REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

        case constants.EDIT_COMMENT:
            return state.map(comment => {
                return comment.id === action.id ? Object.assign({}, comment, { text: action.text }) : comment });

        case constants.THUMB_UP_COMMENT:
            return state.map(comment => { 
                return comment.id === action.id ? Object.assign({}, comment, { votes: comment.votes + 1 }) : comment });

        case constants.THUMB_DOWN_COMMENT:
            return state.map(comment => { 
                return comment.id === action.id ? Object.assign({}, comment, { votes: comment.votes - 1 }) : comment });

        default:
            return state;
    }
}

export default comments;