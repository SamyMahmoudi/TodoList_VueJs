<template>
    <article class="oneTask" v-for="(task, index) in tasks" :key="index">
        <div>
            <input @click="checkTask(index)" type="checkbox" name="" class="inputChecked">
            <p :class="{checked:task.statut}">{{ task.name }}</p>
        </div>
        <i  @click="removeTask(index)" class="fas fa-trash trash" ></i>
    </article>
    <article v-if="tasks.length >= 1" class="btn">
        <button  class="removeAll" @click="removeAllTasks()">Tout supprimer</button>
        <button class="removeTaskDone" @click="removeAllTasksDone()">Supprimer les tâches effectuées</button>
    </article>
</template>
<script>
    /**
    * Import state tasks[] && actions from the store
    */
    import { mapState, mapActions } from 'vuex'
    export default {
        methods: {
            /**
             * Actions 'removeTask', 'checkTask', 'removeAllTasks', 'removeAllTasksDone'
             */
            ...mapActions(['removeTask', 'checkTask', 'removeAllTasks', 'removeAllTasksDone'])
        },
        computed: {
            /**
             * State tasks[]
             */
            ...mapState(['tasks'])
        }
    }
</script>
<style scoped>
    .oneTask {
        margin-top: 10px;
        padding: 10px 20px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .oneTask:nth-child(odd){
        background: rgb(247, 247, 247);
    }

    .oneTask:nth-child(even){
        background: rgb(217, 255, 247);
    }
    .trash {
        color: red;
        cursor: pointer;
    }
    .fas { 
        transform: scale(2,2); 
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
    .removeAll {
        background: red;
        color: white;
        padding: 8px 12px;
        border: solid red 2px;
        cursor: pointer;
        margin-right: 20px;
    }
    .removeTaskDone {
        background: rgb(255, 179, 39);
        color: white;
        padding: 8px 12px;
        border: solid rgb(255, 179, 39) 2px;
        cursor: pointer;
        margin-left: 20px;
    }
    .removeTaskDone:hover {
        color: rgb(255, 179, 39);
        background: white;
        border: solid rgb(255, 179, 39) 2px;
    }
    .removeAll:hover {
        color: red;
        background: white;
        border: solid red 2px;
    }
    .btn {
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }

</style>