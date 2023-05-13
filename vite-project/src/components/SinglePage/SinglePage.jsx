import { useParams  } from 'react-router-dom'
import './SinglePage.css'
import MapVideo from './MapVideo';
const SinglePage = () => {

    const {id} = useParams();
    // console.log(id);
  return (
    <div>
<div className='frame-wrapper'>
<div className="wrapper-left">
<iframe className='iframe-page' src={`https://www.youtube.com/embed/${id}`} frameborder="0"></iframe>
</div>
<div className="wrapper-right">
    <h2>Recommended</h2>
    <MapVideo/>
</div>

</div>
        {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  )
}

export default SinglePage