<template>
  <div class="flex justify-start">
    <UVerticalNavigation :links="links" class="w-96 px-5 py-32" />
    <slot />
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  }, 
  {
    label: 'WorldMap',
    icon: 'i-heroicons-map',
    to: '/world-map',
  }
]
</script>
