<template>
    <div id='Portfolio' class="relative flex flex-col justify-center bg-slate sm:items-center p-6 lg:px-8">
        <h2 class="text-2xl text-gray-200 leading-7 font-semibold mb-6">
            Meu Portfólio
        </h2>
        <div class="grid gap-x-8 gap-y-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            <PortfolioCell/>
            <PortfolioCell/>
            <PortfolioCell/>
            <PortfolioCell/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PortfolioSection',
}
</script>
