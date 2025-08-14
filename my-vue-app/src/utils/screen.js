import { ref, onMounted, onBeforeUnmount } from 'vue';

const TABLET_BREAKPOINT = 1024;

export function useScreenSize() {
  const isTablet = ref(false);

  const checkScreenSize = () => {
    isTablet.value = window.innerWidth < TABLET_BREAKPOINT;
  };

  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
  });

  return { isTablet };
};
