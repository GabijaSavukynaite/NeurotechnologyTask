import "./NodeMetrics.css";
import { groupBy } from "../helpers";

type ClusterType = {
  id: number;
  ipAddress: string;
  clusterId: string;
  stage: "WAITING" | "RUNNING" | "LOADING";
};

const data: ClusterType[] = [
  {
    id: 100,
    ipAddress: "172.16.0.188",
    clusterId: "A1",
    stage: "WAITING",
  },
  {
    id: 101,
    ipAddress: "172.16.0.189",
    clusterId: "A1",
    stage: "RUNNING",
  },
  {
    id: 102,
    ipAddress: "172.16.0.186",
    clusterId: "A1",
    stage: "WAITING",
  },
  {
    id: 103,
    ipAddress: "172.16.0.184",
    clusterId: "A1",
    stage: "LOADING",
  },
  {
    id: 104,
    ipAddress: "172.16.0.183",
    clusterId: "A1",
    stage: "WAITING",
  },
];

export const NodeMetrics = () => {
  const dataByStage = groupBy(data, (data: ClusterType) =>
    data.stage.toLowerCase()
  );
  const running = dataByStage.running.length;
  const loading = dataByStage.loading.length;
  const waiting = dataByStage.waiting.length;
  const total = running + loading + waiting;

  return (
    <div className="mainContainer">
      <div className="totalContainer">
        <h1 className="totalCount">{total}</h1>
        <h2>Total</h2>
      </div>
      <div className="metricsContainer">
        <h1>{running}</h1>
        <h2>Running</h2>
      </div>
      <div className="metricsContainer">
        <h1>{loading}</h1>
        <h2>Loading</h2>
      </div>
      <div className="metricsContainer">
        <h1>{waiting}</h1>
        <h2>Waiting</h2>
      </div>
    </div>
  );
};
