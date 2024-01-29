'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav(){
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (scrolling) {
      const nav = document.getElementById('top-section');
      if (nav) {
        window.scrollTo({
          top: nav.offsetTop,
          behavior: 'smooth'
        });
        setScrolling(false);
      }
    }
  }, [scrolling]);
    return(
      <>
        <div className="navbar bg-base-200 border-b-4 gradient-border " id="top-section">
        <div className="flex-1">
    <a className="btn btn-ghost text-xl">Kuya Wheels</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
<Link href="#top-section">
        <button
          className="btn btn-ghost fixed bottom-4 right-4"
          onClick={() => setScrolling(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </Link>
</>
    );
}