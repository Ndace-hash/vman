import React, { FC, MouseEventHandler, useEffect, useState } from "react";
import "./LoginCarousel.css";
type ComponentProps = {
    className: string;
};

const LoginCarousel: FC<ComponentProps> = ({ className }) => {
    const [carouselIndex, setCarouselIndex] = useState(1);
    const quotes = [
        "Painlessly book visitors to any NNPC facility",
        "Track visitors movements around the NNPC facility",
        "Re-book a previous visitor for another date",
        "Generate relevant reports",
        "Book visitors on behalf of your Principal",
    ];

    const handleNext = () => {
        if (carouselIndex !== quotes.length) {
            setCarouselIndex(carouselIndex + 1);
        } else {
            setCarouselIndex(1);
        }
    };
    const handlePage = (page: number) => {
        setCarouselIndex(page);
    };

    useEffect(() => {
        let interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <div
            className={`${className} flex flex-col items-center justify-center gap-20 h-[300px] lg:h-screen`}
        >
            <div
                className=" flex items-center justify-center flex-col relative w-full"
                id="info-carousel"
            >
                {quotes.map((quote, index) => (
                    <p
                        className={
                            `text-white font-bold text-2xl lg:text-4xl text-center absolute ` +
                            (carouselIndex - 1 === index ? "show" : "not-show")
                        }
                        key={index}
                    >
                        {quote}
                    </p>
                ))}
            </div>
            <div className="flex items-center gap-1 navigation-bar">
                {quotes.map((quote, index) => (
                    <div
                        className={
                            "h-[2px] w-[50px] bg-white " +
                            (carouselIndex - 1 == index ? "dot active" : "")
                        }
                        key={index}
                        onClick={() => handlePage(index + 1)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default LoginCarousel;
