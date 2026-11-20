import { useState, useEffect, useRef } from 'react'

export default function useReveal(){const r=useRef(null);const [v,setV]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect()}},{threshold:.15});o.observe(r.current);return()=>o.disconnect()},[]);return [r,v]}
