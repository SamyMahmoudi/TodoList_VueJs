<template>
    <article class="oneTask" v-for="(task, index) in tasks" :key="index">
        <div>
            <input @click="checkTask(index)" type="checkbox" name="" class="inputChecked">
            <p :class="{checked:task.statut}">{{ task.name }}</p>
        </div>
        <i @click="removeTask(index)" class="fas fa-trash"></i>
    </article>
    <button @click="removeAllTasks()">Tout supprimer</button>
    <button @click="removeAllTasksDone()">Supprimer les tâches faite</button>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['removeTask', 'checkTask', 'removeAllTasks', 'removeAllTasksDone'])
    },
    computed: {
        ...mapState(['tasks'])
    }
}
</script>
<style scoped>
    .oneTask {
        margin-top: 10px;
        padding: 0px 20px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .oneTask div {
        display: flex;
    }
    .oneTask div p {
        margin-left: 20px;
    }
    .checked {
        text-decoration: line-through;
    }
    .inputChecked {
        height: 25px;
        width: 25px;
        border: solid black 1px;
        border-radius: 50px;
    }
</style>