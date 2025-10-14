import BlogPost from "../models/BlogPost.js";

export const getAllBlogs = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 12 } = req.query;

    const query = { status: "published" };

    if (category && category !== "all") {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { tags: { $in: [new RegExp(search, "i")] } },
      ];
    }

    const blogs = await BlogPost.find(query)
      .populate("author", "username email")
      .sort({ publishedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await BlogPost.countDocuments(query);

    res.json({
      blogs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await BlogPost.findOne({
      slug: req.params.slug,
      status: "published",
    }).populate("author", "username email");

    if (blog) {
      blog.views += 1;
      await blog.save();
      res.json(blog);
    } else {
      res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id).populate(
      "author",
      "username email"
    );

    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, content, excerpt, category, tags, featuredImage, status } =
      req.body;

    const blog = await BlogPost.create({
      title,
      content,
      excerpt,
      category,
      tags,
      featuredImage,
      status,
      author: req.admin._id,
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);

    if (blog) {
      blog.title = req.body.title || blog.title;
      blog.content = req.body.content || blog.content;
      blog.excerpt = req.body.excerpt || blog.excerpt;
      blog.category = req.body.category || blog.category;
      blog.tags = req.body.tags || blog.tags;
      blog.featuredImage = req.body.featuredImage || blog.featuredImage;
      blog.status = req.body.status || blog.status;

      const updatedBlog = await blog.save();
      res.json(updatedBlog);
    } else {
      res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);

    if (blog) {
      await blog.deleteOne();
      res.json({ message: "Blog post removed successfully" });
    } else {
      res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllBlogsAdmin = async (req, res) => {
  try {
    const { status, category, page = 1, limit = 10 } = req.query;

    const query = {};

    if (status) {
      query.status = status;
    }

    if (category && category !== "all") {
      query.category = category;
    }

    const blogs = await BlogPost.find(query)
      .populate("author", "username email")
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await BlogPost.countDocuments(query);

    res.json({
      blogs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const likeBlog = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);

    if (blog) {
      blog.likes += 1;
      await blog.save();
      res.json({ likes: blog.likes });
    } else {
      res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBlogStats = async (req, res) => {
  try {
    const totalBlogs = await BlogPost.countDocuments();
    const publishedBlogs = await BlogPost.countDocuments({
      status: "published",
    });
    const draftBlogs = await BlogPost.countDocuments({ status: "draft" });
    const totalViews = await BlogPost.aggregate([
      { $group: { _id: null, total: { $sum: "$views" } } },
    ]);
    const totalLikes = await BlogPost.aggregate([
      { $group: { _id: null, total: { $sum: "$likes" } } },
    ]);

    res.json({
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      totalViews: totalViews[0]?.total || 0,
      totalLikes: totalLikes[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
