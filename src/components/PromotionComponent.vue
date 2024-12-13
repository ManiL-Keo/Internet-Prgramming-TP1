<template>
    <div class="wrapper" :style="{backgroundColor: color}">
        <div class="txt">
            <div class="name">{{ title }}</div>
            <ButtonComponent :color="Button.color" :title="Button.title" @click="shopNow"></ButtonComponent>
        </div>
        <div class="img-wrapper">
            <img :src="image" alt="image" class="image">
        </div>
    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
    name: 'PromotionComponent',
    props: ['title', 'color', 'image'],
    components: {
       ButtonComponent
    },
    data() {
        return {
            Button: {
                title: 'Shop now',
                color: '#3BB77E',
            }
        };
    },
    methods: {
        shopNow() {
            alert("Let's shop: " + this.title);
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 30%;
    height: 240px;
    display: flex;
    justify-content: space-around;
    border-radius: 15px;
}

.wrapper:hover{
    border: 1px solid green;
}
.txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
    text-transform: capitalize;
    padding-left: 40px;
}
.img-wrapper {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: end;
    border-radius: 10px;
}
.image {
    width: 100%;
    border-radius: 10px;
}
.name {
    font-weight: bold;
    font-size: 18px;
}
</style>
