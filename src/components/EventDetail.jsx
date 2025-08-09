import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { events, analyticsByEventId, forecastsByEventId } from '../data'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label, LabelList } from 'recharts'

function fmtDate(iso){ return new Date(iso + 'T00:00:00').toLocaleDateString(undefined,{month:'short', day:'numeric', year:'numeric'}) }

export default function EventDetail(){
  const { id } = useParams()
  const event = events.find(e => e.id === id)

  if(!event){
    return <div className="container"><div className="card">Event not found.</div></div>
  }

  const analytics = analyticsByEventId[id]
  const forecast = forecastsByEventId[id]
  const occurred = event.occurred

  const chartData = analytics ? [
    { name: 'Samples', value: analytics.samplesDistributed },
    { name: 'QR Scans', value: analytics.qrScans },
    { name: 'Emails', value: analytics.signupEmails },
  ] : []

  return (
    <div className="container">
      <div className="card" style={{marginBottom:16}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap: 16}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <h2 style={{margin:0}}>{event.name}</h2>
              {occurred ? <span className="badge ok">Completed</span> : <span className="badge pending">Upcoming</span>}
            </div>
            <div style={{color:'var(--muted)'}}>{event.school} • {fmtDate(event.date)} • {event.contact}</div>
          </div>
          <Link to="/events" className="btn" aria-label="Back to events">Back to events</Link>
        </div>
      </div>

      {occurred ? (
        <div className="grid grid-3">
          <div className="card">
            <div className="kpi">
              <div className="value">{analytics.attendance.toLocaleString()}</div>
              <div>
                <div className="label">Total Attendance</div>
                <div className="trend">Verified check-ins: {analytics.checkIns.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="kpi">
              <div className="value">{analytics.socialReach.toLocaleString()}</div>
              <div>
                <div className="label">Estimated Social Reach</div>
                <div className="trend">Mentions: {analytics.socialMentions.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="kpi">
              <div className="value">{analytics.roiPct}%</div>
              <div>
                <div className="label">ROI</div>
                <div className="trend">CPM: ${analytics.cpm}</div>
              </div>
            </div>
          </div>

          <div className="card" style={{gridColumn:'1 / -1'}}>
            <h3 style={{marginTop:0, marginBottom:10}}>Engagement Breakdown</h3>
            <div style={{height: 320}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 24, left: 8, bottom: 24 }} barCategoryGap={24}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }}>
                    <Label value="Engagement Type" position="insideBottom" dy={40} />
                  </XAxis>
                  <YAxis tick={{ fontSize: 12 }}>
                    <Label value="Count" angle={-90} position="insideLeft" dx={10} />
                  </YAxis>
                  <Tooltip formatter={(value)=>[value.toLocaleString(), 'Count']} />
                  <Legend />
                  <Bar dataKey="value" name="Count" barSize={48} radius={[6,6,0,0]}>
                    <LabelList dataKey="value" position="top" formatter={(v)=>v.toLocaleString()} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{color:'var(--muted)', fontSize:13}}>X-axis: Engagement Type • Y-axis: Count</div>
          </div>

          <div
            style={{
              gridColumn: '1 / -1',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 16
            }}
          >
            <div className="card">
              <div style={{display:'grid', gap:8}}>
                <div><strong>Post-Event Sales Lift:</strong> {analytics.postEventSalesLiftPct}%</div>
                <div><strong>Regional Followers Gained:</strong> {analytics.regionalFollowersGain.toLocaleString()}</div>
                <div><strong>Avg Sentiment (1–5):</strong> {analytics.sentimentScore}</div>
                <div style={{color:'var(--muted)'}}>{analytics.notes}</div>
              </div>
            </div>
            
            <div className="card">
              <div style={{display:'grid', gap:8}}>
                <div><strong>QR → Email Conversion:</strong> {Math.round((analytics.signupEmails/analytics.qrScans)*100)}%</div>
                <div><strong>Check-in Rate:</strong> {Math.round((analytics.checkIns/analytics.attendance)*100)}%</div>
                <div><strong>Sample Coverage:</strong> {Math.round((analytics.samplesDistributed/analytics.attendance)*100)}%</div>
                <div className="badge ok" style={{ display: 'inline-block', margin: '0 auto' }}> All core KPIs trending positive</div>
              </div>
            </div>
          </div>
          {/* END NEW */}
        </div>
      ) : (
        <div className="grid grid-2">
          <div className="card">
            <h3 style={{marginTop:0}}>Forecast & Pre-Regs</h3>
            {forecast ? (
              <div style={{display:'grid', gap:8}}>
                <div><strong>Pre-registrations:</strong> {forecast.preregistrations.toLocaleString()}</div>
                <div><strong>Estimated Attendance:</strong> {forecast.estimatedAttendance.toLocaleString()}</div>
                <div><strong>Planned Samples:</strong> {forecast.plannedSamples.toLocaleString()}</div>
                <div><strong>Forecasted Reach:</strong> {forecast.forecastReach.toLocaleString()}</div>
                <div><strong>Sponsor Slots Booked:</strong> {forecast.sponsorSlotsBooked}</div>
              </div>
            ) : <div style={{color:'var(--muted)'}}>No forecast data yet.</div>}
          </div>

          <div className="card">
            <h3 style={{marginTop:0}}>What we’ll measure</h3>
            <ul style={{marginTop:6, lineHeight:1.7, paddingLeft:18}}>
              <li>Verified attendance & check-ins</li>
              <li>Sampling counts (cases & units)</li>
              <li>QR scans and email signups</li>
              <li>Social mentions and estimated reach</li>
              <li>Regional follower growth</li>
              <li>Post-event sales lift in target ZIPs</li>
              <li>ROI and media efficiency (CPM)</li>
            </ul>
            <div className="badge pending">Live metrics available after event</div>
          </div>
        </div>
      )}
    </div>
  )
}
