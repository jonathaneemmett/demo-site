import React from 'react';
import { FaDotCircle } from "react-icons/fa";

// Styles
import { useStyles } from "../../assets/styles";

/**
 * @desc    Hero Carousel Unit
 * @return {JSX.Element}
 * @constructor
 */
const HeroCarousel = () => {
    const classes = useStyles();

    // Only partially complete
    return (
        <div className={classes.slider}>
            <div className={classes.sliderInner}>
                <div className={classes.slide}>
                    <img src="https://source.unsplash.com/random?landscape,technology" alt=""/>
                    <div className="caption">
                        <h1>Content Caption</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem delectus dicta est exercitationem iusto maiores natus reiciendis repellat, vitae?</p>
                    </div>
                </div>
                <div className={classes.slide}>
                    <img src="https://source.unsplash.com/random?landscape,computers" alt=""/>
                </div>
                <div className={classes.slide}>
                    <img src="https://source.unsplash.com/random?landscape,windows" alt=""/>
                </div>
            </div>
            <div className={classes.sliderButtonContainer}>
                <FaDotCircle style={{ marginRight: "10px", fontSize: "14px" }} />
                <FaDotCircle style={{ marginRight: "10px", fontSize: "14px" }} />
                <FaDotCircle style={{ marginRight: "10px", fontSize: "14px"  }} />
            </div>
        </div>
    );
};

export default HeroCarousel;
