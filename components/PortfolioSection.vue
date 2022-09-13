<template>
    <div id='Portfolio' class="relative flex flex-col justify-center bg-slate sm:items-center p-6 lg:px-8">
        <h2 class="text-2xl text-gray-200 leading-7 font-semibold mb-6">
            {{$t('title')}}
        </h2>
        <div class="grid gap-x-8 gap-y-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            <PortfolioCell :img-url="require(`~/assets/MeuSite.png`)" :img-alt="$t('a1')" :title="$t('p1')" :desc="$t('d1')"/>
            <PortfolioCell/>
            <PortfolioCell/>
            <PortfolioCell/>
        </div>
    </div>
</template>

<i18n>
{
  "en":{
    "title":"My Portfolio",
    "p1": "This Website",
    "a1": "A printscreen of this website",
    "d1": {
      "text":"This website was developed using one of the TailwindCSS's templates as an inspiration. It has the objective of presenting my portfolio and to give possible new clients a way to contact me.",
      "list":{
        "0":"Vue.js",
        "1":"Nuxt",
        "2":"TailwindCSS",
        "3":"Bootstrap",
        "4":"Firebase",
        "5":"i18n"
      }
    }
  },
  "pt":{
    "title":"Meu Portfólio",
    "p1": "Este Website",
    "a1": "Uma printscreen deste website",
    "d1": {
      "text":"Este site foi desenvolvido usando um dos templates do TailwindCSS como inspiração. Tem o objetivo de apresentar meu portfólio e dar a possíveis novos clientes uma forma de entrar em contato comigo.",
      "list":{
        "0":"Vue.js",
        "1":"Nuxt",
        "2":"TailwindCSS",
        "3":"Bootstrap",
        "4":"Firebase",
        "5":"i18n"
      }
    }
  }
}
</i18n> 

<script>
export default {
  name: 'PortfolioSection',
}
</script>
