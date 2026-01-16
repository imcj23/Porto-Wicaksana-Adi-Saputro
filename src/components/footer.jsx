import { useState } from 'react'
import EmailModal from '../components/modalEmail'
import '../App.css'

export default function Footer () {
  const [open,setOpen] = useState(false)

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Wicaksana Adi Saputro</h3>
        <p>Frontend Developer • React • UI/UX</p>

        <div className="footer-social">
          <a href="https://github.com/imcj23" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/wicaksanaadisaputro/" target="_blank">
            LinkedIn
          </a>
          <button onClick={()=> setOpen(true)}>
            Email
          </button>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
      {open && <EmailModal onClose={() => setOpen(false)} />}
    </footer>
  )
}