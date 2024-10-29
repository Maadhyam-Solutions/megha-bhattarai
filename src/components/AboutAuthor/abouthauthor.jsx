import './aboutauthor.css'
import React from "react"

export default function AboutAuthor() {
    return (
        <section id="author" className='authorSection'>
            <div>
                <h2 className="authorH2">Megha's Story</h2>
            </div>
            <div className="storySection">
                <img src="/src/assets/meghadp.png" alt='megha profile picture' className='authorImg' />
                <div className='storyPara'>
                    <p>Megha is a passionate writer whose love for words began at a young age. Always drawn to the beauty of emotions, she started expressing herself through poetry, finding comfort in weaving together thoughts and feelings. She believes in the power of vulnerability and strives to create a space where readers can feel seen, understood, and connected through her words.
                            <br/>
                            <br/>
                        With her debut poetry collection, Bagaicha, she invites readers into her personal garden of emotions, where each poem blooms like a flower, showcasing the diversity of the human experience.</p>
                </div>
            </div>
        </section>
    )
}