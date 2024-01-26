"use client";
import React, { useEffect, useState } from "react";
import Mosaics from "./mosaics/mosaics.jsx"
import CarrouselGallery from "./carrouselGallery/carrouselGallery.jsx"


export default function Gallery() {

  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateViewportWidth);
    updateViewportWidth();

    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);

  return (
  <>
      {/* {viewportWidth < 650 ?  */}
        <CarrouselGallery  itemData={infoImg}/>
        {/* // :
        // <Mosaics itemData={infoImg}/>
      } */}
    </>
  )
};

const infoImg = [
  {
    img: '/1-board.jpg',
    title: 'Copa Oreo',
    rows: 2,
    cols: 4,
    width:"500",
    height:"328",
  },
  {
    img: '/2-board.jpg',
    title: 'Tostada',
    rows: 2,
    cols: 2,
    width:"450",
    height:"328",
  },
  {
    img: '/3-board.jpeg',
    title: 'Sandwich',
    rows: 2,
    cols: 2,
    width:"491",
    height:"328",
  },
  {
    img: '/4-board.jpg',
    title: 'Cookie Helado',
    rows: 2,
    cols: 4,
    width:"599",
    height:"328",
  },
  {
    img: '/5-board.jpg',
    title: 'Tostada Huevo Nube',
    rows: 2,
    cols: 3,
    width:"590",
    height:"328",
  }
  // {
  //   img: '/6-board.png',
  //   title: 'Crossi Consti',
  //   rows: 2,
  //   cols: 3,
  //   width:"491",
  //   height:"328",
  // },
]