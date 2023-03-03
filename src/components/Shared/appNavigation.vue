<template>
    <nav class="border-b border-gray-300">
        <ul class="flex space-x-4 py-1 lg:py-2 justify-center">
            <li>
                <router-link to='/' class="pb-1 lg:pb-2 hover:text-primary transition-all text-sm lg:text-base" active-class="text-primary border-b-2 border-primary">
		            Son Depremler
	            </router-link>
            </li>
            <li>
                <router-link to='/map' class="pb-1 lg:pb-2 hover:text-primary transition-all text-sm lg:text-base" active-class="text-primary border-b-2 border-primary">
		            Deprem Haritası
	            </router-link>
            </li>
        </ul>
    </nav>
</template>