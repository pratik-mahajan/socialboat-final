import React, { useState } from 'react'
import { Alert, Row, Spinner } from 'react-bootstrap';
import Search from '../components/Search'
import TitleCard from '../components/TitleCard';
import VideoCard from '../components/VideoCard';
import Footer from '../components/Footer';

const spinnerStyle = {
  width: '5rem',
  height: '5rem',
  borderWidth: '1rem',
};

const spinnerWrapperStyle = {
  textAlign: 'center',
  marginTop: '50px',
}

export default function HomePage() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const getVideos = async (query) =>
  {
      if (!query || query==="") {
      setErrorMsg('You must enter a something');
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${query}&numResults=50`);
        const results = await response.json();
        console.log(results);
        console.log(results.results[0].tags);
        setResults(results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
        setErrorMsg('Videos not found.');
      }
    }, 1500);
  }
  return (
    <>
        {error ? (<Alert variant='danger'>{errorMsg}</Alert>): null}
        <Search getVideos={getVideos}/>
        {loading ? (
            <div style={spinnerWrapperStyle}>
              <Spinner style={spinnerStyle} animation="border" />
            </div>
        ) : null}
        {(!loading && results) ? 
        (<Row lg={3} className="justify-content-center mt-4">
            {results.results.map((result)=>(
              <VideoCard
              heading={result.heading} 
              video={result.video}
              text={result.text}
              tags={result.tags}/>
            ))}
          </Row>
        ): <TitleCard/>}
      <Footer/>  
      </>
  )
}
