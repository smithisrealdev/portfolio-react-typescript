import { gsap } from "gsap";
export const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(currentTarget, {
        x: 16,
        y: 18,
        duration: 1,
        ease: "elastic",
        force3D: true
    });
};
export const onLeave = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(currentTarget, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic",
        force3D: true
    });
};