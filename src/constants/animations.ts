export const fadeInFromToConfig = {
  from: { opacity: 0 },
  to: { opacity: 1, duration: 2 },
};

export const introTextConfig = {
  duration: 1.8,
  delay: 1,
  ease: "none",
};

export const cursorAnimation = {
  opacity: 0,
  repeat: -1,
  yoyo: true,
  duration: 0.5,
  ease: "power2.inOut",
};

export const duration = 1.5;
export const textTimelineConfig = { repeat: 1, yoyo: true };
export const positionTimelineConfig = {
  repeat: -1,
  pause: true,
};

export const pageScrollConfig = {
  scrub: 2,
  pin: true,
  start: "top top",
  end: "+=100%",
  toggleActions: "play none none reverse",
};

export const colorBreathConfig = {
  from: {
    opacity: 1,
    color: "#54A923",
  },
  to: {
    opacity: 0.7,
    color: "#FFBA01",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
  },
};

export const downArrowConfig = { y: 12, yoyo: true, duration: 0.7, repeat: -1 };
