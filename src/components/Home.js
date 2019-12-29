import React, { useEffect, useState } from 'react';
import '../App.css'
import { motion } from "framer-motion";
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



const Home = () => {

    const progress = useAnimation(1000)

    return (
        <motion.div
            animate={{ x: 10 }}
            transition={{ duration: 2 }}
            exit={{}}
        >
            <h1 className="title " style={{ fontSize: '7em' }}>On The Ball</h1>
            <h6 className="title" style={{ float: 'right', fontSize: '1.5em', letterSpacing: '.1em', borderColor: 'black', borderStyle: 'solid', backgroundColor: 'black', color: 'white' }}> Track client progress</h6>
            {/* <div className="" style={{display:'inline-block',borderColor:'black', borderStyle:'solid', float:'right'}}>
                <h2 className="title" style={{fontSize:'3em', borderStyle:'dotted', display:'inline-block'  }}>Welcome</h2>
                </div> */}
            <svg viewBox="0 0 100 100">
                <circle cx="10" cy="10" r="5" />
                <circle cx={progress * 100} cy="20" r="5" />
                <circle cx="20" cy={progress * 50} r="10" />
            </svg>
        </motion.div>
    )
}


export default Home;