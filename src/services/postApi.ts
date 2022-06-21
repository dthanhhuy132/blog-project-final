import { Post } from "../components/interface"
import api from "./api"

const postApi = {
  getFastPosts({
    _limit = 7,
    _page = 1,
    _sort='createdAt',
    _order='desc',
    ...restParams
  } = {}) {
    const params = {
      _limit,
      _page,
      _sort,
      _order,
      ...restParams
    }

    return api.get('/fastposts', {
      params
    })
  },

  getPosts({
    _limit = 10,
    _page = 1,
    _sort='createdAt',
    _order='desc',
    ...restParams
  } = {}) {
    const params = {
      _limit,
      _page,
      _sort,
      _order,
      ...restParams
    }

    return api.get('/posts', {
      params
    })
  },

  getPostDetail(postSlug:string) {
    const params = {
      slug: postSlug
    }
    return api.get('/posts', {
      params
    })
  },

  udpatePost(editPost:any) {
    return api.patch(`/posts/${editPost.id}`, editPost )
  },

  deletePost(editPost:any) {
    return api.delete(`/posts/${editPost.id}` )
  },

  createPost(newPost:any) {
    return api.post('/posts', newPost)
  }
}

export default postApi