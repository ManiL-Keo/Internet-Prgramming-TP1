<template>

  <div class="category">
    <template v-for="category in categories">
      <CategoryComponent :name="category.name" :amount="category.amount" :color="category.color" :image="category.image" ></CategoryComponent>
    </template>
  </div>
  <div class="promotion">
    <template v-for="promotion in Promotions">
      <PromotionComponent :title="promotion.title" :color="promotion.color" :image="promotion.image"></PromotionComponent>
    </template>
  </div>
  
  
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue';
import CategoryComponent from './components/CategoryComponent.vue';
import PromotionComponent from './components/PromotionComponent.vue';
export default{
  name: 'App',
  components:{
    ButtonComponent,
    CategoryComponent,
    PromotionComponent
  },
  data() {
    return {
      categories: [
          {name: "Cake & Milk", amount: 12, color: '#F2FCE4', image: 'src/assets/image/cake_milk_1.png'},
          {name: "Peach", amount: 17, color: '#FFFCEB', image: 'src/assets/image/peach.png'},
          {name: "Oganic Kiwi", amount: 21, color: '#ECFFEC', image: 'src/assets/image/kiwi.png'},
          {name: "Red Apple", amount: 68, color: '#FEEFEA', image: 'src/assets/image/apple.png'},
          {name: "Snack", amount: 34, color: '#FFF3EB', image: 'src/assets/image/snack.png'},
          {name: "Black plum", amount: 25, color: '#FFF3FF', image: 'src/assets/image/plum.png'},
          {name: "Vegetables", amount: 65, color: '#F2FCE4', image: 'src/assets/image/veget.png'},
          {name: "Headphone", amount: 33, color: '#FFFCEB', image: 'src/assets/image/headphone.png'},
          {name: "Cake & Milk", amount: 54, color: '#F2FCE4', image: 'src/assets/image/cake_milk_2.png'},
          {name: "Orange", amount: 63, color: '#FFF3FF', image: 'src/assets/image/orange.png'},
        ],
      promotions: [
        {title: 'Everyday Fresh & Clean with Our Products', color: '#F0E8D5', image: 'src/assets/image/promote_1.jpg' },
        {title: 'Make Your Breakfast Healthy and Easy', color: '#F3E8E8', image: 'src/assets/image/promote_2.png' },
        {title: 'The Best Oganic Products Online', color: '#E7EAF3', image: 'src/assets/image/promote_3.jpg' }
        ],
    }
}
}
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}

.category{
  padding-top: 20px;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
}
.promotion{
  padding-top: 40px;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
}
</style>