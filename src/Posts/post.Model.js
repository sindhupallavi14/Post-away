import AppLevelErrHandling from "../ErrorHandling/appLevelErrHandling.middleware.js";

export default class PostModel {
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static getPosts() {
    return posts;
  }

  static getPostbyId(id) {
    const post = posts.find((p) => p.id == id);
    return post;
  }

  static getPostsbyUserId(userId) {
    return posts.filter((post) => post.userId == userId);
  }

  static addPost(userId, caption, imageUrl) {
    let newPost = new PostModel(posts.length + 1, userId, caption, imageUrl);
    posts.push(newPost);
    return newPost;
  }

  static delete(id, userId) {
    const postIdx = posts.findIndex((i) => i.id == id && i.userId == userId);

    if (postIdx == -1) {
      throw new AppLevelErrHandling("Post not found or Unauthorized", 400);
    } else {
      return posts.splice(postIdx, 1);
    }
  }

  static update(id, userId, caption, imageUrl) {
    const postIdx = posts.findIndex((i) => i.id == id && i.userId == userId);
    if (postIdx == -1) {
      throw new AppLevelErrHandling("Post not found or Unauthorized", 400);
    }

    if (caption) {
      posts[postIdx].caption = caption;
    }

    if (imageUrl) {
      posts[postIdx].imageUrl = imageUrl;
    }

    return posts[postIdx];
  }
}

var posts = [
  new PostModel(
    "1",
    "1",
    "Keep Smiling",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKTKRxs7vcQl69aefwMp3Y8oCBVJl4oE86g&s"
  ),
  new PostModel(
    "2",
    "1",
    "Smiling",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKTKRxs7vcQl69aefwMp3Y8oCBVJl4oE86g&s"
  ),
  new PostModel(
    "3",
    "2",
    "bloom",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKTKRxs7vcQl69aefwMp3Y8oCBVJl4oE86g&s"
  ),
];
