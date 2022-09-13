<template>
  <div>
    <div
      class="border-box w-min bg-gradient-to-b from-gray-800 via-green-300 to-gray-800 py-0.5 px-1 rounded-xl"
    >
      <div
        v-if="!imgUrl"
        class="w-60 h-44 xs:w-48 xs:h-36 bg-gray-400 rounded-xl self-center flex items-center justify-center overflow-hidden"
      >
        <div
          class="bg-white text-black bg-clip-content min-w-full my-auto text-center transform -rotate-12 shadow-lg border-4"
        >
          <p class="">{{$t('soon')}}</p>
        </div>
      </div>
      <div
        v-else
        @mouseover="show=true" @mouseleave="show=false" @click="showModal"
      >
        <div class="w-60 h-44 xs:w-48 xs:h-36 bg-gray-400 rounded-xl self-center flex items-center justify-center overflow-hidden">
          <nuxt-img provider="cloudinary" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" :src="imgUrl" format="webp" :alt="imgAlt" class="h-full w-full"/>
          <Transition name="fade">
            <div v-show="show" class="absolute bg-gray-200 rounded-b-xl self-end w-60 xs:w-48 text-center">
                <span>{{title}}</span>
            </div>
          </Transition>
        </div>
      </div>
    </div>


    <!-- MODAL -->
    <b-modal ref="my-modal" hide-footer scrollable :title=title>
      <div class="d-block">
        <nuxt-img provider="cloudinary" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" :src="imgUrl" format="webp" :alt="imgAlt" class="h-44 w-60 mx-auto mb-4"/>
        <h3>{{desc.text}}</h3>
        <h3 class="mt-2">{{$t('list')}}</h3>
        <ul class="list-disc ml-4 mt-1">
          <li v-for="(value, index) in desc.list" :key="index">{{value}}</li>
        </ul>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">{{$t('closeMe')}}</b-button>
    </b-modal>
  </div>
</template>

<i18n>
{
  "en":{
    "soon":"COMING SOON",
    "closeMe": "Close Me",
    "list":"This is a list of some of the tools used in this project:"
  },
  "pt":{
    "soon":"EM BREVE",
    "closeMe": "Fechar",
    "list":"Esta é uma lista de algumas das ferramentas usadas neste projeto:"
  }
}
</i18n> 

<script>
export default {
    name:'PortfolioCell',
    props:{
        imgUrl: {type: String, default: ""},
        imgAlt: {type: String, default: ""}, 
        title: {type: String, default: ""},
        desc: {type: Object, default: ()=>{return{}}},
    },
    data(){
      return{
        show: false,
        modal:false,
      }
    },
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
    },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
