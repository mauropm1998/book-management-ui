<template>
    <div class="w-full max-w-sm mt-[8rem] mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="px-6 py-4">
            <div class="flex justify-center mx-auto">
                <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="">
            </div>

            <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Bem-vindo de Volta</h3>
            <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Inicie sessão ou cria uma conta</p>

            <div v-if="errorMsg.length > 0" class="w-full flex my-3">
                <div class="w-full py-2 px-4 rounded-lg flex flex-col bg-red-50 text-red-700 text-sm font-medium">
                    <p v-for="msg in errorMsg" :key="msg">{{ msg }}</p>
                </div>
            </div>

            <form @submit.prevent novalidate>
                <div class="w-full mt-4">
                    <input v-model="authRequest.email"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="email" placeholder="Endereço de Email" aria-label="Endereço de Email" />
                </div>

                <div class="w-full mt-4">
                    <input v-model="authRequest.password"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="password" placeholder="Palavra-passe" aria-label="Palavra-passe" />
                </div>

                <div class="flex items-center justify-between mt-4">
                    <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Esqueceu a
                        palavra-passe?</a>

                    <button @click="login"
                        class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Login
                    </button>
                </div>
            </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span class="text-sm text-gray-600 dark:text-gray-200">Não tem um conta? </span>
            <RouterLink :to="{ name: 'register' }"
                class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Registrar</RouterLink>
        </div>
    </div>
</template>

<script setup>
import { AuthenticationDto, AuthenticationApi } from '@/services';
import { TokenService } from '@/services/token/TokenService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authRequest = ref(new AuthenticationDto(null, null));
const authService = new AuthenticationApi;
const errorMsg = ref([]);
const router = useRouter();
const tokenService = new TokenService();

const login = () => {
    errorMsg.value = [];
    authService.authenticate(authRequest.value, (error, data, response) => {
        if (error) {
            if (response.body.errors) {
                errorMsg.value = response.body.errors;
            }
            else {
                errorMsg.value.push(response.body.error, response.body.message);
            }
        } else {
            // Save the token
            tokenService.token = data.token;
            router.push({ name: "books" });
        }
    })
}

</script>