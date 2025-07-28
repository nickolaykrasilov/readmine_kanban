import { ref } from 'vue';

export class NavigationMenuModel {
  constructor() {
    this.dropdowns = {
      plugin: {
        items: ['Plugin 1', 'Plugin 2'],
        selected: ref('Plugin 1'),
      },
      theme: {
        items: ['Theme 1', 'Theme 2'],
        selected: ref('Theme 1'),
      },
      pricing: {
        items: ['Basic', 'Pro'],
        selected: ref('Basic'),
      }
    };
  }

  getDropdowns() {
    return this.dropdowns;
  };

  updateSelected(type, value) {
    if (this.dropdowns[type]) {
      this.dropdowns[type].selected.value = value;
    };
  };
};
