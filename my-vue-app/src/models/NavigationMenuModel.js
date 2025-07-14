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

    this.routeMap = {
      plugin: {
        'Plugin 1': '/plugins/plugin1',
        'Plugin 2': '/plugins/plugin2'
      },
      theme: {
        'Theme 1': '/themes/theme1',
        'Theme 2': '/themes/theme2'
      },
      pricing: {
        'Basic': '/pricing/basic',
        'Pro': '/pricing/pro'
      }
    };
  }

  getDropdowns() {
    return this.dropdowns;
  }

  getRoute(type, value) {
    return this.routeMap[type]?.[value] || '/';
  }
}
