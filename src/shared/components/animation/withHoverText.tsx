
import { gsap } from "gsap";
export const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
  gsap.registerEffect({
    name: "pulse",
    effect(currentTarget: any) {
      return gsap.fromTo(currentTarget, {
        color: "#F44336",
        scale: 1
      }, {
        scale: 1.5,
        repeat: 1,
        // ease: "bounce",
        yoyoEase: "power3",
        ease: "elastic",
        force3D: true
      });
    }
  });
  gsap.effects['pulse'](currentTarget);
};

export const onLeave = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
  gsap.to(currentTarget, { color: "white", });
};

export const onUseLeave = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
  gsap.to(currentTarget, { color: "#F44336", });
};

