
import {  Route, Routes } from 'react-router-dom';

import About from '../components/about';
import Experience from '../components/expericence';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Education from '../components/education';
import ContactForm from '../components/contact';
import Certifications from '../components/certificates';


const AppRoutes = () => (

    <Routes>
        <Route path="/" element={ <About/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/certifications" element={<Certifications/>} />
        <Route path="/experience" element={ <Experience/> } />
        <Route path="/projects" element={ <Projects/> } />
        <Route path="/skills" element={ <Skills/> } />
        <Route path="/education" element={ <Education/> } />
        <Route path="/contact" element={ <ContactForm/> } />
    </Routes>

);

export default AppRoutes;
