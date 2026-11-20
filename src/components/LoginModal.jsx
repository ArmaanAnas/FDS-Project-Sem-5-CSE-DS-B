import { useState } from 'react'

export default function LoginModal({close,onLogin}){
const [e,setE]=useState('');const [p,setP]=useState('');const [err,setErr]=useState('');
const sub=()=>{if(!/\S+@\S+\.\S+/.test(e))return setErr('Enter a valid email');if(p.length<4)return setErr('Password needs 4+ characters');onLogin(e.split('@')[0])};
return(<div className="modal" onClick={close}><div className="card" onClick={ev=>ev.stopPropagation()}>
<h2 style={{marginTop:0}}>Welcome back</h2><input className="fld" placeholder="Email" value={e} onChange={x=>setE(x.target.value)}/>
<input className="fld" type="password" placeholder="Password" value={p} onChange={x=>setP(x.target.value)}/>
{err&&<div style={{color:'#f87171',marginBottom:10}}>{err}</div>}
<button className="btn" style={{width:'100%'}} onClick={sub}>Login</button><p className="mut">Demo only: any valid email and password works.</p></div></div>)}
