import React, { useCallback, useEffect, useState } from "react";
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
        console.log({ ball });
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

        draw.ball(ctx, ball);

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
            setCanvasSize({ width: canvas.width, height: canvas.height });
            setCtx(canvas.getContext("2d"));
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="canvas-container" className="canvas-container">
            <canvas id="canvas" onClick={handleBallThrow(ball)}></canvas>
        </div>
    );
};
