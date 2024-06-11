<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/organisms/NavBar/NavBar.vue";
const name = 'LoggedLayout'

export default defineComponent({
	name,

	components: { NavBar }, 

	// props: { },

	mounted () { },

	updated () { },

	data () {
		return { }
	},

	methods: { },

	computed: { }, 

});
</script>

<template>
	<div class="flex flex-col bg-[#F2F2F2] h-full w-full">
		<div>
      <NavBar/>
    </div>
    
    <div class="size-full content">
      <router-view></router-view>
    </div>
	</div>
</template>


<style scoped>
.content {
  overflow-y: scroll;
}
</style>