import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { easeInOut, stagger, useAnimate, usePresence } from "framer-motion";
import SplitType from 'split-type';
import imgUrl from "/img/1_big.jpg"
import TransitionWrapper from "../../components/TransitionWrapper";

const wrapLines = (arr, wrapType, wrapClass) => {
    arr.forEach(el => {
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList = wrapClass;
        el.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(el);
    });
}


const Photo = () => {
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate();

    const splitInstance = useRef()
    const sentenceRef = useRef()

    const splitInstance2 = useRef()
    const sentenceRef2 = useRef()

    useEffect(() => {
        document.body.style.backgroundColor = 'black'

        splitInstance.current = new SplitType(sentenceRef.current, { types: 'lines' });
        wrapLines(splitInstance.current.lines, 'div', 'oh');
        splitInstance2.current = new SplitType(sentenceRef2.current, { types: 'lines' });
        wrapLines(splitInstance2.current.lines, 'div', 'oh');

        if (isPresent) {
            const enterAnimation = async () => {
                await animate([
                    ['.preview__img-inner', { y: ["-101%", "0%"] }, { duration: 0.5, ease: [0.08, 0.65, 0.53, 0.96], }],
                    ['.oh__inner', { y: ["101%", "0%"] }, { duration: 0.5, ease: [0.08, 0.65, 0.53, 0.96], at: "<", delay: stagger('0.05') }],
                    [splitInstance.current.lines, { y: ["101%", "0%"] }, { duration: 0.5, ease: [0.08, 0.65, 0.53, 0.96], at: "<", delay: stagger('0.05') }],
                    [splitInstance2.current.lines, { y: ["101%", "0%"] }, { duration: 0.5, ease: [0.08, 0.65, 0.53, 0.96], at: "<", delay: stagger('0.05') }]
                ])
            }
            enterAnimation()
        } else {
            const exitAnimation = async () => {
                await animate([
                    ['.preview__img-inner', { y: "101%" }, { duration: 0.5, ease: easeInOut }],
                    ['.oh__inner', { y: "101%" }, { duration: 0.5, ease: easeInOut, at: "<", delay: stagger('0.05', { from: "last" }) }],
                    [splitInstance.current.lines, { y: "101%" }, { duration: 0.5, ease: easeInOut, at: "<", delay: stagger('0.05', { from: "last" }) }],
                    [splitInstance2.current.lines, { y: "101%" }, { duration: 0.5, ease: easeInOut, at: "<", delay: stagger('0.05', { from: "last" }) }]
                ])
                safeToRemove()
            }
            exitAnimation()
        }
    }, [isPresent])
    return (
        <TransitionWrapper>
            <div className="previews">
                <div className="preview" ref={scope}>
                    <div className="preview__img"><div className="preview__img-inner" style={{ backgroundImage: `url(${imgUrl})` }}></div></div>
                    <h2 className="preview__title oh"><span className="oh__inner" style={{ pointerEvents: 'none', userSelect: 'none' }}>Moulder</span></h2>
                    <div className="preview__column preview__column--start">
                        <span className="preview__column-title preview__column-title--main oh"><span className="oh__inner">Alex Moulder</span></span>
                        <span className="oh"><span className="oh__inner">2020</span></span>
                    </div>
                    <div className="preview__column">
                        <h3 className="preview__column-title oh"><span className="oh__inner">Location</span></h3>
                        <p ref={sentenceRef}>And if it rains, a closed car at four. And we shall play a game of chess, pressing lidless eyes and waiting for a knock upon the door.</p>
                    </div>
                    <div className="preview__column">
                        <h3 className="preview__column-title oh"><span className="oh__inner">Material</span></h3>
                        <p ref={sentenceRef2}>At the violet hour, when the eyes and back, turn upward from the desk, when the human engine waits.</p>
                    </div>
                    <button className="unbutton preview__back">
                        <Link to='/'>


                            <svg width="100px" height="18px" viewBox="0 0 50 9"><path vectorEffect="non-scaling-stroke" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path></svg>
                        </Link>
                    </button>
                </div>
            </div>
        </TransitionWrapper>
    )
}

export default Photo