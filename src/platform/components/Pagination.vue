<template>
    <div class="flex">
        <button @click="$emit('prev')" :disabled="bookResponse.first"
            :class="{ 'cursor-not-allowed hover:!bg-white hover:!text-gray-700 opacity-50': bookResponse.first }"
            class="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 capitalize border border-gray-100 bg-white rounded-md rtl:-scale-x-100 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
            </svg>
        </button>

        <button v-for="(page, index) in bookResponse.totalPages" :key="index" @click="$emit('go', index)"
            :class="{ '!bg-blue-500 !text-white': bookResponse.number === index }"
            class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors border border-gray-100 duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            {{ page }}
        </button>

        <button @click="$emit('next')" :disabled="bookResponse.last"
            :class="{ 'cursor-not-allowed hover:!bg-white hover:!text-gray-700 opacity-50': bookResponse.last }"
            class="flex items-center justify-center border border-gray-100 px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { PageResponseBookResponseDto } from '@/services';

defineEmits(["next", "prev", "go"]);
defineProps({
    bookResponse: PageResponseBookResponseDto,
    page: Number
});


</script>