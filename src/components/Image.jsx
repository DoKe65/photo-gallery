const Image = ({url, alt}) => {
    
  return (
    <li>
      <img src={url} alt= {alt} />
    </li>
  );
}

export default Image;