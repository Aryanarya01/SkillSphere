import Portfolio from "../models/portfolio.model";

export const createProject = async (req, res) => {
  try {
    const { title, description, technology, githubLink, liveLink } = req.body;
    const portfolio = await Portfolio.create({
      user: req.user._id,
      title,
      description,
      technology: technologies.split(","),
      githubLink,
      liveLink,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });
    return res.status(201).json({ portfolio });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};
