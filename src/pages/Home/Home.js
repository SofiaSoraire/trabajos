import React, { Component } from 'react';

class Home extends Component {
   render() {
       return(
   <div id="mycarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
    <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
    <li data-target="#mycarousel" data-slide-to="1"></li>
    <li data-target="#mycarousel" data-slide-to="2"></li>
    </ol>
   <div className="carousel-inner">
       <div className="carousel-item active">
         <img className="d-block w-100" src="https://media-cdn.tripadvisor.com/media/photo-s/0b/ba/01/de/estilos-de-cervezas.jpg" alt="First slide"/>
        
       </div>
       <div className="carousel-item">
         <img className="d-block w-100" src="https://10619-2.s.cdn12.com/rests/original/403_473389528.jpg" alt="Second slide"/>
       </div>
       <div className="carousel-item">
         <img className="d-block w-100" src="https://10619-2.s.cdn12.com/rests/original/403_473389527.jpg" alt="Third slide"/>
       </div>
   </div>
     <a className="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="sr-only">Previous</span>
     </a>
     <a className="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="sr-only">Next</span>
     </a>
   </div>    
 );
   }
}

export default Home;
