import { gsap } from "gsap";
interface EventProps {
    currentTarget : React.MouseEvent<HTMLDivElement>
}
export const onEnter = ({ currentTarget }: EventProps) => {
    gsap.to(currentTarget, {
        x: 16,
        y: 18,
        duration: 1,
        ease: "elastic",
        force3D: true
    });
};
export const onLeave = ({ currentTarget }: EventProps) => {
    gsap.to(currentTarget, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic",
        force3D: true
    });
};