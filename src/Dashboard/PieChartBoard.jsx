import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

let detailedData = [
  { name: "Spy", value: 0 },
  { name: "Adventure", value: 0 },
  { name: "Action", value: 0 },
  { name: "Thriller", value: 0 },
  { name: "Drama", value: 0 },
  { name: "Sci-Fi", value: 0 },
  { name: "Crime", value: 0 },
  { name: "Horror", value: 0 },
  { name: "Mystery", value: 0 },
  { name: "Superhero", value: 0 },
  { name: "Fantasy", value: 0 },
];
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#4f46e5",
  "#f97316",
  "#ec4899",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#eab308",
  "#e5e7eb",
];
function PieChartBoard({ data }) {
  function moreDetailedData(arr, field) {
    let simplifiedData = "";
    for (let i = 0; i < field.length; i++) {
      if (i === 0) {
        simplifiedData = arr.map((s) =>
          s.name === field[0] ? { ...s, value: s.value + 1 } : { ...s }
        );
      }
      if (i === 1) {
        simplifiedData = simplifiedData.map((s) =>
          s.name === field[1] ? { ...s, value: s.value + 1 } : { ...s }
        );
      }
      if (i === 2) {
        simplifiedData = simplifiedData.map((s) =>
          s.name === field[2] ? { ...s, value: s.value + 1 } : { ...s }
        );
      }
      if (i === 3) {
        simplifiedData = simplifiedData.map((s) =>
          s.name === field[2] ? { ...s, value: s.value + 1 } : { ...s }
        );
      }
      if (i === 4) {
        simplifiedData = simplifiedData.map((s) =>
          s.name === field[2] ? { ...s, value: s.value + 1 } : { ...s }
        );
      }
      if (i === 5) {
        simplifiedData = simplifiedData.map((s) =>
          s.name === field[2] ? { ...s, value: s.value + 1 } : { ...s }
        );
      }
      if (i === 5) {
        simplifiedData = simplifiedData.map((s) =>
          s.name === field[2] ? { ...s, value: s.value + 1 } : { ...s }
        );
      }
    }
    return simplifiedData;
  }

  const reducedData = data
    ?.reduce((arr, curr, i) => {
      const e = curr.category.map((s) => s.category);
      //console.log(e);
      if (i === 0) return moreDetailedData(arr, e);
      if (i === 1) return moreDetailedData(arr, e);
      if (i === 2) return moreDetailedData(arr, e);
      if (i === 3) return moreDetailedData(arr, e);
      if (i === 4) return moreDetailedData(arr, e);
      if (i === 5) return moreDetailedData(arr, e);
      if (i === 6) return moreDetailedData(arr, e);
      if (i === 7) return moreDetailedData(arr, e);
      if (i === 8) return moreDetailedData(arr, e);
      if (i === 9) return moreDetailedData(arr, e);

      return arr;
    }, detailedData)
    .filter((s) => s.value > 0);

  console.log(reducedData);
  return (
    <ResponsiveContainer width="100%" height="96%">
      <PieChart>
        <Pie
          data={reducedData}
          cx={200}
          cy={170}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {reducedData?.map((entry, index) => (
            <Cell
              key={`cell-${entry.index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="middle"
          align="right"
          width="30%"
          layout="vertical"
          iconSize={12}
          textDecoration={"none"}
          iconType="square"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartBoard;
