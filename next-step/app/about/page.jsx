'use client';

import s from './about.module.css';

export default function AboutPage() {
  return (
    <section className={s.aboutSection}>
      <div className="container">
        <div className={s.content}>
          {/* Hero Section */}
          <div className={s.hero}>
            <h1 className={s.title}>About NextStep</h1>
            <div className={s.mascotContainer}>
              <div className={s.mascot}>🐸</div>
              <div className={s.speechBubble}>
                <p>Hi there! I'm Leap, your career-hopping buddy!</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={s.mainContent}>
            <div className={s.textCard}>
              <p className={s.intro}>
                Job searching is stressful. Between writing resumes, preparing for interviews, and figuring out where you stand, the process can feel overwhelming and mentally draining.
              </p>
              
              <p className={s.solution}>
                We designed this platform to make career prep more casual, less intimidating, and even a little fun. Instead of feeling like another high-pressure task, our tool offers an AI-powered chat feature that lets you practice and get feedback in a conversational, low-stress way. Add in streak tracking and encouragement, and preparing for your career starts to feel more like building a daily habit than fighting through a chore.
              </p>
              
              <div className={s.goal}>
                <h2>Our Goal</h2>
                <p>
                  Take the toll off your brain, boost your confidence, and help you move forward in your career, <span className={s.highlight}>one hop at a time</span>.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className={s.featuresGrid}>
              <div className={s.featureCard}>
                <div className={s.featureIcon}>💬</div>
                <h3>AI-Powered Practice</h3>
                <p>Chat with Leap for personalized interview prep in a low-stress, conversational way</p>
              </div>
              
              <div className={s.featureCard}>
                <div className={s.featureIcon}>📄</div>
                <h3>Resume Analysis</h3>
                <p>Get tailored questions and career insights based on your actual experience</p>
              </div>
              
              <div className={s.featureCard}>
                <div className={s.featureIcon}>🔥</div>
                <h3>Streak Tracking</h3>
                <p>Build daily habits with our fun lily pad progress system and confetti celebrations</p>
              </div>
              
              <div className={s.featureCard}>
                <div className={s.featureIcon}>🎯</div>
                <h3>Personalized Prep</h3>
                <p>Questions tailored to your resume and target job, not generic practice</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
