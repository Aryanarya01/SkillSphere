import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import clientServer from '../api/client';

const Reviews = () => {
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
    <div>Reviews</div>
  )
}

export default Reviews