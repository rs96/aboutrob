import * as types from "./types";
import * as constants from "./constants";

export const clearCanvas = (
    ctx: CanvasRenderingContext2D,
    canvasSize: { width: number; height: number }
) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
};

export const containerCollision = (
    ball: types.Ball,
    canvasSize: { height: number; width: number }
) => {
    if (
        ball.position.x + ball.radius > canvasSize.width ||
        ball.position.x - ball.radius < 0
    ) {
        ball.velocity.x = -ball.velocity.x;
    }
    if (
        ball.position.y + ball.radius > canvasSize.height ||
        ball.position.y - ball.radius < 0
    ) {
        ball.velocity.y = -ball.velocity.y;
    }
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
