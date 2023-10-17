import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../store/action";
import "./card.css";
import Pagination from "./Pagination";

const Card = ({ searchResults, itemsPerPage }) => {
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.watchlist.addedItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState("");

  const handleAddToWatchlist = (item) => {
    if (addedItems.includes(item.name)) {
      setMessage("Item is already in the watchlist.");
    } else {
      dispatch(addToWatchlist({ name: item.name, price: item.additionalData }));
      setMessage("Item added to the watchlist.");
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>STOCK TABLE</h1>
      <div className="cardTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Market Price</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((result, index) => (
              <tr key={index}>
                <td>{result.name}</td>
                <td>{result.additionalData}</td>
                <td>
                  <button onClick={() => handleAddToWatchlist(result)}>Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={searchResults.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
      <p style={{ fontWeight: "bold" }}>{message}</p>
    </div>
  );
};

export default Card;
