<template>
    <div id="login">
        <img src="../assets/secure-login-amico.svg" alt="secure login" />
        <div class="group-2">
            <h1 class="poppins">Bem-vindo!</h1>
            <p>Faça login para acessar nossa plataforma</p>
            <form @submit="prevent">
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Digite seu email">
                <label for="password">Senha</label>
                <input type="password" name="password" placeholder="Digite sua senha">
                <router-link to="/contacts"><button type="submit">Fazer login</button></router-link>
            </form>
        </div>
    </div>
    <router-view />
</template>

<script>
export default {
    name: 'Login',
    methods: {
        prevent(event) {
            event.preventDefault();
        },
    },
}
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@700&display=swap');

    #login {
        display: flex;
        min-height: 100vh;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        justify-items: center;
    }
    
    .group-2 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        justify-items: center;
    }

    img {
        max-width: 38%;
        height: auto;
    }

    h1 {
        color: #244677;
        font-size: 36px;
        line-height: 110%
    }

    p {
        color: #495057;
        font-weight: 500;
        opacity: 0.64;
        font-size: 18px;
        line-height: 144%;
    }

    label {
        color: #12295B;
        font-weight: bold;
        font-size: 16px;
        line-height: 148%;
        text-align: left;
        width: 100%
    }
    button {
        background-color: #12295B;
        color: #FFFFFF;
        font-size: 16px;
        width: 100%;
        height: 56px;
        border-radius: 8px;
        padding: 16px 24px;
        box-sizing: border-box;
        border-width: 0px;
        font-family: 'Montserrat', sans-serif;
        margin-top: 30px;
        cursor: pointer;
    }
    
    a {
        width: 100%;
    }
    
    input {
        padding: 16px;
        background-color: #F1F3F5;
        width: 100%;
        height: 56%;
        border-radius: 8px;
        box-sizing: border-box;
        border-width: 0px;
    }

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-family: 'Montserrat', sans-serif;
        color: #495057;
        opacity: 64%;
        background-color: #F1F3F5;
        font-size: 16px;
        line-height: 148%;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        font-family: 'Montserrat', sans-serif;
        color: #495057;
    }
    :-ms-input-placeholder { /* IE 10+ */
        font-family: 'Montserrat', sans-serif;
        color: #495057;
    }
    :-moz-placeholder { /* Firefox 18- */
        font-family: 'Montserrat', sans-serif;
        color: #495057;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    @media (max-width: 899px) {

        #login {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        img {
            max-width: 90%;
            height: auto;
        }
        
        p, label, button {
            font-size: small;
        }
        
        h1 {
            font-size: x-large;
        }
        
        form {
            max-width: 90%;    
        }
        
        button {
            height: 40px;
            padding: 10px;
        }

    }

</style>
