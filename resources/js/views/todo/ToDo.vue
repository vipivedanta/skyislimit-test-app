<template>
	<div class="col-md-12 container">
		<div v-if="loggedIn">
		<h3>Create a ToDo list</h3>
		<ToDoForm v-on:addToDo="createToDo" />
		</div>

		<div v-if="!loggedIn">Loading page..</div>

	</div>
</template>

<script>
	import ToDoForm from '../../components/todo/ToDoForm'
	import axios from 'axios'

	export default {
		components: { ToDoForm },

		data() {
			return {
				loggedIn : false
			}
		},

		methods: {
			createToDo: function(toDoItem) {
				console.log(toDoItem)
			},

			isUserLoggedIn: async function() {
				let res = await axios.get('/login-check')
				this.loggedIn = res.data.logged
				if( this.loggedIn == false ) {
					window.location.href = '../login'
				}

				
			}
		},

		created() {
			this.isUserLoggedIn()
		}
	};
</script>

<style scoped>
	.container {
		margin: 10px;
		padding: 10px;
	}
</style>