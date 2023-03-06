import {BsMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram,AiOutlineGithub} from 'react-icons/ai'
import Image from 'next/legacy/image'
import cartoon from 'public/cartoon.png' 


export default function Home() {
  return (
    <div className='bg-white '>
      <section className= 'min-h-screen' > {/*Section from main heading to image container */}
        <div className=' bg-yellow-200' >
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
          <h2 className='md:text-6xl text-5xl py-2 text-teal-600 font-extrabold '>Wiwek_K.C.</h2>
          <h3 className='md:text-3xl text-xl py-2'>Software Developer and Data Analyst</h3>
          <p className='md:text-md  py-5 leading-8 text-gray-800 font-serif' >
            This is me a software developer and data insight analyst who is interested in technology and its impacts on business corporates industry and in consumer level.
          </p>
         </div>
        </div>
         <div className='md:text-5xl text-4xl flex justify-center md:gap-16 gap-10 py-1 text-gray-700'>
          <AiFillTwitterCircle />
          <AiFillLinkedin/>
          <AiFillInstagram/>
          <AiOutlineGithub/>
         </div>
         <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 mx-auto  overflow-hidden  '>
          <Image src={cartoon} layout='fill' objectFit='cover'  />
         </div>
      </section>
      <section className='p-10 bg-yellow-100 flex flex-col md:flex-row gap-6 min-h-fit'> {/*Section of about me and skills*/}
        <div className='w-full md:w-[50%]'>
           <h3 className='text-3xl font-extrabold text-teal-700 uppercase'>About Me</h3>
           <p className='text-md leading-8 text-gray-800 text-justify mt-2 '>
              I am a <span className='text-teal-500'> MERN developer </span> and <span className='text-teal-500'>Analytics engineer </span> who loves to try new tech stack. I have done some projects regarding <span className='text-teal-500'>desktop</span> and <span className='text-teal-500'> web application </span>. I have a passion for working in web technology,solving problems and thrive in a team environment.
           </p>
           <p className='text-md leading-8 text-gray-800 pt-6'>
              I'm open to <span className='text-teal-500'> Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='text-teal-500'>contact</span> me.
           </p>
        </div>
        <div className='w-full md:ml-12 md:w-[50%]'>
          <h3 className='md:text-3xl text-2xl font-extrabold text-teal-700 uppercase'>Technology I have worked with</h3>
          <section className=' md:text-2xl text-l text-green-600 mt-2 font-serif' >1. WEB APPLICATION
          <ul className='grid md:grid-cols-4 md:gap-y-2 mt-1 grid-cols-3 gap-4'>
            <li className=' list '>
              HTML
            </li>
            <li className= 'list '>
              CSS
            </li>
            <li className=' list '>
              Javascript
            </li>
            <li className=' list '>
              React
            </li>
            <li className=' list '>
              Next
            </li>
            <li className=' list '>
              Node
            </li>
            <li className=' list '>
              Express
            </li>
            <li className=' list '>
              Tailwind
            </li>
            <li className=' list '>
              PostCSS
            </li>
            <li className=' list '>
              MongoDB
            </li>
            <li className=' list '>
              RestAPI
            </li>
            <li className=' list '>
              GraphQL
            </li>
          </ul>
          </section>
          <section className=' md:text-2xl text-l text-green-600 mt-4 font-serif text-clip' >2. DESKTOP APPLICATION
          <ul className='grid md:grid-cols-5 md:gap-y-2 mt-1 grid-cols-4 gap-4'>
            <li className=' list'>
              Python
            </li>
            <li className= 'list '>
              Tkinter
            </li>
            <li className=' list '>
              SQlite
            </li>
            <li className=' list '>
              MySQL
            </li>
            </ul>
          </section>
          <section className=' md:text-2xl text-l text-green-600 mt-4 font-serif' >3. DATA VISUALIZATION
          <ul className='grid md:grid-cols-5 md:gap-y-2 mt-1 grid-cols-3 gap-4'>
          <li className=' list'>
              Python
            </li>
            <li className= 'list '>
              NumPy
            </li>
            <li className=' list '>
              Pandas
            </li>
            <li className=' list '>
              MatPlotLib
            </li>
            <li className=' list '>
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
        <p className='w-full m-auto  text-center text-lg font-serif'>Here you will find some of the personal projects that I created, with each project containing all of the tech stacks used</p>
        </div>
        
       </main>
      </section>  
    </div>
  )
}
