<template>
    <div id="todoCard">
        <header>
            <span>{{ DateOfTheDay }}</span>
            <h1>{{ title }}</h1>
            <p>{{ tasks.length }} 
                <span v-if="tasks.length <= 1">Tâche</span> 
                <span v-else>Tâches</span>
            </p>
        </header>
        <new-todo @sendTask="addTask"/>
        <todo-list @check="checkTask" @remover="removerTask" :tasks="tasks" @removeAllTasks="removerAllTasks" @removeAllTasksDone="removerAllTasksDone"/>
    </div>
</template>
<script>
    /**
    * Import components NewTodo & TodoList
    */
    import NewTodo from "./NewTodo.vue"
    import TodoList from "./TodoList.vue"
    export default {
        /**
        * Components' key for NewTodo & TodoList
        */
        components: {
            NewTodo,
            TodoList
        },
        data() {
            return {
                title: "VueJs Tutorial Todo List",
                tasks: []
            }
        },
        methods: {
            /**
            * Method to ADD a new Task
            */
            addTask(task) {
                let newTask = { name: task, statut: false };
                this.tasks.push(newTask)
            },
            /**
            * Method to CHECK a Task
            */
            checkTask(index) {
                this.tasks[index].statut = !this.tasks[index].statut;
            },
            /**
            * Method to REMOVE a Task
            */
            removerTask(task) {
                this.tasks.splice(task, 1);
            },
            /**
            * Method to REMOVE all Tasks
            */
            removerAllTasks(){
                this.tasks = []
            },
            /**
            * Method to REMOVE all Tasks done
            */
            removerAllTasksDone(){
                this.tasks = this.tasks.filter((task) => task.statut === false);
            }
        },
        computed: {
            /**
             * GET the date of the day
             */
            DateOfTheDay: function() {
                let dateOfDay = new Date();
                let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
                let month = months[dateOfDay.getMonth()];
                let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ];
                let day = days[dateOfDay.getDay()];
                let number = dateOfDay.getDate();
                return day + " " + number +" "+ month; 
            }
        }
    }
</script>
<style scoped>
    #todoCard {
        width: 60%;
        background: white;
        min-height: 50vh;
        margin: 20px auto 60px;
        border-radius: 20px;
        padding: 0px 0px 60px;
        box-shadow: 0px 5px 10px 0px rgb(105, 107, 0);
    }

    #app header {
        padding: 0px 20px;
        height: 7vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 20px 20px 0px 0px;
        box-shadow: 0px 3px 1px 0px rgb(236, 236, 236);
    }

    #app h1 {
        color:rgb(0, 221, 192);
        font-weight: bold;
    }
</style>
