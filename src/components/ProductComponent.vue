<template>
  <div class="wrapper">
      <img :src="image" alt="image" class="image">
      <div class="tag">Hodo Foods</div>
      <div class="name">{{ name }}</div>
      <div class="rating">
          Rate: <span>{{ rating }}/5</span> 
      </div>
      <div class="size">{{ size }} <span>grams</span></div>
      <div  class="bottom">
          <div>
              <span class="price">${{ price }}</span>
              <span class="discount">${{ parseFloat(price/(1-(promotionAsPercentage/100))).toFixed(2) }}</span>
          </div>
          <div class="add">
              add <span>+</span>
          </div>
      </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore';

export default{
    name: 'ProductComponent',
    props: ['name', 'rating', 'size', 'image', 'price', 'promotionAsPercentage', 'categoryId', 'instock', 'countSold', 'group'],
    methods: {

    },

    computed: {
      popularProducts() {
        const store = useProductStore();
        return store.products ? store.getPopularProducts: [];
      }
    }
}

</script>

<style scoped>
.wrapper{
    padding: 5px;
    width: 260px;
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px;
    border-radius: 10px;
    border: 0.5px solid rgb(230, 227, 227);
}
.name{
    font: bold;
    font-weight: 500;
    font-size: 18px;
}
.size{
    font: 400;
    font-size: 14px;
    color: grey;
    margin-right: auto;
}
.image{
    width: 90%;
    height: 50%;
    
}
.tag{
    color: grey;
    margin-right: auto;
    font: 400;
    font-size: 14px;
}
.bottom{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.price{
    color: dodgerblue;
    font-size: 18px;
    font-weight: 400
}
.discount{
    margin-left: 3px;
    font-size: 14px;
    text-decoration: line-through;
}
.add{
    background-color: rgba(105, 203, 252, 0.252);
    padding: 2px;
    padding-right: 5px;
    padding-left: 5px;
    color: dodgerblue;
    border-radius: 4px;
    cursor: pointer;
}
.rating{
    margin-right: auto;
    color: rgb(180, 180, 3);
}
</style>