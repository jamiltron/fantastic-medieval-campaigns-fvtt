export class FmcActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/fantastic-medieval-campaigns/templates/actor-sheet.html",
      classes: ["fantastic-medieval-campaigns", "sheet", "actor"],
      width: 600,
      height: 600,
      tabs: {
        ".tabs": [{
          navSelector: ".tabs",
          contentSelector: ".sheet-body",
          initial: "attributes"
        }]
      },
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

    // Handle tab switching
    html.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', this._onTabClick.bind(this));
    });
  }

  _onTabClick(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const tab = target.dataset.tab;

    this.element.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
    });
    target.classList.add("active");

    this.element.querySelectorAll(".tab-content").forEach(content => {
      content.style.display = 'none';
    });
    this.element.querySelector(`.tab-content[data-tab="${tab}"]`).style.display = 'block';
  }

  _updateObject(event, formData) {
    // Perform any custom data pre-processing before updating the actor
    return this.object.update(formData);
  }
}

// Register the custom actor sheet
Actors.registerSheet("fantastic-medieval-campaigns", FmcActorSheet, {makeDefault: true});
