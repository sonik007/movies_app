import React from 'react';
// import Potato from './potato';
import PropTypes from 'prop-types';

const likeFood = [
  {
    id:1,
    name: "kimch",
    images: "https://img.koreatimes.co.kr/upload/newsV2/images/202106/88dbf0524fd74259b2d00f6cd7341349.jpg/dims/resize/740/optimize",
    rating:4.5
  },
  {
    id: 2,
    name: "potato",
    images: "https://images.media-allrecipes.com/userphotos/4488416.jpg",
    rating: 4.0
  },
  {
    id: 3,
    name: "hotdog",
    images: "https://upload.wikimedia.org/wikipedia/commons/f/fe/HotDog.jpg",
    rating: 2.5
  },
  {
    id: 4,
    name: "samgyeopsal",
    images: "https://www.koreatripguide.com/wp-content/uploads/2019/03/food-3284704_640.jpg",
    rating: 5.0
  }
];



function Food({ name,  image, rating}){
  // console.log(props.like);
  return( 
    <div>
      <h3>i linke {name}</h3>
      <h4>{rating} / 5.0</h4>
      <img src={image} alt={name + " image"}/>   
    </div>       
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      {likeFood.map(item => <Food key={item.id} name = {item.name} image ={item.images} rating={item.rating}/>)}
    </div>
  );
}

export default App;
