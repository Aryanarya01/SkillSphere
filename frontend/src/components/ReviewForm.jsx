import React, { useState } from "react";
import toast from "react-hot-toast";
import clientServer from "../api/client.js";

const ReviewForm = ({ receiverId, jobId }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await clientServer.post("/reviews/create", {
        receiver: receiverId,

        job: jobId,

        rating,

        comment,
      });
      toast.success(res.data.message);

      setComment("");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">Leave a Review</h2>
      <form onSubmit={handelSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium">Comment</label>
          <textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
