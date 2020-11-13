import PhotoSection from './photo-section';
const images = [
    'https://img3.stockfresh.com/files/l/lightpoet/m/80/2553670_stock-photo-man-buying-construction-wood-in-a-diy-store.jpg',
    'https://img3.stockfresh.com/files/l/lightpoet/m/49/4371819_stock-photo-man-buying-construction-wood-in-a-diy-store.jpg',
    'https://img3.stockfresh.com/files/l/lightpoet/m/87/4534021_stock-photo-man-choosing-and-buying-construction-wood-in-a-diy-store.jpg'
]
function Body() {
    return (
      <div className="main">  
        <article className='part-one'>
        <div className="part-one-content">
            <h1>Generic Business Name</h1>
            <h2>We do generic stuff</h2>
            <p>Call 098765432</p>
        </div>
        </article>
        <article className='part-two'>
        <PhotoSection 
            images={images}
        />
        </article>
      <article className='part-three'>
      <div className="homepage-contact-form">
            <h2>Contact Form</h2>

            <form>
            <label>First name:</label>
            <input type="textbox" />
            <br />
            <label>Last name:</label>
            <input type="textbox" />
            <br />
            <label>Message:</label>
            <textarea type="text" cols="50" rows="10"></textarea>
            </form>
        </div>
    </article>
     </div>)
        }
  
  export default Body;
  