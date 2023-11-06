import React, { useEffect } from 'react'
import { useAnimate, usePresence } from 'framer-motion'
import PropTypes from 'prop-types';

const TransitionWrapper = ({ children }) => {

    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    useEffect(() => {

        if (isPresent) {
            const enterAnimation = async () => {
                await animate([
                    [".overlay__row", { scaleY: 0 }, { duration: 0.6, ease: [0.76, 0, 0.24, 1] }],
                ])
            }
            enterAnimation()
        } else {
            const exitAnimation = async () => {
                await animate([
                    [".overlay__row", { scaleY: 1 }, { duration: 0.6, ease: [0.76, 0, 0.24, 1] }],
                ])
                safeToRemove()
            }
            exitAnimation()
        }
    }, [isPresent])

    return (
        <>
            {children}
            <div className="overlay" ref={scope} style={{ zIndex: 10 }}>
                <div className="overlay__row"></div>
                <div className="overlay__row"></div>
            </div>
        </>
    )
}

TransitionWrapper.propTypes = {
    children: PropTypes.node
}

TransitionWrapper.defaultProps = {
    children: null
};
export default TransitionWrapper
