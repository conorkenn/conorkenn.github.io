import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Pdf from '../assets/ConorKennedy_Resume.pdf'

const Links = () => {
    return(
        <div className='text-2xl'>
            <ul className='flex'>
                <li className='hover:text-blue-500'>
                    <a href={Pdf} target='_blank' rel='noopener noreferrer'>Resume</a>
                </li>
                <li className='mx-2 hover:text-blue-500'>
                    <a href='https://github.com/conorkenn'><FaGithub /></a>
                </li>
                <li className='mx-2 hover:text-blue-500'>
                    <a href='https://www.linkedin.com/in/conorkennedy93/'><FaLinkedin /></a>
                </li>
                
            </ul>
         </div>
    );
   
    
}

export default Links