export function createNavigationMenu() {
  const navItems = {
    dropdowns: {
      plugins: {
        type: 'dropdown',
        current: {
          label: "Plugins", href: "/plugins",
        },
        items: [
          {
            label: "Plugin 1",
            href: "/plugins/1",
          },
          {
            label: "Plugin 2",
            href: "/plugins/2",
          },
        ],
      },
      themes: {
        type: 'dropdown',
        current: {
          label: "Themes",
          href: "/themes",
        },
        items: [
          {
            label: "Theme 1",
            href: "/themes/1",
          },
          {
            label: "Theme 2",
            href: "/themes/2",
          },
        ],
      },
      pricing: {
        type: 'dropdown',
        current: {
          label: "Pricing",
          href: "/pricing",
        },
        items: [
          {
            label: "Basic",
            href: "/pricing/basic",
          },
          {
            label: "Pro",
            href: "/pricing/pro",
          },
        ],
      },
      resources: {
        type: 'dropdown',
        current: {
          label: "Resources",
          href: "/resources",
        },
      },
    },
  };

  function updateCurrent(type, newItem) {
    const item = navItems.dropdowns[type];

    if (item && item.type === 'dropdown') {
      item.current = newItem;
    };
  };

  return {
    navItems,
    updateCurrent,
  };
};
