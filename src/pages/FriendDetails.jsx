// 

import {
  FaPhoneAlt,
  FaComment,
  FaVideo,
  FaArchive,
  FaTrash,
} from "react-icons/fa";

const FriendDetails = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">

      <div className="grid md:grid-cols-3 gap-6">

        {/* Left */}
        <div>

          <div className="bg-white rounded-lg shadow p-6 text-center">

            <img
              src="https://i.pravatar.cc/120?img=5"
              className="w-20 h-20 rounded-full mx-auto"
            />

            <h2 className="font-bold mt-3">
              Emma Wilson
            </h2>

            <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
              Overdue
            </span>

            <div className="mt-2">
              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                Friend
              </span>
            </div>

            <p className="italic text-gray-500 mt-4 text-sm">
              "Former colleague, great mentor"
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Preferred: email
            </p>

          </div>

          <button className="w-full mt-3 border rounded py-3 text-sm">
            Snooze 2 Weeks
          </button>

          <button className="w-full mt-3 border rounded py-3 text-sm flex justify-center items-center gap-2">
            <FaArchive />
            Archive
          </button>

          <button className="w-full mt-3 border rounded py-3 text-red-500 flex justify-center items-center gap-2">
            <FaTrash />
            Delete
          </button>

        </div>

        {/* Right */}

        <div className="md:col-span-2">

          <div className="grid grid-cols-3 gap-4">

            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h2 className="text-3xl font-bold text-[#244D3F]">
                62
              </h2>

              <p className="text-gray-500 text-sm">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h2 className="text-3xl font-bold text-[#244D3F]">
                30
              </h2>

              <p className="text-gray-500 text-sm">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h2 className="text-xl font-bold text-[#244D3F]">
                Feb 27, 2026
              </h2>

              <p className="text-gray-500 text-sm">
                Next Due
              </p>
            </div>

          </div>

          {/* Goal */}

          <div className="bg-white shadow rounded-lg p-6 mt-5">

            <div className="flex justify-between">

              <h2 className="font-semibold">
                Relationship Goal
              </h2>

              <button className="border rounded px-3 text-sm">
                Edit
              </button>

            </div>

            <p className="text-gray-600 mt-3">
              Connect every 30 days
            </p>

          </div>

          {/* Quick Check */}

          <div className="bg-white shadow rounded-lg p-6 mt-5">

            <h2 className="font-semibold mb-4">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-3 gap-4">

              <button className="border rounded-lg py-6 flex flex-col items-center gap-2 hover:bg-gray-50">
                <FaPhoneAlt />
                <span>Call</span>
              </button>

              <button className="border rounded-lg py-6 flex flex-col items-center gap-2 hover:bg-gray-50">
                <FaComment />
                <span>Text</span>
              </button>

              <button className="border rounded-lg py-6 flex flex-col items-center gap-2 hover:bg-gray-50">
                <FaVideo />
                <span>Video</span>
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FriendDetails;