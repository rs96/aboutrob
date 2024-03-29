import * as types from "./types";
import * as constants from "./constants";

export const clearCanvas = (
    ctx: CanvasRenderingContext2D,
    canvasSize: { width: number; height: number }
) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasSize.width + 1, canvasSize.height + 1);
};

export const containerCollision = (
    ball: types.Ball,
    canvasSize: { height: number; width: number }
) => {
    if (ball.position.x - ball.radius < 0) {
        ball.position.x = ball.radius;
        ball.velocity.x = -ball.velocity.x * constants.BOUNCE_EFFICIENCY;
    }
    if (ball.position.x + ball.radius > canvasSize.width) {
        ball.position.x = canvasSize.width - ball.radius;
        ball.velocity.x = -ball.velocity.x * constants.BOUNCE_EFFICIENCY;
    }
    if (ball.position.y - ball.radius < 0) {
        ball.position.y = ball.radius;
        ball.velocity.y = -ball.velocity.y * constants.BOUNCE_EFFICIENCY;
    }
    if (ball.position.y + ball.radius > canvasSize.height) {
        ball.position.y = canvasSize.height - ball.radius;
        ball.velocity.y = -ball.velocity.y * constants.BOUNCE_EFFICIENCY;
    }
};

export const targetCollision = (
    ball: types.Ball,
    target: types.Ball
): boolean => {
    const dx = Math.abs(ball.position.x - target.position.x);
    const dy = Math.abs(ball.position.y - target.position.y);
    const c = Math.hypot(dx, dy);
    return c < ball.radius + target.radius;
};

export const applyDrag = (ball: types.Ball) => {
    ball.velocity.y = ball.velocity.y * constants.DRAG_COEFFICIENT;
    ball.velocity.x = ball.velocity.x * constants.DRAG_COEFFICIENT;
};

export const applyGravityToObject = (o: types.CanvasObject) => {
    o.velocity.y = o.velocity.y + constants.GRAVITY;
};

// export const updateCanvasObjectPositions = () => {

// }

export const updateBallPosition = (ball: types.Ball) => {
    ball.position.x = ball.position.x + ball.velocity.x;
    ball.position.y = ball.position.y + ball.velocity.y;
};
