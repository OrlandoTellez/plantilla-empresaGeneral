import React from 'react'
import { useState, useEffect } from 'react'
import "./Slider.css"

export const Sliders = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [numSlides, setNumSlides] = useState(0);
    
    const slides = [
        {
          id: 1,
          content: 'Slide 1 content',
          image: 'https://unavatar.io/twitter/kikobeats',
        },
        {
          id: 2,
          content: 'Slide 2 content',
          image: 'https://unavatar.io/twitter/kikobeats',
        },
        {
          id: 3,
          content: 'Slide 3 content',
          image: 'https://unavatar.io/twitter/kikobeats',
        },
      ];

      useEffect(() => {
        setNumSlides(slides.length);
      }, [slides]);

      return (
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${currentSlide === index ? 'active' : ''}`}
            >
              {slide.content}
              {slide.image && <img src={slide.image} alt={slide.content} />}
            </div>
          ))}
          <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide === 0 ? numSlides - 1 : prevSlide - 1))}>
            Previous
          </button>
          <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide === numSlides - 1 ? 0 : prevSlide + 1))}>
            Next
          </button>
        </div>
      );
}
