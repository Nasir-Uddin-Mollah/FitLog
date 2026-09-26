# 🏋️ FITLOG — Workout Library & Training Planner

> **Train with intent. Log every set.**  
> FitLog is a sleek, dark-themed, no-nonsense gym companion and workout planner built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Explore a curated library of lifts, lock them into your daily plan, monitor calories and training time live, and log your progress.

---

## 🔗 Project Links

- **Repository**: [https://github.com/Nasir-Uddin-Mollah/FitLog](https://github.com/Nasir-Uddin-Mollah/FitLog)
- **Live Demo**: *(Add your deployment URL here, e.g., Vercel / Netlify)*

---

## 🛠️ Technologies Used

| Category | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) | Server Components, dynamic routing, and fast bundling |
| **Library** | [React 19](https://react.dev/) | Core UI rendering and reactive state |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | End-to-end type safety and interface modeling |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI v5](https://daisyui.com/) | Dark gym aesthetic, responsive layouts, and UI tokens |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/lu`) | Consistent Lucide icon set with **zero raw SVGs** |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) | Dark-themed toast feedback for user actions |
| **State & Storage** | React Context API + HTML5 `localStorage` | Global workout plan state with persistent reload safety |
| **API** | Cloudflare Workers REST API | Live exercise dataset and single workout detail endpoint |

---

## ✨ 5 Key Features

### 1. 🏋️ Curated Workout Library (Responsive 3x4 Grid)
- Browse **12 essential compound and isolation exercises** targeting every major muscle group (Chest, Arms, Legs, Back, Core).
- Each workout card showcases an exercise visual, muscle group tag pills, equipment requirements, and key performance stats (Duration, Calories Burned, and Rating).
- Smooth anchor scrolling from the Hero banner straight down to `#library` via the **"BROWSE WORKOUTS"** button.

### 2. 📋 Daily Plan Builder with 5-Lift Cap
- Add workouts to **"Today's Plan"** or **"Saved for Later"** directly from the workout details page.
- **Smart Duplicate Prevention**: Buttons automatically disable once an exercise is already added.
- **5-Lift Daily Cap**: Enforces a focused daily routine (maximum 5 lifts) with feedback toasts to encourage quality training over fatigue.

### 3. ⏱️ Live Metrics Summary Row
- Dynamic dashboard displaying live aggregates across your active routine:
  - **Total Exercises**: Count of scheduled lifts.
  - **Total Minutes**: Cumulative duration of all workouts in the plan.
  - **Total Calories**: Live sum of estimated calories burned.
- Values start at 0 and update automatically whenever exercises are added, completed, or removed.

### 4. 🎯 "Mark as Done" Logging & Action Suite
- Mark workouts as completed with the **"Mark as Done"** check button, which logs the exercise and removes it from the queue with celebratory feedback.
- Individual **Remove (`✕`)** buttons to prune items from either the *Today's Plan* or *Saved* tab.
- Quick **"View Details"** navigation to jump back to full instructions and specifications anytime.

### 5. 📊 Dynamic Multi-Attribute Sorting
- Instantly re-order your active workout plan by:
  - **Duration** (Ascending — quick workouts first)
  - **Calories** (Ascending / Descending by energy burned)
  - **Rating** (Highest community rated first)
- Operates instantly on the client side with custom dropdown chevron controls.

---

## 🌟 Additional Features

- **💾 LocalStorage Persistence**: Plan and saved workout lists automatically persist across page reloads and browser sessions without hydration mismatch.
- **🎨 Custom 404 Page**: Bespoke gym-themed not-found screen (*"404 — MISSED THAT LIFT"*) with pure CSS barbell graphics and quick return navigation.
- **⚡ Themed Loading State**: Minimalist *"WARMING UP — Racking the Weights"* pulse loader for route transitions.
- **📱 Mobile-First Responsive Design**: Optimized navigation with hamburger menu, compact live badge counters, and stacked cards down to 320px viewport width.

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.18 or higher) and `npm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nasir-Uddin-Mollah/FitLog.git
   cd FitLog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

To validate and create an optimized production build:
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
fitlog/
├── src/
│   ├── app/
│   │   ├── exercise/[id]/page.tsx   # Dynamic single workout details page
│   │   ├── my-plan/page.tsx         # My Plan management & metrics page
│   │   ├── globals.css              # Tailwind CSS v4 & theme definitions
│   │   ├── layout.tsx               # Root layout with Navbar & Footer
│   │   ├── loading.tsx              # Custom fitness loading component
│   │   ├── not-found.tsx            # Custom 404 "Missed That Lift" page
│   │   └── page.tsx                 # Home page (Banner & Workout Library)
│   ├── assets/                      # Brand assets (logo, hero illustration)
│   ├── components/
│   │   ├── details/                 # Detail page cards, Add/Save buttons
│   │   ├── home/                    # Banner & Library grid components
│   │   └── shared/                  # Responsive Navbar & Footer
│   ├── contexts/                    # WorkoutsContext with localStorage sync
│   ├── hooks/                       # Custom useWorkouts hook
│   └── types/                       # TypeScript interfaces (WorkoutType)
├── public/                          # Static public assets
├── package.json                     # Project configuration & dependencies
└── tsconfig.json                    # TypeScript compiler configuration
```

---

## 📝 License

This project was created for educational purposes as part of the Programming Hero Milestone 6 Assignment. Feel free to use and adapt it for learning.
