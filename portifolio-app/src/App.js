import React,{Fragment} from 'react';
import './App.css';

function App() {
  return <Fragment>
     <nav id="navbar">
        <ul>
            <li><a href="#welcome-section">About</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact-section">Contact</a></li>
        </ul>

    </nav>
    <section class="bg-aqua" id="welcome-section">
        <h1>Yo</h1>
        <p>welcome</p>
    </section>
    <section className="projects-section" id="projects">
        <h2>My Projects</h2>
        <div class="grid-container" >
  
            <a className="project-tile" target="_blank" href="https://robsoncamargo.com.br/blog/Voce-sabe-o-que-e-project-management">
                <img src="https://robsoncamargo.com.br/files/thumbs/xblog_0381-project-management-1-800x333.png,qv=1589395436.pagespeed.ic.3IWCpN2X8v.webp"/>
                <p>Project Management</p>
            </a>
            <a className="project-tile" target="_blank" href="https://www.aarquiteta.com.br/blog/ms-project/">
                <img src="https://www.aarquiteta.com.br/blog/wp-content/uploads/2017/11/ms-project.jpg"/>
                <p>MS Project</p>
            </a>
            
            <a className="project-tile" target="_blank" href="https://www.projectbuilder.com.br/">
                <img src="https://www.projectbuilder.com.br/wp-content/uploads/2019/02/project-building-logo-new.svg"/>
                <p>Project Builder</p>
            </a>
            <a className="project-tile" target="_blank" href="https://pngeans.com/basics-of-critical-path-project-management/">
                <img src="https://pngeans.com/wp-content/uploads/2020/02/b73ee98a70e1ecefb77b4996f067a2fa.png"/>
                <p>Critical Path</p>
            </a>
            <a className="project-tile" target="_blank" href="http://gamelodge.com.br/critica-project-winter/">
                <img src="http://gamelodge.com.br/wp-content/uploads/2019/08/7a4027c2ca3bc8e028e029ac85b2103c3969801d.png"/>
                <p>Project Winter</p>
            </a>
            <a className="project-tile" target="_blank" href="https://www.publichealthnotes.com/project-planning-and-development-process/">
                <img src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x-678x381.png"/>
                <p>Project Planning</p>
            </a>
            <a className="project-tile" target="_blank" href="https://www.linkedin.com/company/smart-project-llc/?originalSubdomain=br">
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEAk-a6lEtrbw/company-logo_200_200/0?e=1597881600&v=beta&t=VzU6-2Goaj2LvsMnIb269xHx5dZKA0lFKJpiW3Mj2qg"/>
                <p>Smart Project</p>
            </a>
        </div>
        <a id="profile-link" target="_blank" href="https://github.com/">
            Show All
        </a>
        <div></div>
        
    </section>
    <section className="contact" id="contact-section">
        <h1>Let's work together</h1>
        <p>How do you take yur coffee?</p>
        <div className="social-media">
            <a>Facebook</a>
            <a>GitHub</a>
            <a>Twitter</a>
        </div>
    </section>


  </Fragment>;
}

export default App;
