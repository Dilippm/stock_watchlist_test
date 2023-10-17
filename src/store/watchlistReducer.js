const initialState = {
    addedItems: [],
  };
  
  const watchlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_WATCHLIST':
        return {
          ...state,
          addedItems: [...state.addedItems, action.payload],
        };
      case 'REMOVE_FROM_WATCHLIST':
        const updatedItems = [...state.addedItems];
        updatedItems.splice(action.payload, 1);
        return {
          ...state,
          addedItems: updatedItems,
        };
      default:
        return state;
    }
  };
  
  export default watchlistReducer;