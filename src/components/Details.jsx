import { useState } from 'react'
import { lbl } from '../data'

export default function Details({sel,pax,setPax,phone,setPhone,next,back}){
const [err,setErr]=useState('');const seats=[...sel].sort((a,b)=>a-b);
const up=(n,k,v)=>setPax({...pax,[n]:{...pax[n],[k]:v}});
const go=()=>{for(const n of seats){const p=pax[n]||{};if(!(p.name||'').trim())return setErr('Enter the name for seat '+n);const a=+p.age;if(!(a>=1&&a<=120))return setErr('Enter a valid age for seat '+n)}if(!/^\d{10}$/.test(phone))return setErr('Enter a 10-digit phone number');setErr('');next()};
return(<div className="sec page"><div className="pay card"><button className="btn ghost" onClick={back}>← Back</button>
<h2 style={{marginTop:18}}>Passenger details</h2>
{seats.map(n=><div key={n} style={{marginBottom:14}}><div className="mut" style={{marginBottom:4}}>Seat {n} · {lbl(n)}</div>
<div style={{display:'flex',gap:10}}><input className="fld" style={{flex:1,minWidth:0}} placeholder="Full name" value={(pax[n]||{}).name||''} onChange={e=>up(n,'name',e.target.value)}/>
<input className="fld" style={{width:84,minWidth:0}} type="number" placeholder="Age" value={(pax[n]||{}).age||''} onChange={e=>up(n,'age',e.target.value)}/></div></div>)}
<div className="mut" style={{marginBottom:4}}>Contact number</div>
<input className="fld" style={{width:'100%'}} inputMode="numeric" maxLength={10} placeholder="10-digit mobile number" value={phone} onChange={e=>setPhone(e.target.value.replace(/\D/g,''))}/>
{err&&<div style={{color:'#f87171',marginTop:12}}>{err}</div>}
<button className="btn" style={{width:'100%',marginTop:18}} onClick={go}>Continue to payment</button></div></div>)}
