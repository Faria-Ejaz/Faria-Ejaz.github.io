import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {Fade} from 'react-reveal';
import ProjectsRepo from "../../containers/projects/Projects";
import './Projects.css';

const projectsHeader = {
    title: "Projects",
    description: "My projects makes use of vast variety of latest technology tools.",
    avatar_image_path: "projects1.svg"
}


class Projects extends Component {
    render(){
        return (
					<div className="projects-main">
						<Header />
						<div className="basic-projects">
							<Fade bottom duration={1000} distance="40px">
								<div className="projects-heading-div">
									<div className="projects-heading-img-div">
										<img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/>
									</div>
									<div className="projects-heading-text-div">
										<h1 className="projects-heading-text">
											{projectsHeader.title}
										</h1>
										<p className="projects-header-detail-text subTitle">
											{projectsHeader["description"]}
										</p>
									</div>
								</div>
							</Fade>
						</div>
						<ProjectsRepo/>
						<Footer />
					</div>
				);
    }
}

export default Projects;