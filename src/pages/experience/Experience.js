import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with startup, Software House, Civic & Social Organization, Communities, and organized events, Tedx to help others. Because this is the only way we can give back to our community.",
	header_image_path: "experience1.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Software Engineer",
					company: "Folio3",
					company_url: "https://www.linkedin.com/company/folio3/about/",
					logo_path: "folio3.png",
					duration: "April 2020 - PRESENT",
					location: "Karachi, Pakistan",
					description:
						"Currently working on mobile and web app development of Ecodocs, it is a cloud-based CMMS software that organizes, tracks, and schedules your maintenance tasks, making your workers more agile and productive..",
					color: "#9b1578"
				},
				{
					title: "Front End Developer",
					company: "sastaticket.pk",
					company_url: "https://www.linkedin.com/company/sastaticket.pk/about/",
					logo_path: "st.png",
					duration: "Oct 2018 - March 2020",
					location: "Karachi, Pakistan",
					description: "Develop and own new features, iterate on existing ones. Proactively monitor internal backlogs, taking action on important bug fixes and enhancements, including critical ones escalated from customer support. Participate in brainstormings, specification and design sessions. Help in improving code quality through writing unit tests and performing code reviews. Participate in regular team meetings, including Scrum planning sessions, demos and retrospectives.Understand and experience implementing Travis CI.",
					color: "#fc1f20"
				}
			]
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "Software Development Intern",
					company: "Social Champ",
					company_url: "https://www.linkedin.com/company/social-champ/about/",
					logo_path: "socialchamp.png",
					duration: "June 2018 - July 2018",
					location: "Karachi, Pakistan",
					description: "Social Champ is the best way to drive traffic, increase engagement and save time on social media. A result driven social media management tool for scheduling posts, analyzing performance & best content suggestions. I had worked on the responsive web app development.",
					color: "#ee3c26"
				},
			]
		},
		{
			title: "Volunteerships",
			experiences: [
				{
					title: "Mentor",
					company: "CIRCLE Women - Civic & Social Organization",
					company_url: "http://circlewomen.org/",
					logo_path: "circle_logo.png",
					duration: "March 2019 - PRESENT",
					location: "Karachi, Pakistan",
					description:
						"I review Tech karo students' projects and help them grow and learn new technologies and techniques.",
					color: "#4285F4"
				},
				{
					title: "Mentor",
					company: "Angular Pakistan (ngGirls)",
					company_url: "https://ng-girls.org/",
					logo_path: "nggirls.png",
					duration: "Sep 2019 - Oct 2019",
					location: "Karachi, Pakistan",
					description:
						"I helped students in understanding and building a simple Todo app in Angular2+.",
					color: "#D83B01"
				},
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
