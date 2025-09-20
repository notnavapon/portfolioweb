import React from 'react'
import {Github , Linkedin} from 'lucide-react'
import { Link, Navigate } from "react-router-dom";

const Footer = () => {
  return (
<footer className="w-full bg-neutral text-neutral-content p-10">
  <div className="flex flex-col sm:flex-row justify-between w-full max-w-7xl mx-auto">
    <aside>
      <p>Navpaon Nanakorn</p>
      <p>notnavapon.nnk@gmail.com</p>
    </aside>

    <nav className="mt-4 sm:mt-0">
      <h6 className="footer-title">Social</h6>
      <div className="grid grid-flow-col gap-4">
        <Link to="https://github.com/notnavapon">
          <Github />
        </Link>
        <a>
          <Linkedin />
        </a>
      </div>
    </nav>
  </div>
</footer>


  )
}

export default Footer