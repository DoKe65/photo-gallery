import Header from "./Header";
import Gallery from "./Gallery";

const Home = (props) => {
  const {results, isLoading, title} = props;

  return(
    <div className="main-content home">
      {/* {console.log(results)} */}
      {
        (isLoading) ? <p>Loading...</p> : <Gallery results={results} title={title}/>
      }
      
    </div>
  );
}

export default Home;