import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./tweet.css";

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/tweet" className="tweet">
      <img
        src="https://avatars.githubusercontent.com/u/91697813?v=4"
        alt="Felipe"
      />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Felipe Enzou</strong>
          <span>@felp</span>
        </div>
        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            100
          </button>
          <button type="button">
            <ArrowsClockwise />
            100
          </button>
          <button type="button">
            <Heart />
            100
          </button>
        </div>
      </div>
    </Link>
  );
}
