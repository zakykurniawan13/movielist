const initialState = {
    dataMovie: []
}
const GlobalReducer = (state = initialState, action) => {
switch (action.type) {
    case 'MOVIEREDUCER':
        return {
            ...state,
            dataMovie: action.payload,
        };
    default:
            return state;
}
};
export default GlobalReducer;