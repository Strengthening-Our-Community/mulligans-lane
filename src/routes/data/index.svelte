<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
	<div class="bg-white px-6 py-1 rounded shadow-md text-black w-full">
		<!-- <form on:submit|preventDefault={signUp}> -->
		<form action="/api/data/survey" method="GET">
			<button
				type="submit"
				class="w-full text-center py-1 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				>Get Data</button
			>
		</form>
	</div>
</div>
