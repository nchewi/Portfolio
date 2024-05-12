import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer bg-[#121212] border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between">
            <Link href={"/"}><span>V12</span></Link>
            <p className="text-slate-500">All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer