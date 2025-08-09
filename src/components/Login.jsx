import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div className="container">
      <div className="card" style={{maxWidth: 520, margin: '40px auto'}}>
        <h2 style={{marginBottom: 8}}>Welcome</h2>
        <p style={{color: 'var(--muted)', marginTop: 0}}>Sponsor-side analytics for Live Time.</p>
        <div style={{display:'grid', gap:12, marginTop: 16}}>
          <div>
            <label className="label">Email</label>
            <input aria-label="Email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@brand.com" className="input" />
          </div>
          <div>
            <label className="label">Password</label>
            <input aria-label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" className="input" />
          </div>
          <button className="btn primary" onClick={()=>navigate('/events')}>Log in</button>
          <button className="btn" onClick={()=>navigate('/events')}>Skip for demo</button>
        </div>
      </div>
    </div>
  )
}
