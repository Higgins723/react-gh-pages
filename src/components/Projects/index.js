import React from 'react';
import Project from './Project';
import byui from '../../images/byui.png';
import dixie from '../../images/dixie.png';
import incontact from '../../images/incontact.png';
import instructure from '../../images/instructure.png';
import rakuten from '../../images/rakuten.png';

const Projects = () => {
  const projects = [
      {
          image: rakuten,
          company: "Rakuten",
          technology: "React, Python, & Go",
          about: "My team works on building amazing UI for Rakuten's clients. Right now we are creating a central portal for our users to see their data and leave annotations on that data.",
          title: "Front-End Software Engineer, March 2018 - Present"
      },
      {
          image: byui,
          company: "Brigham Young University - Idaho",
          technology: "",
          about: "Brigham Young University - Idaho gave me many opportunities to grow and develop the skills to be a software engineer.",
          title: "B.S. in Computer Software Engineering, 2015 - 2018"
      },
      {
          image: incontact,
          company: "inContact",
          technology: "Angular & C#",
          about: "At inContact I worked on an internal portal for other teams. The biggest project I worked on while at inContact was a bulk maintenance tool for sysadmins.",
          title: "Full-Stack Software Engineer, May 2017 - March 2018"
      },
      {
          image: instructure,
          company: "Instructure",
          technology: "Ruby on Rails & React",
          about: "At Instructure I worked as a member of a team to maintain and create new features on the Bridge platform.",
          title: "Full-Stack Software Engineer Intern, January 2017 - April 2017"
      },
      {
          image: byui,
          company: "BYU-I",
          technology: "Ingeniux CMS & JavaScript",
          about: "While working for BYU-I, my responsibilities included maintaining the main website and adding new pages as requested by faculty and other members of the board.",
          title: "Full-Stack Software Engineer (Lead), June 2015 - December 2016"
      },
      {
          image: dixie,
          company: "Dixie State University",
          technology: "",
          about: "Dixie State University was the first college I attended to pursue my love of software development. The things I learned here molded me into the person and developer I am today.",
          title: "B.S. in Computer Science, 2014 - 2015"
      },
  ];

  return (
    <div>
      <h1 className="title-text">Here's what I've been up to</h1>
      <div className="large-padding">
        {projects.map(p => (
          <Project key={p.title} data={p} />
        ))}
      </div>
    </div>
  )
}

export default Projects;
