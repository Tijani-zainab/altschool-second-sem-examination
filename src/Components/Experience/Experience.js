import './Experience.scss'; 
import { useEffect, useRef, useState } from 'react';

const Experience = () => {

    let [slideIndex, setSlideIndex] = useState(0);
    const slideRef = useRef(null);

    const showSlides = () => {
        // let i;
        // let slides = slideRef.current;
        // console.log(slides);
        // for (i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        // slideIndex++;
        // // if (slideIndex > slides.length) {slideIndex = 1}
        // // slides[slideIndex-1].style.display = 'block';
        // setTimeout(showSlides, 2000); 

    }

    useEffect(() => {
        showSlides();
    }, []);

    return (
        <div className="experience">
            <h1 className='h1'>Experience</h1>

            <div className='slides-container'>
                <div ref={slideRef} className='experience-years fade'>
                    <h2>2019 - 2020</h2>
                    <p>@Wejapa </p>
                    <p>Lagos, Nigeria</p>
                    <>Write modern, performant, maintainable code for a diverse array of client and internal projects Work with a variety of different frontend tools, platforms, frameworks, and content management systems such as JavaScript, Nextjs, React, WordPress, Github, and Netlify. Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</>

                </div>

                <div ref={slideRef} className='experience-years fade'>
                    <h2>2019 - 2020</h2>
                    <p>@Wejapa </p>
                    <p>Lagos, Nigeria</p>
                    <>Write modern, performant, maintainable code for a diverse array of client and internal projects Work with a variety of different frontend tools, platforms, frameworks, and content management systems such as JavaScript, Nextjs, React, WordPress, Github, and Netlify. Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</>

                </div>

                <div ref={slideRef} className='experience-years fade'>
                    <h2>2019 - 2020</h2>
                    <p>@Wejapa </p>
                    <p>Lagos, Nigeria</p>
                    <>Write modern, performant, maintainable code for a diverse array of client and internal projects Work with a variety of different frontend tools, platforms, frameworks, and content management systems such as JavaScript, Nextjs, React, WordPress, Github, and Netlify. Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</>

                </div>

                <div className='dot-slide--continer'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
            </div>
        </div>
    )
}

export default Experience;