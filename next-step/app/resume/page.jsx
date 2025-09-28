'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import s from './resume.module.css';

export default function ResumePage() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [tailoredQuestion, setTailoredQuestion] = useState('');
  const [careerInsights, setCareerInsights] = useState('');
  const [loading, setLoading] = useState(false);
  const [insightsLoading, setInsightsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('question'); // 'question' or 'insights'
  const router = useRouter();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      setError('');
    } else {
      setError('Please upload a PDF file');
    }
  };

  const handleGenerateQuestion = async () => {
    if (!resumeFile || !jobDescription.trim()) {
      setError('Please upload a resume and provide a job description');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('resume', resumeFile);
      formData.append('jobDescription', jobDescription);
      formData.append('mode', 'question');

      const response = await fetch('/api/resume-analysis', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setTailoredQuestion(data.question);
      }
    } catch (err) {
      setError('Failed to generate question. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateInsights = async () => {
    if (!resumeFile || !jobDescription.trim()) {
      setError('Please upload a resume and provide a job description');
      return;
    }

    setInsightsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('resume', resumeFile);
      formData.append('jobDescription', jobDescription);
      formData.append('mode', 'insights');

      const response = await fetch('/api/resume-analysis', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setCareerInsights(data.insights);
      }
    } catch (err) {
      setError('Failed to generate insights. Please try again.');
    } finally {
      setInsightsLoading(false);
    }
  };

  const handlePracticeQuestion = () => {
    // Store the tailored question in localStorage and navigate to interview page
    localStorage.setItem('tailoredQuestion', JSON.stringify({
      question: tailoredQuestion,
      category: 'behavioral',
      source: 'resume'
    }));
    router.push('/interview?tailored=true');
  };

  return (
    <section className={s.resumeSection}>
        <div className="container">
          <div className={s.content}>
            <h1 className={s.title}>Resume Analysis</h1>
            <p className={s.subtitle}>
              Upload your resume and job description to get personalized interview questions and career insights
            </p>

            {/* Tab Navigation */}
            <div className={s.tabContainer}>
              <button 
                className={`${s.tab} ${activeTab === 'question' ? s.activeTab : ''}`}
                onClick={() => setActiveTab('question')}
              >
                Generate Interview Question
              </button>
              <button 
                className={`${s.tab} ${activeTab === 'insights' ? s.activeTab : ''}`}
                onClick={() => setActiveTab('insights')}
              >
                Career Insights
              </button>
            </div>

            <div className={s.form}>
              {/* Resume Upload */}
              <div className={s.uploadSection}>
                <h2>1. Upload Your Resume</h2>
                <div className={s.fileUpload}>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    id="resume-upload"
                    className={s.fileInput}
                  />
                  <label htmlFor="resume-upload" className={s.fileLabel}>
                    {resumeFile ? resumeFile.name : 'Choose PDF File'}
                  </label>
                </div>
              </div>

              {/* Job Description */}
              <div className={s.jobSection}>
                <h2>2. Job Description</h2>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the job description here..."
                  className={s.jobTextarea}
                  rows={8}
                />
              </div>

              {/* Generate Button */}
              {activeTab === 'question' ? (
                <button
                  onClick={handleGenerateQuestion}
                  disabled={loading || !resumeFile || !jobDescription.trim()}
                  className={s.generateBtn}
                >
                  {loading ? 'Generating Question...' : 'Generate Interview Question'}
                </button>
              ) : (
                <button
                  onClick={handleGenerateInsights}
                  disabled={insightsLoading || !resumeFile || !jobDescription.trim()}
                  className={s.generateBtn}
                >
                  {insightsLoading ? 'Analyzing Resume...' : 'Generate Career Insights'}
                </button>
              )}

              {/* Error Display */}
              {error && (
                <div className={s.error}>
                  {error}
                </div>
              )}

              {/* Generated Question */}
              {tailoredQuestion && activeTab === 'question' && (
                <div className={s.questionSection}>
                  <h2>Generated Question</h2>
                  <div className={s.questionCard}>
                    <p className={s.questionText}>{tailoredQuestion}</p>
                    <button
                      onClick={handlePracticeQuestion}
                      className={s.practiceBtn}
                    >
                      Practice This Question
                    </button>
                  </div>
                </div>
              )}

              {/* Career Insights */}
              {careerInsights && activeTab === 'insights' && (
                <div className={s.insightsSection}>
                  <h2>Career Insights & Recommendations</h2>
                  <div className={s.insightsCard}>
                    <div className={s.insightsText}>
                      {careerInsights.split('\n').map((line, index) => {
                        // Clean up markdown formatting
                        const cleanLine = line
                          .replace(/^##\s*/, '') // Remove ## headers
                          .replace(/\*\*(.*?)\*\*/g, '$1') // Remove ** bold formatting
                          .replace(/^\*\s*/, '• ') // Convert * to bullet points
                          .trim();
                        
                        if (!cleanLine) return null;
                        
                        return (
                          <p key={index} className={s.insightLine}>
                            {cleanLine}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
  );
}
