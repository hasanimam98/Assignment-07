const FriendModal = ({ friend, onClose }) => {
  if (!friend) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-[800px] p-8 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl font-bold text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <div className="flex gap-8">

          {/* Left Profile Card */}
          <div className="w-1/3 border rounded-xl p-6 text-center">

            <img
              src={friend.image}
              alt={friend.name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />

            <h2 className="text-2xl font-bold mt-4">
              {friend.name}
            </h2>

            <p className="text-gray-500 mt-1">
              {friend.email}
            </p>

            <span
              className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-semibold ${friend.color}`}
            >
              {friend.status}
            </span>

          </div>

          {/* Right Side */}
          {/* Right Side */}
<div className="flex-1">

  {/* Stats */}
  <div className="grid grid-cols-3 gap-4">

    <div className="bg-gray-50 border rounded-xl p-5 text-center">
      <h2 className="text-3xl font-bold text-[#244D3F]">62</h2>
      <p className="text-sm text-gray-500 mt-2">
        Days Since Contact
      </p>
    </div>

    <div className="bg-gray-50 border rounded-xl p-5 text-center">
      <h2 className="text-3xl font-bold text-[#244D3F]">30</h2>
      <p className="text-sm text-gray-500 mt-2">
        Goal (Days)
      </p>
    </div>

    <div className="bg-gray-50 border rounded-xl p-5 text-center">
      <h2 className="text-lg font-bold text-[#244D3F]">
        Feb 27, 2026
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Next Due
      </p>
    </div>

  </div>

  {/* Relationship Goal */}
  <div className="mt-6 border rounded-xl p-5">

    <div className="flex justify-between items-center">
      <h2 className="font-semibold text-lg">
        Relationship Goal
      </h2>

      <button className="border px-3 py-1 rounded">
        Edit
      </button>
    </div>

    <p className="text-gray-600 mt-4">
      Connect every 30 days and catch up over coffee.
    </p>

  </div>

  {/* Quick Check-In */}
  <div className="mt-6 border rounded-xl p-5">

    <h2 className="font-semibold text-lg mb-5">
      Quick Check-In
    </h2>

    <div className="grid grid-cols-3 gap-4">

      <button className="border rounded-lg py-5 hover:bg-gray-100">
        📞
        <p>Call</p>
      </button>

      <button className="border rounded-lg py-5 hover:bg-gray-100">
        💬
        <p>Text</p>
      </button>

      <button className="border rounded-lg py-5 hover:bg-gray-100">
        🎥
        <p>Video</p>
      </button>

    </div>

  </div>

</div>

        </div>

      </div>
    </div>
  );
};

export default FriendModal;