import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import FriendModal from "./FriendModal";
import Navbar from "./Navbar";
import Footer from "./Footer";

const friends = [
  {
    id: 1,
    name: "David Kim",
    email: "david@example.com",
    status: "On Track",
    color: "bg-green-100 text-green-700",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Emma Wilson",
    email: "emma@example.com",
    status: "Overdue",
    color: "bg-red-100 text-red-700",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Lisa Nakamura",
    email: "lisa@example.com",
    status: "On Track",
    color: "bg-green-100 text-green-700",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 4,
    name: "James Wright",
    email: "james@example.com",
    status: "Almost Due",
    color: "bg-yellow-100 text-yellow-700",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david@example.com",
    status: "On Track",
    color: "bg-green-100 text-green-700",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 6,
    name: "Emma Wilson",
    email: "emma@example.com",
    status: "Overdue",
    color: "bg-red-100 text-red-700",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 7,
    name: "Lisa Nakamura",
    email: "lisa@example.com",
    status: "On Track",
    color: "bg-green-100 text-green-700",
    image: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: 8,
    name: "James Wright",
    email: "james@example.com",
    status: "Almost Due",
    color: "bg-yellow-100 text-yellow-700",
    image: "https://i.pravatar.cc/150?img=25",
  },
];

const Home = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800">
            Friends to keep close in your life
          </h1>

          <p className="text-gray-500 mt-3">
            Your personal CRM of meaningful connections. Browse, blend and
            nurture the relationships that matter most.
          </p>

          <button className="mt-6 bg-[#244D3F] hover:bg-[#1f4034] text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto">
            <FaPlus />
            Add Friend
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
            <p className="text-gray-500 mt-2">Total Friends</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-3xl font-bold text-[#244D3F]">3</h2>
            <p className="text-gray-500 mt-2">On Track</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
            <p className="text-gray-500 mt-2">Need Attention</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-3xl font-bold text-[#244D3F]">12</h2>
            <p className="text-gray-500 mt-2">
              Interactions This Month
            </p>
          </div>
        </div>

        {/* Friend Section */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-8">Your Friends</h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {friends.map((friend) => (
              <div
                key={friend.id}
                onClick={() => setSelectedFriend(friend)}
                className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition"
              >
                <img
                  src={friend.image}
                  alt={friend.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />

                <h3 className="mt-4 font-bold text-lg">{friend.name}</h3>

                <p className="text-gray-500 text-sm">{friend.email}</p>

                <span
                  className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-semibold ${friend.color}`}
                >
                  {friend.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <FriendModal
          friend={selectedFriend}
          onClose={() => setSelectedFriend(null)}
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;