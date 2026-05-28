import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PUBLIC
import Home from '../pages/public/Home'
import Sobre from '../pages/public/Sobre'
import Pesquisa from '../pages/public/Pesquisa'
import Contato from '../pages/public/Contato'

// AUTH
import Login from '../pages/auth/Login'

// DASHBOARD
import Dashboard from '../pages/dashboard/Dashboard'

// RESEARCHERS
import ResearchersList from '../pages/dashboard/Researchers/ResearchersList'
import ResearcherCreate from '../pages/dashboard/Researchers/ResearcherCreate'

// PROJECTS
import ProjectsList from '../pages/dashboard/Projects/ProjectsList'
import ProjectCreate from '../pages/dashboard/Projects/ProjectCreate'

// ARTICLES
import ArticlesList from '../pages/dashboard/Articles/ArticlesList'
import ArticleCreate from '../pages/dashboard/Articles/ArticleCreate'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/contato" element={<Contato />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* RESEARCHERS */}
        <Route path="/dashboard/pesquisadores" element={<ResearchersList />} />
        <Route path="/dashboard/pesquisadores/novo" element={<ResearcherCreate />} />

        {/* PROJECTS */}
        <Route path="/dashboard/projetos" element={<ProjectsList />} />
        <Route path="/dashboard/projetos/novo" element={<ProjectCreate />} />

        {/* ARTICLES */}
        <Route path="/dashboard/artigos" element={<ArticlesList />} />
        <Route path="/dashboard/artigos/novo" element={<ArticleCreate />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes