import api from "./api"

const postApi = {
  getFastPosts({
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
  }
}

export default postApi