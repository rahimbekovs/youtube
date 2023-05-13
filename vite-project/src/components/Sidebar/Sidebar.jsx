import './Sidebar.css'
// import { Link } from 'react-router-dom';

import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineFire} from 'react-icons/ai';
import {MdOutlineSubscriptions} from 'react-icons/md';


import {AiOutlineFolder} from 'react-icons/ai';
import {MdOutlineHistoryEdu} from 'react-icons/md';
import {MdOutlineAccessAlarm} from 'react-icons/md';
import {FiStar} from 'react-icons/fi';
import {AiOutlineHeart} from 'react-icons/ai';
import {TfiMusicAlt} from 'react-icons/tfi';
import {BiJoystick} from 'react-icons/bi';
import {BsChevronCompactDown} from 'react-icons/bs';

import {RxAvatar} from 'react-icons/rx';
import Tremding from '../Trending/Tremding';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>

    <div className="sidebarItem">
    <AiOutlineHome size='20px'/>
    <h4 className='sidebarItemText'>Home</h4>
    </div>

    <div className="sidebarItem">
   <AiOutlineFire size='20px'/>
    <h4 className='sidebarItemText'>Trending</h4>
    </div>

    <div className="sidebarItem">
  <Link className='regLink' to={'/register'}>
  <RxAvatar size='20px'/>
    <h4 className='sidebarItemText'>Registration</h4>
  </Link>
    </div>

    <div className="sidebarItem">
    <AiOutlineFolder size='20px'/>
    <h4 className='sidebarItemText'>Library</h4>
    </div>


    <div className="sidebarItem">
    <MdOutlineHistoryEdu size='20px'/>
    <h4 className='sidebarItemText'>History</h4>
    </div>

    <div className="sidebarItem">
    <MdOutlineAccessAlarm size='20px'/>
    <h4 className='sidebarItemText'>Watch later</h4>
    </div>

    <div className="sidebarItem">
    <FiStar size='20px'/>
    <h4 className='sidebarItemText'>Favourites</h4>
    </div>


    <div className="sidebarItem">
    <AiOutlineHeart size='20px'/>
    <h4 className='sidebarItemText'>Liked video</h4>
    </div>

    <div className="sidebarItem">
    <TfiMusicAlt size='20px'/>
    <h4 className='sidebarItemText'>Music</h4>
    </div>

    <div className="sidebarItem">
    <BiJoystick size='20px'/>
    <h4 className='sidebarItemText'>Games</h4>
    </div>


    <div className="sidebarItem">
    <BsChevronCompactDown size='20px'/>
    <h4>Show more</h4>
    </div>

    <h2 className='sidebarSubs'>Subscriptions</h2>

    <div className="sidebarItem">
    <RxAvatar size='20px'/>
    <h4 className='sidebarItemText'>Elon Musk</h4>
    </div>


    <div className="sidebarItem">
    <RxAvatar size='20px'/>
    <h4 className='sidebarItemText'>Elon Musk</h4>
    </div>



    <div className="sidebarItem">
    <RxAvatar size='20px'/>
    <h4 className='sidebarItemText'>Elon Musk</h4>
    </div>



    <div className="sidebarItem">
    <RxAvatar size='20px'/>
    <h4 className='sidebarItemText'>Elon Musk</h4>
    </div>

    </div>
  )
}

export default Sidebar;