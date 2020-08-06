import React from "react";
import { withRedux } from "../lib/with-redux-store";
import "../styles/editpost.css";
import "../styles/addpost.css";

function Layout({ children }) {
  return <div>{children}</div>;
}

export default withRedux(Layout);
