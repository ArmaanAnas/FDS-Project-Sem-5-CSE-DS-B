import { useMemo } from 'react'

export default function Done({train,coach,sel,pax,phone,search,home}){
const pnr=useMemo(()=>Math.floor(1e9+Math.random()*9e9),[]);
return(<div className="sec page" style={{textAlign:'center'}}><div className="tick">✅</div><h2>Booking confirmed!</h2>
<div className="card" style={{maxWidth:420,margin:'auto',textAlign:'left'}}><div className="mut">PNR</div><div className="tm">{pnr}</div>
<p><b>{train.name}</b> #{train.no}<br/>{search.from} → {search.to} · {search.date}<br/>Coach {coach} · Seats {sel.join(', ')}<br/>Departs {train.dep}<br/>Passengers: {[...sel].sort((a,b)=>a-b).map(n=>(pax[n]||{}).name+' ('+(pax[n]||{}).age+')').join(', ')}<br/>Contact: {phone}</p></div>
<button className="btn" style={{marginTop:20}} onClick={home}>Back to home</button></div>)}
