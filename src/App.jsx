import { useState } from 'react'
import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt,
  FaTable, FaChartLine, FaFileExcel, FaThLarge,
  FaTools, FaChartBar, FaDatabase, FaCode
} from 'react-icons/fa';

import {
  SiTailwindcss, SiSass, SiMysql, SiCanva
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

const frontEndSkills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'SASS', icon: <SiSass className="text-pink-400" /> },
];

const dataAnalysisSkills = [
  { name: 'Tabulae', icon: <FaThLarge className="text-purple-400" /> },
  { name: 'Power BI', icon: <FaChartLine className="text-yellow-400" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
  { name: 'Spreadsheets', icon: <FaFileExcel className="text-green-500" /> },
  { name: 'Pivot Tables', icon: <FaTable className="text-indigo-400" /> },
  { name: 'Visualization', icon: <FaChartBar className="text-orange-400" /> },
  { name: 'Data Wrangling', icon: <FaTools className="text-gray-300" /> },
];

const tools = [
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Kaggle', icon: <FaDatabase className="text-blue-300" /> },
  { name: 'VS Code', icon: <FaCode className="text-blue-500" /> },
  { name: 'Canva', icon: <SiCanva className="text-blue-400" /> },
];

// projects
const projects = [
  {
    title: "Memory Game",
    description: "An interactive memory game designed to enhance focus and recall through engaging card-matching challenges.",
    tech: "HTML5, CSS3, JS",
    category: "Frontend",
    image: `${import.meta.env.BASE_URL}MemoryGame.png`,
    demoLink: "https://hadisafatima.github.io/Simple-Memory-Game-web/",
    githubLink: "https://github.com/hadisafatima/Simple-Memory-Game-web",
  },
  {
    title: "Quran and Sunnah",
    description: "A site sharing the meanings of Surahs and timeless Hadiths to deepen understanding of Quran and Sunnah.",
    tech: "HTML5, CSS3, JS",
    category: "Frontend",
    image: `${import.meta.env.BASE_URL}QuranAndSunnah.png`,
    demoLink: "https://hadisafatima.github.io/Wisdoms-of-Holy-Quran-and-Sunnahs/",
    githubLink: "https://github.com/hadisafatima/Wisdoms-of-Holy-Quran-and-Sunnahs",
  },
  {
    title: "Twitter (X) - Clone",
    description: "A visually accurate static clone of Twitter, designed to highlight layout and UI skills.",
    tech: "HTML5, CSS3, JS",
    category: "Frontend",
    image: `${import.meta.env.BASE_URL}Twitter.jpg`,
    demoLink: "https://hadisafatima.github.io/TwitterX_Clone/",
    githubLink: "https://github.com/hadisafatima/TwitterX_Clone",
  },
  {
    title: "Netflix Movies",
    description: "This Netflix movies analysis project reflects my hands-on experience with data wrangling, exploratory analysis, and insightful visualization to extract meaningful entertainment industry insights.",
    tech: "Python, Seaborn, Matplotlib, Numpy, Pandas",
    category: "Data Analysis",
    image: `${import.meta.env.BASE_URL}Netflix.png`,
    demoLink: "#",
    githubLink: "https://github.com/hadisafatima/Netflix-Movies-Data-Analysis-Project",
  },
  {
    title: "Military Expenditure (1960 - 2018)",
    description: "This analysis project is to analyze global military spending trends over time using historical expenditure data (1960–2018). The analysis aims to identify top-spending countries, regional patterns, year-over-year growth, and budget priorities.",
    tech: "Spreadsheets, Tabulae, GitHub, Kaggle",
    category: "Data Analysis",
    image: "https://media.istockphoto.com/id/1498668919/photo/toy-tank-and-dollars-army-token.jpg?s=612x612&w=0&k=20&c=FvtMRxcjx3y-GsgvxF7Bz5LNUti-Scba2Bj305f4zCc=",
    demoLink: "https://public.tableau.com/app/profile/hadisa.fatima.syed/viz/MilitaryExpenditure1960-2018Analysis/MilitaryExpenditureDashboard",
    githubLink: "https://github.com/hadisafatima/Military-Expenditure-Data-Analysis-Project",
  },
];

// certificates
const certificates = [
  {
    title: "4-Day CSS Bootcamp Certificate",
    issuer: "Microsoft Learn Student Ambassador (MLSA) Community",
    Dated: "15 Aug, 2023 - 18 Aug, 2023",
    image: "./CSS_Bootcamp.jpeg",
    link: "https://coursera.org/share/sample-cert",
  },
  {
    title: "Front-End Dev Remote Internship",
    issuer: "Nova Genius",
    Dated: "3 June, 2024 - 2 Aug, 2024",
    image: `${import.meta.env.BASE_URL}Front_End_Internship.jpeg`,
    link: "https://drive.google.com/sample-certificate",
  },
  {
    title: "Google Developer Students Club (GDSC) Core Team Member Certificate",
    issuer: "GDSC - MUET, Jamshoro",
    Dated: "2023 - 2024",
    image: `${import.meta.env.BASE_URL}GDSC_certificate.jpeg`,
    link: "https://drive.google.com/sample-certificate",
  },
  {
    title: "Forage Data Analytics Virtual Job Simulation",
    issuer: "Forage · Tata",
    Dated: "19 April, 2025",
    image: "./Forage_&_Tata_Analytics_Job_Simulation.jpeg",
    link: "https://forage.com/share/sample-cert",
  },
  {
    title: "Prepare Data For Exploration Certificate",
    issuer: "Coursera . Google",
    Dated: "23 June, 2025",
    image: `${import.meta.env.BASE_URL}Google_Prepare_Data_certificate.jpeg`,
    link: "https://drive.google.com/sample-certificate",
  },
];


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      {/* LARGE SCREENS NAVBAR */}
      <div id='navbar' className='hidden sm:flex flex-row px-[3rem] space-x-4 lg:space-x-4 py-8 fixed z-50 top-0 justify-center items-center w-full lg:w-screen bg-[#242424]'>
        {/* <p> */}
          <div id="logo" className="text-4xl font-bold">Hadisa.</div>
        {/* </p> */}
        <section href='#tabs' className='flex font-bold flex-row sm:text-[0.6rem] md:text-[0.7rem] lg:text-[1rem] lg:space-x-6 px-3 py-2 lg:px-5 lg:py-4 border rounded-full'>
          <a href='#home' className='tab cursor-pointer hover:bg-white/5 rounded-full px-3 py-2'>Home</a>
          <a href='#about' className='tab cursor-pointer hover:bg-white/5 rounded-full px-3 py-2'>About Me</a>
          <a href='#skills' className='tab cursor-pointer hover:bg-white/5 rounded-full px-3 py-2'>Skills</a>
          <a href='#projects' className='tab cursor-pointer hover:bg-white/5 rounded-full px-3 py-2'>Projects</a>
          <a href="#certificates" className='tab cursor-pointer hover:bg-white/5 rounded-full px-3 py-2'>Certificates</a>
        </section>
        
        <a href="./Hadisa_Syed_Resume_(Data Analyst).pdf" download="Hadisa_Syed_Resume_(Data Analyst).pdf"
          className='resumeCvBtn bg-white text-[0.8rem] lg:text-[1rem] text-[#242424] py-4 px-3 lg:px-6 rounded-full cursor-pointer'>
          <p>Download Resume <i className="fa-solid fa-download ml-2"></i></p>
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

            <a href="./Hadisa_Syed_Resume_(Data Analyst).pdf" download="Hadisa_Syed_Resume_(Data Analyst).pdf"
              className='resumeCvBtn bg-white text-[0.8rem] lg:text-[1rem] text-[#242424] py-4 px-3 lg:px-6 rounded-full cursor-pointer'>
              <p>Download Resume <i className="fa-solid fa-download ml-2"></i></p>
            </a>

          </section>

        </div>
      )}


      {/* HOME SECTION */}
      <div id='home' className='px-[3rem] flex flex-col items-center'>
        <p id='name' className='font-bold text-3xl sm:text-6xl mt-54 sm:mt-64 px-4 sm:px-32 yeseva-one-regular'>I'm Hadisa Fatima Syed</p>
        <p id='taglines' className='text-xl sm:text-3xl mx-2 sm:mx-16 lg:mx-40 px-4 sm:px-0 pt-6 font-semibold'>
          I am a results-driven professional dedicated to crafting seamless web
          experiences as a front-end developer
          and uncovering valuable insights as a data analyst. Whether building interactive interfaces or
          translating raw
          data into business value, I aim to deliver clarity, usability, and impact.
        </p>

        <div className='flex flex-row space-x-8 pt-8'>
          <a href="./Hadisa_Syed_CV_(Data Analyst).pdf" download="Hadisa_Syed_CV_(Data Analyst).pdf"
            className='resumeCvBtn bg-white text-[0.8rem] lg:text-[1rem] text-[#242424] py-4 px-3 lg:px-6 rounded-full cursor-pointer'>
            <p>Download CV <i className="fa-solid fa-download ml-2"></i></p>
          </a>

          <a href="./Hadisa_Syed_Resume_(Data Analyst).pdf" download="Hadisa_Syed_Resume_(Data Analyst).pdf"
            className='resumeCvBtn bg-white text-[0.8rem] lg:text-[1rem] text-[#242424] py-4 px-3 lg:px-6 rounded-full cursor-pointer'>
            <p>Download Resume <i className="fa-solid fa-download ml-2"></i></p>
          </a>
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
              <p>I'm <span className=" yeseva-one-regular">Hadisa Fatima Syed</span> a <span
                      className="bg-yellow-100/50 py-1 px-2 rounded-full font-mono yeseva-one-regular">Passionate</span>
                  Front-end developer with <span
                      className="bg-yellow-200/50 py-1 px-2 rounded-full font-mono yeseva-one-regular">leveraging
                      Enthusiasm</span>
                  for Data Analysis.</p>
              
              <br />

              <p>I'm a <span className="bg-blue-400/60 py-1 px-2 rounded-full font-mono yeseva-one-regular">3rd Year</span>
                  Student
                  of B.E Software in Mehran University of Engineering
                  and Technology, Jamshoro (MUET, Jamshoro).</p>
              
              <br />
              
              <p>Got started with UI developement back in 2nd Semester, and now I can <span
                      className="bg-purple-100/50 py-1 px-2 rounded-full font-mono yeseva-one-regular">confidently</span> and
                  <span
                      className="bg-purple-800/50 text-white py-1 px-2 rounded-full font-mono yeseva-one-regular">seamlessly</span>
                  build almost
                  any design. But, that didn't feel <span
                      className="bg-purple-400/50 py-1 px-2 rounded-full font-mono yeseva-one-regular">enough</span> to me so
                  I explored a little about relevant fields 
                  and
                  got my interests stuck in the
                  landscape of <span className="bg-purple-600/40 py-1 px-2 rounded-full font-mono yeseva-one-regular">Data
                      Analysis</span>. Now I
                  try
                  to divide time to do both, but not combininig these fields <span
                      className="bg-purple-400/50 py-1 px-2 rounded-full font-mono yeseva-one-regular">YET</span>.
              </p>

              <br />

              <p>I've immensely <span className="bg-orange-400/80 py-1 px-2 rounded-full font-mono yeseva-one-regular">growing
                      interests</span> 
                   towards using UI developement and Data Analysis' knowledge/Skills
                  Together <span className="bg-orange-600 py-1 px-2 rounded-full font-mono yeseva-one-regular">🤝</span></p>
              
              <br />

              <p>I <span className="bg-green-500/50 py-1 px-2 rounded-full font-mono yeseva-one-regular">love</span> going out
                  of box, instead of
                  building traditionally designed sites I embark on developing
                  something, that's <span
                      className="bg-black text-green-300 py-1 px-2 rounded-full font-mono yeseva-one-regular">new</span>,
                  that's <span
                      className="bg-black text-green-300 py-1 px-2 rounded-full font-mono yeseva-one-regular">attention
                      seeker</span>
                  👀. </p>

              <br />

              <p>Speaking of <span
                      className="bg-gray-600 text-white py-1 px-2 rounded-full font-mono yeseva-one-regular">Analyst</span> 
                      side of mine 😌. I've created a few <span className='bg-teal-600 text-white py-1 px-2 rounded-full font-mono yeseva-one-regular'>Analysis 
                      <span className='bg-gray-800 text-white py-0 px-2 rounded-full font-mono yeseva-one-regular'>+</span> Visualizations</span> 
                      projects with sole purpose to gain skills required in Analysis of Data.
                I also had been part of <span
                      className="bg-gray-600/60 text-white py-1 px-2 rounded-full font-mono yeseva-one-regular">2</span> Remote Data Analysis <span
                      className="bg-gray-400 text-black py-1 px-2 rounded-full font-mono yeseva-one-regular">Internships</span>.</p>

              <br />

              <p>I've been part of a <span className="bg-pink-400 py-1 px-2 rounded-full font-mono yeseva-one-regular">virtual
                      Job
                      Simulation</span> for Data Analyst as well, by <span
                      className="bg-pink-400/90 py-1 px-2 rounded-full font-mono yeseva-one-regular">Tata <span className='bg-gray-800 text-white py-0 px-2 rounded-full font-mono yeseva-one-regular'>and</span> Forage</span>, back in <span className="border-b-4 border-b-pink-700 text-white/60 font-bold">April 2025</span>, it was an
                  amazing experience ✨. It taught me everything that an Analyst go through, from <span
                      className="bg-pink-400/70 py-1 px-2 rounded-full font-mono yeseva-one-regular">Data Manipulation</span>
                  to <span className="bg-pink-400/70 py-1 px-2 rounded-full font-mono yeseva-one-regular">presentation
                  </span>.</p>

              <br />

              <p><span className="bg-yellow-400 py-1 px-2 rounded-full font-mono yeseva-one-regular">Fun Fact
                      😶‍🌫️:</span> Free me is a <span className="bg-purple-400 py-1 px-2 rounded-full font-mono yeseva-one-regular">Rope Jumper</span>
                  ❤️‍🔥 or on a killing spree in a <span
                      className="bg-orange-400 py-1 px-2 rounded-full font-mono yeseva-one-regular">FreeFire</span> room 🔥.
              </p>

            </section>
          </section>
        </section>

      </div>


      {/* SKILLS SECTION */}
      <div id='skills' className='mt-50 px-[3rem] sm:px-16 lg:px-24'>
        <p id='skillsheading' className='flex justify-start font-bold text-3xl sm:text-5xl'>Skills</p>      
        <div className="flex flex-row flex-wrap justify-center gap-12 mt-8">
          <SkillCard title="Front-End Development" color="text-purple-300" skills={frontEndSkills} />
          <SkillCard title="Data Analysis" color="text-purple-300" skills={dataAnalysisSkills} />
          <SkillCard title="Tools & Workflow" color="text-purple-300" skills={tools} />
      </div>
      </div>


      {/* PROJECTS SECTION */}
      <div id='projects' className='mt-50 px-[3rem] sm:px-16 lg:px-24'>
        <p id='projectsheading' className='flex justify-start font-bold text-3xl sm:text-5xl'>Some Projects</p>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          {["All", "Frontend", "Data Analysis"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold border ${
                selectedCategory === category
                  ? "bg-white text-purple-300"
                  : "text-[#a4a2a2] border-purple-300/80 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects
            .filter((project) => selectedCategory === "All" || project.category === selectedCategory)
            .map((project, index) => (
              <div
                key={index}
                className="bg-white/5 cursor-pointer rounded-lg border border-white/20 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img src={project.image} alt={project.title} className="rounded-t-lg mb-4 w-full" />

                <section className='p-6'>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-3 text-sm">{project.description}</p>
                  <p className="text-xs text-white/50 italic mb-2">Tech stack: {project.tech}</p>
                  <div className="flex flex-col xl:flex-row space-y-3 xl:space-y-0 xl:space-x-3 mt-4">
                      <a href={project.demoLink} target="_blank" className="tab text-blue-400 hover:underline hover:bg-white/20 bg-white/10 rounded-full py-2 px-3"><i className="fa-solid fa-link">:</i> Live Demo<i className="ml-1 text-[0.5rem] fa-solid fa-arrow-up-right-from-square"></i></a>
                      <a href={project.githubLink} target="_blank" className="tab text-green-400 hover:underline hover:bg-white/20 bg-white/10 rounded-full py-2 px-3 h-fit"><i className="fa-brands fa-github">:</i> GitHub<i className="ml-1 text-[0.5rem] fa-solid fa-arrow-up-right-from-square"></i></a>
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
              className="bg-white/5 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition duration-300"
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
            <a href="#home" className="tab hover:underline hover:text-white-/50">Home</a>
            <a href="#about" className="tab hover:underline hover:text-white-/50">About</a>
            <a href="#skills" className="tab hover:underline hover:text-white-/50">Skills</a>
            <a href="#projects" className="tab hover:underline hover:text-white-/50">Projects</a>
            <a href="#certificates" className="tab hover:underline hover:text-white-/50">Certificates</a>
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