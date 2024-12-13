<template>
  <div class="menu">
    <MenuComponent :title="title.name1" :groups="groups"></MenuComponent>
  </div>
  <div class="category">
    <CategoryComponent
      v-for="category in categories"
      :key="category.name"
      :name="category.name"
      :amount="category.amount"
      :color="category.color"
      :image="category.image"
    >
    </CategoryComponent>
  </div>
  <div class="promotion">
    <PromotionComponent
      v-for="promotion in promotions"
      :key="promotion.title"
      :title="promotion.title"
      :color="promotion.color"
      :image="promotion.image"
    >
    </PromotionComponent>
  </div>
  <div class="menu">
    <MenuComponent :title="title.name2" :groups="groups"></MenuComponent>
  </div>
  <div class="product">
    <template v-for="product in products">
      <ProductComponent
        :name="product.name"
        :rating="product.rating"
        :size="product.size"
        :price="product.price"
        :promotionAsPercentage="product.promotionAsPercentage"
        :categoryId="product.categoryId"
        :instock="product.instock"
        :countSold="product.countSold"
        :group="product.group"
        :image="product.image"
      >
      </ProductComponent>
    </template>
  </div>
</template>

<script>
import ButtonComponent from "./components/ButtonComponent.vue";
import CategoryComponent from "./components/CategoryComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";
import PromotionComponent from "./components/PromotionComponent.vue";
import ProductComponent from "./components/ProductComponent.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    ButtonComponent,
    CategoryComponent,
    PromotionComponent,
    ProductComponent,
    MenuComponent,
  },
  data() {
    return {
      categories: [
        // {name: "Cake & Milk", amount: 12, color: '#F2FCE4', image: 'src/assets/image/cake_milk_1.png'},
        // {name: "Peach", amount: 17, color: '#FFFCEB', image: 'src/assets/image/peach.png'},
        // {name: "Oganic Kiwi", amount: 21, color: '#ECFFEC', image: 'src/assets/image/kiwi.png'},
        // {name: "Red Apple", amount: 68, color: '#FEEFEA', image: 'src/assets/image/apple.png'},
        // {name: "Snack", amount: 34, color: '#FFF3EB', image: 'src/assets/image/snack.png'},
        // {name: "Black plum", amount: 25, color: '#FFF3FF', image: 'src/assets/image/plum.png'},
        // {name: "Vegetables", amount: 65, color: '#F2FCE4', image: 'src/assets/image/veget.png'},
        // {name: "Headphone", amount: 33, color: '#FFFCEB', image: 'src/assets/image/headphone.png'},
        // {name: "Cake & Milk", amount: 54, color: '#F2FCE4', image: 'src/assets/image/cake_milk_2.png'},
        // {name: "Orange", amount: 63, color: '#FFF3FF', image: 'src/assets/image/orange.png'},
      ],
      promotions: [
        // {title: 'Everyday Fresh & Clean with Our Products', color: '#F0E8D5', image: 'src/assets/image/promote_1.jpg'},
        // {title: 'Make Your Breakfast Healthy and Easy', color: '#F3E8E8', image: 'src/assets/image/promote_2.png'},
        // {title: 'The Best Oganic Products Online', color: '#E7EAF3', image: 'src/assets/image/promote_3.jpg'},
      ],

      groups: [],

      products: [],

      title: {
        name1: "Featured Categories",
        name2: "Popular Products",
      },
      API_BASE_URL: "http://localhost:3000",
    };
  },
  methods: {
    fetchCategory() {
      axios
        .get(this.API_BASE_URL + "/api/categories")
        .then((response) => {
          console.log(response.data);
          this.categories = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    },
    fetchPromotion() {
      axios
        .get(this.API_BASE_URL + "/api/promotions")
        .then((response) => {
          console.log(response.data);
          this.promotions = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    },
    fetchGroups() {
      axios
        .get(this.API_BASE_URL + "/api/groups")
        .then((response) => {
          console.log(response.data);
          this.groups = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    fetchProducts() {
      axios
        .get(this.API_BASE_URL + "/api/products")
        .then((response) => {
          console.log(response.data);
          this.products = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    getImageUrl(imageString) {
      try {
        const images = JSON.parse(imageString);
        return images.length
          ? `${this.API_BASE_URL}/${images[0].replace(/\\\\/g, "/")}`
          : null;
      } catch (e) {
        console.error("Failed to parse image string:", imageString);
        return null;
      }
    },
  },
  mounted() {
    this.fetchCategory();
    this.fetchPromotion();
    this.fetchGroups();
    this.fetchProducts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
}

.category {
  padding-top: 20px;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
}

.category:hover {
  cursor: pointer;
}
.promotion {
  padding-top: 40px;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
}

.menu {
  margin: 10px;
  width: 100vw;
}

.product {
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}
</style>
