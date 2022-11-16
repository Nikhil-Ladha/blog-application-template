import { HeroSectionWrapper } from "./hero.style";
import { HiHandRaised } from "react-icons/hi2";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

export default function Hero() {
    return (
        <HeroSectionWrapper>
            {/* Name */}
            <h1>Hi <HiHandRaised />, I am Nikhil Ladha</h1>
            {/* Intro */}
            <p>
                A software engineer at Red Hat, who is currently working on GlusterFS and Openshift Container Storage.
            </p>
            <p>
                I have engaged in multiple domains and technologies in my 2 years of professional experience. Some of them are developing a testing framework using python for a distributed file system, leading the development of a website at Layer5 using Gatsby, managing and mentoring new folks in the open-source community.
                I am into open-source contribution since 2019, and with time earned the badge of a UI Maintainer/Meshmate at Layer5.
            </p>
            <p>
                Occassionaly, I do freelancing to gain experience and learn new technologies.
            </p>
            <p>
                I play PC games, watch standup videos to get those brain cells to relax and chill!
            </p>
            {/* Socials */}
            <h3>Follow me on</h3>
            <div className="social">
                <a href="https://linkedin.com/in/nikhil-ladha" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
                <a href="https://twitter.com/NikhilLadha3" target="_blank" rel="noreferrer">
                    <BsTwitter />
                </a>
                <a href="https://github.com/Nikhil-Ladha" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
            </div>

        </HeroSectionWrapper>
    )
}