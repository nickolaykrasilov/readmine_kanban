import { ref, onMounted, onBeforeUnmount } from 'vue';

const MOBILE_BREAKPOINT = 1200;

export function useScreenSize() {
  const isMobile = ref(false);

  const checkScreenSize = () => {
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
  };

  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
  });

  return { isMobile };
};
