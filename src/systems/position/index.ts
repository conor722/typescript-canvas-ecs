import System from "../system";

type PositionComponent = {
    x: number,
    y: number,
    z: number,
}

class Position extends System<PositionComponent> {
}

export default new Position();