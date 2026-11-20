import { useState } from 'react'

export default function Payment({train,coach,sel,total,done,back}){
const [m,setM]=useState('UPI');const [busy,setBusy]=useState(false);const [v,setV]=useState('');
const pay=()=>{setBusy(true);setTimeout(done,2200)};
return(<div className="sec page"><div className="pay card"><button className="btn ghost" onClick={back} disabled={busy}>← Back</button>
<h2>Payment</h2><p className="mut">{train.name} · Coach {coach} · Seats {sel.join(', ')}</p><div className="tm">₹{total}</div>
<div className="tabs" style={{marginTop:16}}>{['UPI','Card','Net Banking'].map(x=><button key={x} className={'chip'+(m==x?' on':'')} onClick={()=>setM(x)}>{x}</button>)}</div>
{m=='UPI'&&<input className="fld" style={{width:'100%'}} placeholder="yourname@upi" value={v} onChange={e=>setV(e.target.value)}/>}
{m=='Card'&&<><input className="fld" style={{width:'100%',marginBottom:10}} placeholder="Card number"/><div style={{display:'flex',gap:10}}><input className="fld" style={{width:'50%'}} placeholder="MM/YY"/><input className="fld" style={{width:'50%'}} placeholder="CVV"/></div></>}
{m=='Net Banking'&&<select className="fld" style={{width:'100%'}}><option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option></select>}
{busy?<div className="spin"/>:<button className="btn" style={{width:'100%',marginTop:16}} onClick={pay}>Pay ₹{total}</button>}</div></div>)}
