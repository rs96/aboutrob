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
    ctx.strokeStyle = "#EF6C00";
    ctx.fillStyle = "#FF9800";
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
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "#2E7D32";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();
};

export const score = (
    ctx: CanvasRenderingContext2D | null,
    score: number,
    canvasSize: { width: number; height: number }
) => {
    if (!ctx) {
        console.log("Error: Not finding canvas context");
        return;
    }
    ctx.font = "bold 30vh helvetica";
    ctx.fillStyle = "#CCCCCC";
    ctx.fillText(
        `${score}`,
        (canvasSize.width * 7) / 20,
        (3 * canvasSize.height) / 5
    );
};
