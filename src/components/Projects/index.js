import React from 'react';
import Project from './Project';

const Projects = () => {
  const projects = [
      {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/1280px-Rakuten_Global_Brand_Logo.svg.png",
          company: "Rakuten",
          technology: "React, Python, & Go",
          about: "My team works on building amazing UI for Rakuten's clients. Right now we are creating a central portal for our users to see their data and leave annotations on that data.",
          title: "Front-End Software Engineer, March 2018 - Present"
      },
      {
          image: "http://www.byui.edu/images/Branding/Logos/BYU-Idaho.png",
          company: "Brigham Young University - Idaho",
          technology: "",
          about: "Brigham Young University - Idaho gave me many opportunities to grow and develop the skills to be a software engineer.",
          title: "B.S. in Computer Software Engineering, 2015 - 2018"
      },
      {
          image: "http://www.freelogovectors.net/wp-content/uploads/2018/05/nice-incontact-logo.png",
          company: "inContact",
          technology: "Angular & C#",
          about: "At inContact I worked on an internal portal for other teams. The biggest project I worked on while at inContact was a bulk maintenance tool for sysadmins.",
          title: "Full-Stack Software Engineer, May 2017 - March 2018"
      },
      {
          image: "data:image/png;base64,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",
          company: "Instructure",
          technology: "Ruby on Rails & React",
          about: "At Instructure I worked as a member of a team to maintain and create new features on the Bridge platform.",
          title: "Full-Stack Software Engineer Intern, January 2017 - April 2017"
      },
      {
          image: "http://www.byui.edu/images/Branding/Logos/BYU-Idaho.png",
          company: "BYU-I",
          technology: "Ingeniux CMS & JavaScript",
          about: "While working for BYU-I, my responsibilities included maintaining the main website and adding new pages as requested by faculty and other members of the board.",
          title: "Full-Stack Software Engineer (Lead), June 2015 - December 2016"
      },
      {
          image: "https://umac.dixie.edu/wp-content/uploads/sites/116/2017/02/DSU-Logo-01-1024x584.png",
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