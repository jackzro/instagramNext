import React, { useState, useEffect } from "react";
import "../styles/app.css";
import Post from "../components/Post";
import InstagramEmbed from "react-instagram-embed";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

function Index() {
  const posts = useSelector((state) => state.postReducer.posts);
  const [postLocal, setPostLocal] = useState([]);

  useEffect(() => {
    console.log(posts);
    setPostLocal(posts);
  }, [posts]);

  useEffect(() => {
    setPostLocal(posts);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="app__main">
        <div className="app__post">
          {postLocal.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="app__right">
          <InstagramEmbed
            url="https://www.instagram.com/p/B-Ln7CIAZe6/"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
