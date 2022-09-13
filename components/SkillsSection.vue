<template>
    <div id='Skills' class="relative flex justify-center bg-slate sm:items-center sm:pt-0 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-2 sm:mx-auto border-box bg-gradient-to-b from-gray-800 via-green-300 to-gray-800 p-1 rounded-lg">
            <div class="bg-gray-100 overflow-hidden shadow rounded-lg p-4 xxs:p-6">
                <h2 class="text-2xl leading-7 font-semibold sm:text-center">
                    {{$t('title')}}
                </h2>
                <p class="mt-2 xxs:mt-4 sm:mt-8 text-gray-600">
                    {{$t('subtitle')}}
                <br />
                </p>
                <SkillsCell class="mb-2" img-url = "vueLogo_kqsbhe.svg" img-alt='LogotipoVueJS' :title="$t('T1')" :desc="$t('D1')"/>
                <SkillsCell img-url = "gitHubLogo_crvtwk.svg" img-alt='LogotipoGitHub' :title="$t('T2')" :desc="$t('D2')"/>                
                <SkillsCell class="mb-2"  img-url = "nuxtLogo_mp6004.svg" img-alt='LogotipoNuxt' :title="$t('T3')" :desc="$t('D3')"/>               
                <SkillsCell class="mb-2"  img-url = "tailwindLogo_edqrz1.svg" img-alt='LogotipoTailwind' :title="$t('T4')" :desc="$t('D4')"/>               
                <SkillsCell class="mb-2"  img-url = "vuetify-logo_oju7xf.svg" img-alt='LogotipoVuetify' :title="$t('T5')" :desc="$t('D5')"/>              
                <SkillsCell img-url = "bootstrapLogo_sfs69j.png" img-alt='LogotipoBootstrap' :title="$t('T6')" :desc="$t('D6')"/>
            </div>
        </div>
    </div>
</template>

<i18n>
{
  "en":{
    "title":"My Skills",
    "subtitle":"See below the main frameworks, tools and libraries I work with.",
    "T1":"Vue JS",
    "D1":"Vue.js is a versatile and powerful JavaScript framework focused on developing single-page websites and applications.",
    "T2":"GitHub",
    "D2":"GitHub is a code hosting platform with version control, it is one of the main tools that allow teamwork on projects that involve programming.",
    "T3":"Nuxt",
    "D3":"Nuxt is a framework that allows the construction of websites based on Vue JS with several improvements and automations, however it uses a previous version of Vue JS.",
    "T4":"TailwindCSS",
    "D4":"Tailwind CSS is a kind of library that allows the design of website components through the use of HTML classes.",
    "T5":"Vuetify",
    "D5":"Vuetify is a library for Vue JS that contains several 'pre-made' components for building websites.",
    "T6":"Bootstrap",
    "D6":"Like Tailwind CSS, Bootstrap is a library to facilitate the design of website components."
  },
  "pt":{
    "title":"Minhas Skills",
    "subtitle":"Veja abaixo as principais frameworks, ferramentas e bibliotecas com que trabalho.",
    "T1":"Vue JS",
    "D1":"Vue Js é um framework versátil e eficiente em JavaScript focado no desenvolvimento de websites e aplicativos de página única.",
    "T2":"GitHub",
    "D2":"GitHub é uma plataforma de hospedagem de códigos com controle de versão, é uma das principais ferramentas que possibilitam o trabalho em equipe em projetos que envolvem programação.",
    "T3":"Nuxt",
    "D3":"Nuxt é um framework que permite a construção de websites baseados em Vue JS com diversas melhorias e automatizações porém utiliza uma versão anterior do Vue JS.",
    "T4":"TailwindCSS",
    "D4":"Tailwind CSS é uma espécie de biblioteca que permite o design dos componentes de um website através do uso de classes em HTML.",
    "T5":"Vuetify",
    "D5":"Vuetify é uma biblioteca para VueJS que contem diversos componentes 'pré-fabricados' para a construção de websites.",
    "T6":"Bootstrap",
    "D6":"Assim como o Tailwind CSS, Bootstrap é uma biblioteca para facilitar o design dos componentes de um website."
  }
}
</i18n> 

<script>
    export default {
        name: 'SkillsSection',
    }
</script>
