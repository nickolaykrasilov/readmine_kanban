import { ref } from 'vue';

export class NavigationMenuModel {
  constructor() {
    this.dropdowns = {
      plugin: {
        items: ['Plugin 1', 'Plugin 2'],
        selected: ref('Plugins')
      },
      theme: {
        items: ['Theme 1', 'Theme 2'],
        selected: ref('Themes')
      },
      pricing: {
        items: ['Basic', 'Pro'],
        selected: ref('Pricing')
      }
    };
  }

  getDropdowns() {
    return this.dropdowns;
  };

  updateSelected(type, value) {
    if (this.dropdowns[type]) {
      this.dropdowns[type].selected.value = value;
    }
  }
};
