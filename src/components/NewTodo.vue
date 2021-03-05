<template>
    <article class="newTask">
        <input v-model.trim="titleTask" placeholder="Nouvelle tâche ..." type="text">
        <i @click="NewTask" class="fas fa-plus-circle"></i>
    </article>
</template>

<script>

export default {
    data() { 
        return {
            titleTask: "",
        }
    },
    methods: {
        /**
         * Method to send a personalized event if the input is not empty : ADD a new TASK
         */
        NewTask() {
            if(this.titleTask != "") {
                this.$emit('sendTask', this.titleTask)
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
        border-bottom: solid 2px rgb(0, 221, 192);
        outline: none;
        padding: 8px 24px;   
    }
    .fas {
        transform: scale(2,2);
        color: rgb(0, 185, 93);
        cursor: pointer;
    }

</style>