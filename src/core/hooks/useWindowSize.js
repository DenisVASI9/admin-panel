import {useState, useEffect} from "react";

export function useWindowSize() {
    const getWidth = () => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    const getHeight = () => window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    const [windowSize, setWindowSize] = useState({
        width: getWidth(),
        height: getHeight(),
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: getWidth(),
                height: getHeight(),
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}