'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import s from './dashboard.module.css';
import mascot from '../../public/assets/hero page.png';

export default function Dashboard() {
  const [userName, setUserName] = useState('Your Name');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(userName);
  const [streak, setStreak] = useState(0);
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [lastCompletedDate, setLastCompletedDate] = useState(null);
  const [applications, setApplications] = useState(12);
  const [interviews, setInterviews] = useState(3);
  const [isEditingApplications, setIsEditingApplications] = useState(false);
  const [isEditingInterviews, setIsEditingInterviews] = useState(false);
  const [tempApplications, setTempApplications] = useState(applications);
  const [tempInterviews, setTempInterviews] = useState(interviews);
  const [showConfetti, setShowConfetti] = useState(false);

  // Check if streak should be reset (if more than 1 day has passed)
  useEffect(() => {
    const today = new Date();
    const todayString = today.toDateString();
    
    if (lastCompletedDate && lastCompletedDate !== todayString) {
      const lastDate = new Date(lastCompletedDate);
      const daysDiff = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
      
      if (daysDiff > 1) {
        setStreak(0);
        setTodayCompleted(false);
      }
    }
  }, [lastCompletedDate]);

  const handleNameEdit = () => {
    if (isEditingName) {
      setUserName(tempName);
    } else {
      setTempName(userName);
    }
    setIsEditingName(!isEditingName);
  };

  const handleNameChange = (e) => {
    setTempName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNameEdit();
    }
  };

  const handleStreakUpdate = () => {
    const today = new Date();
    const todayString = today.toDateString();
    
    if (!todayCompleted) {
      // Checking the box - increment streak
      setStreak(streak + 1);
      setTodayCompleted(true);
      setLastCompletedDate(todayString);
      
      // Show confetti animation
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      // Unchecking the box - decrement streak
      setStreak(Math.max(0, streak - 1));
      setTodayCompleted(false);
    }
  };

  const handleApplicationsEdit = () => {
    if (isEditingApplications) {
      setApplications(tempApplications);
    } else {
      setTempApplications(applications);
    }
    setIsEditingApplications(!isEditingApplications);
  };

  const handleInterviewsEdit = () => {
    if (isEditingInterviews) {
      setInterviews(tempInterviews);
    } else {
      setTempInterviews(interviews);
    }
    setIsEditingInterviews(!isEditingInterviews);
  };

  const handleApplicationsChange = (e) => {
    setTempApplications(parseInt(e.target.value) || 0);
  };

  const handleInterviewsChange = (e) => {
    setTempInterviews(parseInt(e.target.value) || 0);
  };

  const handleApplicationsKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleApplicationsEdit();
    }
  };

  const handleInterviewsKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleInterviewsEdit();
    }
  };

  // Get current day name for display
  const getCurrentDayName = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return days[today.getDay()];
  };

  // Get current day of week (0 = Sunday, 1 = Monday, etc.)
  const getCurrentDayOfWeek = () => {
    const today = new Date();
    return today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  };

  // Convert to Monday-first week (0 = Monday, 6 = Sunday)
  const getMondayFirstDay = (dayOfWeek) => {
    return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  };

  // Generate lily pads for the week (7 days)
  const generateLilyPads = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const currentDayIndex = getMondayFirstDay(getCurrentDayOfWeek());
    
    return days.map((day, index) => {
      const isCurrentDay = index === currentDayIndex;
      const showMascot = index === currentDayIndex;
      
      return (
        <div key={day} className={`${s.lilyPad} ${isCurrentDay ? s.currentDay : ''}`}>
          <div className={s.dayLabel}>{day}</div>
          {showMascot && (
            <div className={s.mascotContainer}>
              <Image 
                src={mascot} 
                alt="NextStep Mascot" 
                width={40} 
                height={40} 
                className={s.mascot}
              />
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <main>
      <Header />
      
      {/* Confetti Animation */}
      {showConfetti && (
        <div className={s.confettiContainer}>
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className={s.confetti}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: ['#c1121f', '#669bbc', '#003049', '#fdf0d5'][Math.floor(Math.random() * 4)]
              }}
            />
          ))}
        </div>
      )}
      
      <section className={s.dashboard}>
        <div className="container">
          {/* Welcome Section */}
          <div className={s.welcomeSection}>
            <div className={s.welcomeCard}>
              <div className={s.profileSection}>
                <div className={s.avatar}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="CurrentColor">
                    <circle cx="12" cy="8" r="3.5"/>
                    <path d="M4.5 19.5c0-3.6 3.8-5.5 7.5-5.5s7.5 1.9 7.5 5.5" strokeLinecap="round"/>
                  </svg>
                </div>
                
                <div className={s.nameSection}>
                  {isEditingName ? (
                    <input
                      type="text"
                      value={tempName}
                      onChange={handleNameChange}
                      onKeyPress={handleKeyPress}
                      onBlur={handleNameEdit}
                      className={s.nameInput}
                      autoFocus
                    />
                  ) : (
                    <h1 className={s.userName} onClick={handleNameEdit}>
                      {userName}
                    </h1>
                  )}
                  <p className={s.welcomeText}>Welcome to your NextStep dashboard!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className={s.statsSection}>
            <div className={s.statsGrid}>
              <div className={`${s.statCard} card`}>
                <h3>Leetcode Progress</h3>
                <div className={s.statValue}>75%</div>
              </div>
              
              <div className={`${s.statCard} card`}>
                <h3>Applications</h3>
                {isEditingApplications ? (
                  <input
                    type="number"
                    value={tempApplications}
                    onChange={handleApplicationsChange}
                    onKeyPress={handleApplicationsKeyPress}
                    onBlur={handleApplicationsEdit}
                    className={s.statInput}
                    autoFocus
                  />
                ) : (
                  <div className={s.statValue} onClick={handleApplicationsEdit}>
                    {applications}
                  </div>
                )}
              </div>
              
              <div className={`${s.statCard} card`}>
                <h3>Interviews</h3>
                {isEditingInterviews ? (
                  <input
                    type="number"
                    value={tempInterviews}
                    onChange={handleInterviewsChange}
                    onKeyPress={handleInterviewsKeyPress}
                    onBlur={handleInterviewsEdit}
                    className={s.statInput}
                    autoFocus
                  />
                ) : (
                  <div className={s.statValue} onClick={handleInterviewsEdit}>
                    {interviews}
                  </div>
                )}
              </div>
            </div>
          </div>


          {/* LeetCode Streak Section */}
          <div className={s.lilyPadSection}>
            <div className={s.streakHeader}>
              <h2>LeetCode Streak</h2>
              <div className={s.streakCounter}>
                <span className={s.streakNumber}>{streak}</span>
                <span className={s.streakLabel}>day streak</span>
              </div>
            </div>
            
            <div className={s.checkboxSection}>
              <label className={s.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={todayCompleted}
                  onChange={handleStreakUpdate}
                  className={s.checkbox}
                />
                <span className={s.checkboxText}>Completed LeetCode on {getCurrentDayName()}</span>
              </label>
            </div>

            <div className={s.lilyPadArea}>
              <div className={s.pond}>
                {generateLilyPads()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
