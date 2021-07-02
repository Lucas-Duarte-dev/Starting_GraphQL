import Post from "../../../entities/Post";
import User from "../../../entities/User";

export default {
  Post: {
    author: (post) => User.findById(post.author),
  },

  Query: {
    posts: () => Post.find(),
    post: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { id, data }) =>
      Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  },
};
