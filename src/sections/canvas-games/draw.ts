import * as types from "./types";

export const ball = (
    ctx: CanvasRenderingContext2D | null,
    ball: types.Ball
) => {
    if (!ctx) {
        console.log("Error: Not finding canvas context");
        return;
    }
    ctx.beginPath();
    ctx.arc(
        ball.position.x,
        ball.position.y,
        ball.radius,
        0,
        2 * Math.PI,
        false
    );
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();
};

export const target = (
    ctx: CanvasRenderingContext2D | null,
    target: types.Ball
) => {
    if (!ctx) {
        console.log("Error: Not finding canvas context");
        return;
    }
    ctx.beginPath();
    ctx.arc(
        target.position.x,
        target.position.y,
        target.radius,
        0,
        2 * Math.PI,
        false
    );
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();
};

export const score = (ctx: CanvasRenderingContext2D | null, score: number) => {
    if (!ctx) {
        console.log("Error: Not finding canvas context");
        return;
    }
    ctx.fillText(`Score: ${score}`, 5, 15);
};
