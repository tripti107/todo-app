import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import store from './redux/store';
import App from './App';
import theme from './styles/theme';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import ProtectedRoute from './components/auth/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/advanced-todo-app" element={<ProtectedRoute><App /></ProtectedRoute>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);