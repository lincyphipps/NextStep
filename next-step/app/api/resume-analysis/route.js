export async function POST(req) {
  try {
    const formData = await req.formData();
    const resumeFile = formData.get('resume');
    const jobDescription = formData.get('jobDescription');
    const mode = formData.get('mode') || 'question';

    if (!resumeFile || !jobDescription) {
      return Response.json({ error: 'Resume file and job description are required' }, { status: 400 });
    }

    // For now, we'll simulate PDF text extraction
    // In production, you'd use a proper PDF parsing library like pdf-parse
    const resumeText = await extractTextFromPDF(resumeFile);

    let prompt = '';
    
    if (mode === 'question') {
      prompt = `
        Generate one resume-tailored interview question based only on the provided resume and job description. 
        Keep it concise and realistic, as if asked in a real interview. Do not add explanations or feedback.
        
        Resume Content:
        ${resumeText}
        
        Job Description:
        ${jobDescription}
      `;
    } else {
      prompt = `
        Based on the resume and job description, provide:
        - Top 3 skill alignments
        - Top 2 gaps
        - 2 suggestions to improve the resume or highlight skills
        Keep the response under 300 words.
        
        Resume Content:
        ${resumeText}
        
        Job Description:
        ${jobDescription}
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
    
    if (!response.ok) {
      throw new Error(`Failed to generate ${mode === 'question' ? 'question' : 'insights'}`);
    }

    const content = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    
    if (!content) {
      throw new Error(`No ${mode === 'question' ? 'question' : 'insights'} generated`);
    }

    if (mode === 'question') {
      return Response.json({ question: content });
    } else {
      return Response.json({ insights: content });
    }
  } catch (error) {
    console.error("Error in resume analysis:", error);
    return Response.json({ error: "Failed to analyze resume and generate question" }, { status: 500 });
  }
}

// Simplified PDF text extraction - in production use a proper library
async function extractTextFromPDF(file) {
  // This is a placeholder - in production you'd use pdf-parse or similar
  // For now, we'll return a mock resume text that demonstrates specific skills
  return `
    John Doe
    Software Engineer
    
    Experience:
    - 3 years at TechCorp as Full Stack Developer
    - Built React applications with Node.js backend using Express framework
    - Led team of 4 developers on e-commerce project using Agile methodology
    - Implemented Jenkins CI/CD pipelines reducing deployment time by 50%
    - Used PostgreSQL database and Redis for caching
    - Deployed applications on AWS EC2 instances
    
    Skills:
    - JavaScript, React, Node.js, Express, Python
    - PostgreSQL, Redis, Jenkins
    - AWS EC2, Git version control
    - Agile methodologies, Team leadership
    
    Education:
    - BS Computer Science, University of Technology
  `;
}
