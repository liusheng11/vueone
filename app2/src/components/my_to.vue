<template>
    <div class="my">
        <userindex v-show="!my_to"></userindex>
        <userlogin v-show="my_to"></userlogin>
    </div>
</template>


<script>
    import userindex from './user_index.vue';
    import userlogin from './user_login.vue';
    import {mapGetters} from 'vuex';

    export default {
       components: {
           userindex,userlogin
       },
		computed:mapGetters([
    'my_to'
  ])
    }
</script>
