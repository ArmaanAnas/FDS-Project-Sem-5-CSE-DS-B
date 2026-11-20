export default function Nav({user,go,login,logout}){return(
<div className="nav"><div className="logo" onClick={()=>go('home')}>Rail<b>Jet</b> 🚆</div>
<div style={{display:'flex',gap:10,alignItems:'center'}}>{user?<><span className="mut">Hi, {user}</span><button className="btn ghost" onClick={logout}>Logout</button></>:<button className="btn" onClick={login}>Login</button>}</div></div>)}
