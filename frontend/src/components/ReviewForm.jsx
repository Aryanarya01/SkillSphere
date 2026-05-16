
import React, { useState } from 'react'

const ReviewForm = ({  receiverId,
  jobId,}) => {

    const [rating, setRating] = useState(5);
    const [comment,setComment] = useState("");

  return (
    <div className='bg-white rounded-2xl shadow-md p-6 mt-10'>
        <h2 className='text-2xl font-bold mb-6'>Leave a Review</h2>
        <form className='space-y-5' >
            <div>
                <label className='block mb-2 font-medium'>Rating</label>
                <select className='w-full border border-gray-300 rounded-xl p-4'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <label className='block mb-2 font-medium'>Comment</label>
                <textarea className='w-full border border-gray-300 rounded-xl p-4'/>
            </div>

            <button className='bg-black text-white px-6 py-3 rounded-xl font-semibold'>Submit Review</button>
        </form>
    </div>
  )
}

export default ReviewForm