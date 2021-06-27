<template>
	<form>
	  <div class="row">
	    <div class="col">
	      <input type="text" v-model="todo.item" class="form-control" placeholder="Todo item">
	      <span v-show="error.title != ''" class="text text-danger">{{ error.title }}</span>
	    </div>
	    <div class="col">
	      <input type="date" v-model="todo.due" class="form-control" placeholder="Due date">
	      <span v-show="error.due != ''" class="text text-danger">{{ error.due }}</span>
	    </div>

	    <div class="col">
	    	<button type="button" class="btn btn-info" @click="save">Save</button>
	    </div>
	  </div>
	</form>
</template>

<script>
	export default {

		data() {
			return {
				todo: {
					item: '',
					due: ''
				},
				error: {
					title: '',
					due: ''
				}
			}
		},

		methods: {
			save: function() {

				if( this.todo.item == '' ) {
					this.error.title = 'Please type the to do item'					
				} else {
					this.error.title = ''
				}

				if( this.todo.due == '') {
					this.error.due = 'Please select the due date'
				} else {
					this.error.due = ''
				}

				if( this.error.title != '' || this.error.due != '') 
					return false

				this.$emit('addToDo', this.todo )
			}
		}
	};
</script>