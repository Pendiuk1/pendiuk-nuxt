<template>
    <div id='Skills' class="relative flex justify-center bg-slate sm:items-center sm:pt-0 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto border-box bg-gradient-to-b from-gray-800 via-green-300 to-gray-800 p-1 rounded-lg">
            <div class="bg-gray-100 overflow-hidden shadow rounded-lg p-6">
                <h2 class="text-2xl leading-7 font-semibold">
                    Minhas Skills
                </h2>
                <p class="mt-3 text-gray-600">
                Veja abaixo as principais frameworks, ferramentas e bibliotecas com que trabalho.
                <br />
                </p>
                <SkillsCell class="mb-2" img-url = "vueLogo.svg" img-alt='LogotipoVueJS' title='Vue JS' desc='Vue.js é um framework versátil e eficiente em JavaScript focado no desenvolvimento de websites e aplicativos de página única.'/>
                <SkillsCell img-url = "gitHubLogo.svg" img-alt='LogotipoGitHub' title='GitHub' desc='GitHub é uma plataforma de hospedagem de códigos com controle de versão, é uma das principais ferramentas que possibilitam o trabalho em equipe em projetos que envolvem programação.'/>                
                <SkillsCell class="mb-2"  img-url = "nuxtLogo.svg" img-alt='LogotipoNuxt' title='Nuxt' desc='Nuxt é um framework que permite a construção de websites baseados em VueJS com diversas melhorias e automatizações porém utiliza uma versão anterior de VueJS.'/>               
                <SkillsCell class="mb-2"  img-url = "tailwindLogo.svg" img-alt='LogotipoTailwind' title='TailwindCSS' desc='Tailwind CSS é uma espécie de biblioteca que permite o design dos componentes de um website através do uso de classes em HTML.'/>               
                <SkillsCell class="mb-2"  img-url = "vuetify-logo.svg" img-alt='LogotipoVuetify' title='Vuetify' desc='Vuetify é uma biblioteca para VueJS que contem diversos componentes "pré-fabricados" para a construção de websites.'/>              
                <SkillsCell img-url = "bootstrapLogo.png" img-alt='LogotipoBootstrap' title='Bootstrap' desc='Assim como o Tailwind CSS, Bootstrap é uma biblioteca para facilitar o design dos componentes de um website.'/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkillsSection',
    }
</script>
