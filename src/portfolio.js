/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Ghada Ataoui",
  logo_name: "Ghada Ataoui",
  nickname: "",
  full_name: "Ghada Ataoui",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1NQugCN-EtZs3haRtbgFGxgSaF5Xr8SzA/view?usp=drivesdk",
  mail: "ghada.ataoui@supcom.tn",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Ghada-Ataaoui",
  linkedin: "https://www.linkedin.com/in/ghada-ataoui-387083229/",
  gmail: "lataoui.ghada@gmail.com",
  // gitlab: "",
  // facebook: "https://www.facebook.com/Ghadaata0/",
  // instagram: "https://www.instagram.com/ghada_ataoui/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      picturePath: "Full Stack.png",
      skills: [
        "⚡ Develop interactive and user-focused front-end interfaces for web applications.",
        "⚡ Build responsive web front-ends using ReactJS.",
        "⚡ Create robust back-end services with Node.js, Express, Flask ,Laravel and PHP.",
        "⚡ Integrate third-party platforms such as Firebase and AWS.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "fa-brands:laravel",
          style: {
            color: "#47848F",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "fa-brands:php",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "Express JS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#3776AB",
          },
        },

        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "fa-brands:react",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Machine Learning ",
      picturePath: "Machine Learning.png",
      skills: [
        "⚡ Apply machine learning techniques to solve complex problems with data analysis and model training",
        "⚡ Leverage deep learning frameworks to build and deploy models for image processing and computer vision",
        "⚡ Implement algorithms for classification, regression, and anomaly detection using various datasets",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Pytorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            color: "#D00000",
          },
        },
        {
          skillName: "Google Colab",
          fontAwesomeClassname: "simple-icons:googlecolab",
          style: {
            color: "#F7B02A",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#ffffff",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Scipy",
          fontAwesomeClassname: "simple-icons:scipy",
          style: {
            color: "#8C2A2A",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#1E90FF",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Higher School of Communication of Tunis",
      subtitle: "ICT Engineering Student ",
      logo_path: "sup-com-logo.jpg",
      alt_name: "supcom",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ I have studied core subjects in Computer Science and Network Fundamentals.",
        "⚡ I have implemented several academic projects related to these subjects as part of my coursework.",
        "⚡ I have also developed personal projects to deepen my understanding and enhance my practical skills.",
      ],
      website_link: "https://www.supcom.tn/",
    },
    {
      title:
        " Preparatory Institute for Engineering Studies of Monastir (IPEIM)",
      subtitle: " Pre-Engineering Degree in Physics and Chemistry",
      logo_path: "ipeim-logo.jpg",
      alt_name: "ipeim",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I pursued pre-engineering studies in Physics and Chemistry, reinforcing my math skills.",
        "⚡ I ranked 68th out of 1,480 candidates in the National Entrance Examination for Engineering Programs.",
      ],
      website_link: "https://ipeim.rnu.tn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title:
        "Red Hat OpenShift Administration I: Operating a Production Cluster 4.14",
      subtitle: "RedHat Academy",
      logo_path: "redhat-academy.png",
      alt_name: "RedHat academy",
      color_code: "#EF0808",
    },
    {
      title: "Red Hat OpenShift I : conteneurs & Kubernetes 4.10",
      subtitle: "RedHat Academy",
      logo_path: "redhat-academy.png",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "RedHat academy",
      color_code: "#EF0808",
    },
    {
      title: "Sizing LLM Inference Systems",
      subtitle: "Nvidea",
      logo_path: "NVIDIA-Deep-Learning.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "NVIDIA-Deep-Learning",
      // color_code: "#F6B808",
      color_code: "#7DBA08",
    },
    {
      title: "Augmenting LLMs Using Retrieval Augmented Generation",
      subtitle: "Nvidea",
      logo_path: "NVIDIA-Deep-Learning.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "NVIDIA-Deep-Learning",
      // color_code: "#F6B808",
      color_code: "#7DBA08",
    },
    {
      title: "Building RAG Agents with LLMs",
      subtitle: "Nvidea",
      logo_path: "NVIDIA-Deep-Learning.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "NVIDIA-Deep-Learning",
      // color_code: "#F6B808",
      color_code: "#7DBA08",
    },
    {
      title: "Generative AI Explained",
      subtitle: "Nvidea",
      logo_path: "NVIDIA-Deep-Learning.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "NVIDIA-Deep-Learning",
      // color_code: "#F6B808",
      color_code: "#7DBA08",
    },
    // {
    //   title: "Cyber Security & Cyber Forensics",
    //   subtitle: "Workshop at IIT Bombay",
    //   logo_path: "iit.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
    //   alt_name: "Workshop",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter International Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter International Hackathon",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Node.js Backend Developer, I have worked with real projects for over two years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "ACTIA Engineering Services",
          company_url:
            "https://lab-engineering.actia.tn/actia-engineering-services/",
          logo_path: "Actia-ES-logo.jpg",
          duration: "Feb 2025 - Jul 2025",
          location: "Ariana, Tunisia",
          description: `Developed a digital twin of a residential building to predict 24-hour energy consumption using LSTM and
 XGBoost models, integrating real-time sensor data and weather conditions.Identified high-impact appliances and optimized monitoring through decision trees and feature selection,
 improving model accuracy and efficiency.Delivered intelligent energy usage recommendation.`,
          color: "#08B154",
        },
        {
          title: "Full Stack Developer",
          company: "Qonteq Technologies LLC",
          company_url: "https://www.linkedin.com/company/qonteq/",
          logo_path: "qonteq-logo.jpg",
          duration: "Jul 2024 - Sep 2024",
          location: "Remote",
          description: ` Developed a scalable backend and responsive frontend for a streaming platform, enhancing user engagement and
            seamless data flow.`,
          color: "#ee3c26",
        },
        {
          title: "Front End Developer",
          company: "ERNST",
          company_url: "https://www.ernst.tn/",
          logo_path: "ernst-logo.png",
          duration: "Jul 2023 - Sep 2023",
          location: "Mahdia, Tunisia",
          description: ` Led the frontend architecture of a revenue management website with React.js, collaborating with cross-functional
 teams and integrating emerging technologies.
            `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Joy Room: PACTEProject",
          company: "Orphanage In Monastir",
          logo_path: "centre-integré.jpg",
          duration: "March 2022",
          location: "Monastir Mahdia",
          description:
            " Contributed to the establishment of a professional taekwondo room in the orphanage, More details are in the facebook page : https://www.facebook.com/profile.php?id=100091640615701 and the youtube Video https://www.youtube.com/watch?v=ni2QqJis2hA",
          color: "#FBBD18",
        },
        {
          title: "Memberofthe Forum’s SUP’COM Community",
          company: "SUP’COM",
          company_url: "https://www.supcom.tn/pages/forum",
          logo_path: "sup-com-logo.jpg",
          duration: "Nov 2022",
          location: "Ariana Tunisia",
          description:
            "Contributed to the success of the annual Forum of SUP’COM by organizing activities, engaging with attendees, and enhancing event impact through teamwork and community engagement.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "Projects-pic.png",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ghada_ataoui.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Cancer-detection-wisconsin-dataset P",
      description:
        "a machine learning model using the K-Nearest Neighbors (KNN) algorithm to detect cancer based on the Wisconsin dataset.  ",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Ghada-Ataaoui/Cancer-detection-wisconsin-dataset",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "Virtual-Art-Gallery ",
      url: "https://bardo-virtual-gallery.vercel.app/",
      description: "Virtual Art Gallery of Bardo Museum - Tunisia.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Three.js",
          iconifyClass: "logos-threejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Ghada-Ataaoui/Virtual-Art-Gallery",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "EEG-Signal-Processing",
      description:
        "Processing EEG signals from the DEAP dataset to recognize human emotions. The pipeline includes feature extraction, and classification using deep learning and machine learning models.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Ghada-Ataaoui/EEG-Signal-Processing",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
