import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Person, Image, Loyalty, AccountCircle } from "@material-ui/icons";
import { editPostDetail, getPostDetail } from "../../store/actions/postAction";
import "../../styles/editpost.css";
import Navbar from "../../components/Navbar";

function Id() {
  const [id, setID] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postReducer.post);

  useEffect(() => {
    if (post[0]) {
      setID(post[0].id);
      setUsername(post[0].username);
      setImage(post[0].imageUrl);
      setCaption(post[0].caption);
    }
  }, [post]);

  useEffect(() => {
    dispatch(getPostDetail(router.query.id));
    console.log(router.query.id);
  }, []);

  const editpost = () => {
    dispatch(editPostDetail(id, username, image, caption));
    router.push("/");
  };

  return (
    <div>
      <Navbar />
      <div className="main__editpost">
        <div className="editpost">
          <div className="title" style={{ background: "white" }}>
            <h1>Edit Post </h1>
          </div>

          <form className="form" noValidate autoComplete="off">
            <div className="icons">
              <TextField
                className="form__input"
                id="input-with-icon-textfield"
                label="TextField"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="icons">
              <TextField
                className="form__input"
                id="input-with-icon-textfield"
                label="TextField"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Image />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className="icons">
              <TextField
                className="form__input"
                id="input-with-icon-textfield"
                label="TextField"
                onChange={(e) => setCaption(e.target.value)}
                value={caption}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Loyalty />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              className="button__add"
              onClick={editpost}
            >
              Submit
            </Button>

            <Link href="/">
              <Button
                variant="contained"
                color="secondary"
                className="button__add"
              >
                Back
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

Id.getInitialProps = async () => {
  return {};
};

export default Id;
