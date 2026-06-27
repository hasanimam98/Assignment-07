
// import Navbar from "./Navbar";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// function Stats() {
//   const timeline =
//     JSON.parse(localStorage.getItem("timeline")) || [];

//   const data = [
//     {
//       name: "Call",
//       value: timeline.filter((item) => item.type === "Call").length,
//     },
//     {
//       name: "Text",
//       value: timeline.filter((item) => item.type === "Text").length,
//     },
//     {
//       name: "Video",
//       value: timeline.filter((item) => item.type === "Video").length,
//     },
//   ];

//   const COLORS = ["#22c55e", "#3b82f6", "#a855f7"];

//   return (
//     <div>
//       <Navbar />

//       <div className="max-w-5xl mx-auto p-6">
//         <h1 className="text-4xl font-bold text-center mb-10">
//           Friendship Analytics
//         </h1>

//         <div className="bg-white rounded-xl shadow p-6">
//           <ResponsiveContainer width="100%" height={400}>
//             <PieChart>
//               <Pie
//                 data={data}
//                 dataKey="value"
//                 outerRadius={140}
//                 label
//               >
//                 {data.map((entry, index) => (
//                   <Cell
//                     key={index}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>

//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stats;   



import Navbar from "./Navbar";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Stats() {
  const timeline = JSON.parse(localStorage.getItem("timeline") || "[]");

  const data = [
    {
      name: "Call",
      value: timeline.filter((i) => i.type === "Call").length,
    },
    {
      name: "Text",
      value: timeline.filter((i) => i.type === "Text").length,
    },
    {
      name: "Video",
      value: timeline.filter((i) => i.type === "Video").length,
    },
  ];

  const COLORS = ["#22c55e", "#3b82f6", "#a855f7"];

  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-10">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-xl shadow p-6">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie data={data} dataKey="value" outerRadius={140} label>
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Stats;