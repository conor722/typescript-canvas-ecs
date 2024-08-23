import { afterEach } from "vitest";
import { Position, Render, Velocity } from "./src/systems";

afterEach(() => {
    Velocity.components.clear();
    Position.components.clear();
    Render.components.clear();
})