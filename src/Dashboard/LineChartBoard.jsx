import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function LineChartBoard({ data }) {
  const detailedData = [
    { year: 2025, value: 0 },
    { year: 2024, value: 0 },
    { year: 2023, value: 0 },
    { year: 2022, value: 0 },
    { year: 2005, value: 0 },
  ];

  function getYear(arr, year) {
    return arr.map((obj) =>
      obj.year === year ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const newData = data
    ?.reduce((arr, curr) => {
      const year = curr.year;
      if (year === 2025) return getYear(arr, 2025);
      if (year === 2024) return getYear(arr, 2024);
      if (year === 2023) return getYear(arr, 2023);
      if (year === 2022) return getYear(arr, 2022);
      if (year === 2021) return getYear(arr, 2021);
      if (year === 2020) return getYear(arr, 2020);
      if (year === 2005) return getYear(arr, 2005);

      return arr;
    }, detailedData)
    .filter((s) => s.value > 0);
  return (
    <ResponsiveContainer width="100%" height="94%">
      <AreaChart
        width={500}
        height={400}
        data={newData}
        margin={{
          top: 40,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" name="year" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
          name="Movies released"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default LineChartBoard;
