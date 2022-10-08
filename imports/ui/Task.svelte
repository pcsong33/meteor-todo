<script>
    import { TasksCollection } from '../api/TasksCollection';
  
    export let task;
  
    const toggleChecked = () => {
      // Set the checked property to the opposite of its current value
      TasksCollection.update(task._id, {
        $set: { isChecked: !task.isChecked }
      });
    };
    // add remove task functionality
    const deleteThisTask = () => {
      TasksCollection.remove(task._id);
    };
  </script>
  <li>
    <!-- render a checkbox to toggle to show task completion -->
      <input
             type="checkbox"
             readonly
             checked={!!task.isChecked}
             on:click={toggleChecked}
      />
      <span>{ task.text }</span>
      <!-- create a button to delete a task -->
      <button class="delete" on:click={deleteThisTask}>&times;</button>
  </li>