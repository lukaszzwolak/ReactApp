import shortid from 'shortid';

// SELECTORS
export const getAllColumns = ({ columns }) => columns;
export const getColumnsByList = ({ columns }, listId) =>
    columns.filter(column => column.listId === listId);

// ACTIONS
const createActionName = name => `app/columns/${name}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

// ACTION CREATORS
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

// REDUCER
const columnsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_COLUMN:
            return [...statePart, { ...action.payload, id: shortid() }];
        default:
            return statePart;
    }
};

export default columnsReducer;
