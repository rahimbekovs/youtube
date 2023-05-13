import { useState , useEffect } from "react";
import './MapVideo.css'
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Foooter/Footer";



const MapVideo = () => {

//     const [newsData, setNewsData] = useState([]);

// const myData =  newsData.slice(0,10).map((element) => (
// <div className='mapDiv' key={element.id.videoId}>
//   {/* <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa2'></iframe> */}
//   <img src={`${element?.snippet?.thumbnails?.high?.url}`} alt="photo" className="mapDivImg" />
//   <h2 className='mapDivP'>{element.snippet.channelTitle}</h2>
//   <strong className='mapDivSpan'>{element.snippet.title}</strong>
//   <p className='mapDivSpan'> publishTime {element.snippet.publishedAt}</p>
//   </div>
// ))
// const fetchData = async () => {
//     try {
//         const response = await axios.request(options);
//         setNewsData(response.data.items);
//     } catch (error) {
//         console.error(error);
//     }
// }

// useEffect(()=> {
//   fetchData()
// }, []);
//   return (
//     <div>
// {myData}
//     </div>
//   )


    const [newsData, setNewsData] = useState([]);
    const [searchTitle , setSearchTitle] = useState('');
  


  

  


  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
 

    'X-RapidAPI-Key': '432029fdfbmsh81e830eca500e5bp1e8399jsnf078623e15a0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


const myData =  newsData.slice(0,5).map((element) => (
<Link to={`video/${element.id.videoId}`}>

<div className="mapWr">
<div className='mapDiv' key={element.id.videoId}>
  {/* <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa2'></iframe> */}
  <img src={`${element?.snippet?.thumbnails?.high?.url}`} alt="photo" className="mapDivImg" />
  <h2 className='mapDivP'>{element.snippet.channelTitle}</h2>
  <strong className='mapDivSpan'>{element.snippet.title}</strong>
  <p className='mapDivSpan'> publishTime {element.snippet.publishedAt}</p>
  </div>
</div>
</Link>

))
const fetchData = async () => {
 
    try {
        const response = await axios.request(options);
        setNewsData(response.data.items);
    } catch (error) {
        console.error(error);
    }
}

useEffect(()=> {
  fetchData()
}, []);


  return (
<>
{myData}
</>
  )
}

export default MapVideo