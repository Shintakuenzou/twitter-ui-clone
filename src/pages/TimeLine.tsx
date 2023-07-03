import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separetor } from "../components/Separetor";
import { Tweet } from "../components/Tweet";

import "./timeLine.css";

export function TimeLine() {
  const [textValue, setTextValue] = useState<string>("");
  const [tweets, setTweets] = useState<string[]>([
    "Hojé vou terminar esse curso",
    "Testando aplicação",
    "Estou com fome",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    if(textValue === "") {
      return alert("Digite seu tweet")
    }

    setTweets((prev) => [textValue, ...prev]);
    setTextValue("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey ?? event.metaKey)) {
      setTweets((prev) => [textValue, ...prev]);
      setTextValue("");
    }
  }

  return (
    <main className="timeLine">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/91697813?v=4"
            alt="Felipe"
          />
          <textarea
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => setTextValue(e.target.value)}
            value={textValue}
            id="tweet"
            placeholder="What happening?"
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separetor />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
