import React, { useEffect, useState } from 'react';
import '../App.css'

const useAnimation = (duration) => {

    const [progress, setProgress] = useState(0);
    const [start, setStart] = useState(Date.now())

    useEffect(() => {
        let nextFrame
        const frame = () => {
            const now = Date.now() - start
            if (now < duration) {
                nextFrame = requestAnimationFrame(frame)
            }
            setProgress(Math.min(1, now / duration))
        }
        frame()
        return () => cancelAnimationFrame(nextFrame)
    }, [start, duration])

    return progress
}

const showMessage = () => {

}

const Home = () => {

    const progress = useAnimation(1000)
    return (
        <div>
            <h1 style={{fontSize:'5em'}}>On The Ball</h1>
        <svg viewBox="0 0 100 100">
            <circle cx="10" cy="10" r="5 " />
            <circle cx={progress * 100} cy="50" r="5 " />
            <circle cx="20" cy={progress * 50} r="10" />
        </svg>
        </div>
    )
}


export default Home;