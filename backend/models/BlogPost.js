import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: [200, "Title cannot exceed 200 characters"],
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  excerpt: {
    type: String,
    maxlength: [500, "Excerpt cannot exceed 500 characters"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: [
      "Python",
      "Java",
      "Web Technology",
      "Database",
      "Trending Technology",
      "AI/ML",
      "Cloud",
      "DevOps",
      "Other",
    ],
  },
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
  featuredImage: {
    type: String,
    default: "https://via.placeholder.com/800x400",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
  status: {
    type: String,
    enum: ["draft", "published", "archived"],
    default: "draft",
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  publishedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Generate slug from title
blogPostSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  this.updatedAt = Date.now();
  next();
});

// Update publishedAt when status changes to published
blogPostSchema.pre("save", function (next) {
  if (
    this.isModified("status") &&
    this.status === "published" &&
    !this.publishedAt
  ) {
    this.publishedAt = Date.now();
  }
  next();
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
