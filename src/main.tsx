import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './AppOld.tsx';
import CourseDetail from './CourseDetailUpdated.tsx'; // Import the new CourseDetail component
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programs/:courseId" element={<CourseDetail />} /> {/* Route for course details */}
      </Routes>
    </Router>
  </StrictMode>
);
