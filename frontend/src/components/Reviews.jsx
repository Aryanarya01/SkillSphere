import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import clientServer from '../api/client';

const Reviews = ({userId}) => {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async()=>{
        try{
            const res = await clientServer.get(`/reviews/${userId}`);
            setReviews(res.data.reviews)
        }catch(err){
            console.log(err);
            toast.err("Error fetching");
        }
    }
    useEffect(()=>{
        fetchReviews();
    },[userId])

  return (
   <div className="mt-10">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">
        Reviews
      </h2>

      {/* Empty State */}
      {
        reviews.length === 0 && (

          <div className="bg-white rounded-2xl shadow-md p-8 text-center">

            <p className="text-gray-500">
              No reviews yet
            </p>

          </div>

        )
      }

      {/* Reviews */}
      <div className="space-y-5">

        {
          reviews.map((review) => (

            <div
              key={review._id}
              className="bg-white rounded-2xl shadow-md p-6"
            >

              {/* Reviewer */}
              <div className="flex items-center gap-4">

                <img
                  src={
                    review.reviewer
                      ?.profilePicture
                  }
                  alt="reviewer"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    {
                      review.reviewer
                        ?.name
                    }
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {
                      review.job
                        ?.title
                    }
                  </p>

                </div>

              </div>

              {/* Rating */}
              <div className="mt-4">

                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">

                  ⭐ {review.rating}/5

                </span>

              </div>

              {/* Comment */}
              <p className="mt-4 text-gray-700 leading-relaxed">

                {review.comment}

              </p>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default Reviews