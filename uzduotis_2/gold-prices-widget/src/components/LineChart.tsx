import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { GoldPrice } from "../types";

type LineChartProps = {
  data: GoldPrice[];
};

const format = () => (tick: string) => tick;

const ValueLabel = (props: ValueAxis.LabelProps) => {
  const { text } = props;
  return <ValueAxis.Label {...props} text={`${text}$`} />;
};

export const LineChart = ({ data }: LineChartProps) => {
  return (
    <Chart data={data}>
      <ArgumentAxis tickFormat={format} />
      <ValueAxis labelComponent={ValueLabel} />
      <LineSeries name="Gold prices" valueField="price" argumentField="year" />
      <Title text="Gold Price Per Ounce" />
    </Chart>
  );
};
