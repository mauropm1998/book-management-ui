<template>
    <div v-if="!activationSuccess && !activationFailed" class="max-w-[400px] mx-auto mt-20 text-center">
        <div class="flex flex-col gap-1 my-4">
            <h2 class="font-bold text-2xl text-gray-800">Ativação de Conta</h2>
            <p class="text-gray-400">Digite ou cole abaixo o seu código de ativação</p>
        </div>
        <form @submit.prevent>
            <div class="w-full flex justify-between">
                <input :disabled="isActivating" :class="{ '!bg-gray-100 cursor-not-allowed': isActivating }"
                    class="w-14 h-14 font-medium focus:outline-none focus:ring focus:ring-blue-200 text-2xl text-center text-gray-600 border rounded-lg border-gray-200"
                    v-for="(value, index) in code" :key="index" type="text" maxlength="1" v-model="code[index]"
                    @input="onInput($event, index)" @paste="onPaste($event)" ref="inputs" />
            </div>
        </form>
        <div v-show="isActivating" class="w-full flex flex-col gap-2 justify-center items-center mt-8">
            <svg class="w-12 h-12 text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
                    class="text-gray-900">
                </path>
            </svg>
            <p class="font-medium text-gray-600">Activando...</p>
        </div>
    </div>
    <div v-if="activationSuccess" class="max-w-[400px] mx-auto mt-20 text-center">
        <div class="flex flex-col items-center gap-3 my-4">
            <div class="flex justify-center items-center rounded-full bg-emerald-600 w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="bi bi-check-circle-fill fill-white w-8 h-8"
                    viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
            </div>
            <h2 class="font-bold text-2xl text-gray-800">Ativação bem sucedida!</h2>
            <p class="text-gray-400">A sua conta foi ativada com sucesso. Agora podes prosseguir fazendo login.</p>
            <RouterLink class="hover:underline text-blue-700" :to="{ name: 'login' }">Ir para a página de login
            </RouterLink>
        </div>
    </div>
    <div v-if="activationFailed" class="max-w-[500px] mx-auto mt-20 text-center">
        <div class="flex flex-col items-center gap-3 my-4">
            <div class="flex justify-center items-center rounded-full w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-ban w-12 h-12 fill-red-700"
                    viewBox="0 0 16 16">
                    <path
                        d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                </svg>
            </div>
            <h2 class="font-bold text-2xl text-gray-800">Falha na ativação!</h2>
            <p class="text-gray-400">{{ errorMsg }}</p>
            <a @click.prevent="tryAgain" href="" class="hover:underline text-blue-700" :to="{ name: 'Login' }">Tentar
                novamente</a>
        </div>
    </div>
</template>

<script setup>
import { AuthenticationApi } from '@/services';
import { ref } from 'vue';

const code = ref(Array(6).fill(''));
const inputs = ref(null);
const authService = new AuthenticationApi();
const isActivating = ref(false);
const activationSuccess = ref(false);
const activationFailed = ref(false);
const errorMsg = ref(null);

const checkAllInputsFilled = () => {
    if (code.value.every(char => char !== '')) {
        inputs.value[code.value.length - 1].blur();
        const activationCode = code.value.join('');

        // Exibir o circular spinner e chamar o serviço de ativação de conta
        isActivating.value = true;

        authService.activateAccount(activationCode, (error, data, response) => {
            if (error) {
                errorMsg.value = response.body.message;
                activationFailed.value = true;
                activationSuccess.value = false;
            }
            else {
                activationSuccess.value = true;
                activationFailed.value = false;
            }

            isActivating.value = false;
        });
    }
};

const onInput = (event, index) => {
    const input = event.target;
    const nextInput = index < code.value.length - 1 ? index + 1 : null;

    if (nextInput !== null && input.value.length > 0) {
        // Move to the next input
        const nextElement = input.nextElementSibling;
        nextElement?.focus();
    } else if (index === code.value.length - 1 && input.value.length > 0) {
        // Last input is filled, remove focus
        input.blur();
        checkAllInputsFilled();
    }

    if (input.value.length === 0 && event.inputType === 'deleteContentBackward') {
        // Move to the previous input if the user is deleting content
        const previousElement = input.previousElementSibling;
        previousElement?.focus();
    }
};

const onPaste = (event) => {
    const pasteData = event.clipboardData.getData('text');
    if (pasteData.length === code.value.length) {
        code.value = pasteData.split('');
        // Move focus to the last input
        setTimeout(() => {
            event.target.form.elements[code.value.length - 1].focus();
            checkAllInputsFilled();
        }, 0);
    }
};

const tryAgain = () => {
    activationFailed.value = false;
    activationSuccess.value = false;
    isActivating.value = false;
    code.value.fill('');
}

</script>
