import React from 'react'
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Events from './components/Events'
import EventDetail from './components/EventDetail'

function Nav() {
  const location = useLocation()
  return (
    <div className="nav">
      <div className="brand">
        <span className="dot" />
        <span>Live Time Sponsor Analytics</span>
      </div>
      {location.pathname !== '/' && (
        <Link to="/" className="btn" aria-label="Logout">Logout</Link>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="footer">Demo UI • Paige Blum Live Time Demo • Twisted Tea Mock Sponsor</footer>
    </div>
  )
}
