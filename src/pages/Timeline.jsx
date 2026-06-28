import { useEffect, useState } from "react";
import { FaPhone, FaCommentDots, FaVideo } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("timeline")) || [];

    setTimeline(data);
  }, []);

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold mb-8">
          Timeline
        </h1>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8">

          <button
            onClick={() => setFilter("All")}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            All
          </button>

          <button
            onClick={() => setFilter("Call")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Call
          </button>

          <button
            onClick={() => setFilter("Text")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Text
          </button>

          <button
            onClick={() => setFilter("Video")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
          >
            Video
          </button>

        </div>

        {filteredTimeline.length === 0 ? (
          <div className="bg-white shadow rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold">
              No interactions yet.
            </h2>
          </div>
        ) : (
          <div className="space-y-5">

            {filteredTimeline.map((item) => (

              <div
                key={item.id}
                className="bg-white shadow rounded-xl p-5 flex items-center gap-5"
              >

                <div className="text-3xl text-[#244D3F]">

                  {item.type === "Call" && <FaPhone />}

                  {item.type === "Text" && <FaCommentDots />}

                  {item.type === "Video" && <FaVideo />}

                </div>

                <div>

                  <h2 className="text-lg font-bold">
                    {item.title}
                  </h2>

                  <p className="text-gray-500">
                    {item.date}
                  </p>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

      <Footer />

    </>
  );
};

export default Timeline;