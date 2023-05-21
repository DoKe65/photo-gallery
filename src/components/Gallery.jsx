import Image from "./Image";

const Gallery = ({results, title}) => {

  return(
    <div className="photo-container">
      <h2>{title}</h2>
      <ul className="gallery">
        {results.map(img => {
          return <Image 
            url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} 
            alt={img.alt}
            key={img.id}
            />
        })}
       
      </ul>
    </div>
  );
}

export default Gallery;