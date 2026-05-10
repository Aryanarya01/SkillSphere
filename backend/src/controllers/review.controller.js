import Review from "../models/reviews.model.js";

 

export const createReview = async (req, res) => {
  try {
    const { receiver, job, rating, comment } = req.body;
    const review = await Review.create({
      reviewer: req.user._id,
      receiver,
      job,
      rating,
      comment,
    });

    return res
      .status(201)
      .json({ message: "Review added successfully", review });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getUserReview = async (req, res) => {
  try {
    const reviews = await Review.find({
      receiver: req.params.userId,
    })
      .popolate("reviewer", "name profilePicture")
      .popolate("job", "title");

    return res.status(200).json({ reviews });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
