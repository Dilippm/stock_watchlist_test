import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchlist } from "../store/action";
import Pagination from "../components/Pagination";

const WatchList = ({ itemsPerPage }) => {
  const dispatch = useDispatch();
  const watchlists = useSelector((state) => state.watchlist);
  const data = watchlists.addedItems;
  const [currentPage, setCurrentPage] = useState(1);

  const handleDeleteFromWatchlist = (index) => {
    dispatch(removeFromWatchlist(index));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
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
        <Pagination
          totalItems={data.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default WatchList;
