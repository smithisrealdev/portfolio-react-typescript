import { gsap } from "gsap";
type EventProps = React.MouseEvent<HTMLDivElement>
export  const onEnter = ({currentTarget} :React.MouseEvent<HTMLDivElement> ) => {
    gsap.to(currentTarget, {
        x: -16,
        y: -16,
        duration: 1,
        ease: "elastic",
        force3D: true
    });
};

export const onLeave = ({currentTarget} :EventProps) => {
    gsap.to(currentTarget, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic",
        force3D: true
    });
};