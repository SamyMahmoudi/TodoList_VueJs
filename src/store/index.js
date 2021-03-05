import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    /**
    * Mutation to REMOVE a task
    */
    REMOVE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
    /**
    * Mutation to CHECK a task
    */
    CHECK_TASK(state, index) {
      state.tasks[index].statut = !state.tasks[index].statut;
    },
    /**
    * Mutation to CREATE a new task
    */
    CREATE_TASK(state, task) {
      state.tasks.push(task);
    },
    /**
    * Mutation to REMOVE all tasks
    */
    REMOVE_ALL_TASKS(state) {
      state.tasks = [];
    },
    /**
    * Mutation to REMOVE all tasks done
    */
    REMOVE_ALL_TASKS_DONE(state) {
      state.tasks = state.tasks.filter((task) => task.statut === false);
    },
  },
  actions: {
    /**
    * Action to REMOVE a task
    */
    removeTask(context, index) {
      context.commit('REMOVE_TASK', index);
    },
    /**
    * Action to CHECK a task
    */
    checkTask(context, index) {
      context.commit('CHECK_TASK', index);
    },
    /**
    * Action to CREATE a new task
    */
    createTask(context, task) {
      if (task != "") {
        let newTask = { name: task, statut: false };
        context.commit('CREATE_TASK', newTask);
      }
    },
    /**
    * Action to REMOVE all tasks
    */
    removeAllTasks(context) {
      context.commit('REMOVE_ALL_TASKS');
    },
    /**
    * Action to REMOVE all tasks done
    */
    removeAllTasksDone(context) {
      context.commit('REMOVE_ALL_TASKS_DONE');
    },
  },
})