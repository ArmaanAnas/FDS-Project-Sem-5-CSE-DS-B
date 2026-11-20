import Reveal from './Reveal'

export default function Results({search,list,pick,back}){return(
<div className="sec page"><button className="btn ghost" onClick={back}>← Modify search</button>
<h2 style={{marginTop:20}}>{search.from} → {search.to} <span className="mut">· {search.date}</span></h2>
{list.length==0&&<p className="mut">No direct trains found for this route. Available: New Delhi ↔ Mumbai, Kolkata, Dehradun, Jaipur, Chennai, and Kolkata ↔ Chennai.</p>}
{list.map((t,i)=><Reveal key={t.no} d={i*80}><div className="card tr">
<div><b>{t.name}</b> <span className="mut">#{t.no}</span><div className="mut">{t.coaches.length} coaches · {t.dur}</div></div>
<div><span className="tm">{t.dep}</span> <span className="mut">→</span> <span className="tm">{t.arr}</span></div>
<div style={{textAlign:'right'}}><div className="tm">₹{t.fare}+</div><button className="btn" onClick={()=>pick(t)}>Select seats</button></div></div></Reveal>)}</div>)}
