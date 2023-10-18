import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Card from "../components/Card";
const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const delay = 1000;
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      axios
        .get(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${debouncedSearchTerm}&apikey=${apiKey}`
        )

        .then(async (response) => {
         
          const bestMatches = response.data.bestMatches;

          const updatedSearchResults = bestMatches
            ? await Promise.all(
                bestMatches.map(async (match) => {
                  const additionalData = await fetchAdditionalData(
                    match["1. symbol"]
                  );

                  return {
                    name: match["2. name"],
                    additionalData: additionalData,
                  };
                })
              )
            : [];
          setSearchResults(updatedSearchResults);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const fetchAdditionalData = async (symbol) => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
      );
  
      const timeSeriesData = response.data["Time Series (Daily)"];
      const dateKeys = Object.keys(timeSeriesData);
      const latestDate = dateKeys[0];
      const latestData = timeSeriesData[latestDate];

      const openValue = latestData["1. open"];

      return openValue;
    } catch (error) {
      console.error("Error fetching additional data:", error);
      return null;
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} />

      <Card searchResults={searchResults} />
    </div>
  );
};

export default Home;
