<template>
	<div class="container">
		<NavBar />
		<div class="row">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	
	import 'bootstrap/dist/css/bootstrap.css'
	import NavBar from '../components/layouts/NavBar.vue'

	export default {
		components: {
			NavBar
		}
	};
</script>