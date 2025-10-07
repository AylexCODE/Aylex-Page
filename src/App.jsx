// import {} from './features/themes/theme.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import PageNotFound from './pages/Error/page-not-found';

import Home from './pages/Home/index';
import Main from './pages/Home/pages/main/Main';
import About from './pages/Home/pages/about/About';
import Projects from './pages/Home/pages/projects/Projects';
import ProjectsFile from './pages/Home/pages/projects/ProjectsFile';

import ClashofClans from './pages/Clash-of-Clans/index';
import Minecraft from './pages/Minecraft/index';
import Clipboard from './pages/Home/components/clipboard/clipboard';

function App(){
    return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<PageNotFound /> } />
        <Route path="/" element={<Home />} >
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="projects/:file" element={<ProjectsFile />} />
        <Route path="/clash-of-clans" element={<ClashofClans />} />
        <Route path="/minecraft" element={<Minecraft />} />
        <Route path="/clipboard" element={<Clipboard />} />
      </Routes>
    </HashRouter>
    );
}

export default App;