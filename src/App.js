import Layout from "./Layout";
import Design from "./pages/Design";
import Promotion from "./pages/Promotion";
import SiteDev from "./pages/SiteDev";
import Main from "./pages/Main";
import Test from "./pages/Test"
import Accompaniment from "./pages/Accompaniment";
import Develop from "./pages/Develop";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
    <AppProvider>
      <Router>
        <ScrollToTop/>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/develop" element={<Develop />} />
            <Route path="/design" element={<Design />} />
            <Route path="/accompaniment" element={<Accompaniment />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/sitedev" element={<SiteDev />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Layout>
      </Router>
      </AppProvider>
      </CookiesProvider>
  );
}

export default App;