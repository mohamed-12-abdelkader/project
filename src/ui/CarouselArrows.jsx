import { GoArrowRight, GoArrowLeft } from "react-icons/go";

export default function CarouselArrows({
    isHorizontalCenter,
    top,
    topPresent,
    right,
    rightPresent,
    left,
    leftPresent,
    nextClick,
    prevClick
}) {
    const computedTop = top ?? topPresent;
    const computedRight = right ?? rightPresent;
    const computedLeft = left ?? leftPresent;

    const centerStyles = isHorizontalCenter
        ? { top: '50%', transform: 'translateY(-50%)' }
        : { top: computedTop };

    return (
        <div className="splide__arrows">
            <button
                className="rounded-full h-[50px] w-[50px] cursor-pointer flex slide-btn-theme justify-center items-center"
                style={{ ...centerStyles, left: computedLeft }}
                onClick={nextClick}
            >
                <GoArrowLeft className="text-2xl text-white" />
            </button>
            <button
                className="rounded-full h-[50px] w-[50px] cursor-pointer flex slide-btn-theme justify-center items-center"
                style={{ ...centerStyles, right: computedRight }}
                onClick={prevClick}
            >
                <GoArrowRight className="text-2xl text-white" />
            </button>
        </div>
    );
}
