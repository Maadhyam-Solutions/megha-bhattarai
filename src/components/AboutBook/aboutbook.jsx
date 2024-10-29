import React from "react";
import './aboutbook.css'

export default function AboutBook() {
    return (
        <section id="book"  className='about-section'>
            <div className='decorative-flower'>
                <img className='flower-icon' src="assets/flower.png" alt="Decorative Flower" />
            </div>

            <div className='content-wrapper'>
                <h2 className='title'>About the Book</h2>
                <p className='description'>
                    <span>
                    This poetry book is a dream my 8th-grade self could have never imagined coming true. What began as a collection of poems in her notebook where she poured her heart into it, not knowing that someday these simple, heartfelt poems would find their place in a book of my own. <br/><br/>
                    </span>
                  <span>
                   <strong>I’ve called it Bagaicha, which translates to garden; a poetry garden. </strong>Where each poem blooms with different emotions:ups and down, just as flowers in a garden display their unique colors.<br/><br/>
                    </span> 

                    <span>
                    It’s my hope that readers <strong>will walk through this garden of words</strong> and find something that resonates with their own experiences.<br/>
                    </span>
                </p>
            </div>

        </section>
    );
}