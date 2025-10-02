import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Navbar from './components/navbar/navbar';

function App() {
  const [url, setUrl] = useState("");
  const [pageData, setPageData] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      console.log("data updated...");
    }, [pageData]);

    useEffect(() => {
        fetchData();
    }, []);

  const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3000/scrape?url=${encodeURIComponent(url)}`);
        setPageData(await response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        //setData([]);
      } finally {
        //setLoading(false);
      }
    };

  return (
    <>
        <p>test</p>
        <Navbar></Navbar>
        { pageData.map((obj, i) => <p key={i}>{obj.name}</p>) }
    </>

  );
}

export default App;
