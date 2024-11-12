<template>
    <div class="shopnow-btn" :style="{backgroundColor: color}">
       <span class="txt">{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: ['color', 'title']
}

</script>


<style scoped>
.shopnow-btn{
    width: fit-content;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    transition: transform 0.2s ease-in-out;
}

.shopnow-btn:hover{
    transform: scale(1.1);
}
.shopnow-btn .txt{
    margin-right: 5px;
    color: white;
    font-size: 14px;
    font-weight:900;
}

</style>