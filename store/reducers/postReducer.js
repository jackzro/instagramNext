const defaultState = {
  posts: [
    {
      id: 1,
      username: "jackson",
      imageUrl:
        "https://img.idxchannel.com/media/1000/images/idx/2020/02/28/astra.jpg",
      caption: "Jadilah Kebanggaan Bangsa",
      comments: [
        {
          user: "Charles",
          comment: "Selalu di depan",
        },
      ],
    },
    {
      id: 2,
      username: "clinton",
      imageUrl: "https://www.astra.co.id/Public/april-19/Banner-MA.png",
      caption: "Jadilah Kebanggaan Bangsa",
      comments: [
        {
          user: "kevin",
          comment: "Mantab",
        },
      ],
    },
  ],
  post: {},
};
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: state.posts.concat(action.newPost) };

    case "DETAIL_POST":
      return {
        ...state,
        post: state.posts.filter((post) => {
          if (post.id == action.id) {
            return post;
          }
        }),
      };

    case "EDIT_POST":
      return {
        ...state,
        post: state.posts.filter((post) => {
          if (post.id == action.editpost.id) {
            post.username = action.editpost.username;
            post.imageUrl = action.editpost.image;
            post.caption = action.editpost.caption;
          }
        }),
      };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post.id !== action.id;
        }),
      };

    case "ADD_COMMENT":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id == action.id) {
            post.comments.push(action.data);
          }
          return {
            ...post,
            ...action.data,
          };
        }),
      };

    default:
      return state;
  }
}
