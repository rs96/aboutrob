export type CanvasObject = {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
};

export type Ball = CanvasObject & {
    radius: number;
};
