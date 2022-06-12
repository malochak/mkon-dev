import * as React from "react"
import "../styles/style.css"
import {FaGithubSquare, FaLinkedin, FaTwitterSquare} from "react-icons/all";
import {IconContext} from "react-icons";
import {OutboundLink} from "gatsby-plugin-google-analytics";

const socialLinks = {
    linkedin: "https://linkedin.com/in/konrad-małocha-b77bb813b",
    github: "https://github.com/malochak",
    twitter: "https://twitter.com/KonradMalocha"
}

const IndexPage = () => {
    return (
        <main id={"root"}>
            <div>
                <h1>My name is Konrad Małocha</h1>
                <p>and I'm a <b>Software Engineer</b> on my daily basis.</p>
                <p>The website is under construction, <b>first version is comming soon!</b></p>
            </div>
            <div>
                <p>
                    <b>In the meantime, check out my socials:</b>
                </p>
                <div className={"socials"}>
                    <IconContext.Provider value={{size: "48"}}>
                        <OutboundLink href={socialLinks.github} target="_blank" className={"github-icon"}>
                            <FaGithubSquare/>
                        </OutboundLink>
                        <OutboundLink href={socialLinks.linkedin} target="_blank" className={"linkedin-icon"}>
                            <FaLinkedin/>
                        </OutboundLink>
                        <OutboundLink href={socialLinks.twitter} target="_blank" className={"twitter-icon"}>
                            <FaTwitterSquare/>
                        </OutboundLink>
                    </IconContext.Provider>
                </div>
            </div>
        </main>
    )
}

export default IndexPage
