export const createJob = async (req, res) => {
  try {
    const { title, description, budget, skillsRequired, deadline } = req.body;
    if (!title || !description || !budget) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
