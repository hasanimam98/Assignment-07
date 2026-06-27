
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Timeline() {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("timeline")) || [];

    setTimeline(stored.reverse());
  }, []);

  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">
          Timeline
        </h1>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setFilter("All")}
            className="px-4 py-2 border rounded"
          >
            All
          </button>

          <button
            onClick={() => setFilter("Call")}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Call
          </button>

          <button
            onClick={() => setFilter("Text")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Text
          </button>

          <button
            onClick={() => setFilter("Video")}
            className="px-4 py-2 bg-purple-500 text-white rounded"
          >
            Video
          </button>
        </div>

        {filteredData.length === 0 ? (
          <p>No timeline entries yet.</p>
        ) : (
          <div className="space-y-4">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-4 shadow"
              >
                <h2 className="font-semibold text-lg">
                  {item.title}
                </h2>

                <p className="text-gray-500">
                  {item.date}
                </p>

                <span className="inline-block mt-2 px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;