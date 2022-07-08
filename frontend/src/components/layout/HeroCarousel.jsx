import React, {useState} from 'react';

// Styles
import { useStyles } from "../../assets/styles";

/**
 * @desc    Hero Carousel Unit
 * @return {JSX.Element}
 * @constructor
 */
const HeroCarousel = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);
    let slides = [
        {
            img: "https://source.unsplash.com/random?landscape,technology",
            title: 'Slide 1',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem delectus dicta est exercitationem iusto maiores natus reiciendis repellat, vitae?'
        },
        {
            img: "https://source.unsplash.com/random?landscape,computers",
            title: 'Slide 2',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque cumque itaque, magni perferendis sunt?'
        },
        {
            img: "https://source.unsplash.com/random?landscape,windows",
            title: 'Slide 3',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa explicabo perferendis porro quas. Ab at ex fugit harum impedit inventore nobis quas suscipit vitae. Commodi eaque praesentium quos temporibus!'
        },
    ]


    const handleClick = (index) => {
        setCurrent(index)
    }
    // Only partially complete
    return (
        <div className={classes.slider}>
            <div className={classes.sliderInner}>
                {slides.length > 0 && slides.map((slide, index) => {
                    return (
                        <div key={index} className={classes.slide}>
                            {index === current &&
                                <>
                                    <img src={slide.img} alt=""/>
                                    <div className="caption">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.caption}</p>
                                    </div>
                                </>
                            }
                        </div>
                    )
                })}
            </div>
            <div className={classes.sliderButtonContainer}>
                {slides.length > 0 && slides.map((slide, index) => {
                    return (
                        <button key={index}  onClick={() => handleClick(index)} className={current === index ? `${classes.sliderBtn} active` : classes.sliderBtn} >

                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default HeroCarousel;
