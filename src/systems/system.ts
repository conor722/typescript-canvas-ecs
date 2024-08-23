abstract class System<T> {
  components: Map<EntityId, T> = new Map();

  processComponents(_timedelta: number) {
    throw new Error('Method not implemented');
  }

  register(entityId: EntityId, component: T) {
    this.components.set(entityId, component);
  }
}

export default System;
