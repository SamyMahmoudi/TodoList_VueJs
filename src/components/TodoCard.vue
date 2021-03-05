<template>
    <div id="todoCard">
        <header>
            <span>{{ RecupDate }}</span>
            <h1>{{ titre }}</h1>
            <p>{{ tasks.length }} 
                <span v-if="tasks.length <= 1">Tâche</span> 
                <span v-else>Tâches</span>
            </p>
        </header>
        <new-todo/>
        <todo-list/>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import NewTodo from "./NewTodo.vue"
    import TodoList from "./TodoList.vue"
export default {
    components: {
        NewTodo,
        TodoList
    },
    data() {
        return {
            titre: "VueJs Tutorial Todo List",
        }
    },
    methods: {
    },
    computed: {
        ...mapState(['tasks']),
        RecupDate: function() {
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
