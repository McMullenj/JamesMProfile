import React, { useEffect, useRef, useState } from 'react';
import './jobs.css'; // You may need to import your styles

function JobsComponent() {
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailBorderRef = useRef(null);
    const timeRef = useRef(null);
    const arrowLeft = "<";
    const arrowRight = ">";

    const sliderItems = [
        { img: './image/Bankwest.jpg', title: "Bankwest", timeline: "Dec 2022 - Present", role: "Associate Software Developer", description: "desc"},
        { img: './image/Bankwest.jpg', title: "AAAA", timeline: "Dec 2022 - Present", role: "Associate Software Developer", description: "desc"},
        { img: './image/Bankwest.jpg', title: "OOOO", timeline: "Dec 2022 - Present", role: "Associate Software Developer", description: "desc"},
    ];

    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

    useEffect((currentSliderIndex) => {
        let timeRunning = 1000;
        let timeAutoNext = 10000;

        prevRef.current.onclick = function () {
            setCurrentSliderIndex((currentSliderIndex + 1) % sliderItems.length);
            showSlider('prev');
        };

        nextRef.current.onclick = function () {
            setCurrentSliderIndex((currentSliderIndex - 1 + sliderItems.length) % sliderItems.length);
            showSlider('next');
        };

        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            nextRef.current.click();
        }, timeAutoNext);

        function showSlider(type) {
            // setCurrentSliderIndex((prevIndex) => {
            //     let newIndex;

            // })
            let sliderItemsDom = sliderRef.current.querySelectorAll('.list .item');
            let thumbnailItemsDom = thumbnailBorderRef.current.querySelectorAll('.thumbnail .item');

            if (type === 'next') {
                // Create a new item and update content
                let newSliderItem = document.createElement('div');
                newSliderItem.className = 'item';
                newSliderItem.innerHTML = sliderItemsDom[0].innerHTML;
            
                sliderRef.current.appendChild(newSliderItem);
            
                // Clone the last thumbnail item
                let newThumbnailItem = document.createElement('div');
                newThumbnailItem.className = 'item';
                newThumbnailItem.appendChild(thumbnailItemsDom[0].querySelector('img').cloneNode(true));
                newThumbnailItem.appendChild(thumbnailItemsDom[0].querySelector('.content').cloneNode(true));
            
                thumbnailBorderRef.current.appendChild(newThumbnailItem);
            
                // Remove the first item after cloning
                sliderRef.current.removeChild(sliderItemsDom[0]);
                thumbnailBorderRef.current.removeChild(thumbnailItemsDom[0]);
                
                carouselRef.current.classList.add('next');
            } else {
                // Create a new item and update content
                let newSliderItem = document.createElement('div');
                newSliderItem.className = 'item';
                newSliderItem.innerHTML = sliderItemsDom[sliderItemsDom.length - 1].innerHTML;
            
                sliderRef.current.prepend(newSliderItem);
            
                // Clone the first thumbnail item
                let newThumbnailItem = document.createElement('div');
                newThumbnailItem.className = 'item';
                newThumbnailItem.appendChild(thumbnailItemsDom[thumbnailItemsDom.length - 1].querySelector('img').cloneNode(true));
                newThumbnailItem.appendChild(thumbnailItemsDom[thumbnailItemsDom.length - 1].querySelector('.content').cloneNode(true));
            
                thumbnailBorderRef.current.prepend(newThumbnailItem);
            
                // Remove the last item after cloning
                sliderRef.current.removeChild(sliderItemsDom[sliderItemsDom.length - 1]);
                thumbnailBorderRef.current.removeChild(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            
                carouselRef.current.classList.add('prev');
            }
            

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselRef.current.classList.remove('next');
                carouselRef.current.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextRef.current.click();
            }, timeAutoNext);
        }
    }, []);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="list" ref={sliderRef}>
                {sliderItems.map((item, index) => (
                // Start from index 1 to avoid duplicating the first item in the thumbnail list
                    <div className="item" key={index}>
                        <img src={require('./image/Bankwest.jpg')} alt={item.title} />
                        <div className="content">
                            <div className='timeline'>{item.timeline}</div>
                            <div className='title'>{item.title}</div>
                            <div className='role'>{item.role}</div>
                            <div className='description'>{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="thumbnail" ref={thumbnailBorderRef}>
                {sliderItems.map((item, index) => (
                    index !== currentSliderIndex ? (
                // Start from index 1 to avoid duplicating the first item in the thumbnail list
                        <div className="item" key={index}>
                            <img src={require('./image/Bankwest.jpg')} alt={item.title} />
                            <div className="content">
                                <div className='title'>{item.title}</div>
                                <div className='timeline'>{item.timeline}</div>
                            </div>
                        </div>
                    ) : null
                ))}
            </div>

            <div className="arrows">
                <button id="prev" ref={prevRef}>
                    {arrowLeft}
                </button>
                <button id="next" ref={nextRef}>
                    {arrowRight}
                </button>
            </div>
        
            <div className="time" ref={timeRef} />
        </div>
    );
}

export default JobsComponent;
