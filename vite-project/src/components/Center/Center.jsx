import Sidebar from '../Sidebar/Sidebar';
import Videos from '../Videos/Videos';
import './Center.css'

const Center = () => {
  return (
    <div className='centerDiv'>
      <Sidebar/>
      <Videos/>
    </div>
  )
}

export default Center;