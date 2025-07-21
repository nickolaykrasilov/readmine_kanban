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

const components = {
  YourIcon,
  CheckmarkIcon,
  LineIcon,
  ArrowIcon,
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
