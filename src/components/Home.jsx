import { STATIONS, TRAINS } from '../data'
import Reveal from './Reveal'
import TrainSvg from './TrainSvg'

export default function Home({search,setSearch,onSearch}){
const up=(k,v)=>setSearch({...search,[k]:v});
return(<div className="page">
<div className="hero"><div className="stars"/><div className="hills"/>
<h1>Travel at the speed of <span>comfort</span></h1><p>Search trains, pick your coach, choose your exact seat and book in under a minute.</p>
<div className="search">
<label>From<select value={search.from} onChange={e=>up('from',e.target.value)}>{STATIONS.map(s=><option key={s}>{s}</option>)}</select></label>
<label>To<select value={search.to} onChange={e=>up('to',e.target.value)}>{STATIONS.map(s=><option key={s}>{s}</option>)}</select></label>
<label>Date<input type="date" value={search.date} onChange={e=>up('date',e.target.value)}/></label>
<button className="btn" onClick={onSearch} style={{alignSelf:'flex-end'}}>Search trains</button></div>
{[18,40,58].map((t,i)=><div key={i} className="speed" style={{top:t+'%',width:180+i*60,animationDelay:i*.2+'s'}}/>)}
<div className="track"/><div className="train"><TrainSvg/></div></div>
<div className="sec"><Reveal><h2>Why RailJet?</h2></Reveal><div className="grid">
{[['🪑','Pick your own seat','See the coach layout and choose exactly where you sit.'],['⚡','Fast booking','Search, select and pay in a few taps.'],['🔒','Secure payments','UPI, cards and net banking in one place.'],['🌄','Scenic routes','Journeys from the Himalayas to the coast.']].map(([i,t,d],k)=>
<Reveal key={t} d={k*120}><div className="card"><div className="ic">{i}</div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></div>
<div className="sec"><Reveal><h2>Popular trains</h2></Reveal><div className="grid">
{TRAINS.filter((_,i)=>i%6==0).slice(0,4).map((t,k)=><Reveal key={t.no} d={k*120}><div className="card"><b>{t.name}</b><div className="mut">{t.from} → {t.to}</div><div className="tm" style={{marginTop:8}}>₹{t.fare}<span className="mut"> onwards</span></div></div></Reveal>)}</div></div>
</div>)}
