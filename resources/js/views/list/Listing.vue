<template>
	<div>
			
		<div class="col-md-12 single-post" v-for="(post,key) in posts" :key="key" >
			<h4>{{ post.data.title }}</h4>
			<div class="row">
				<div class="col-md-2"><img :src="post.data.thumbnail" @error="loadDefaultThumb" /></div>
				<div class="col-md-10">
					<p>Posted By : {{ post.data.author_fullname }}</p>
					<p>Created at : {{ post.data.created_utc | formatDateTime }}</p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>

	import { getList } from '../../services/ListService.js'

	export default {

		data() {
			return {
				posts: []
			}
		},

		created(){
			this.getPosts()
		},

		methods: {

			getPosts: async function() {
				let res = await getList()
				if( res.status ) {
					this.posts = res.data
				}
			},

			loadDefaultThumb: function(e) {
				e.target.src = 'https://picsum.photos/140/78?grayscale'
			}
		},

		filters: {

			formatDateTime: function(UNIX_timestamp) {
				  var a = new Date(UNIX_timestamp * 1000);
				  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
				  var year = a.getFullYear();
				  var month = months[a.getMonth()];
				  var date = a.getDate();
				  var hour = a.getHours();
				  var min = a.getMinutes();
				  var sec = a.getSeconds();
				  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
				  return time;
			}
		}
	};
</script>

<style scoped>
	.single-post {
		border: solid 1px #ccc;
		margin: 15px;
		padding: 10px;
	}
</style>