import "./NodeMetrics.css";
import { groupBy } from "../helpers";
import { ClusterType } from "../types";

type NodeMetricsProps = {
  data: ClusterType[];
  clusterId: string;
};

type DataByStage = {
  running?: ClusterType[];
  loading?: ClusterType[];
  waiting?: ClusterType[];
};

export const NodeMetrics = ({ data, clusterId }: NodeMetricsProps) => {
  const dataByStage = groupBy(data, (data: ClusterType) =>
    data.stage.toLowerCase()
  ) as DataByStage;

  const running = dataByStage.running ? dataByStage.running.length : 0;
  const loading = dataByStage.loading ? dataByStage.loading.length : 0;
  const waiting = dataByStage.waiting ? dataByStage.waiting.length : 0;
  const total = running + loading + waiting;

  return (
    <div className="mainContainer" key={clusterId}>
      <div className="totalContainer">
        <h1>{total}</h1>
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
