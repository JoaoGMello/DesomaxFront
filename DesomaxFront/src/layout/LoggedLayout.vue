<script lang="ts">
import { defineComponent } from "vue";
const name = 'LoggedLayout'

export default defineComponent({
	name,

	components: { }, 

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
      menu
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