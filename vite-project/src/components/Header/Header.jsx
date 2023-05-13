
import { useState } from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {FiVideo} from 'react-icons/fi';
import {TbGridDots} from 'react-icons/tb';
import {MdNotificationsNone} from 'react-icons/md';
import {RxAvatar} from 'react-icons/rx';

import './Header.css';

const Header = () => {

    const [searchTerm , setSearchTerm] = useState('');

const handleSubmit = ()=>{
    e.preventDefault();
}





  return (
<header className='header'>
<div className='header-logos'>
    <GiHamburgerMenu size='27px' className='headerHamburger'/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="logotip" className='youtubeLogo' />
</div>


<div className='iconsWrapper'>

<div className='header-input'>

<form>
    <input type="text" className='formSearch' onChange={(e)=> setSearchTerm(e.target.value)} placeholder='Search'/>

</form>

</div>

<div className='header-icons'>

<FiVideo size='25px' className='header-icon'/>
<TbGridDots size='25px' className='header-icon'/>
<MdNotificationsNone size='25px' className='header-icon'/>
<RxAvatar size='25px'/>
</div>
<RxAvatar className='avatar-icon' size='25px'/>

</div>
</header>
  )
}

export default Header;