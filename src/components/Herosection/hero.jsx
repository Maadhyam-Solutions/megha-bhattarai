import './hero.css';
import HTMLFlipBook from 'react-pageflip';
import { useRef, useEffect } from 'react';

export default function Hero() {
    const book = useRef();
   let currentPage = 0; // Track the current page
    const totalPages = 3; // Update this if you add more pages

    // Effect to check the screen size
   

    const handlePageFlip = () => {
        if (currentPage < totalPages - 1) {
            // If not on the last page, flip to the next page
            book.current.pageFlip().flipNext();
            currentPage += 1;
        } else {
            // If on the last page, flip back to the first page (or any other logic you want)
            book.current.pageFlip().flipPrev();
            currentPage -= 1;
        }
    };

    return (
        <section className='heroSection'>
            <div className='heroDiv'>
                <div className="leftSide">
                    <h1 className="bagaichaTitle">Bagaicha</h1>
                    <h4 className='bagaichaKoDown'>
                        A poetry garden, where each poem blooms <br className='br1'/>
                        with different emotions, just as flowers in a garden <br className='br2'/>
                        display their unique colors.
                    </h4>
                    <button onClick={handlePageFlip} className='ctaButton'>
                        Explore the Garden
                    </button>
                </div>
                <div className='rightSide'>
                    <HTMLFlipBook 
                        useMouseEvents={false} 
                        ref={book} 
                        width={300} 
                        height={480} 
                        showCover={true} 
                        flippingTime={2000} 
                        maxShadowOpacity={0.2}
                    >
                        <div className="demoPage">
                            <img className='imgName' src="src/assets/bookCover.png" alt="bookCover" />
                        </div>
                        <div className="demoPage">
                            <img className='imgName' src="src/assets/page2.png" alt="page1" />
                        </div>
                        <div className="demoPage">
                            <img className='imgName' src="src/assets/page1.png" alt="page2" />
                        </div>
                    </HTMLFlipBook>
                </div>
            </div>
        </section>
    );
}
