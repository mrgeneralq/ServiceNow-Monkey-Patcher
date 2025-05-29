import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import RuleTabPage from './pages/RuleTabPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx'
import { ThemeProvider } from '@mui/material'
import AppTheme from './themes/AppTheme.js'
import EditRulePage from './pages/EditRulePage.jsx'
import PatchruleList from './components/PatchruleList.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: 'about', element: <AboutPage /> },
      { path: 'settings', element: <div>Settings</div> },
      {
        path: 'rules',
        element: <RuleTabPage />, // This is the tab content for "Rules"
        children: [
          { index: true, element: <PatchruleList /> }, // /rules shows the list
          { path: 'edit', element: <EditRulePage /> }, // /rules/edit shows the edit page
        ],
      },
      { index: true, element: <Navigate to="/rules" replace /> }, // Redirect / to /rules
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={AppTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
