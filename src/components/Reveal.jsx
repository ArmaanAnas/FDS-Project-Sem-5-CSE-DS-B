import useReveal from '../hooks/useReveal'

export default function Reveal({children,d=0}){const [r,v]=useReveal();return <div ref={r} className={'rv'+(v?' in':'')} style={{transitionDelay:d+'ms'}}>{children}</div>}
