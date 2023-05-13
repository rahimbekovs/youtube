import './Footer.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineFire} from 'react-icons/ai';
import {RxAvatar} from 'react-icons/rx';
import {AiOutlineFolder} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerDiv">
        
        
        <div className="footerItem">
    <AiOutlineHome size='20px'/>
    <h4 className='footerItemText'>Home</h4>
    </div>

    <div className="footerItem">
    <AiOutlineFire size='20px'/>
    <h4 className='footerItemText'>Trending</h4>
    </div>

    <div className="footerItem">
    <RxAvatar size='20px'/>
    <h4 className='footerItemText'>Registration</h4>
    </div>

    <div className="footerItem">
    <AiOutlineFolder size='20px'/>
    <h4 className='footerItemText'>Library</h4>
    </div>
        </div>
    </div>
  )
}

export default Footer