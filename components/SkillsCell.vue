<template>
  <div class="flex justify-center items-center gap-4 my-4 pt-2 xxs:my-4 xxs:pt-4 text-gray-800 border-t border-gray-400">
    <nuxt-img provider="cloudinary" format="webp" fit="contain" width="80" height="80" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" :src="imgUrl" :alt="imgAlt" class="w-20 h-20 p-3 rounded-xl flex-grow-0"/>
    <div class="flex flex-col flex-grow justify-start">
        <h3 class="font-semibold text-xl my-2">{{title}}</h3>
        <p class="text-base">{{desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SkillsCell',
    props:{
        imgUrl: {type: String, required: true},
        imgAlt: {type: String, required: true}, 
        title: {type: String, required: true},
        desc: {type: String, required: true},
        },
}
</script>

<style>

</style>