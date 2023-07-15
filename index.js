$(document).ready(function() {
   $('form').on('submit', function(e) {
     e.preventDefault();
     const taskName = $('#add-new-task').val();
 
     if (taskName !== '') {
       const newTask = $('<li></li>').text(taskName);
       newTask.on('click', function() {
         $(this).toggleClass('completed-tasks');
       });
 
       $('#task-list').append(newTask);
       $('#add-new-task').val('');
     }
   });
 });