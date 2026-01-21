import React from 'react';
import knit from '../assets/knit.jpg'
import write from '../assets/Write.jpg'
import paint from '../assets/Paint.jpg'
import cook from '../assets/cook.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={knit}
                        className="w-full h-full object-cover" />
                    <div className="absolute inset-0  flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-16 px-4 ">
                            “Weaving calm into every stitch <br /> — knitting is more than a craft, it’s a rhythm for the soul. <br /> Create warmth, one loop at a time.”
                        </h2>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={write}
                        className="w-full h-full object-cover" />
                    <div className="absolute inset-0  flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-16 px-4">
                            “Writing is the quiet art of turning thoughts into legacy. <br /> Whether it's a poem, a journal, or a novel — your voice matters. <br /> Share your story.”
                        </h2>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={paint}
                        className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-16 px-4">
                            “Color outside the lines. <br /> Painting is a language without words — <br /> a space where emotion meets imagination on every canvas.”
                        </h2>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={cook}
                        className="w-full h-full object-cover" />
                    <div className="absolute inset-0  flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-16 px-4">
                            “Cooking is where creativity meets comfort. <br /> Transform simple ingredients into unforgettable moments <br /> — one recipe, one memory, one flavor at a time.”
                        </h2>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;