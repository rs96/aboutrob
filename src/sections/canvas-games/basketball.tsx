import React, { useEffect, useState } from "react";
import * as utils from "./utils";
import "./index.css";
import * as types from "./types";
import * as constants from "./constants";
import * as draw from "./draw";

const ball = {
    position: { x: 10, y: 10 },
    velocity: { x: 1, y: 0 },
    radius: 5,
};

const target = {
    position: { x: 50, y: 50 },
    velocity: { x: 0, y: 0 },
    radius: 5,
};

let score = 0;

export const Basketball = () => {
    const [canvasSize, setCanvasSize] = useState<{
        width: number;
        height: number;
    }>({ width: 0, height: 0 });
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

    const handleBallThrow = (ball: types.Ball) => (event: any) => {
        // need to calculate where relative mouse position to ball is
        const { x: mouseX, y: mouseY } = getCursorPosition(
            document.getElementById("canvas") as HTMLCanvasElement,
            event
        );
        const xDiff = mouseX - ball.position.x ?? 0;
        const yDiff = ball.position.y - mouseY ?? 0;

        const powerScaler = 20;

        // set speeds accordingly
        ball.velocity.x = Math.min(constants.MAX_VELOCITY, xDiff / powerScaler);
        ball.velocity.y = Math.max(-constants.MAX_VELOCITY, -yDiff / 15);
    };

    const getCursorPosition = (canvas: HTMLCanvasElement, event: any) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return { x, y };
    };

    const frame = () => {
        if (!ctx) return;

        utils.clearCanvas(ctx, canvasSize);
        utils.updateBallPosition(ball);
        utils.containerCollision(ball, canvasSize);
        utils.applyGravityToObject(ball);
        utils.applyDrag(ball);

        if (utils.targetCollision(ball, target)) {
            target.position.x = Math.floor(Math.random() * canvasSize.width);
            target.position.y = Math.floor(Math.random() * canvasSize.height);
            score++;
        }

        draw.ball(ctx, ball);
        draw.target(ctx, target);
        draw.score(ctx, score);

        window.requestAnimationFrame(frame);
    };

    useEffect(() => {
        window.requestAnimationFrame(frame);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ctx, canvasSize]);

    useEffect(() => {
        setTimeout(() => {
            const canvas = document.getElementById(
                "canvas"
            ) as HTMLCanvasElement;
            const container = document.getElementById(
                "canvas-container"
            ) as HTMLElement;

            setCanvasSize({ width: canvas.width, height: canvas.height });
            const thisCtx = canvas.getContext("2d") as CanvasRenderingContext2D;
            thisCtx.canvas.width = container?.offsetWidth;
            thisCtx.canvas.height = container?.offsetHeight;
            setCtx(thisCtx);
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="canvas-container" className="canvas-container">
            <canvas id="canvas" onClick={handleBallThrow(ball)}></canvas>
        </div>
    );
};
