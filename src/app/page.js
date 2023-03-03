import {BsMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram,AiOutlineGithub} from 'react-icons/ai'
import Image from 'next/legacy/image'
import cartoon from 'public/cartoon.png' 


export default function Home() {
  return (
    <div className='bg-white'>
      <section className= 'min-h-screen' > {/*Section from main heading to image container */}
        <div className=' bg-gray-100' >
         <nav className='py-10 p-10 mb-10 flex justify-between '>
          <h1 className='text-xl font-burtons'>Er.Wiwek</h1>
          <ul className='flex item-center'>
            <li>
              <BsMoonStarsFill className='text-2xl cursor-pointer' />
            </li>
            <li >
              <a className= ' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8' href='#'>Resume</a>
            </li>
          </ul>
         </nav>
         <div className='text-center p-10 flex flex-col'>
          <h2 className='text-6xl py-2 text-teal-600 font-extrabold '>Wiwek_K.C.</h2>
          <h3 className='text-3xl py-2'>Software Developer and Data Analyst</h3>
          <p className='text-md py-5 leading-8 text-gray-800 font-serif' >
            This is me a software developer and data insight analyst who is interested in technology and its impacts on business corporates industry and in consumer level.
          </p>
         </div>
        </div>
         <div className='text-5xl flex justify-center gap-16 py-1 text-gray-700'>
          <AiFillTwitterCircle />
          <AiFillLinkedin/>
          <AiFillInstagram/>
          <AiOutlineGithub/>
         </div>
         <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 mx-auto  overflow-hidden  '>
          <Image src={cartoon} layout='fill' objectFit='cover'  />
         </div>
      </section>
      <section className='p-10 bg-gray-100 flex flex-col md:flex-row gap-6 min-h-fit'> {/*Section of about me and skills*/}
        <div className='w-full md:w-[50%]'>
           <h3 className='text-3xl font-extrabold text-teal-700 uppercase'>About Me</h3>
           <p className='text-md leading-8 text-gray-800 text-justify mt-2 italic hover:not-italic'>
              I am a <span className='text-teal-500'> MERN developer </span> and <span className='text-teal-500'>Analytics engineer </span> who loves to try new tech stack. I have done some projects regarding <span className='text-teal-500'>desktop</span> and <span className='text-teal-500'> web application </span>. I have a passion for working in web technology,solving problems and thrive in a team environment.
           </p>
           <p className='text-md leading-8 text-gray-800 pt-6 italic hover:not-italic'>
              I'm open to <span className='text-teal-500'> Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='text-teal-500'>contact</span> me.
           </p>
        </div>
        <div className='w-full ml-12 md:w-[50%] flex flex-col'>
          <h3 className='text-3xl font-extrabold text-teal-700 uppercase'>Technology I have worked with</h3>
          <section className=' text-2xl text-yellow-600 mt-2 font-serif' >1. WEB APPLICATION
          <ul className='grid grid-cols-4 gap-y-2 mt-1'>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black'>
              HTML
            </li>
            <li className= 'bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              CSS
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              Javascript
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              React
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              Next
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              Node
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              Express
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              Tailwind
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              PostCSS
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              MongoDB
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              RestAPI
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              GraphQL
            </li>
          </ul>
          </section>
          <section className=' text-2xl text-yellow-600 mt-4 font-serif' >2. DESKTOP APPLICATION
          <ul className='grid grid-cols-5 gap-y-2 mt-1'>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black'>
              Python
            </li>
            <li className= 'bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              Tkinter
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              SQlite
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              MySQL
            </li>
            </ul>
          </section>
          <section className=' text-2xl text-yellow-600 mt-4 font-serif' >3. DATA VISUALIZATION
          <ul className='grid grid-cols-5 gap-y-2 mt-1'>
          <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black'>
              Python
            </li>
            <li className= 'bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              NumPy
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              Pandas
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              MatPlotLib
            </li>
            <li className=' bg-green-300 rounded-xl w-fit h-fit text-lg text-black '>
              Seaborn
            </li>
          </ul>
          </section>
        </div>
      </section>    
      <section className=' align-middle my-20'> {/* Section for my project */}
       <main className='w-full space-y-4' >
        <h1 className='text-3xl font-extrabold text-teal-700 text-center' >My Works</h1>
        <div className=' bg-teal-700 h-1 w-8  rounded-full m-auto text-center' ></div>
        <div className='flex justify-center'>
        <p className='w-full m-auto  text-center text-lg font-serif'>Here you will find some of the personal projects that I created with each project containing all of the tech stacks used</p>
        </div>
        
       </main>
      </section>  
    </div>
  )
}
