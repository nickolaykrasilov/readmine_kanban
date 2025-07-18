<template>
  <div class="card">
    <div class="card-content">
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

.card-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0 12px 0 0;
  color: #333;
  position: relative;
  top: 80px; 
  left: -120px; 
}

.card-subtitle {
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.5;
  position: relative;
  top: 100px; 
  left: -148px; 
  white-space: pre-line; /* Поддержка \n */
  word-wrap: break-word; /* Перенос длинных слов */
  display: inline-block;
  max-width: 100%; /* Чтобы не выходил за границы */ 
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
