<script>
  // import task, task form, and task collection components
  import { TasksCollection } from '../api/TasksCollection';
  import Task from './Task.svelte';
  import TaskForm from './TaskForm.svelte';

  // set hide completed to false
  let hideCompleted = false;

  // variable to check if hide completed filter is true or false
  const hideCompletedFilter = { isChecked: { $ne: true } };

  // track number of tasks that are incomplete
  let incompleteCount;
  let pendingTasksTitle = '';
  let tasks = [];

  $m: {
    // get tasks from collection
    tasks = TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, {
      sort: { createdAt: -1 },
    }).fetch();

    // get number of incomplete tasks
    incompleteCount = TasksCollection.find(hideCompletedFilter).count();

    // set pending tasks title to number of incomplete tasks
    pendingTasksTitle = `${incompleteCount ? ` (${incompleteCount})` : ''}`;
  }

  // set hide completed to true or false
  const setHideCompleted = (value) => {
    hideCompleted = value;
  };
</script>

<div class="app">
  <header>
    <div class="app-bar">
      <div class="app-header">
        <!-- Make To Do List Title Dynamic -->
        <h1>📝️ To Do List {pendingTasksTitle}</h1>
      </div>
    </div>
  </header>

  <div class="main">
    <TaskForm />
    <div class="filter">
      <!-- render show compelted button -->
      <button on:click={() => setHideCompleted(!hideCompleted)}>
        {hideCompleted ? 'Show All' : 'Hide Completed'}
      </button>
    </div>
    <ul class="tasks">
      <!-- render tasks -->
      {#each tasks as task (task._id)}
        <Task task={task} />
      {/each}
    </ul>
  </div>
</div>