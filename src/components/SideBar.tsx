import {
  House,
  Hash,
  Bell,
  Chat,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Pencil,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import twitterLogo from "../assets/logo-twitter.svg";

import "./sideBar.css";

export function SideBar() {
  return (
    <aside className="sideBar">
      <img className="logo" src={twitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink className="active" to="/">
          <House weight="fill" /> <span>Home</span>
        </NavLink>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Chat />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>BookMarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
