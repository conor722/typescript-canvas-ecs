## An unopinionated canvas + typescript entity component system 2d 'game' engine

Will execute whatever is in the main `index.ts` file.

Run `npm install` and `npm start` to run the code in `index.ts`.

To add new functionality:

1. Add a new 'system' that inherits from the base class

2. Add a definition for the component it uses to represent it's per-entity state

3. Override the `register` and `processComponents` methods as you want to

4. Hook your new system into the game loop by calling `processComponents` with the optional time delta

5. Register an instance of the component with the system and an entity by calling `register` with the name of the entity you want to register it for

I have no other guidelines, systems can act on anything in the game world including components they don't 'own', however ideally only one system would act on a component (Position acts merely to store entities positions, whereas the RigidBox2D system acts on it, maybe this means I haven't designed stuff properly, we're all adults here though).