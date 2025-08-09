import React from 'react'
import { Link } from 'react-router-dom'
import { events, sponsor, analyticsByEventId } from '../data'

function fmtDate(iso){ return new Date(iso + 'T00:00:00').toLocaleDateString(undefined,{month:'short', day:'numeric', year:'numeric'}) }
function sortedEvents(){
  const upcoming = events.filter(e=>!e.occurred).sort((a,b)=> new Date(a.date)-new Date(b.date))
  const completed = events.filter(e=>e.occurred).sort((a,b)=> new Date(b.date)-new Date(a.date))
  return [...upcoming, ...completed]
}
function avgRoi(){
  const vals = Object.values(analyticsByEventId).map(a=>a.roiPct)
  return Math.round(vals.reduce((s,v)=>s+v,0)/vals.length)
}

export default function Events(){
  return (
    <div className="container">
      <div className="card" style={{marginBottom:16}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <h2 style={{margin:'0 0 6px 0'}}>Events — <span style={{color:'var(--accent)'}}>{sponsor.name}</span></h2>
            <div style={{color:'var(--muted)'}}>Click an event to view performance analytics</div>
          </div>
          <div className="badge ok">Overall ROI trend: +{avgRoi()}%</div>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>School</th>
              <th>School contact</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedEvents().map(ev => (
              <tr key={ev.id}>
                <td style={{fontWeight:600}}>{ev.name}</td>
                <td>{fmtDate(ev.date)}</td>
                <td>{ev.school}</td>
                <td>{ev.contact}</td>
                <td>
                  {ev.occurred ? <span className="badge ok">Completed</span> : <span className="badge pending">Upcoming</span>}
                </td>
                <td>
                  <Link className="btn" to={`/events/${ev.id}`}>View analytics</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
