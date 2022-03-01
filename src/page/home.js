import React from 'react'
import '../css/home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
    return (
        
        <div className="Home">
           
           <Carousel>
             <div>
                  <img src="https://images.pexels.com/photos/5112592/pexels-photo-5112592.jpeg?cs=srgb&dl=pexels-shameel-mukkath-5112592.jpg&fm=jpg" />
             </div>
             <div>
                  <img src="https://images.pexels.com/photos/4051610/pexels-photo-4051610.jpeg?cs=srgb&dl=pexels-alleksana-4051610.jpg&fm=jpg" />
             </div>
             <div>
                  <img src="https://images.pexels.com/photos/5386684/pexels-photo-5386684.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5386684.jpg&fm=jpg" />
             </div>
           
          </Carousel>
      
        </div>
    )
}



