import { FmcActor } from "./actor.js";
import { FmcActorSheet } from "./actor-sheet.js";

Hooks.once("init", () => {
  console.log("Fantastic Medieval Campaigns | Initializing FMC");

  // Define custom Entity classes
  CONFIG.Actor.entityClass = FmcActor;
  CONFIG.Item.entityClass = Item;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("fantastic-medieval-campaigns", FmcActorSheet, { makeDefault: true });

  // Register system settings, if any
  // game.settings.register( ... );

  // Preload Handlebars templates, if any
  // preloadTemplates( ... );

  // Register custom Handlebars helpers, if any
  // Handlebars.registerHelper( ... );
});
