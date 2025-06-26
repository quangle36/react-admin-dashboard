import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import './styles/tailwind.css'
import './styles/index.css'
import App from './App.tsx'

// context
import { SidebarProvider } from './contexts/sidebar-context.tsx';
import { ThemeProvider } from './contexts/theme-context.tsx';

import { store } from './store.ts'
import { initRequest } from './services/initRequest.ts'

initRequest(store);

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <SidebarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SidebarProvider>
      </ThemeProvider>
    </Provider>
  // </StrictMode>,
)
