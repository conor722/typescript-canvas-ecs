import Position from "../position";
import System from "../system";

type VelocityComponent = {
    x: number;
    y: number;
    z: number;
}

class Velocity extends System<VelocityComponent> {
    processComponents(timedelta: number): void {
        for (const [entityId, velocity] of this.components.entries()) {

            const position = Position.components.get(entityId);

            if (!position) {
                return;
            }

            position.x += timedelta * velocity.x;
            position.y += timedelta * velocity.y;
            position.z += timedelta * velocity.z;

            console.log({ position });
        }
    }
}

export default new Velocity();