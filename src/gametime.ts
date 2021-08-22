import { setInterval } from "@write-coin/ceres-ts-template/src/timer"

let elapsedTime = 0.00

const updateTime = 30

const gameTimer = setInterval(updateTime, () => elapsedTime += updateTime)

export const getElapsedTime = () => elapsedTime + TimerGetElapsed(gameTimer)