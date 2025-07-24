import { defineComponent, h } from 'vue';

const COLORS = {
  primary: '#0094ff',
  background: '#f3faff',
};

const SIZES = {
  icon: 72,          
  arrowIcon: 11,    
  viewBox: 72,    
  borderRadius: 36,  
};

// Общая конфигурация для иконок
const baseIconProps = {
  size: { type: [Number, String], default: SIZES.icon },
  color: { type: String, default: COLORS.primary },
  bgColor: { type: String, default: COLORS.background },
};

// Создание иконок
const createIcon = (name, svgContent) => {
  return defineComponent({
    name,
    props: baseIconProps,
    setup(props) {
      return () => h('svg', {
        width: props.size,
        height: props.size,
        viewBox: `0 0 ${SIZES.viewBox} ${SIZES.viewBox}`,
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      }, [
        h('rect', { 
          width: SIZES.viewBox, 
          height: SIZES.viewBox, 
          rx: SIZES.borderRadius, 
          fill: props.bgColor,
        }),
        ...svgContent(props),
      ]);
    }
  });
};

// Иконки
const YourIcon = createIcon('YourIcon', (props) => [
  h('rect', { 
    x: '21.5', y: '22.5',
    width: '29.087', height: '27',
    rx: '3.5', stroke: props.color,
    'stroke-width': '3', 
  }),
  h('rect', { 
    x: '26', y: '27',
    width: '3', height: '17',
    rx: '1.5', fill: props.color,
  }),
  h('rect', { 
    x: '33.5', y: '28.5',
    width: '11', height: '11',
    rx: '1.9', stroke: props.color,
    'stroke-width': '3', 
  })
]);

const CheckmarkIcon = createIcon('CheckmarkIcon', (props) => [
  h('rect', {
    x: '22.5', y: '23.5',
    width: '26', height: '26',
    rx: '3.5', stroke: props.color,
    'stroke-width': '3',
  }),
  h('path', {
    d: `M31.3199 36.5001L34.6524 40.0992C34.7336 
    40.1869 34.8731 40.1842 34.9509 
    40.0936L40.729 33.3637`,
    stroke: props.color,
    'stroke-width': '3',
    'stroke-linecap': 'round',
  })
]);

const LineIcon = createIcon('LineIcon', (props) => [
  h('rect', {
    x: '22', y: '23',
    width: '27.2381', height: '26',
    rx: '2', stroke: props.color,
    'stroke-width': '3',
  }),
  h('line', {
    x1: '22', y1: '31.3621',
    x2: '48.8966', y2: '31.3621',
    stroke: props.color,
    'stroke-width': '3',
  })
]);

const ArrowIcon = defineComponent({
  name: 'ArrowIcon',
  props: {
    size: { type: [Number, String], default: SIZES.arrowIcon },
    color: { type: String, default: COLORS.primary },
  },
  setup(props) {
    return () => h('svg', {
      width: props.size,
      height: props.size,
      viewBox: '0 0 11 9',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    }, [
      h('path', {
        d: `M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 
        4.77614 0.723858 5 1 5V4ZM10.8536 4.85355C11.0488 
        4.65829 11.0488 4.34171 10.8536 4.14645L7.67157 0.964466C7.47631 
        0.769204 7.15973 0.769204 6.96447 0.964466C6.7692 1.15973 
        6.7692 1.47631 6.96447 1.67157L9.79289 4.5L6.96447 7.32843C6.7692 
        7.52369 6.7692 7.84027 6.96447 8.03553C7.15973 8.2308 7.47631 8.2308 
        7.67157 8.03553L10.8536 4.85355ZM1 5H10.5V4H1V5Z`,
        fill: props.color
      })
    ]);
  }
});

const WhiteArrowIcon = defineComponent({
  name: 'WhiteArrowIcon',
  props: {
    size: { type: [Number, String], default: 15 }, 
    color: { type: String, default: 'white' }, 
  },
  setup(props) {
    return () => h('svg', {
      width: props.size,
      height: props.size,
      viewBox: '0 0 15 12',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    }, [
      h('path', {
        d: `M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 
        0.585786 6.75 1 6.75L1 5.25ZM14.5303 6.53033C14.8232 6.23744 
        14.8232 5.76256 14.5303 5.46967L9.75736 0.6967C9.46447 0.403806 
        8.98959 0.403806 8.6967 0.6967C8.40381 0.989593 8.40381 1.46447 
        8.6967 1.75736L12.9393 6L8.6967 10.2426C8.40381 10.5355 8.40381 
        11.0104 8.6967 11.3033C8.98959 11.5962 9.46447 11.5962 9.75736 
        11.3033L14.5303 6.53033ZM1 6.75L14 6.75L14 5.25L1 5.25L1 6.75Z`,
        fill: props.color
      })
    ]);
  }
});

const ChevronIcon = defineComponent({
  name: 'ChevronIcon',
  props: {
    size: { type: [Number, String], default: 10 },
    height: { type: [Number, String], default: 6 },
    color: { type: String, default: '#3D3D3D' },
  },
  setup(props) {
    return () => h('svg', {
      width: props.size,
      height: props.height,
      viewBox: '0 0 10 6',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    }, [
      h('path', {
        d: 'M0.638672 1L5.13867 5L9.63867 1',
        stroke: props.color,
        'stroke-width': '1',
        'stroke-linecap': 'round',
      })
    ]);
  }
});

const UserIcon = defineComponent({
  name: 'UserIcon',
  props: {
    size: { type: [Number, String], default: 16 },
    color: { type: String, default: '#0094FF' },
  },
  setup(props) {
    return () => h('svg', {
      width: props.size,
      height: props.size,
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    }, [
      h('path', {
        d: `M13.8895 9.88704C13.4255 9.47934 12.8628 9.12708 
        12.2169 8.84007C11.9408 8.71745 11.6177 8.84178 11.4951 
        9.11778C11.3725 9.39378 11.4968 9.71689 11.7728 
        9.83961C12.3174 10.0816 12.7868 10.374 13.1675 
        10.7086C13.637 11.1211 13.9062 11.7184 13.9062 
        12.3477V13.3594C13.9062 13.6609 13.6609 13.9062 
        13.3594 13.9062H2.64062C2.3391 13.9062 2.09375 
        13.6609 2.09375 13.3594V12.3477C2.09375 11.7184 
        2.36302 11.1211 2.83246 10.7086C3.38499 10.2231 
        4.99486 9.09375 8 9.09375C10.2314 9.09375 
        12.0469 7.27827 12.0469 5.04688C12.0469 2.81548 
        10.2314 1 8 1C5.7686 1 3.95312 2.81548 3.95312 
        5.04688C3.95312 6.35136 4.5737 7.51347 5.535 
        8.254C3.77603 8.64066 2.68185 9.38492 2.11052 
        9.88704C1.40482 10.5071 1 11.4039 1 
        12.3477V13.3594C1 14.2641 1.73593 15 2.64062 
        15H13.3594C14.2641 15 15 14.2641 15 
        13.3594V12.3477C15 11.4039 14.5952 10.5071 
        13.8895 9.88704ZM5.04688 5.04688C5.04688 
        3.41853 6.37166 2.09375 8 2.09375C9.62834 
        2.09375 10.9531 3.41853 10.9531 5.04688C10.9531 
        6.67522 9.62834 8 8 8C6.37166 8 5.04688 6.67522 
        5.04688 5.04688Z`,
        fill: props.color
      })
    ]);
  }
});

const components = {
  YourIcon,
  CheckmarkIcon,
  LineIcon,
  ArrowIcon,
  WhiteArrowIcon, 
  ChevronIcon,
  UserIcon,
};

export default {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
  ...components
};

export { COLORS, SIZES };
