
import React from 'react'

const ReviewForm = () => {
  return (
    <div>
        <h2>Leave a Review</h2>
        <form >
            <div>
                <label>Rating</label>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <label>Comment</label>
                <textarea />
            </div>

            <button>Submit Review</button>
        </form>
    </div>
  )
}

export default ReviewForm