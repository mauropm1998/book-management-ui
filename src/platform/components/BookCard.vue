<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img class="w-full h-48 object-cover" src="/2.webp" alt="Capa do livro">
        <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2 text-gray-900">{{ book.title }}</h2>
            <p class="text-gray-700 text-base">Autor: <span class="font-semibold">{{ book.authorName }}</span></p>
            <p class="text-gray-700 text-base">ISBN: <span class="font-semibold">{{ book.isbn }}</span></p>
            <p class="text-gray-700 text-base">Proprietário: <span class="font-semibold">{{ book.owner
                    }}</span></p>
            <hr class="my-3 ">
            <p class="text-gray-600 text-sm">{{ book.synopsis }}</p>
        </div>
        <div class="flex gap-2 flex-wrap px-6 py-4 border-t border-gray-100">
            <button v-if="!manage"
                class="bg-blue-500 hover:bg-blue-700 text-sm text-white font-medium py-2 px-4 rounded">
                Detalhes
            </button>
            <button v-if="!manage" @click="$emit('borrow', book.id)"
                class="bg-green-500 hover:bg-green-700 text-sm text-white font-medium py-2 px-4 rounded">
                Pedir Emprestado
            </button>
            <button v-if="manage" @click="$emit('edit', book.id)"
                class="bg-green-500 hover:bg-green-700 text-sm text-white font-medium py-2 px-4 rounded">
                Editar
            </button>
            <button v-if="manage" @click="$emit('share', book.id)"
                class="bg-yellow-400 hover:bg-yellow-500 text-sm text-white font-medium py-2 px-4 rounded">
                Partilhar
            </button>
            <button v-if="manage" @click="$emit('archive', book.id)"
                class="bg-gray-500 hover:bg-gray-700 text-sm text-white font-medium py-2 px-4 rounded">
                Arquivar
            </button>
        </div>
    </div>
</template>

<script setup>

defineEmits(["borrow", "details", "share", "archive", "edit"])
defineProps({
    book: Object,
    manage: {
        type: Boolean,
        default: false
    }
});

</script>