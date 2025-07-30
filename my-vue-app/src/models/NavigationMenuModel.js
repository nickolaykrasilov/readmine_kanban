import { ref } from 'vue';

export class NavigationMenuModel {
  constructor() {
    this.navItems = {
      dropdowns: {
        plugins: {
          type: 'dropdown',
          current: ref({ 
            text: "Plugins", 
            href: "/plugins",
            value: "plugins" 
          }),
          items: [
            { text: "Plugin 1", href: "/plugins/1", value: "plugin1" },
            { text: "Plugin 2", href: "/plugins/2", value: "plugin2" }
          ]
        },
        themes: {
          type: 'dropdown',
          current: ref({ 
            text: "Themes", 
            href: "/themes",
            value: "themes" 
          }),
          items: [
            { text: "Theme 1", href: "/themes/1", value: "theme1" },
            { text: "Theme 2", href: "/themes/2", value: "theme2" }
          ]
        },
        pricing: {
          type: 'dropdown',
          current: ref({ 
            text: "Pricing", 
            href: "/pricing",
            value: "basic" 
          }),
          items: [
            { text: "Basic", href: "/pricing/basic", value: "basic" },
            { text: "Pro", href: "/pricing/pro", value: "pro" }
          ]
        },
        resources: {
          type: 'link',
          current: ref({ 
            text: "Resources", 
            href: "/resources",
            value: "resources" 
          }),
        },
      },
     
      // Обычные ссылки
      links: {
        resources: {
          type: 'link',
          text: "Resources",
          href: "/resources",
          value: "resources"
        },
        support: {
          type: 'link',
          text: "Support",
          href: "/support",
          value: "support"
        }
      }
    };
  }

  getNavItems() {
    return this.navItems;
  }

  updateCurrent(type, newItem) {
    if (this.navItems.dropdowns[type]) {
      this.navItems.dropdowns[type].current.value = newItem;
    }
  }
}