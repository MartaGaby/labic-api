import { BrowserRouter, Routes, Route } from 'react-router-dom'

// LAYOUTS (Mapeados exatamente conforme a sua estrutura real)
import PublicLayout from '../components/layout/PublicLayout'
import DashboardLayout from '../components/layout/DashboardLayout'

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
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/sobre" element={<PublicLayout><Sobre /></PublicLayout>} />
        <Route path="/pesquisa" element={<PublicLayout><Pesquisa /></PublicLayout>} />
        <Route path="/contato" element={<PublicLayout><Contato /></PublicLayout>} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />

        {/* 🛡️ DASHBOARD */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pesquisadores" element={<ResearchersList />} />
          <Route path="pesquisadores/novo" element={<ResearcherCreate />} />
          <Route path="projetos" element={<ProjectsList />} />
          <Route path="projetos/novo" element={<ProjectCreate />} />
          <Route path="artigos" element={<ArticlesList />} />
          <Route path="artigos/novo" element={<ArticleCreate />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes