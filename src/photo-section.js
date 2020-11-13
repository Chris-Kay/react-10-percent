import './photo-section.css'

function PhotoSection({images}) {
    return (
        <div className="homepage-photos">
            {images.map(image =>
                <div key={image} className='homepage-photos-image'>
                    <img src={image} />
                </div>)
            }
        </div>
     )
}
  
  export default PhotoSection;
  