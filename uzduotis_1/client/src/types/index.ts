export type ClusterType = {
  id: number;
  ipAddress: string;
  clusterId: string;
  stage: "WAITING" | "RUNNING" | "LOADING";
};
