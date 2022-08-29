<template>
  <transition name="fade">
    <div v-if="!answered" class="form">
      <form @submit="onSubmit">
        <div class="inputBox">
          <input
            id="username"
            v-model="name"
            type="text"
            required="required"
            placeholder=" "
          />
          <span>{{$t('nome')}}</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input
            id="email"
            v-model="email"
            type="email"
            required="required"
            placeholder=" "
          />
          <span>E-mail</span>
          <i></i>
        </div>
        <div class="inputBox">
          <textarea
            id="msg"
            v-model="msg"
            required="required"
            placeholder=" "
          ></textarea>
          <span>{{$t('msg')}}</span>
          <i></i>
        </div>
        <div class="buttons">
          <input
            type="submit"
            :value="sendMsg"
            class="submitButton"
            @click.prevent="onSubmit()"
          />
          <input
            type="button"
            :value="backMsg"
            class="submitButton"
            @click.prevent="onCancel()"
          />
        </div>
      </form>
      <footer>
        <span
          >{{$t('footer')}}</span
        >
      </footer>
    </div>
    <div v-else class="thank-you">
      <p>{{$t('thanks')}}</p>
    </div>
  </transition>
</template>

<i18n>
{
  "en":{
    "nome":"Name",
    "msg": "Message",
    "footer": "All information provided will be used ONLY by the website author and for the SOLE purpose of replying.",
    "thanks":"Thank You!"
  },
  "pt":{
    "nome":"Nome",
    "msg": "Mensagem",
    "footer": "Todas as informações inseridas serão usadas APENAS pelo autor deste website para o ÚNICO propósito de responder sua mensagem.",
    "thanks":"Obrigado!"
  }
}
</i18n>

<script>
import {collection, addDoc} from 'firebase/firestore'
import { db } from "~/plugins/firebase.js"

export default{
  name:'ContactView',
  data(){
    return{
      name: "",
      email: "",
      msg: "",
      answered: false,
    }
  },
  head(){
    return{
      title: 'Contact'
    }
  },
  computed:{
    sendMsg(){
      return this.$i18n.locale === 'en'? "Send" : "Enviar"
    },
    backMsg(){
      return this.$i18n.locale === 'en'? "Back" : "Voltar"
    }
  },
  methods:{
    async onSubmit(e){
      if (!this.name) {
        alert(this.$i18n.locale === 'en'?"Please, write your name.":"Por favor, escreva seu nome.");
        return;
      } else if (!this.email) {
        alert(this.$i18n.locale === 'en'?"Please, write your e-mail.":"Por favor, escreva seu e-mail.");
        return;
      } else if (!this.msg) {
        alert(this.$i18n.locale === 'en'?"Please, write your message.":"Por favor, escreva sua mensagem.");
        return;
      }
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          Name: this.name,
          Msg: this.msg,
          Email: this.msg,
          Answered: false,
          Read: false,
        });
        console.log("Document written with ID: ", docRef.id);//eslint-disable-line
      } catch (e) {
        console.error("Error adding document: ", e);//eslint-disable-line
      }
      this.name = "";
      this.msg = "";
      this.email = "";
      this.answered = true;
      setTimeout(() => {
        this.$router.push({ path: "/" });
      }, 5000);
    },
    onCancel(e){
      this.$router.push({ path: "/" });
    }
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");

.thank-you {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100vw;
  height: 100vh;
  font-family: "Noto Sans";
  font-size: 3em;
  font-weight: 100;
  background-color: #000;
}

footer {
  color: #fff;
  position: absolute;
  bottom: 10px;
  font-size: 0.7em;
  text-align: center;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background: #000;
}

.inputBox {
  position: relative;
  width: 250px;
  padding-bottom: 30px;
}
.inputBox input {
  width: 100%;
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 1em;
  letter-spacing: 0.1em;
  padding: 10px 0 5px;
}
.inputBox textarea {
  height: 20px;
  width: 100%;
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 1em;
  letter-spacing: 0.1em;
  padding: 3px 0 5px;
  transition: 0.5s;
  resize: none;
  overflow: hidden;
  box-sizing: border-box;
}

.inputBox span {
  position: absolute;
  left: 0;
  padding: 0px 0 5px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  pointer-events: none;
  letter-spacing: 0.1em;
  transition: 0.5s;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: #2196f3;
  transform: translateY(-18px);
  font-size: 0.65em;
}
.inputBox input:invalid:not(:placeholder-shown) ~ span {
  color: #ff1b69;
  transform: translateY(-18px);
  font-size: 0.65em;
}
.inputBox textarea:valid ~ span,
.inputBox textarea:focus ~ span {
  color: #2196f3;
  position: absolute;
  transform: translateY(-18px);
  top: 0;
  font-size: 0.65em;
}

.inputBox textarea:valid,
.inputBox textarea:focus {
  height: 250px;
  background: #111;
  transform: translateY(10px);
  font-size: 1em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 5px;
  overflow: auto;
}

.inputBox input ~ i {
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 30px;
  left: 0;
  background: #fff;
  overflow: hidden;
}

.inputBox textarea ~ i {
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 22px;
  left: 0;
  background: #fff;
  overflow: hidden;
}

.inputBox i::before {
  content: "";
  position: absolute;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ff1b69, #ff0, #2196f3, #9c27b0, #ff1b69);
  animation: animate 2s linear infinite;
  transition: 0.5s;
}

.inputBox input:valid ~ i::before,
.inputBox input:focus ~ i::before {
  left: 0;
}
.inputBox input:invalid:not(:placeholder-shown) ~ i::before {
  background: #ff1b69;
  left: 0;
}
.inputBox textarea:valid ~ i::before,
.inputBox textarea:focus ~ i::before {
  left: 0;
}
.inputBox textarea:invalid:not(:placeholder-shown) ~ i::before {
  background: #ff1b69;
  left: 0;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.submitButton {
  width: 60px;
  height: 30px;
  background: #000;
  color: #aaa;
  font-size: 1em;
  font-weight: 100;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  margin: 0px 10px;
}

@keyframes animate {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 250px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease-in-out;
}
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}

@media only screen and (max-height: 360px) {
  .form {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 360px;
    flex-direction: column;
    background: #000;
    flex-wrap: nowrap;
    overflow-y: auto;
    overflow-x: hidden;
  }
  footer {
    position: initial;
    margin: 20px 20px 5px;
  }
}
</style>
