# NextStep 🐸

**Make the Leap!** - A friendly, AI-powered career preparation platform that makes job searching less stressful and more fun.

## 🎯 Overview

Job searching can feel overwhelming. NextStep makes the leap less stressful by transforming prep into a friendly, habit-building experience. Practice interviews with our AI chat buddy, get instant resume insights, and stay motivated with streak tracking that rewards your progres, one hop closer to your next opportunity. 🐸

## ✨ Features

### 🎤 Interview Practice
- **AI-Powered Chat**: Practice with Leap, your friendly career-hopping buddy
- **Behavioral & Technical Questions**: Curated question bank with different difficulty levels
- **Personalized Feedback**: Get scored responses and improvement suggestions
- **Resume-Tailored Questions**: Generate custom questions based on your actual experience

### 📄 Resume Analysis
- **PDF Upload**: Upload your resume for AI analysis
- **Job Description Matching**: Paste job descriptions for targeted insights
- **Two Analysis Modes**:
  - **Interview Questions**: Generate personalized practice questions
  - **Career Insights**: Get skill alignment, gap analysis, and improvement suggestions
- **ATS Optimization**: Receive recommendations for better resume formatting and keywords

### 📊 Dashboard & Progress Tracking
- **Daily Streak Tracker**: Daily coding practice with lily pad progress visualization
- **Overall LeetCode Streak Tracker**: Daily coding streaks are saved in Firestore, so progress continues across devices
- **Editable Stats**: Track applications and interviews with customizable counters
- **Confetti Celebrations**: Fun animations when completing daily goals
- **Personalized Experience**: Editable name and progress tracking

### 🎨 User Experience
- **Friendly Design**: Cute frog mascot and encouraging interface
- **Responsive Layout**: Works seamlessly on desktop and mobile
- **Consistent Branding**: Navy, cream, red, and blue color palette
- **Smooth Animations**: Bouncing mascots and interactive elements

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Styling**: CSS Modules with custom design system
- **AI Integration**: Google Gemini 2.5 Flash API
- **Fonts**: Cormorant Garamond (headings) + Inter (body text)
- **Icons**: React Icons (Font Awesome 6)
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-step
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_SENDER_ID=your_firebase_sender_id
   NEXT_PUBLIC_APP_ID=your_firebase_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next-step/
├── app/
│   ├── about/                 # About page with platform info
│   ├── api/
│   │   └── chatbot/          # AI interview feedback API
│   │   └── resume-analysis/  # Resume analysis API
│   ├── components/           # Reusable UI components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Footer.jsx        # Site footer
│   │   └── Divider.jsx       # Section divider
│   ├── dashboard/            # User dashboard
│   ├── interview/            # Interview practice page
│   ├── resume/               # Resume analysis page
│   ├── sections/             # Home page sections
│   ├── firebase/             # Firebase config lives here
│   │   └── firebaseConfig.js # Firebase setup (auth + Firestore)
│   ├── globals.css           # Global styles and design system
│   └── layout.js             # Root layout with fonts
├── data/
│   └── interviewQuestions.json # Curated question database
├── public/
│   └── assets/               # Images and logos
└── README.md
```

## 🎨 Design System

### Colors
- **Navy**: `#003049` - Primary text and borders
- **Cream**: `#fdf0d5` - Background and highlights  
- **Red**: `#c1121f` - Accent and CTAs
- **Red Dark**: `#780000` - Header background
- **Blue**: `#669bbc` - Secondary elements

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)
- **Responsive**: Fluid typography with clamp()

### Components
- **Cards**: White background with navy borders
- **Buttons**: Consistent padding and hover effects
- **Forms**: Clean inputs with focus states
- **Animations**: Subtle hover and loading effects

## 🔧 API Endpoints

### `/api/chatbot`
- **Method**: POST
- **Purpose**: Generate interview feedback and model answers
- **Modes**: `score` (feedback) or `model-answer` (sample response)

### `/api/resume-analysis`
- **Method**: POST
- **Purpose**: Analyze resume and generate questions/insights
- **Modes**: `question` or `insights`
- **Input**: FormData with resume PDF and job description

## 🎯 Key Features Explained

### Interview Practice Flow
1. Choose question type (behavioral/technical)
2. Select difficulty (for technical questions)
3. Practice with AI feedback or see model answers
4. Get scored responses with improvement suggestions

### Resume Analysis Flow
1. Upload PDF resume
2. Paste job description
3. Choose analysis mode:
   - Generate tailored interview questions
   - Get career insights and recommendations
4. Practice generated questions in Interview tab

### Dashboard Features
- **Streak Tracking**: Daily LeetCode practice with visual progress
- **Editable Stats**: Customize application and interview counts
- **Confetti Animations**: Celebrate daily completions
- **Personalized**: Editable name and progress visualization

**Made with ❤️ to make career prep more fun and less stressful!** 🐸