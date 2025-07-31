import { ref } from 'vue';

export function createNavigationMenu() {
  const navItems = {
    dropdowns: {
      plugins: {
        type: 'dropdown',
        current: ref({ label: "Plugins", href: "/plugins" }),
        items: [
          { label: "Plugin 1", href: "/plugins/1" },
          { label: "Plugin 2", href: "/plugins/2" },
        ],
      },
      themes: {
        type: 'dropdown',
        current: ref({ label: "Themes", href: "/themes" }),
        items: [
          { label: "Theme 1", href: "/themes/1" },
          { label: "Theme 2", href: "/themes/2" },
        ],
      },
      pricing: {
        type: 'dropdown',
        current: ref({ label: "Pricing", href: "/pricing" }),
        items: [
          { label: "Basic", href: "/pricing/basic" },
          { label: "Pro", href: "/pricing/pro" },
        ],
      },
      resources: {
        type: 'link',
        current: ref({ label: "Resources", href: "/resources" }),
      },
    },
  };

  function updateCurrent(type, newItem) {
    const item = navItems.dropdowns[type];
    if (item && item.type === 'dropdown') {
      item.current.value = newItem;
    }
  }

  return {
    navItems,
    updateCurrent,
  };
}
