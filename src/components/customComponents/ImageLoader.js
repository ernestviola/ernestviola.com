import React from 'react'

const ImageLoader = (props) => {
    const [src, setSrc] = useState(deathValleySmall);
    const [blur, setBlur] = useState(true);

    const img = new Image()

    img.src = deathValley;

    img.onload = () => {
        setBlur(false)
        setSrc(deathValley);
    };

    return (
        <div>
                <img
                    src={src}
                    style={{
                        filter: blur ? "blur(50px)" : "none",
                        transition: blur ? "none" : "filter 0.5s ease-out"
                    }}
                    alt='Ernest doing a handstand in death valley, CA'
                />
                <div className='introContent'>
                    <h1 className='desktop'>If I were to describe myself in one word, that word would be, Storyteller.</h1>
                    <h1 className='mobile'>A Storyteller.</h1>
                </div>

        </div>
    )
}

export default ImageLoader


