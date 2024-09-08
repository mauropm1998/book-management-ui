<template>
    <AlertMessage v-if="alert" :level="level" :message="message" />
    <div class="w-full flex justify-between">
        <h2 class="font-bold text-xl text-gray-600">Meus Livros</h2>
        <Pagination :book-response="bookResponse" @next="nextPage" @prev="previousPage" @go="gotoPage" />
    </div>
    <div class="flex gap-6 flex-wrap">
        <BookCard :manage="true" v-for="book in bookResponse.content" :key="book.id" :book="book" @edit="onEdit"
            @share="onShare" @archive="onArchive" />
    </div>
</template>

<script setup>
import { BookApi, PageResponseBookResponseDto } from '@/services';
import { onMounted, ref } from 'vue';
import BookCard from './BookCard.vue';
import Pagination from './Pagination.vue';
import AlertMessage from './AlertMessage.vue';


const bookService = new BookApi();
const bookResponse = ref(new PageResponseBookResponseDto());
const page = ref(0);
const size = ref(3);
const alert = ref(false);
const level = ref("");
const message = ref("");

const findAll = () => {
    bookService.getAllByOwner({ size: size.value, page: page.value }, (error, data) => {
        if (!error) {
            bookResponse.value = data;
        }
    });
}

const nextPage = () => {
    page.value++;
    findAll();
}

const previousPage = () => {
    page.value--;
    findAll();
}

const gotoPage = (_page) => {
    page.value = _page;
    findAll();
}


const onEdit = (bookId) => {

}

const onShare = (bookId) => {

}

const onArchive = (bookId) => {

}

onMounted(() => {
    findAll();
})
</script>