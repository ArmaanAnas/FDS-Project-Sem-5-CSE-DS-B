import { BAYS, lbl, cls, price, taken } from '../data'

export default function Seats({train,coach,setCoach,sel,setSel,next,back}){
const toggle=n=>setSel(s=>s.includes(n)?s.filter(x=>x!=n):s.length<6?[...s,n]:s);
const seat=n=><button key={n} className={'seat'+(sel.includes(n)?' sel':'')} disabled={taken(train,coach,n)} onClick={()=>toggle(n)}><b>{n}</b><small>{lbl(n)}</small></button>;
const total=coach?sel.length*price(train,coach):0;
return(<div className="sec page"><button className="btn ghost" onClick={back}>← Back to trains</button>
<h2 style={{marginTop:20}}>{train.name} <span className="mut">#{train.no}</span></h2>
<b>Step 1: Choose your coach number</b>
<div className="coaches">{train.coaches.map(c=><button key={c} className={'chip'+(coach==c?' on':'')} onClick={()=>{setCoach(c);setSel([])}}>{c} <span className="mut">{cls(c)}</span></button>)}</div>
{coach&&<div className="lay" key={coach}><div><b>Step 2: Pick seats in coach {coach}</b>
<div className="lg"><span><i/>Free</span><span><i style={{background:'var(--ok)',borderColor:'var(--ok)'}}/>Yours</span><span><i style={{background:'var(--bad)',borderColor:'var(--bad)'}}/>Booked</span></div>
<div className="coach"><div className="front">FRONT</div>{BAYS.map((b,bi)=><div className="bay" key={bi}>{b.map(([ns,sd],ri)=><div className={'brow'+(ri?' r2':'')} key={ri}><div className="grp">{ns.map(seat)}</div><div className="gap">{bi==0&&ri==0?'aisle':''}</div>{seat(sd)}</div>)}</div>)}</div></div>
<div className="card" style={{position:'sticky',top:80}}><h3 style={{marginTop:0}}>Your booking</h3>
<div className="mut">Coach {coach} · {cls(coach)}</div>
<p>Seats: <b>{sel.length?[...sel].sort((a,b)=>a-b).map(n=>n+' ('+lbl(n)+')').join(', '):'none selected'}</b><br/><span className="mut">Max 6 seats</span></p>
<div className="tm">₹{total}</div><button className="btn" style={{width:'100%',marginTop:14}} disabled={!sel.length} onClick={next}>Proceed to payment</button></div></div>}
</div>)}
