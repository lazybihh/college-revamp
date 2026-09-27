import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';

import About from './pages/about/About';
import AboutSociety from './pages/about/AboutSociety';
import OurInspiration from './pages/about/OurInspiration';
import PanchayatSystem from './pages/about/PanchayatSystem';
import VisionMission from './pages/about/VisionMission';
import PrincipalDesk from './pages/about/PrincipalDesk';

import Academics from './pages/academics/Academics';
import CoursesOffered from './pages/academics/CoursesOffered';
import TimeTable from './pages/academics/TimeTable';
import AcademicCalendar from './pages/academics/AcademicCalendar';
import ExaminationFacility from './pages/academics/ExaminationFacility';
import StudentSatisfactionSurvey from './pages/academics/StudentSatisfactionSurvey';
import Result from './pages/academics/Result';

import AdmissionProcedure from './pages/admission/AdmissionProcedure';
import GuidanceCounseling from './pages/admission/GuidanceCounseling';

import AnIdealTeacher from './pages/faculty/AnIdealTeacher';
import TeachingStaff from './pages/faculty/TeachingStaff';
import NonTeachingStaff from './pages/faculty/NonTeachingStaff';

import ClassRooms from './pages/facilities/ClassRooms';
import ICTCenter from './pages/facilities/ICTCenter';
import LibraryFacility from './pages/facilities/LibraryFacility';
import HomeScienceLab from './pages/facilities/HomeScienceLab';
import LanguageLab from './pages/facilities/LanguageLab';
import PsychologyLab from './pages/facilities/PsychologyLab';
import ScienceMathematicsLab from './pages/facilities/ScienceMathematicsLab';
import SportsFacilities from './pages/facilities/SportsFacilities';
import WomenCell from './pages/facilities/WomenCell';
import OtherFacilities from './pages/facilities/OtherFacilities';

import IQAC from './pages/iqac/IQAC';
import MeetingMinutes from './pages/iqac/MeetingMinutes';
import AQARReports from './pages/iqac/AQARReports';
import AQARList from './pages/iqac/AQARList';

import Gallery from './pages/gallery/Gallery';

import Downloads from './pages/downloads/Downloads';
import StudentSupport from './pages/student-support/StudentSupport';
import CoCurricularActivities from './pages/downloads/CoCurricularActivities';
import Publications from './pages/downloads/Publications';
import Functions from './pages/downloads/Functions';
import HonourList from './pages/downloads/HonourList';

import NCTEDocuments from './pages/mandatory-documents/NCTEDocuments';

import Contact from './pages/contact/Contact';
import LocationMap from './pages/contact/LocationMap';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Layout><Home /></Layout>} />

        {/* ABOUT */}
        <Route path="/about-us" element={<Layout><About /></Layout>} />
        <Route path="/our-inspiration" element={<Layout><OurInspiration /></Layout>} />
        <Route path="/about-society" element={<Layout><AboutSociety /></Layout>} />
        <Route path="/panchayat-system" element={<Layout><PanchayatSystem /></Layout>} />
        <Route path="/visionmission" element={<Layout><VisionMission /></Layout>} />
        <Route path="/from-the-desk-of-principal" element={<Layout><PrincipalDesk /></Layout>} />

        {/* ACADEMICS */}
        <Route path="/academics" element={<Layout><Academics /></Layout>} />
        <Route path="/courses-offered" element={<Layout><CoursesOffered /></Layout>} />
        <Route path="/time-table" element={<Layout><TimeTable /></Layout>} />
        <Route path="/academic-calendar" element={<Layout><AcademicCalendar /></Layout>} />
        <Route path="/examination-facility" element={<Layout><ExaminationFacility /></Layout>} />
        <Route
          path="/student-satisfaction-survey"
          element={<Layout><StudentSatisfactionSurvey /></Layout>}
        />
        <Route path="/result" element={<Layout><Result /></Layout>} />

        {/* ADMISSION */}
        <Route path="/admission-procedure" element={<Layout><AdmissionProcedure /></Layout>} />
        <Route
          path="/guidancecounseling-cell"
          element={<Layout><GuidanceCounseling /></Layout>}
        />

        {/* FACULTY */}
        <Route path="/an-ideal-teacher" element={<Layout><AnIdealTeacher /></Layout>} />
        <Route path="/teaching-staff" element={<Layout><TeachingStaff /></Layout>} />
        <Route path="/non-teaching-staff" element={<Layout><NonTeachingStaff /></Layout>} />

        {/* FACILITIES */}
        <Route path="/class-rooms" element={<Layout><ClassRooms /></Layout>} />
        <Route path="/ict-center" element={<Layout><ICTCenter /></Layout>} />
        <Route path="/library-facility" element={<Layout><LibraryFacility /></Layout>} />
        <Route path="/home-science-lab" element={<Layout><HomeScienceLab /></Layout>} />
        <Route path="/language-lab" element={<Layout><LanguageLab /></Layout>} />
        <Route path="/psychology-lab" element={<Layout><PsychologyLab /></Layout>} />
        <Route
          path="/science-and-mathematics-lab"
          element={<Layout><ScienceMathematicsLab /></Layout>}
        />
        <Route path="/sports-facilities" element={<Layout><SportsFacilities /></Layout>} />
        <Route path="/women-cell" element={<Layout><WomenCell /></Layout>} />
        <Route path="/other-facilities" element={<Layout><OtherFacilities /></Layout>} />

        {/* IQAC */}
        <Route path="/iqac" element={<Layout><IQAC /></Layout>} />
        <Route path="/meeting-minutes" element={<Layout><MeetingMinutes /></Layout>} />
        <Route path="/aqar-reports" element={<Layout><AQARReports /></Layout>} />
        <Route path="/aqar-list" element={<Layout><AQARList /></Layout>} />

        {/* GALLERY */}
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />

        {/* DOWNLOADS / STUDENT SUPPORT */}
        <Route path="/downloads" element={<Layout><Downloads /></Layout>} />
        <Route
          path="/student-support-services"
          element={<Layout><StudentSupport /></Layout>}
        />
        <Route
          path="/co-curricular-activities"
          element={<Layout><CoCurricularActivities /></Layout>}
        />
        <Route path="/publications" element={<Layout><Publications /></Layout>} />
        <Route path="/functions" element={<Layout><Functions /></Layout>} />
        <Route path="/honour-list" element={<Layout><HonourList /></Layout>} />

        {/* MANDATORY DOCUMENTS */}
        <Route
          path="/ncte-documents"
          element={<Layout><NCTEDocuments /></Layout>}
        />

        {/* CONTACT */}
        <Route path="/contact-us" element={<Layout><Contact /></Layout>} />
        <Route path="/location-map" element={<Layout><LocationMap /></Layout>} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;