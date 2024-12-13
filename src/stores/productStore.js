import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: []
  }),
  
  getters: {
    getCategoriesByGroup: (state) => {
      return (groupName) =>
        state.categories.filter((category) => category.group === groupName);
    },
    getProductsByGroup: (state) => {
      return (groupName) =>
        state.products.filter((product) => product.group === groupName);
    },
    getProductsByCategory: (state) => {
      return (categoryId) =>
        state.products.filter((product) => product.categoryId === categoryId);
    },
    getPopularProducts: (state) => {
      return state.products.filter((product) => product.countSold > 10);
    },
  },

  actions: {
    async fetchCategories() {
      try {
        const {data} = await axios.get('http://localhost:3000/api/categories');
        this.categories = data;
        console.log('Categories fetched: ', data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    
    async fetchPromotions() {
      try {
        const {data} = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = data;
        console.log('Promotions fetched: ', data);
      } catch (error) {
        console.error('Error fetching promotions:', error);
      }
    },

    async fetchGroups() {
      try {
        const {data} = await axios.get('http://localhost:3000/api/groups');
        this.groups = data;
        console.log('Groups fetched: ', data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    },

    async fetchProducts() {
      try {
        const {data} = await axios.get('http://localhost:3000/api/products');
        this.products = data;
        console.log('Products fetched: ', data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },

    
  }
});
