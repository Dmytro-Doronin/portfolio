

import PreviewPage from "../pages/previewPage/PreviewPage";
import TechnologiesPage from "../pages/technologiesPage/TechnologiesPage";
import ProjectPage from "../pages/projectPage/ProjectPage";
import Footer from "../pages/footer/Footer";

import c from './App.module.css';
// import ContactPage from "../pages/contactPage/ContactPage";

function App() {
  return (
      <div className={c.App}>
        <PreviewPage/>
        <TechnologiesPage/>
        <ProjectPage/>
        {/*<ContactPage/>*/}
        <Footer/>
      </div>
  );
}

export default App;
