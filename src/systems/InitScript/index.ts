import System from '../system';

type InitScriptComponent = (
  entityId: EntityId,
  eventHandler: InitScript
) => void;

class InitScript extends System<InitScriptComponent> {
  register(entityId: number, component: InitScriptComponent): void {
    this.components.set(entityId, component);
    component(entityId, this);
  }
}

export default new InitScript();
