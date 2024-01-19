import {useEffect, useRef} from "react";

// -------------- Code Reference: https://www.youtube.com/watch?v=eWO1b6EoCnQ -----------
export const useClickOutside = (handler) => {
    const domNode = useRef()
    useEffect(() => {
        const newHandler = (e) => {
            if (!domNode.current.contains(e.target)){
                handler()
            }
        }
        document.addEventListener('mousedown', newHandler)
        return  () => {
            document.removeEventListener('mousedown', newHandler)
        }
    }, );
    return domNode
}
// ------------------------------------------------------------------------------------------