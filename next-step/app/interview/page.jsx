"use client";
import { useState } from "react";
import Link from "next/link";

export default function ChatPage() {
  const [step, setStep] = useState("intro");
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [question, setQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);

  const questions = {
    behavioral: [
      "Tell me about a time you solved a problem with a team.",
      "Describe a challenge you overcame in school or work."
    ],
    technical: {
      easy: ["Reverse a string in JavaScript."],
      medium: ["Find the longest substring without repeating characters."],
      hard: ["Implement an LRU cache."]
    }
  };

  function pickQuestion(cat, diff) {
    if (cat === "behavioral") {
      return questions.behavioral[Math.floor(Math.random() * questions.behavioral.length)];
    } else {
      return questions.technical[diff][0];
    }
  }

  async function handleSubmit() {
    setLoading(true);

    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, answer: userAnswer, mode: "score" }),
    });
    const data = await res.json();

    let text = "";
    const candidates = data.output?.candidates;
    if (candidates?.length) text = candidates[0].content.parts[0].text;

    let parsed = null;
    try {
      const cleaned = text.replace(/```json|```/g, "").trim();
      parsed = JSON.parse(cleaned);
    } catch {}

    if (parsed) {
      setFeedback(`⭐ Score: ${parseFloat(parsed.score).toFixed(1)}/5\n\n${parsed.feedback}`);
    } else {
      setFeedback(text);
    }

    setLoading(false);
    setStep("feedback");
  }

  return (
    <main style={{ backgroundColor: "#fdf0d5", padding: "2rem 1rem", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {step === "intro" && (
          <div style={{ background: "#669bbc", padding: "1rem", borderRadius: "1rem", marginBottom: "1rem", color: "white" }}>
            🐸 Hi, I’m <b>Leap</b>, your career-hopping buddy!
            <br /><br />
            <button
              style={{ background: "#003049", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}
              onClick={() => setStep("category")}
            >
              Start
            </button>
          </div>
        )}

        {/* Exit */}
        <div style={{ textAlign: "right", marginBottom: "1rem" }}>
          <Link href="/" className="btn" style={{ background: "#780000", color: "#fff", padding: ".5rem 1rem", borderRadius: ".5rem" }}>
            Exit
          </Link>
        </div>

        {step === "category" && (
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#780000", fontWeight: "bold" }}>What type of practice do you want?</p>
            <button style={{ margin: ".5rem", background: "#003049", color: "#fff", padding: ".5rem 1rem", borderRadius: ".5rem" }}
              onClick={() => { setCategory("behavioral"); setQuestion(pickQuestion("behavioral")); setStep("question"); }}>
              Behavioral
            </button>
            <button style={{ margin: ".5rem", background: "#003049", color: "#fff", padding: ".5rem 1rem", borderRadius: ".5rem" }}
              onClick={() => setStep("difficulty")}>
              Technical
            </button>
          </div>
        )}

        {step === "difficulty" && (
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#780000", fontWeight: "bold" }}>Pick difficulty:</p>
            {["easy", "medium", "hard"].map(diff => (
              <button key={diff}
                style={{ margin: ".5rem", background: "#003049", color: "#fff", padding: ".5rem 1rem", borderRadius: ".5rem" }}
                onClick={() => { setCategory("technical"); setDifficulty(diff); setQuestion(pickQuestion("technical", diff)); setStep("question"); }}>
                {diff}
              </button>
            ))}
          </div>
        )}

        {step === "question" && (
          <div style={{ background: "#669bbc", color: "white", padding: "1rem", borderRadius: "1rem", marginBottom: "1rem" }}>
            <p><b>Question:</b> {question}</p>
            <div style={{ marginTop: ".75rem" }}>
              <button style={{ margin: ".25rem", background: "#003049", color: "#fff", padding: ".4rem 1rem", borderRadius: ".5rem" }}
                onClick={() => setQuestion(pickQuestion(category, difficulty))}>Skip</button>
              <button style={{ margin: ".25rem", background: "#003049", color: "#fff", padding: ".4rem 1rem", borderRadius: ".5rem" }}
                onClick={() => setStep("answer")}>Answer</button>
              <button style={{ margin: ".25rem", background: "#c1121f", color: "#fff", padding: ".4rem 1rem", borderRadius: ".5rem" }}
                onClick={async () => {
                  const res = await fetch("/api/chatbot", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ question, mode: "model-answer" }),
                  });
                  const data = await res.json();
                  const txt = data.output?.candidates?.[0]?.content?.parts?.[0]?.text || "No answer available.";
                  setFeedback(txt);
                  setStep("feedback");
                }}>See Answer</button>
            </div>
          </div>
        )}

        {step === "answer" && (
          <div style={{ background: "#c1121f", color: "white", padding: "1rem", borderRadius: "1rem" }}>
            <p><b>Question:</b> {question}</p>
            <textarea
              rows={4}
              style={{ width: "100%", marginTop: ".75rem", padding: ".5rem", borderRadius: ".5rem" }}
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
            />
            <button
              style={{ marginTop: ".5rem", background: "#003049", color: "white", padding: ".5rem 1rem", borderRadius: ".5rem" }}
              onClick={handleSubmit}
            >
              Submit
            </button>
            {loading && <p style={{ marginTop: ".5rem" }}>⏳ Leap is thinking...</p>}
          </div>
        )}

        {step === "feedback" && (
          <div style={{ background: "#669bbc", color: "white", padding: "1rem", borderRadius: "1rem" }}>
            <p>🐸 Leap’s Feedback:</p>
            <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{feedback}</pre>
            <button
              style={{ marginTop: ".5rem", background: "#003049", color: "white", padding: ".5rem 1rem", borderRadius: ".5rem" }}
              onClick={() => setStep("category")}
            >
              Practice Another
            </button>
          </div>
        )}
      </div>
    </main>
  );
}