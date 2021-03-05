<template>
    <article class="newTask">
        <input v-model.trim="titleTask" placeholder="Nouvelle tâche ..." type="text">
        <i @click="NewTask" class="fas fa-plus-circle"></i>
    </article>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() { 
        return {
            titleTask: null,
        }
    },
    methods: {
        ...mapActions(["createTask"]),
        NewTask() {
            if(this.titleTask != "") {
                this.createTask(this.titleTask)
                this.titleTask = ""
            }
        }
    }
}
</script>
<style scoped>
    .newTask {
        display: block;
        margin: 20px auto 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input {
        margin-right: 20px;
        border:none;
        border-bottom: solid 2px greenyellow;
        outline: none;
        padding: 8px 24px;   
    }

</style>