
import { gsap } from "gsap";

export const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    gsap.fromTo(currentTarget, {
        rotationY: 180,
    }, {
        rotationY: 0,
    });
}
