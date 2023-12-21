/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kumud Sharma",
  title: "Hi all, I'm Kumud",
  subTitle: emoji(
    "An adept Software Engineer specializing in the art of developing refined digital experiences via web and mobile platforms. Boasting 8 years of rich IT experience, I am currently enhancing my technical prowess at Indiana University Bloomington, pursuing a Master's degree in Computer Science. I am deeply committed to lifelong learning and fostering diversity, particularly championing the representation and empowerment of women in the technology sector."
),
  resumeLink:
    "https://drive.google.com/file/d/1Zl4fJBhSJvSjsE5bzPcYT6h2CBYE2FzH/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


const aboutMe = {
  display: true,
  username: "Kumud Sharma",
  title: "About Me",
  subTitle: emoji(
    "With over eight years of enriching experience in the tech industry, including a key role at Infosys Ltd., I'm currently broadening my horizons at Indiana University Bloomington, pursuing a Master's in Computer Science. Outside work, my passions lie in exploring nature, reading, traveling, and staying active with tennis, gym, and swimming. Committed to personal growth and advocating for diversity in tech, I believe in the power of inclusive perspectives in driving innovation."
  ),
  // hobbies: [
  //   "Exploring Nature",
  //   "Reading Books",
  //   "Travelling",
  //   "Playing Tennis",
  //   "Gym Workouts",
  //   "Swimming"
  // ],
  
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kumud001",
  linkedin: "https://www.linkedin.com/in/kumud-sharma01/",
  gmail: "kumud.sharma.0206@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@kumud.sharma.0206",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "As a dedicated Software Development Engineer, I am deeply passionate about leveraging technology to solve complex problems. My expertise in full-stack development covers both front-end and back-end technologies.",
  skills: [
    emoji("⚡ Develop dynamic and responsive applications using ReactJS and Python."),
    emoji("⚡ Proficient in database management with PostgreSQL and developing REST APIs."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indiana University Bloomington",
      logo: require("./assets/images/IUb.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "GPA: 3.95 / 4.0",
      descBullets: [
       " Applied Algorithms, Applied Machine Learning, Data Mining, Applied Database Technologies, Computer Networks, Software Engineering,Security For Netwroked Systems"
        
      ]
    },
    {
      schoolName: "Rajasthan Technical University",
      logo: require("./assets/images/RTU.jpg"),
      subHeader: "Bachelor of Science in Electronics and Communication",
      duration: "September 2010 - May 2014",
      desc: "GPA: 3.87 / 4.0 ",
      descBullets: ["Operating Systems, Database Systems, Object Oriented Programmning"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Associate Consultant",
      company: "Infosys Limited",
      companylogo: require("./assets/images/InfosysLogo.jpg"),
      date: "Jul 2019 – Jun 2022",
      desc: "In my multifaceted role at Infosys, I blended Business Analysis with Technical Analysis to streamline business processes and implement efficient technical solutions.",
      descBullets: [
        "Conducted extensive market research, aligning tools with business requirements.",
        "Led the RFP process for a new BPM tool, developing questionnaires and conducting client pain point analysis.",
        "Collaborated with global teams for insights on existing tools, aiding in optimal BPM solution selection.",
        "Implemented innovative features in the BPM tool, like document generation and cloud compatibility.",
        "Translated business requirements into technical user stories using Python and Node.js.",
        "Enhanced system reliability and contributed to platform efficiency through Python and React-based code enhancements.",
        "Actively participated in Agile development cycles, integrating user feedback using React and Node.js.",
        "Crafted essential Properties and Classes for project logic using React and Node.js."
      ]
    },
    {
      role: "Technical Analyst",
      company: "Infosys Limited",
      companylogo: require("./assets/images/InfosysLogo.jpg"),
      date: "June 2018 – June 2019",
      desc: "As a Technical Analyst at Infosys, I led initiatives to improve efficiency and collaboration, leveraging my skills in AWS, Python, and Agile methodologies.",
      descBullets: [
        "Led global requirements elicitation, reducing market time for new products by 38% and driving Agile adoption, resulting in a 23% reduction in project cycle time and a 10% increase in customer satisfaction.",
        "Implemented JIRA, Confluence, GitLab, and Bitbucket, reducing project delivery time by 40 man-hours per project, and developed BI dashboards, saving 170 man-hours quarterly.",
        "Engineered a Python-based microservice, reducing latency by 67% and increasing throughput tenfold, and optimized system performance using AWS CloudWatch and Auto Scaling."
      ]
    },
    
    {
      role: "Senior System Engineer",
      company: "Infosys Limited",
      companylogo: require("./assets/images/InfosysLogo.jpg"),
      date: "June 2014 – June 2018",
      desc: "At Infosys Ltd., I played a key role in software development and systems engineering, focusing on reducing costs and improving system efficiency and security.",
      descBullets: [
        "Designed and developed a SACCR service using ReactJS and MySQL, reducing compliance costs by 20% and improving risk management effectiveness by 12%.",
        "Implemented custom CRM connectors using Django and Python, boosting CRM efficiency by 25%.",
        "Efficiently employed SQL databases to reduce data storage requirements by 30 gigabytes.",
        "Engineered REST API interactions using AWS Lambda, Python, and Flask, achieving 14x faster transaction processing.",
        "Reduced data access latency tenfold by implementing Redis-based caching for REST APIs.",
        "Enhanced transaction security and reduced request processing time by 24% through server-side Python scripts."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal and Academic  Projects",
  subtitle: "A curated collection of personal and academic endeavors showcasing my skills and interests",
  projects: [
    {
      image: require("./assets/images/DecadesOfCinema.png"),
      projectName: "Decades Of Cinema",
      projectDesc: "This data-driven web application focuses on analyzing the movie industry over the past three decades (1986-2016). Utilizing a dataset from Kaggle, the project delves into various aspects like budget, production company, country of origin, director, genre, revenue, rating, and more. It serves as a comprehensive tool for industry analysis, offering insights into trends, box office revenues, and the impact of user ratings on movie success.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://adt-project-frontend.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/HTLogo.png"),
      projectName: "Hoosier Track Delivery Management System",
      projectDesc: "Associated with Indiana University Bloomington, this project involved designing and developing a robust delivery driver login module, handling over 100 orders and cutting order processing time by 25%. Key achievements include the integration of the Google Maps API for route optimization, leveraging React, Firebase, GCP, Azure, JavaScript, and React Native. The system improved operational efficiency and customer satisfaction significantly.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hoosiertrack.azurewebsites.net"
        }
      ]
    },
    {
      image: require("./assets/images/HCDRLogo.png"), // Update the image path as needed
      projectName: "Home Credit Default Risk",
      projectDesc: "As part of a graduate student team at Indiana University Bloomington, we analyzed the Home Credit Group dataset to enhance loan default risk predictions and improve customer experience. Through advanced machine learning techniques, we developed a predictive model pipeline. Key achievements include enhancing feature engineering performance by 29% using exponentiation, achieving 0.72 AUC in predictive accuracy with the XGBoost algorithm, and boosting model performance by 25% through effective dataset partitioning and tailored predictions based on credit history and bureau data.",
      footerLink: [
        {
          name: "View Project", // Change as needed
          url: "https://github.com/Kumud001/Home-Credit-Default-Risk", // Update with the actual link if available
        }
        // Additional buttons can be added here.
      ],
      skills: "Feature Engineering, Support Vector Machine (SVM), Machine Learning, Data Mining, Python (Programming Language)"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


const contactInfo = {
  showGithubProfile: "true", 
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-812-803-8562",
  email_address: "kumud.sharma.0206@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  aboutMe,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
