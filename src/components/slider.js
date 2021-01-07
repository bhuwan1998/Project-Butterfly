import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Button from './btn';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.div`
  background: linear-gradient(210deg,#943cff 0%,#dd45d3 40.13%,#fc9a57 90%);
  color: white;
  padding: 10rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
`


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // const sideMetadata = useStaticQuery(graphql`
  //   query TitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         author
  //       }
  //     }
  //   }
  // `)


export default ({title_1, content_1, title_2, content_2, title_3, content_3}) => (
    <SliderContainer> 
      <Slider {...settings}>
      <div>
          <div className="text-center">
            <h1>{title_1}</h1>
            <p> {content_1} </p>
            <Button onClick = {() => alert("Clicked")}>Learn More </Button> 
          </div>
          </div>
          <div>
          <div className="text-center">
            <h1>{title_2}</h1>
            <p> {content_2} </p>
            <Button onClick = {() => alert("Clicked")}>Learn More </Button> 
          </div>
          </div>
          <div>
          <div className="text-center">
            <h1>{title_3}</h1>
            <p> {content_3} </p>
            <Button onClick = {() => alert("Clicked")}>Learn More </Button> 
          </div>
        </div>
      </Slider>
    </SliderContainer>
  )



//   const SliderComponent = ({title, description}) =>{
//     let content = 
//    (
//     <SliderContainer>
//       <Slider {...settings}>
//         <div>
//           <div className="text-center">
//             <h1>{title}</h1>
//             <p> {description} </p>
//             <Button onClick = {() => alert("Clicked")}>Learn More </Button> 
//           </div>
//         </div>
//         <div>
//           <div className="text-center">
//             <h1>{title}</h1>
//             <p> {description} </p>
//             <Button onClick = {() => alert("Clicked")}>Learn More </Button> 
//           </div>
//         </div>
//         <div>
//           <div className="text-center">
//             <h1> {title} </h1>
//             <p> {description} </p>
//             <Button onClick = {() => alert("Clicked")}>Learn More </Button> 
//           </div>
//         </div>
//       </Slider>
//     </SliderContainer>
//   )
//   return content; 
//  }

// export default SliderComponent;







