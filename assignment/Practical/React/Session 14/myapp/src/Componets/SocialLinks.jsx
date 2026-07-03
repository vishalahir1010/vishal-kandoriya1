import React from 'react'
import { FaInstagram,  FaLinkedin,  FaGithub,} from "react-icons/fa";

export default function SocialLinks({ links, theme = "light" }) {

    const styles = {backgroundColor:theme === "dark" ? "#222" : "#f4f4f4",
    color: theme === "dark" ? "#fff" : "#000",   padding: "15px",
    borderRadius: "10px",  marginTop: "20px",
  };
  return (
    <div>
       <div style={styles}>
      {links.instagram && (
        <a
          href={links.instagram}
          target="_blank"
          rel="noreferrer">
          <FaInstagram size={30} />
        </a>
      )}

      {links.linkedin && (
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: "15px" }}>
          <FaLinkedin size={30} />
        </a>
      )}

      {links.github && (
        <a href={links.github}
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: "15px" }}>
          <FaGithub size={30} />
        </a>
      )}
    </div>
    </div>
  )
}
