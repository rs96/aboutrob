export const isMobile = () =>
    window.innerWidth * window.devicePixelRatio <= 960;

export const getActiveClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : undefined;
