<template>
  <div class="flex justify-start w-screen h-screen" @wheel="handleScroll">
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
  },
  {
    label: 'Transition Config',
    icon: 'i-heroicons-adjustments-horizontal',
    to: '/transition-config',
  },
]
const router = useRouter()
function handleScroll(event: WheelEvent) {
  if (event.ctrlKey || event.altKey || event.shiftKey) return
  const currentPath = router.currentRoute.value.path
  const isScrollDown = event.deltaY > 0;
  for (let i = 0; i < links.length; i++) {
    if (links[i].to !== currentPath) continue
    if (isScrollDown && ++i >= links.length) break
    if (!isScrollDown && --i < 0) break
    navigateTo(links[i].to, { replace: true })
    break
  }
}
</script>
