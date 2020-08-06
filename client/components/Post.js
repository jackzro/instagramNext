import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "../styles/post.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  getPostDetail,
  deletePost,
  addComment,
} from "../store/actions/postAction";
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  BookmarkBorder,
} from "@material-ui/icons";

function Post(props) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const router = useRouter();
  const [like, setLike] = useState(false);
  const { id, username, imageUrl, caption, comments } = props.post;

  const editpost = () => {
    dispatch(getPostDetail(id));
  };

  const deletepost = () => {
    dispatch(deletePost(id));
  };

  const postComment = (e) => {
    e.preventDefault();
    // console.log(comment);
    dispatch(addComment(id, comment));
    setComment("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar">
          <Avatar
            className="post__avatar"
            alt="Username"
            src="https://avatars3.githubusercontent.com/u/36666349?s=460&u=e35fa2c71fb20140f10b57ede3db8b51f61cda0b&v=4"
          />
          <h3>{username}</h3>
        </div>
        <div>
          <Link as={`/editpost/${id}`} href={"/editpost/[id]"}>
            <Button variant="contained" color="primary" onClick={editpost}>
              Edit
            </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: "5px" }}
            onClick={deletepost}
          >
            Delete
          </Button>
        </div>
      </div>

      <img className="post__image" src={imageUrl} />

      <div className="post__icon">
        <div className="post__iconLeft">
          {like ? (
            <Favorite style={{ fontSize: 30 }} onClick={() => setLike(!like)} />
          ) : (
            <FavoriteBorder
              style={{ fontSize: 30 }}
              onClick={() => setLike(!like)}
            />
          )}
          {/* <FavoriteBorder style={{ fontSize: 30 }} /> */}
          <ChatBubbleOutline style={{ fontSize: 30, marginLeft: 10 }} />
          <Share style={{ fontSize: 30, marginLeft: 10 }} />
        </div>
        <div className="post__iconRight">
          <BookmarkBorder style={{ fontSize: 30 }} />
        </div>
      </div>

      <h4 className="post__text">
        <p>309,191 likes</p>
        <strong>{username}: </strong> #{caption}
      </h4>

      <div className="post__comments">
        {comments &&
          comments.map((comment, i) => (
            <p key={i}>
              <b>{comment.user}</b> {comment.comment}
            </p>
          ))}
      </div>

      <form className="post__commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={(e) => postComment(e)}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
