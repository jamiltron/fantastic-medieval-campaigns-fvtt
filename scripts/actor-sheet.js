class FmcActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "templates/actor-sheet.html",
      classes: ["fantastic-medieval-campaigns", "sheet", "actor"],
      width: 600,
      height: 600,
      tabs: [{navSelector: ".tabs", contentSelector: ".sheet-body", initial: "attributes"}],
      scrollY: [".attributes", ".inventory", ".combat", ".spells", ".misc"]
    });
  }

  getData() {
    const data = super.getData();
    data.actor = duplicate(this.actor.data);
    data.data = data.actor.data;

    // Perform any data manipulation or calculations here, if needed

    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // Add any custom event listeners, such as click, change, or submit events
  }

  _updateObject(event, formData) {
    // Perform any custom data pre-processing before updating the actor
    return this.object.update(formData);
  }
}

// Register the custom actor sheet
Actors.registerSheet("fantastic-medieval-campaigns", FmcActorSheet, {makeDefault: true});
