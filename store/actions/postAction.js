export const adding = (username, image, caption) => {
  return (dispatch, getState) => {
    const { posts } = getState().postReducer;
    console.log(posts);
    console.log(posts[posts.length - 1].id);
    dispatch({
      type: "ADD_POST",
      newPost: {
        id: posts[posts.length - 1].id + 1,
        username,
        imageUrl: image,
        caption,
        comments: [],
      },
    });
  };
};

export const getPostDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DETAIL_POST",
      id,
    });
  };
};

export const editPostDetail = (id, username, image, caption) => {
  return (dispatch) => {
    dispatch({
      type: "EDIT_POST",
      editpost: {
        id,
        username,
        image,
        caption,
      },
    });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_POST",
      id,
    });
  };
};

export const addComment = (id, comment) => {
  return (dispatch) => {
    console.log(id, comment);
    dispatch({
      type: "ADD_COMMENT",
      id,
      data: {
        user: "anonymous",
        comment,
      },
    });
  };
};
