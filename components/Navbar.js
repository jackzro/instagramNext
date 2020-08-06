import React from "react";
import "../styles/navbar.css";
import Link from "next/link";
import { Add } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Navbar() {
  return (
    <div>
      <div className="navbar__header">
        <Link href="/">
          <img
            className="navbar__headerImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt="instgram"
          />
        </Link>
        <div className="navbar__headerLeft">
          <Link href={"/addpost"}>
            <div>
              <Add /> Add your post
            </div>
          </Link>

          <Avatar
            className="navbar_avatar"
            alt="Profile Picture"
            src="https://avatars3.githubusercontent.com/u/36666349?s=460&u=e35fa2c71fb20140f10b57ede3db8b51f61cda0b&v=4"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
