import System from '../system';

export type PositionComponent = {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  angle: number;
};

class Position extends System<PositionComponent> {}

export default new Position();
