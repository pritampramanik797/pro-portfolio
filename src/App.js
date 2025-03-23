
import './App.css';
import AvailabilityBadge from './components/pages/AvailabilityBadge';
import ContactInfo from './components/pages/ContactInfo';
import ProfileContent from './components/pages/ProfileContent';
import ProfilePage from './components/pages/ProfilePage';
import ProfileSidebar from './components/pages/ProfileSidebar';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <ProfilePage />
    </>
  );
}

export default App;
