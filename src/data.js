export const STATIONS=['New Delhi','Mumbai','Kolkata','Chennai','Dehradun','Jaipur'];
const R=[
['New Delhi','Mumbai',940,1850,[['Mumbai Rajdhani','16:55'],['August Kranti Rajdhani','17:40'],['Paschim Express','11:25']]],
['New Delhi','Kolkata',1030,1750,[['Howrah Rajdhani','16:50'],['Poorva Express','17:15'],['Sealdah Duronto','20:05']]],
['New Delhi','Dehradun',345,620,[['Dehradun Jan Shatabdi','05:45'],['Nanda Devi Express','23:15'],['Mussoorie Express','21:30']]],
['New Delhi','Jaipur',275,890,[['Ajmer Shatabdi','06:05'],['Jaipur Double Decker','17:50'],['Aravali Express','21:25']]],
['New Delhi','Chennai',1960,1650,[['Tamil Nadu Express','22:30'],['Chennai Rajdhani','15:55'],['Grand Trunk Express','18:40']]],
['Kolkata','Chennai',1785,1450,[['Coromandel Express','14:50'],['Chennai Mail','23:45'],['Howrah Chennai SF','10:30']]]];
const CS=[['A1','A2','B1','B2','S1'],['A1','B1','B2','S1','S2'],['B1','B2','S1','S2','S3']];
const hm=m=>String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0');
let tn=12100;
export const TRAINS=R.flatMap(([a,b,m,f,ts])=>[[a,b,0],[b,a,140]].flatMap(([fr,to,sh])=>ts.map(([nm,d],i)=>{const s=+d.slice(0,2)*60+ +d.slice(3)+sh;return{no:String(tn++),name:nm,from:fr,to:to,dep:hm(s),arr:hm(s+m),dur:Math.floor(m/60)+'h '+m%60+'m',fare:Math.round(f*(1-i*.07)/10)*10,coaches:CS[i]}})));
export const BAYS=Array.from({length:9},(_,b)=>[[[8*b+1,8*b+2,8*b+3],8*b+7],[[8*b+4,8*b+5,8*b+6],8*b+8]]);
export const lbl=n=>{const k=(n-1)%8;return k<6?['Lower','Middle','Upper'][k%3]:k==6?'S.Lower':'S.Upper'};
export const cls=c=>c[0]=='A'?'AC 3 Tier':c[0]=='B'?'AC Economy':'Sleeper';
export const price=(t,c)=>Math.round(t.fare*(c[0]=='A'?1.8:c[0]=='B'?1.3:0.7));
export const taken=(t,c,n)=>{let h=0;const s=t.no+c+n;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%97;return h%4==0};
