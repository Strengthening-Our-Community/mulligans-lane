<!-- <script>
	export let session;
</script> -->
<script>
	import { session } from '$app/stores';
</script>

<!-- <script context="module">
	export async function load({ session }) {
		console.log(session);
        // Here I can interogate the session and return what I want to the component - or page
		return { props: { session } };
	}
</script> -->

<!-- {JSON.stringify(session)} -->
{JSON.stringify($session)}
