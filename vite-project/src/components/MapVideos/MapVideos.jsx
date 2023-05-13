import { useState , useEffect  } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './MapVideos.css'

const MapVideos = () => {
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


const myData =  newsData.filter((item)=>{
  if(!searchTitle.trim()){
      return item;
  } else if (item.snippet.title.toLowerCase().includes(searchTitle.toLowerCase())){
      return item;
  }

}).slice(0,10).map((element) => (
<Link to={`video/${element.id.videoId}`}>

<div className='mapDiv' key={element.id.videoId}>
  {/* <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa2'></iframe> */}
  <img src={`${element?.snippet?.thumbnails?.high?.url}`} alt="photo" className="mapDivImg" />
  <h2 className='mapDivP'>{element.snippet.channelTitle}</h2>
  <strong className='mapDivSpan'>{element.snippet.title}</strong>
  <p className='mapDivSpan'> publishTime {element.snippet.publishedAt}</p>
  </div>
</Link>

))
const myData2 =  newsData.filter((item)=>{
    if(!searchTitle.trim()){
        return item;
    } else if (item.snippet.title.toLowerCase().includes(searchTitle.toLowerCase())){
        return item;
    }
  
  }).slice(10,20).map((element) => (

<Link to={`video/${element.id.videoId}`}>
<div className='mapDiv' key={element.id.videoId}>
    {/* <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa2'></iframe> */}
    <img src={`${element?.snippet?.thumbnails?.high?.url}`} alt="photo" className="mapDivImg" />
    <h2 className='mapDivP'>{element.snippet.channelTitle}</h2>
    <strong className='mapDivSpan'>{element.snippet.title}</strong>
    <p className='mapDivSpan'> publishTime {element.snippet.publishedAt}</p>
    </div>
</Link>

  ))
  const myData3 =  newsData.filter((item)=>{
    if(!searchTitle.trim()){
        return item;
    } else if (item.snippet.title.toLowerCase().includes(searchTitle.toLowerCase())){
        return item;
    }
  
  }).slice(20,30).map((element) => (
<Link to={`video/${element.id.videoId}`}>

  <div className='mapDiv' key={element.id.videoId}>
    {/* <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa2'></iframe> */}
    <img src={`${element?.snippet?.thumbnails?.high?.url}`} alt="photo" className="mapDivImg" />
    <h2 className='mapDivP'>{element.snippet.channelTitle}</h2>
    <strong className='mapDivSpan'>{element.snippet.title}</strong>
    <p className='mapDivSpan'> publishTime {element.snippet.publishedAt}</p>
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
 <div className='mapVideos'>
        <p className="mapVideosRec">Use user</p>
        <div className="mapWrapper">
        {myData}
        </div>
 </div>

 <div className="mapVideos2">
    <p className="mapVideosRec">Recommended</p>
        <div className="mapWrapper">
    {myData2}
    </div>
 </div>

    <div className="mapVideos2">
        <p className="mapVideosRec">Something & Nothing</p>
        <div className="mapWrapper">
        {myData3}
    </div>
 </div>
    </>
  )
}

export default MapVideos