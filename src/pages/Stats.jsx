import Navbar from "./Navbar";
import Footer from "./Footer";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const timeline =
  JSON.parse(localStorage.getItem("timeline")) || [];

const callCount = timeline.filter(
  (item) => item.type === "Call"
).length;

const textCount = timeline.filter(
  (item) => item.type === "Text"
).length;

const data = [
  {
    name: "Text",
    value: textCount,
  },
  {
    name: "Call",
    value: callCount,
  },
  {
    name: "Video",
    value: videoCount,
  },
];

const COLORS = [
  "#7C3AED",
  "#1F5A4A",
  "#34D399",
];

const Stats = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-12 px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-xl shadow p-10">

          <h3 className="text-sm text-gray-600 mb-6">
            By Interaction Type
          </h3>

          <div className="h-[380px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={4}
                >

      {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Stats;