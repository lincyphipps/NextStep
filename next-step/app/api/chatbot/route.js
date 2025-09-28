export async function POST(req) {
  try {
    const { question, answer, mode } = await req.json();

    let prompt = "";
    if (mode === "score") {
      prompt = `
        You are Leap 🐸, a friendly CS interview coach.
        Question: "${question}"
        Candidate's answer: "${answer}"

        Evaluate the answer:
        Give a score from 1.0–5.0 (with tenths, e.g. 3.2, 4.7).
        2. Give 1–2 sentences of feedback.
        Return JSON only, like:
        { "score": 3, "feedback": "..." }
      `;
    } else if (mode === "model-answer") {
      prompt = `
        Provide a strong sample answer to this interview question:
        "${question}"
      `;
    }

    const response = await fetch(
    "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent",
    {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        }),
    }
    );



    const data = await response.json();
    return Response.json({ output: data });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return Response.json({ error: "Failed to fetch from Gemini" }, { status: 500 });
  }
}
