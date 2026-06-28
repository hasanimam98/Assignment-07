import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaPhone,
  FaCommentDots,
  FaVideo,
  FaClock,
  FaArchive,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id } = useParams();

  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedFriend = data.find(
          (item) => item.id === Number(id)
        );
        setFriend(selectedFriend);
      });
  }, [id]);

  
  const addTimeline = (type) => {
    const oldTimeline =
      JSON.parse(localStorage.getItem("timeline")) || [];

    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "timeline",
      JSON.stringify([newEntry, ...oldTimeline])
    );

    toast.success(`${type} Logged Successfully`);
  };

  if (!friend) {
    return (
      <div className="text-center py-20 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      <div className="grid md:grid-cols-3 gap-8">

        
        <div className="bg-white shadow rounded-xl p-6">

          <img
            src={friend.picture}
            alt={friend.name}
            className="w-32 h-32 rounded-full mx-auto"
          />

          <h2 className="text-2xl font-bold text-center mt-4">
            {friend.name}
          </h2>

          <p className="text-center text-gray-500">
            {friend.email}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <span
            className={`block text-center mt-4 px-3 py-2 rounded-full ${
              friend.status === "overdue"
                ? "bg-red-100 text-red-700"
                : friend.status === "almost due"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {friend.status}
          </span>

          <p className="mt-5 text-gray-600">
            {friend.bio}
          </p>

          <div className="space-y-3 mt-8">

            <button className="w-full bg-yellow-100 py-3 rounded-lg flex justify-center items-center gap-2">
              <FaClock />
              Snooze 2 Weeks
            </button>

            <button className="w-full bg-gray-200 py-3 rounded-lg flex justify-center items-center gap-2">
              <FaArchive />
              Archive
            </button>

            <button className="w-full bg-red-100 text-red-600 py-3 rounded-lg flex justify-center items-center gap-2">
              <FaTrash />
              Delete
            </button>

          </div>

        </div>

        
        <div className="md:col-span-2 space-y-6">

          
          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h2 className="text-3xl font-bold text-[#244D3F]">
                {friend.days_since_contact}
              </h2>
              <p>Days Since Contact</p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h2 className="text-3xl font-bold text-[#244D3F]">
                {friend.goal}
              </h2>
              <p>Goal (Days)</p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold text-[#244D3F]">
                {friend.next_due_date}
              </h2>
              <p>Next Due Date</p>
            </div>

          </div>

          
          <div className="bg-white shadow rounded-xl p-6">

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-bold">
                Relationship Goal
              </h2>

              <button className="flex items-center gap-2 text-[#244D3F]">
                <FaEdit />
                Edit
              </button>

            </div>

            <p className="mt-4 text-gray-600">
              Contact every <b>{friend.goal}</b> days to keep the relationship healthy.
            </p>

          </div>

         
          <div className="bg-white shadow rounded-xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-3 gap-4">

              <button
                onClick={() => addTimeline("Call")}
                className="bg-green-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-green-700"
              >
                <FaPhone />
                Call
              </button>

              <button
                onClick={() => addTimeline("Text")}
                className="bg-blue-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-blue-700"
              >
                <FaCommentDots />
                Text
              </button>

              <button
                onClick={() => addTimeline("Video")}
                className="bg-purple-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-purple-700"
              >
                <FaVideo />
                Video
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FriendDetails;