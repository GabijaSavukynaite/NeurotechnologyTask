export const groupBy = <T>(
  data: Array<T>,
  property: (x: T) => string
): { [key: string]: Array<T> } =>
  data.reduce((acc: { [key: string]: Array<T> }, x: T) => {
    if (!acc[property(x)]) {
      acc[property(x)] = [];
    }
    acc[property(x)].push(x);
    return acc;
  }, {});
