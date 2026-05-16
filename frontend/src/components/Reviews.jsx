import React, { useState } from 'react'
import toast from 'react-hot-toast';
import clientServer from '../api/client';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async()=>{
        try{
            const res = await clientServer.get
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