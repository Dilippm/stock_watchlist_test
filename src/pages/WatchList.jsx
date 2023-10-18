import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchlist } from "../store/action";

const WatchList = () => {
  const dispatch = useDispatch();
  const watchlists = useSelector((state) => state.watchlist);
  const data = watchlists.addedItems;

  const handleDeleteFromWatchlist = (index) => {
    dispatch(removeFromWatchlist(index));
  };

  return (
    <div>
      <h1>Watchlist TABLE</h1>
      <div className="cardTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Market Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteFromWatchlist(index)}
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No items in your watchlist</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;
