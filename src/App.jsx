// the route table. one line per page, all of them wrapped in the shared layout
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import AboutView from './views/AboutView.jsx';
import ContactView from './views/ContactView.jsx';
import HomeView from './views/HomeView.jsx';
import NotFoundView from './views/NotFoundView.jsx';
import SchoolsView from './views/SchoolsView.jsx';
import ServicesView from './views/ServicesView.jsx';
import WorkView from './views/WorkView.jsx';

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomeView />} />
                <Route path="/services" element={<ServicesView />} />
                <Route path="/work" element={<WorkView />} />
                <Route path="/schools-teams" element={<SchoolsView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/contact" element={<ContactView />} />
                <Route path="*" element={<NotFoundView />} />
            </Route>
        </Routes>
    );
}
