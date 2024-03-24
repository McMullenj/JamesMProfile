import React, { useEffect, useState } from 'react';
import './jobs.css';

const items = [
    {
        img: 'Bankwest.jpg',
        title: 'Bankwest',
        timeline: 'Dec 2022 - Present',
        role: 'Associate Software Developer',
        description: 'Yaas',
    },
    {
        img: 'Bankwest.jpg',
        title: 'AAAA',
        timeline: 'Dec 2022 - Present',
        role: 'Associate Software Developer',
        description: 'desc',
    },
    {
        img: 'Bankwest.jpg',
        title: 'OOOO',
        timeline: 'Dec 2022 - Present',
        role: 'Associate Software Developer',
        description: 'desc',
    },
];

const timeToSwitch = 7000

const arrowLeft = "<";
const arrowRight = ">";

const Carousel = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(timeToSwitch);

    const handlePrev = () => {
        setCurrentItem((prevItem) => (prevItem === 0 ? items.length - 1 : prevItem - 1));
        setTimeRemaining(timeToSwitch)
    };

    const handleNext = () => {
        setCurrentItem((prevItem) => (prevItem === items.length - 1 ? 0 : prevItem + 1));
        setTimeRemaining(timeToSwitch)
    };

    const handleIconClick = (index) => {
        setCurrentItem(index);
        setTimeRemaining(timeToSwitch)
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentItem((prevItem) => (prevItem === items.length - 1 ? 0 : prevItem + 1));
            setTimeRemaining(timeToSwitch)
        }, timeToSwitch);
    
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="carousel">
            <div className="current-item">
                <img src={items[currentItem].img} alt={items[currentItem].title} />
                <div className="content">
                    <div className='timeline'>{items[currentItem].timeline}</div>
                    <div className='title'>{items[currentItem].title}</div>
                    <div className='role'>{items[currentItem].role}</div>
                    <div className='description'>{items[currentItem].description}</div>
                </div>
            </div>
            <div className="icons">
                {items.map((item, index) => (
                    <div className='item' style={{
                        transform: `translateX(${(index - currentItem) * 50}px)`,
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, opacity 0.3s ease',
                        opacity: index === currentItem ? 1 : 0.7,
                      }}>
                        <img
                            key={index}
                            src={item.img}
                            alt={`Icon for ${item.title}`}
                            onClick={() => handleIconClick(index)}
                            style={{
                                border: index === currentItem ? '2px solid #ffcc00' : 'none', 
                            }}
                        />
                        <div className='content'>
                            <div className='title'>{item.title}</div>
                            <div className='timeline'>{item.timeline}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='arrows'>
                <button onClick={handlePrev}>{arrowLeft}</button>
                <button onClick={handleNext}>{arrowRight}</button>
            </div>
        </div>
    );
};

export default Carousel;
