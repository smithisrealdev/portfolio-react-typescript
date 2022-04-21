
import { gsap } from "gsap";

export const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    gsap.fromTo(currentTarget, {
        rotationY: 180,
        ease: "elastic",
        duration:3,
        force3D: true
    }, {
        rotationY: 0,
        ease: "elastic",
        duration:3,
        force3D: true
    });
}
