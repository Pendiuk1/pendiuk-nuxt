<template>
  <div id='Hero' class="relative lg:min-h-screen bg-slate bg-hero bg-blend-saturation bg-no-repeat bg-center bg-cover lg:bg-contain">
    <div class="flex flex-col lg:flex-row lg:min-h-screen items-top justify-center bg-gradient-to-b from-slate via-transparent lg:from-transparent to-slate items-center py-4 sm:py-6  lg:px-8">   
        <div class="w-11/12 sm:w-3/4 lg:w-1/2  my-20 md:my-32 lg:my-0 lg:mx-4 text-center sm:text-left">
            <h1 class="font-light text-transparent text-5xl sm:text-7xl bg-clip-text bg-gradient-to-r from-gray-300 via-blue-400 to-gray-300">
                Desenvolvedor Web
            </h1>
            <p class="text-2xl font-normal text-gray-400 mb-8">
                Seu website <span class="text-gray-200">rápido</span>, <span class="text-gray-200">atraente</span> e <span class="text-gray-200">moderno</span>, desenvolvido por Guilherme Pendiuk.
            </p>
            <NuxtLink class="p-2 text-gray-300 bg-blue-600 bg-opacity-70 text-lg rounded-xl hover:bg-opacity-50 border-2 border-blue-600 hover:border-green-400" to="/ContactView">Fale Comigo!</NuxtLink>
        </div>

        
        <div class="shadow-mine transform rotate-6 border-box bg-gradient-to-r from-gray-900 via-green-300 to-gray-900 p-0.5 rounded-2xl w-3/4 sm:w-1/2 mb-16 lg:mb-0 lg:mx-4">
            <div class="bg-gray-900 rounded-2xl p-4">
                <p><span class="text-red-400">&lt;</span><span class="text-purple-400">template</span><span class="text-red-400">&gt;</span></p>
                    <p class="border-l border-gray-400 border-opacity-50 pl-4"><span class="text-red-400">&lt;</span><span class="text-purple-400">div id</span><span class="text-red-400">=</span><span class="text-green-400">'Hero' </span><span class="text-purple-400">class</span><span class="text-red-400">=</span><span class="text-green-400">'relative flex items-top'</span><span class="text-red-400">&gt;</span></p>
                    <div class="border-l border-gray-400 border-opacity-50 pl-4">
                        <p class="border-l border-gray-400 border-opacity-50 pl-4"><span class="text-red-400">&lt;</span><span class="text-purple-400">div class</span><span class="text-red-400">=</span><span class="text-green-400">'font-light text-transparent'</span><span class="text-red-400">&gt;</span></p>
                        <div class="border-l border-gray-400 border-opacity-50 pl-4">
                            <p class="border-l border-gray-400 border-opacity-50 pl-4"><span class="text-red-400">&lt;</span><span class="text-purple-400">h1</span><span class="text-red-400">&gt;</span></p>
                                <p class="border-l border-gray-400 border-opacity-50 pl-4 text-gray-300"><span class="border-l border-gray-400 border-opacity-50 pl-4"></span>Make it beautiful!!!</p>
                            <p class="border-l border-gray-400 border-opacity-50 pl-4"><span class="text-red-400">&lt;/</span><span class="text-purple-400">h1</span><span class="text-red-400">&gt;</span></p>
                        </div>
                        <p class="border-l border-gray-400 border-opacity-50 pl-4"><span class="text-red-400">&lt;/</span><span class="text-purple-400">div</span><span class="text-red-400">&gt;</span></p> 
                    </div>
                    <p class="border-l border-gray-400 border-opacity-50 pl-4"><span class="text-red-400">&lt;/</span><span class="text-purple-400">div</span><span class="text-red-400">&gt;</span></p>
                <p><span class="text-red-400">&lt;/</span><span class="text-purple-400">template</span><span class="text-red-400">&gt;</span></p>           
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'HeroSection',
    }
</script>