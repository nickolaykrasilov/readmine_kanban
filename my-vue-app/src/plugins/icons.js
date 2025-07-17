import { defineComponent, h } from 'vue';

const YourIcon = defineComponent({
  name: 'YourIcon',
  props: {
    size: { type: [Number, String], default: 72 }, // Размер иконки
    color: { type: String, default: '#0094ff' },   // Основной цвет
    bgColor: { type: String, default: '#f3faff' }, // Цвет фона
  },
  setup(props) {
    return () => 
      h('svg', { 
        width: props.size,
        height: props.size,
        viewBox: '0 0 72 72',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      }, [
        h('rect', { width: '72', height: '72', rx: '36', fill: props.bgColor }),
        h('rect', { 
          x: '21.5',    
          y: '22.5', 
          width: '29.087', 
          height: '27', 
          rx: '3.5', 
          stroke: props.color, 
          'stroke-width': '3' 
        }),
        h('rect', { 
          x: '26', 
          y: '27', 
          width: '3', 
          height: '17', 
          rx: '1.5', 
          fill: props.color 
        }),
        h('rect', { 
          x: '33.5', 
          y: '28.5', 
          width: '11', 
          height: '11', 
          rx: '1.9', 
          stroke: props.color, 
          'stroke-width': '3' 
        }),
      ]);
  },
});

export default {
  install(app) {
    app.component('YourIcon', YourIcon); 
  },
};
