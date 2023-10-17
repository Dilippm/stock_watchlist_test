export const addToWatchlist = (item) => {
    return {
      type: 'ADD_TO_WATCHLIST',
      payload: item,
    };
  };
  
  export const removeFromWatchlist = (index) => {
    return {
      type: 'REMOVE_FROM_WATCHLIST',
      payload: index,
    };
  }