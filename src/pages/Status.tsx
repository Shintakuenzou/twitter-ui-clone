import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separetor } from "../components/Separetor";
import { Tweet } from "../components/Tweet";

import "./status.css";

export function Status() {
  const [newAnswers, setNewAnswers] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([
    "Concordo",
    "Fome",
    "Parabens pelo progresso",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
     if (newAnswers === "") {
       return alert("Digite seu tweet");
     }
    setAnswers((prev) => [newAnswers, ...prev]);
    setNewAnswers("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey ?? event.metaKey)) {
      setAnswers((prev) => [newAnswers, ...prev]);
      setNewAnswers("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quibusdam iusto et officia vitae, enim ex possimus obcaecati beatae quisquam autem alias accusamus quo atque sunt rerum modi aliquam labore." />

      <Separetor />

      <form onSubmit={createNewTweet} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/91697813?v=4"
            alt="Felipe"
          />

          <textarea
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => setNewAnswers(e.target.value)}
            value={newAnswers}
            id="tweet"
            placeholder="tweet you answer"
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
