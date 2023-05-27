import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import axios from "axios";
// import configuration with API key
import apiKey from "./config";

// import components
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("flowers");
  const [isLoading, setIsLoading] = useState(true);
  
  const url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=true&text=${query}&per_page=24`;

  useEffect(() => {
    setIsLoading(true);
    let activeFetch = true;
    axios.get(url)
    .then(response => {
      if (activeFetch) {
        setResults(response.data.photos.photo);
        setIsLoading(false);
      }
    })
    .catch(error => {
      console.log("Error occured", error);
    });
    return () => activeFetch = false;
  },[query]);


  return (
    
    <div className="container">
    
      <Header />
      {/* {console.log(results)} */}
        <Routes>
          <Route path="" element={<Home results={results} isLoading={isLoading} title={query} />}>
            <Route index path=":query" element={<Home results={results} isLoading={isLoading} title={query} />} />
          </Route>

          
        </Routes>
    </div>
  )
}

export default App;
