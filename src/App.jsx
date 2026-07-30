import { useState } from 'react'
import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaCode,
} from 'react-icons/fa';

import {
  SiTailwindcss, SiSass, SiCanva, SiPhp, SiPhpmyadmin, SiRedis
} from 'react-icons/si';

// skills
const SkillCard = ({ title, color, skills }) => (
  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300">
    <h3 className={`text-xl font-semibold mb-5 ${color}`}>{title}</h3>
    <div className=" flex flex-row flex-wrap space-x-4 space-y-4 p-8 text-white/90">
      <span className='text-purple-300 font-bold px-2 pb-2 scale-175'>.</span>
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-2 h-fit">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-sm font-medium">{skill.name}</span>
          <span className='text-purple-300 font-bold px-2 pb-2 scale-175'>.</span>
        </div>
      ))}
    </div>
  </div>
);

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'SASS', icon: <SiSass className="text-pink-400" /> },
  { name: 'PHP', icon: <SiPhp className='text-blue-300' /> },
];

const tools = [
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'VS Code', icon: <FaCode className="text-blue-500" /> },
  { name: 'Canva', icon: <SiCanva className="text-blue-400" /> },
  { name: 'PhpMyAdmin', icon: <SiPhpmyadmin className="text-orange-300" /> },
  { name: 'Redis', icon: <SiRedis className="text-red-400" /> },
];

// projects
const projects = [
  {
    title: "asancars",
    description: "Contributed to the development of a full-stack Admin Panel and two interconnected Flutter applications for a ride-sharing platform. Built responsive React interfaces, developed PHP REST APIs, designed MySQL databases, integrated Redis for efficient data handling, and collaborated across the complete software development lifecycle, from planning to deployment.",
    tech: "React, Flutter, Redis, Php, PhpMyadmin, MySQL",
    category: "Web & App Development",
    image: `${import.meta.env.BASE_URL}asancars.png`,
    // demoLink: "https://cssawwwards.com/demo/",
    // githubLink: "https://github.com/webperts/accounts",
  },
  {
    title: "CSSAwwwards",
    description: "A full-stack website with a responsive interface and a strong backend powering dynamic features. It delivers smooth functionality, modern design, and real-world full-stack performance.",
    tech: "React, Vite, MongoDB, NodeJS",
    category: "Web",
    image: `${import.meta.env.BASE_URL}CSSAwwwards.png`,
    demoLink: "https://cssawwwards.com/demo/",
    githubLink: "https://github.com/webperts/accounts",
  },
  {
    title: "Twitter (X) - Clone",
    description: "A visually accurate static clone of Twitter, designed to highlight layout and UI skills.",
    tech: "HTML5, CSS3, JS",
    category: "Web",
    image: `${import.meta.env.BASE_URL}Twitter.jpg`,
    demoLink: "https://hadisafatima.github.io/TwitterX_Clone/",
    githubLink: "https://github.com/hadisafatima/TwitterX_Clone",
  },
  {
    title: "Quran and Sunnah",
    description: "A site sharing the meanings of Surahs and timeless Hadiths to deepen understanding of Quran and Sunnah.",
    tech: "HTML5, CSS3, JS",
    category: "Web",
    image: `${import.meta.env.BASE_URL}QuranAndSunnah.png`,
    demoLink: "https://hadisafatima.github.io/Wisdoms-of-Holy-Quran-and-Sunnahs/",
    githubLink: "https://github.com/hadisafatima/Wisdoms-of-Holy-Quran-and-Sunnahs",
  },
  {
    title: "Memory Game",
    description: "An interactive memory game designed to enhance focus and recall through engaging card-matching challenges.",
    tech: "HTML5, CSS3, JS",
    category: "Web",
    image: `${import.meta.env.BASE_URL}MemoryGame.png`,
    demoLink: "https://hadisafatima.github.io/Simple-Memory-Game-web/",
    githubLink: "https://github.com/hadisafatima/Simple-Memory-Game-web",
  },
];

// certificates
const certificates = [
  {
    title: "Junior Technical Associate",
    issuer: "asancars",
    Dated: "8 June, 2026 - 30 July, 2026",
    image: `${import.meta.env.BASE_URL}webperts_internship.jpeg`,
  },
  {
    title: "React Dev Remote Internship",
    issuer: "Webperts",
    Dated: "01 Aug, 2025 - 31 Oct, 2025",
    image: `${import.meta.env.BASE_URL}webperts_internship.jpeg`,
  },
  {
    title: "Front-End Dev Remote Internship",
    issuer: "Nova Genius",
    Dated: "3 June, 2024 - 2 Aug, 2024",
    image: `${import.meta.env.BASE_URL}frontend_internship.jpeg`,
  },
  {
    title: "Google Developer Students Club (GDSC) Core Team Member Certificate",
    issuer: "GDSC - MUET, Jamshoro",
    Dated: "2023 - 2024",
    image: `${import.meta.env.BASE_URL}GDSC_certificate.jpeg`,
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* LARGE SCREENS NAVBAR */}
      <div id='navbar' className='hidden sm:flex flex-row px-[3rem] space-x-4 lg:space-x-4 py-8 fixed z-50 top-0 justify-center items-center w-full lg:w-screen bg-[#242424]'>
        {/* <p> */}
        <div id="logo" className="text-4xl font-bold">Hadisa.</div>
        {/* </p> */}
        <section href='#tabs' className='flex font-bold flex-row sm:text-[0.6rem] md:text-[0.7rem] lg:text-[1rem] lg:space-x-6 px-3 py-2 lg:px-5 lg:py-4 border rounded-full'>
          <a href='#home' className='tab cursor-pointer hover:bg-white/5 rounded-full px-3 py-2' onClick={(e) => {
            e.preventDefault();
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
          }}>Home</a>
          <a href='#about' className='tab cursor-pointer hover:bg-white/5 rounded-full px-3 py-2' onClick={(e) => {
            e.preventDefault();
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
          }}>About Me</a>
          <a href='#skills' className='tab cursor-pointer hover:bg-white/5 rounded-full px-3 py-2' onClick={(e) => {
            e.preventDefault();
            document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
          }}>Skills</a>
          <a href='#projects' className='tab cursor-pointer hover:bg-white/5 rounded-full px-3 py-2' onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}>Projects</a>
          <a href="#certificates" className='tab cursor-pointer hover:bg-white/5 rounded-full px-3 py-2' onClick={(e) => {
            e.preventDefault();
            document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
          }}>Certificates</a>
        </section>

        <a href="./Web_Dev_CV.pdf" download="Web_Dev_CV.pdf"
          className='resumeCvBtn bg-white text-[0.8rem] lg:text-[1rem] text-[#242424] py-4 px-3 lg:px-6 rounded-full cursor-pointer'>
          <p>Download CV <i className="fa-solid fa-download ml-2"></i></p>
        </a>
      </div>

      {/* MOBILE SCREEN NAVBAR */}
      <div className='flex sm:hidden items-center justify-between fixed top-0 py-8 w-full px-[3rem] bg-[#242424]'>
        <p>
          <div id="logo" className="text-3xl font-bold">Hadisa.</div>
        </p>

        <p id='bars' onClick={() => setIsMenuOpen(true)} className='border border-white rounded-2xl px-3 py-2'><i className="fa-solid fa-bars"></i></p>
      </div>

      {/* MOBILE SCREEN NAVBAR OPTIONS */}
      {isMenuOpen && (
        <div className='flex sm:hidden flex-col space-y-8 bg-[#242424] fixed top-0 w-full h-screen z-40 py-8 px-[3rem] justify-center'>

          <section className='flex flex-row justify-end w-full'>
            <p onClick={() => setIsMenuOpen(false)} className='border border-red-700 text-2xl px-3 py-2 font-bold rounded-2xl text-red-700'>
              <i className="fa-solid fa-xmark"></i>
            </p>
          </section>

          <section className='flex flex-col space-y-6 w-[70%] mx-auto justify-center'>

            <section className='flex flex-col space-y-6 font-bold'>
              <a href='#home' onClick={() => setIsMenuOpen(false)} className='tab bg-white/5 rounded-full px-4 py-2'>Home</a>
              <a href='#about' onClick={() => setIsMenuOpen(false)} className='tab bg-white/5 rounded-full px-4 py-2'>About Me</a>
              <a href='#skills' onClick={() => setIsMenuOpen(false)} className='tab bg-white/5 rounded-full px-4 py-2'>Skills</a>
              <a href='#projects' onClick={() => setIsMenuOpen(false)} className='tab bg-white/5 rounded-full px-4 py-2'>Projects</a>
              <a href="#certificates" onClick={() => setIsMenuOpen(false)} className='tab bg-white/5 rounded-full px-4 py-2'>Certificates</a>
            </section>

            <a href="./Web_Dev_CV.pdf" download="Web_Dev_CV.pdf"
              className='resumeCvBtn bg-white text-[0.8rem] lg:text-[1rem] text-[#242424] py-4 px-3 lg:px-6 rounded-full cursor-pointer'>
              <p>Download CV <i className="fa-solid fa-download ml-2"></i></p>
            </a>

          </section>

        </div>
      )}

      {/* HOME SECTION */}
      <div id='home' className='px-[3rem] flex flex-col items-center'>
        <p id='name' className='font-bold text-3xl sm:text-6xl mt-54 sm:mt-64 px-4 sm:px-32 yeseva-one-regular'>I'm Hadisa Fatima Syed</p>
        <p id='taglines' className='text-xl sm:text-3xl mx-2 sm:mx-16 lg:mx-40 px-4 sm:px-0 pt-6 font-semibold'>
          As a front-end developer, I specialize in creating responsive, high-performance interfaces that balance beauty and usability. I obsess over details — motion, spacing, accessibility, and clarity — to turn designs into polished, interactive experiences.
        </p>

        <p className="max-w-xl text-gray-300 italic m-8">
          I build products that look great, load fast, and feel intuitive — every time.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-gray-200 text-sm">8+ Projects Built</span>
          <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-gray-200 text-sm">Strong UI Sense & Clean Code</span>
          <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-gray-200 text-sm">Learning ReactLearning React, Databases & Backend Basics</span>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div id='about' className='mt-50 px-[3rem] text-justify sm:px-16'>
        <section className='flex flex-col lg:flex-row mt-8 space-x-8'>
          <p className='hidden md:flex rounded-xl border-2 border-white/30 overflow-hidden my-8 lg:my-0 w-1/4 lg:w-auto lg:sticky lg:top-50 flex-1/3 h-[50rem] lg:h-[30rem]'>
            <img src="./purple.jpeg" alt="" className='w-full lg:overflow-hidden h-[12rem] lg:h-[40rem] relative top-18 lg:top-18 right-5 scale-175 lg:scale-130 rounded-2xl object-contain lg:object-cover' />
          </p>

          <section className='flex-2/3'>
            <p id='aboutheading' className='flex justify-start font-bold text-3xl sm:text-5xl pb-4'>About Me!</p>

            <section id='aboutcontent' className='text-left text-[1.5rem]'>
              <p>
                I'm a <span className="bg-blue-400/60 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">final-year Software Engineering student</span> at MUET who enjoys turning ideas into scalable, user-friendly digital products. My primary expertise lies in front-end development, but I'm equally passionate about understanding how complete systems are built—from intuitive interfaces to robust back-end services.
              </p>

              <p>
                My journey began with <span className="bg-purple-100/50 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">UI development</span>, where I discovered the impact of thoughtful design, clean layouts, and meaningful interactions. Over time, I specialized in
                <span className="bg-purple-600/40 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">React.js</span>,
                <span className="bg-teal-500/40 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">Tailwind CSS</span>,
                and modern component-based architecture to create fast, responsive, and accessible web applications.
              </p>

              <p>
                During my internships, I worked on production-level applications ranging from responsive web platforms to a complete ride-sharing ecosystem. I contributed to a <span className="bg-blue-500/50 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">React Admin Panel</span>, two interconnected
                <span className="bg-cyan-500/50 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">Flutter applications</span>, built
                <span className="bg-green-500/50 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">REST APIs</span>, designed
                <span className="bg-yellow-500/50 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">MySQL databases</span>, and worked with
                <span className="bg-red-500/50 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">Redis</span>, giving me hands-on experience across the full software development lifecycle.
              </p>

              <p>
                Beyond writing code, I'm passionate about creating experiences that users genuinely enjoy. I pay close attention to performance, accessibility, reusable architecture, and the small details—like animations, spacing, and micro-interactions—that make an application feel polished and intuitive.
              </p>

              <p>
                Outside of development, you'll probably find me
                <span className="bg-purple-400 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">rope jumping</span> ❤️‍🔥,
                exploring emerging technologies, or competing in
                <span className="bg-orange-400 py-1 px-2 mx-1 rounded-full font-mono yeseva-one-regular">Free Fire</span> 🔥.
                I believe continuous learning and curiosity are what drive great developers.
              </p>

              {/* <p className="font-semibold text-xl text-gray-300">
                ✨ My goal is to build software that is beautiful, performant, and impactful—creating seamless experiences that users love and products that make a difference.
              </p> */}

            </section>
          </section>
        </section>
      </div>

      {/* SKILLS SECTION */}
      <div id='skills' className='mt-50 px-[3rem] sm:px-16 lg:px-24'>
        <p id='skillsheading' className='flex justify-start font-bold text-3xl sm:text-5xl'>Skills</p>
        <div className="flex flex-row flex-wrap justify-center gap-12 mt-8">
          <SkillCard title="Front-End Development" color="text-purple-300" skills={skills} />
          <SkillCard title="Tools & Workflow" color="text-purple-300" skills={tools} />
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div id='projects' className='mt-50 px-[3rem] sm:px-16 lg:px-24'>
        <p id='projectsheading' className='flex justify-start font-bold text-3xl sm:text-5xl'>Some Projects</p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects
            .map((project, index) => (
              <div
                key={index}
                className="bg-white/5 translate-y-0 hover:translate-y-1.5 rounded-lg border border-white/20 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img src={project.image} alt={project.title} className="rounded-t-lg mb-4 w-full" />

                <section className='p-6'>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-3 text-sm">{project.description}</p>
                  <p className="text-xs text-white/50 italic mb-2">Tech stack: {project.tech}</p>
                  <div className="flex flex-col xl:flex-row space-y-3 xl:space-y-0 xl:space-x-3 mt-4">
                    <a href={project.demoLink} target="_blank" className="tab hover:underline hover:bg-white/20 bg-white/10 rounded-full py-2 px-3"><i className="fa-solid fa-link">:</i> Live Demo<i className="ml-1 text-[0.5rem] fa-solid fa-arrow-up-right-from-square"></i></a>
                    <a href={project.githubLink} target="_blank" className="tab hover:underline hover:bg-white/20 bg-white/10 rounded-full py-2 px-3 h-fit"><i className="fa-brands fa-github">:</i> GitHub<i className="ml-1 text-[0.5rem] fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </section>
              </div>
            ))}
        </div>
      </div>

      {/* CERTIFICATES SECTION */}
      <div id='certificates' className='mt-50 px-[3rem] sm:px-16 lg:px-24'>
        <p id='certificatesheading' className='flex justify-start font-bold text-3xl sm:text-5xl'>Some Certifications</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 translate-0 hover:translate-y-1.5 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-t-xl w-full h-50 object-cover mb-4"
              />

              <section className='pb-6'>
                <h3 className="text-white font-semibold text-lg mb-1">{cert.title}</h3>
                <p className="text-white/70 text-sm mb-3">{cert.issuer}</p>
                <p className="text-white/70 text-sm mb-3">{cert.Dated}</p>
                <a
                  id='certBtns'
                  href={cert.image}
                  target="_blank"
                  className="tab inline-block mt-2 px-6 py-2 bg-black/30 rounded-full font-medium"
                >
                  View Certificate
                  <i className="ml-1 text-[0.5rem] fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </section>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer className="mt-20 sm:px-16 pt-7 rounded-t-4xl bg-[#1a1a1a] text-white text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          <div id="logo" className="mx-5 text-3xl font-bold">Hadisa.</div>

          <div className="flex space-x-12">
            <a href="#home" className="tab hover:underline hover:text-white-/50" onClick={(e) => {
              e.preventDefault();
              document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            }}>Home</a>
            <a href="#about" className="tab hover:underline hover:text-white-/50" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }}>About</a>
            <a href="#skills" className="tab hover:underline hover:text-white-/50" onClick={(e) => {
              e.preventDefault();
              document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
            }}>Skills</a>
            <a href="#projects" className="tab hover:underline hover:text-white-/50" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}>Projects</a>
            <a href="#certificates" className="tab hover:underline hover:text-white-/50" onClick={(e) => {
              e.preventDefault();
              document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
            }}>Certificates</a>
          </div>

          <div className="flex space-x-4 text-xl">
            <a className='tab' href="https://github.com/hadisafatima" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-400" />
            </a>
            <a className='tab' href="https://www.linkedin.com/in/hadisa-fatima-syed-85537a266/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a className='tab' href="mailto:your.hadisaasyed@gmail.com">
              <FaEnvelope className="hover:text-red-400" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-6">
          <p>&copy; {new Date().getFullYear()} Hadisa Fatima Syed</p>
          <span className="hidden sm:block">|</span>
          <p>Built with <span className="text-[#be83c9] font-semibold">React & Tailwind</span></p>
        </div>
      </footer>
    </>
  )
}

export default App