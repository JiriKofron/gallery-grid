<template>
    <section class="view">
        <h2>View</h2>
        <div class="view__wrapper">
            <div>{{currectImageId}}</div>
            <img class="view__image" :src="image.src" />
            <span>
            <button @click="prev">Prev</button><button @click="next">Next</button></span>
        </div>
    </section>
</template>
<script>
export default {
    name: 'View',
    data () {
        return {

        }
    },
    props: {
        image: {
            type: Object,
            default: ()=>{}
        }
    },
    methods: {
        prev () {
            console.log('previous')
            
        },
        next () {
            console.log('next')
        }
    },
    computed: {
        currectImageId () {
            return this.image.id
        }
    }
}
</script>
<style lang="scss" scoped>
    .view {

        &__wrapper {
            height: 90%;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    
</style>