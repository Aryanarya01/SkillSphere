import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async()=>{
        try{

        }catch(err){
            console.log(err);
            toast.err("Error fetching");
        }
    }
  return (
    <div>Reviews</div>
  )
}

export default Reviews