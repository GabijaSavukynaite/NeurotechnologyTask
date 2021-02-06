import React, { useEffect, useState } from "react";
import { GoldPrice } from "../types";
import { LineChart } from "./LineChart";
import { Typography, CircularProgress, Paper } from "@material-ui/core";

export const GoldPrices = () => {
  const [data, setData] = useState<GoldPrice[]>([]);
  const [fetchDataError, setFetchDataError] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    // const intervalId = setInterval(() => {
    setLoadingData(true);
    fetch("http://localhost:8080/goldPrices")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch data");
        }
        return response.json();
      })
      .then((fetchedData) => {
        if (fetchDataError) {
          setFetchDataError(false);
        }
        setData(fetchedData);
      })
      .catch(() => setFetchDataError(true))
      .finally(() => setLoadingData(false));
    // }, 1000);

    // return () => clearInterval(intervalId);
  }, []);

  return (
    <Paper>
      {loadingData ? (
        <CircularProgress />
      ) : !fetchDataError ? (
        <LineChart data={data} />
      ) : (
        <Typography>Could not get data</Typography>
      )}
    </Paper>
  );
};
