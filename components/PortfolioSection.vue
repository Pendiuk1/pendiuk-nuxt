<template>
    <div id='Portfolio' class="relative flex justify-center bg-slate sm:items-center sm:pt-4 sm:px-6 lg:px-8">
            <div class="bg-slate overflow-hidden shadow rounded-lg p-6">
                <h2 class="text-2xl text-gray-200 leading-7 font-semibold mb-6">
                    Meu Portfolio
                </h2>
                <div class="grid gap-x-8 gap-y-4 grid-cols-4">
                    <PortfolioCell/>
                    <PortfolioCell/>
                    <PortfolioCell/>
                    <PortfolioCell/>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PortfolioSection',
}
</script>
