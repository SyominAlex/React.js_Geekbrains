import {useEffect, useRef} from "react";

export const usePrev = (value) => {
    const prev = useRef(); // изначально = undefined

    useEffect(() => {
        prev.current = value;
    }, [value]);

    return prev.current;
};