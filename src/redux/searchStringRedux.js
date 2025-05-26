// SELECTORS
export const getSearchString = ({ searchString }) => searchString;

// ACTIONS
const createActionName = name => `app/searchString/${name}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// ACTION CREATORS
export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRING, payload });

// REDUCER
const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCHSTRING:
            return action.payload;
        default:
            return statePart;
    }
};

export default searchStringReducer;
