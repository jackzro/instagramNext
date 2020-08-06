import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "../styles/addpost.css";
import { Person, Image, Loyalty } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { adding } from "../store/actions/postAction";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Link from "next/link";

function Addpost() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const addPost = () => {
    dispatch(adding(username, image, caption));
    router.push("/");
  };

  return (
    <div>
      <Navbar />
      <div className="main__addpost">
        <div className="addpost">
          <h1>Add Post to Your Timeline</h1>
          <form className="form" noValidate autoComplete="off">
            <div className="icons">
              <Person className="icon" />
              <TextField
                className="form__input"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="icons">
              <Image className="icon" />
              <TextField
                className="form__input"
                id="outlined-basic"
                label="Image Url"
                variant="outlined"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="icons">
              <Loyalty className="icon" />
              <TextField
                className="form__input"
                id="outlined-basic"
                label="Caption"
                variant="outlined"
                onChange={(e) => setCaption(e.target.value)}
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              className="button__add"
              onClick={addPost}
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

export default Addpost;
