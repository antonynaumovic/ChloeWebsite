import { BannerLayer } from "react-scroll-parallax";
import { animate } from "framer-motion"
import { motion } from "framer-motion"
export const background: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  children: (
    <div className="absolute inset-0 flex items-center justify-center bg-background-yellow-light dark:bg-background-yellow-dark" />
  ),
};

export const staticBottom: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <svg
      className="rotate-180 absolute bottom-0"
      fill={"hsl(var(--nextui-background))"}
      height="auto"
      viewBox="0 0 1000 100"
      width="w-full"
    >
      <path
        d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
        fill={"hsl(var(--nextui-background))"}
      />
    </svg>
  ),
};
export const bottom1: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  translateY: [0, 2],
  children: (
    <svg
      className="rotate-180 absolute bottom-0"
      fill={"hsl(var(--nextui-background))"}
      height="auto"
      viewBox="0 0 1000 100"
      width="w-full"
    >
      <path
        d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
        fill={"hsl(var(--nextui-background))"}
        opacity="0.66"
      />
    </svg>
  ),
};
export const bottom2: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  translateY: [0, 1],
  children: (
    <svg
      className="rotate-180 absolute bottom-0"
      fill={"hsl(var(--nextui-background))"}
      height="auto"
      viewBox="0 0 1000 100"
      width="w-full"
    >
      <path
        d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
        fill={"hsl(var(--nextui-background))"}
        opacity="0.33"
      />
    </svg>
  ),
};

export const staticTop: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <svg
      fill={"hsl(var(--nextui-background))"}
      height="20px"
      preserveAspectRatio="none"
      viewBox="0 0 1000 100"
      width="100vw"
      x="0"
      y="0"
    >
      <path
        d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
        fill={"hsl(var(--nextui-background))"}
      />
    </svg>
  ),
};
export const top1: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  translateY: [0, 2],
  children: (
    <svg
      fill={"hsl(var(--nextui-background))"}
      height="15px"
      preserveAspectRatio="none"
      viewBox="0 0 1000 100"
      width="100vw"
      x="0"
      y="0"
    >
      <path
        d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
        fill={"hsl(var(--nextui-background))"}
        opacity="0.66"
      />
    </svg>
  ),
};
export const top2: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  translateY: [0, 1],
  children: (
    <svg
      fill={"hsl(var(--nextui-background))"}
      height="25px"
      preserveAspectRatio="none"
      viewBox="0 0 1000 100"
      width="100vw"
      x="0"
      y="0"
    >
      <path
        d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
        fill={"hsl(var(--nextui-background))"}
        opacity="0.33"
      />
    </svg>
  ),
};

export const circle1: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  translateY: [0, -5],
  children: (
    // <motion.div transition={{type:"spring", repeat: Infinity, duration: 10, ease: "circInOut", repeatType: "reverse"}} animate={{translateY: [72, 0]}}>
      <svg
        className="fill-circle-yellow dark:fill-circle-yellow-dark max-w-[700px] min-w-[200px] w-[35vw] absolute overflow-visible"
        height="auto"
        viewBox="0 0 100 100"
      >
        <circle cx="10" cy="10" opacity="0.4" r="50" />
      </svg>
    // </motion.div>
  ),
};

export const circle2: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  translateY: [0, -15],
  children: (
    // <motion.div transition={{type:"spring",  repeat: Infinity, duration: 9, ease: "circInOut", repeatType: "reverse"}} animate={{translateY: [50, 0]}}>
    <svg
      className="fill-circle-yellow dark:fill-circle-yellow-dark max-w-[800px] min-w-[300px] w-[35vw] absolute overflow-visible"
      height="auto"
      viewBox="0 0 100 100"
    >
      <circle cx="80" cy="-30" opacity="0.4" r="60" />
    </svg>
    // </motion.div>
  ),
};

export const circle3: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  translateY: [0, -40],
  children: (
    // <motion.div transition={{type:"spring",  repeat: Infinity, duration: 6, ease: "circInOut", repeatType: "reverse"}} animate={{translateY: [0, 42]}}>
    <svg
      className="fill-circle-yellow dark:fill-circle-yellow-dark max-w-[800px] min-w-[300px] w-[35vw] top-0 absolute overflow-visible"
      height="auto"
      viewBox="0 0 100 100"
    >
      <circle cx="40" cy="65" opacity="0.4" r="20" />
    </svg>
    // </motion.div>
  ),
};

export const circle4: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  translateY: [0, -15],
  children: (
    // <motion.div transition={{type:"spring", repeat: Infinity, duration: 7, ease: "circInOut", repeatType: "reverse"}} animate={{translateY: [0,30]}}>
    <svg
      className="fill-circle-yellow dark:fill-circle-yellow-dark max-w-[800px] min-w-[300px] w-[35vw] right-0 bottom-0 absolute overflow-visible"
      height="auto"
      viewBox="0 0 100 100"
    >
      <circle cx="60" cy="-20" opacity="0.4" r="15" />
    </svg>
    // </motion.div>
  ),
};
export const circle5: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  translateY: [0, -2],
  children: (
    // <motion.div transition={{type:"spring", repeat: Infinity, duration: 8, ease: "circInOut", repeatType: "reverse"}} animate={{translateY: [0,25]}}>
    <svg
      className="fill-circle-yellow dark:fill-circle-yellow-dark max-w-[800px] min-w-[300px] w-[35vw] right-0 bottom-0 absolute overflow-visible"
      height="auto"
      viewBox="0 0 100 100"
    >
      <circle cx="60" cy="70" opacity="0.4" r="60" />
    </svg>
    // </motion.div>
  ),
};
export const circle6: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  translateY: [0, -8],
  children: (
    <svg
      className="fill-circle-yellow dark:fill-circle-yellow-dark max-w-[800px] min-w-[300px] w-[35vw] right-0 bottom-0 absolute overflow-visible"
      height="auto"
      viewBox="0 0 100 100"
    >
      <circle cx="110" cy="20" opacity="0.4" r="30" />
    </svg>
  ),
};
