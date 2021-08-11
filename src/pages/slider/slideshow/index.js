import './style.css'
import React, {useState, useEffect} from "react";

const delay = 2500;

function Slideshow (props) {
    const [index, setIndex] = useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === props.slideImages.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {};
    }, [index]);

    // const getWidth = () => window.innerWidth
    // const [state, setState] = useState({
    //     translate: 0,
    //     transition: 0.45
    // })
    // const {translate, transition} = state


    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}
                >
                {props.slideImages.map((imageSrc, index) => (
                    <div
                        className="slide"
                        key={index}>
                        <img src={imageSrc}/>
                    </div>
                ))}
            </div>
            <div className="slideshowDots">
                {props.slideImages.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
            {/*<SliderContent*/}
            {/*    translate={translate}*/}
            {/*    transition={transition}*/}
            {/*    width={getWidth() * props.slideImages.length}*/}
            {/*>*/}
            {/*    {props.slideImages.map((slide, i) => (*/}
            {/*        <Slide key={slide + i} content={slide}/>*/}
            {/*    ))}*/}
            {/*</SliderContent>*/}
        </div>
    );
}

export default Slideshow;
