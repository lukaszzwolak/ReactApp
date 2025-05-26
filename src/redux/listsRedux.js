import shortid from 'shortid';

// SELECTORS
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = ({ lists }) => lists;

// ACTIONS
const createActionName = name => `app/lists/${name}`;
const ADD_LIST = createActionName('ADD_LIST');

// ACTION CREATORS
export const addList = payload => ({ type: ADD_LIST, payload });

// REDUCER
const listsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_LIST:
            return [...statePart, { ...action.payload, id: shortid() }];
        default:
            return statePart;
    }
};

export default listsReducer;
