import { defineComponent, h } from 'vue';

const YourIcon = defineComponent({
  name: 'YourIcon',
  props: {
    size: { type: [Number, String], default: 72 },
    color: { type: String, default: '#0094ff' },
    bgColor: { type: String, default: '#f3faff' },
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

const CheckmarkIcon = defineComponent({
  name: 'CheckmarkIcon',
  props: {
    size: { type: [Number, String], default: 72 },
    color: { type: String, default: '#0094FF' },
    bgColor: { type: String, default: '#F3FAFF' }
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
        h('rect', {
          width: '72',
          height: '72',
          rx: '36',
          fill: props.bgColor
        }),
        h('rect', {
          x: '22.5',
          y: '23.5',
          width: '26',
          height: '26',
          rx: '3.5',
          stroke: props.color,
          'stroke-width': '3'
        }),
        h('path', {
          d: 'M31.3199 36.5001L34.6524 40.0992C34.7336 40.1869 34.8731 40.1842 34.9509 40.0936L40.729 33.3637',
          stroke: props.color,
          'stroke-width': '3',
          'stroke-linecap': 'round'
        })
      ]);
  }
});

const LineIcon = defineComponent({
  name: 'LineIcon',
  props: {
    size: { type: [Number, String], default: 72 },
    color: { type: String, default: '#0094FF' },
    bgColor: { type: String, default: '#F3FAFF' }
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
        h('rect', {
          width: '72',
          height: '72',
          rx: '36',
          fill: props.bgColor
        }),
        h('rect', {
          x: '22',
          y: '23',
          width: '27.2381',
          height: '26',
          rx: '2',
          stroke: props.color,
          'stroke-width': '3'
        }),
        h('line', {
          x1: '22',
          y1: '31.3621',
          x2: '48.8966',
          y2: '31.3621',
          stroke: props.color,
          'stroke-width': '3'
        })
      ]);
  }
});

export default {
  install(app) {
    app.component('YourIcon', YourIcon);
    app.component('CheckmarkIcon', CheckmarkIcon);
    app.component('LineIcon', LineIcon);
  }
};
