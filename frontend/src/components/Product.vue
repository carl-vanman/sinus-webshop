<template>
<!-- leta upp require -->
    <div class="product">
        <img :src="require(`../assets/${product.imgFile}`)" alt="..." width="100" />
        <h2>{{product.title}}</h2>
        <p>{{product.shortDesc}}</p>
        <p>{{product.price}}</p>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    }

}
</script>

<style scoped lang="scss">

</style>