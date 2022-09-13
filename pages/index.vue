<template>
  <div class="main overflow:scroll sm:overflow-hidden w-screen bg-slate">
    <NavBar />
    <HeroSection/>
    <lazy-SkillsSection/>
    <lazy-PortfolioSection/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
