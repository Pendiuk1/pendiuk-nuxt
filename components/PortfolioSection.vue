<template>
    <div id='Portfolio' class="relative flex justify-center bg-slate sm:items-center sm:pt-0 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto border-box bg-gradient-to-b from-gray-800 via-green-300 to-gray-800 p-1 rounded-lg">
            <div class="bg-gray-100 overflow-hidden shadow rounded-lg p-6">
                <h2 class="text-2xl leading-7 font-semibold mb-4">
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
    </div>
</template>

<script>
export default {
  name: 'PortfolioSection',
}
</script>
