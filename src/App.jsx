import { useState, useEffect, useMemo } from 'react'
import { TRAINS, price } from './data'
import Nav from './components/Nav'
import LoginModal from './components/LoginModal'
import Home from './components/Home'
import Results from './components/Results'
import Seats from './components/Seats'
import Details from './components/Details'
import Payment from './components/Payment'
import Done from './components/Done'

export default function App(){
const tomorrow=new Date(Date.now()+864e5).toISOString().slice(0,10);
const [page,setPage]=useState('home');const [user,setUser]=useState(null);const [showLogin,setShowLogin]=useState(false);
const [search,setSearch]=useState({from:'New Delhi',to:'Mumbai',date:tomorrow});
const [train,setTrain]=useState(null);const [coach,setCoach]=useState(null);const [sel,setSel]=useState([]);const [pax,setPax]=useState({});const [phone,setPhone]=useState('');
const list=useMemo(()=>TRAINS.filter(t=>t.from==search.from&&t.to==search.to),[search]);
const total=train&&coach?sel.length*price(train,coach):0;
useEffect(()=>{window.scrollTo(0,0)},[page]);
const goPay=()=>user?setPage('details'):setShowLogin(true);
return(<>
<Nav user={user} go={setPage} login={()=>setShowLogin(true)} logout={()=>setUser(null)}/>
{page=='home'&&<Home search={search} setSearch={setSearch} onSearch={()=>setPage('results')}/>}
{page=='results'&&<Results search={search} list={list} back={()=>setPage('home')} pick={t=>{setTrain(t);setCoach(null);setSel([]);setPax({});setPage('seats')}}/>}
{page=='seats'&&<Seats train={train} coach={coach} setCoach={setCoach} sel={sel} setSel={setSel} next={goPay} back={()=>setPage('results')}/>}
{page=='details'&&<Details sel={sel} pax={pax} setPax={setPax} phone={phone} setPhone={setPhone} back={()=>setPage('seats')} next={()=>setPage('pay')}/>}
{page=='pay'&&<Payment train={train} coach={coach} sel={sel} total={total} back={()=>setPage('details')} done={()=>setPage('done')}/>}
{page=='done'&&<Done train={train} coach={coach} sel={sel} pax={pax} phone={phone} search={search} home={()=>setPage('home')}/>}
{showLogin&&<LoginModal close={()=>setShowLogin(false)} onLogin={n=>{setUser(n);setShowLogin(false);if(page=='seats'&&sel.length)setPage('details')}}/>}
</>)}
