import React, { useEffect, useState } from "react";
import { NodeMetrics } from "./NodeMetrics";
import { ClusterType } from "../types";
import { groupBy } from "../helpers";

export const ClusterNodeMetrics = () => {
  const [data, setData] = useState<ClusterType[]>([]);
  const [fetchDataError, setFetchDataError] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const renderNodeMetrics = (fetchedData: ClusterType[]): JSX.Element[] => {
    const dataByClusterId = groupBy(
      fetchedData,
      (cluserData: ClusterType) => cluserData.clusterId
    );

    const nodeMetrics = [];

    for (const clusterId in dataByClusterId) {
      nodeMetrics.push(
        <NodeMetrics data={dataByClusterId[clusterId]} clusterId={clusterId} />
      );
    }
    return nodeMetrics;
  };

  useEffect(() => {
    setLoadingData(true);
    fetch("http://localhost:8080")
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
  }, []);

  return (
    <div>
      {loadingData ? (
        <h1>Loading ...</h1>
      ) : !fetchDataError ? (
        renderNodeMetrics(data)
      ) : (
        <h1>Could not get data</h1>
      )}
    </div>
  );
};
