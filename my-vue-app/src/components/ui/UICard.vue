<template>
  <div class="card">
    <div class="card-content">
      <div class="card-icon">
        <slot name="icon">
          <img 
            v-if="icon"
            :src="icon" 
            alt="Icon" 
          >
        </slot>
      </div>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-subtitle">{{ subtitle }}</p>
      <button class="card-button" @click="$emit('details-click')">
        More details
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
});

defineEmits(['details-click']);
</script>

<style scoped>
.card {
  width: 450px;
  height: 329px;
  position: absolute;
  top: 1480px;
  left: 100px;
  transform: rotate(0deg);
  opacity: 1;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  transition: all 0ms;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 24px;
  display: block
}

.card-icon img {    
  width: 2%;
  height: 2%;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #333;
}

.card-subtitle {
  font-size: 16px;
  color: #666;
  margin: 0 0 auto 0;
  line-height: 1.5;
}

.card-button {
  align-self: flex-start;
  background: none;
  border: none;
  color: #0066cc;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 0;
  display: flex;
  align-items: center;
  margin-top: auto;
}

.card-button:hover {
  text-decoration: underline;
}

.arrow {
  margin-left: 8px;
  transition: transform 0.2s;
}

.card-button:hover .arrow {
  transform: translateX(4px);
}
</style>