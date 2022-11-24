<template>
	<div class="flex form_container items-center justify-center h-screen">
		<div class="w-full max-w-md space-y-8">
			<div>
				<h2
					class="mt-6 text-left text-2xl font-bold tracking-tight text-gray-900"
				>
					Sign In to WisdomCircle
				</h2>
				<p class="mt-2 text-left text-base text-gray-600">
					Don't have an account?
					<a
						href="#"
						class="font-bold text-blue-600 hover:text-blue-500"
						>Sign Up</a
					>
				</p>
			</div>
			<VForm class="mt-8" v-slot="{ errors }">
				<div class="-space-y-px rounded-md shadow-sm">
					<div class="mb-5">
						<VField
							id="email-address"
							name="email"
							type="text"
							:rules="usernameCheck"
							v-model="email"
							:class="{
								'ring-red-600 ring-1': errors.email,
							}"
							autocomplete="email"
							required
							class="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-base"
							placeholder="Email or Mobile Number"
						/>
						<VErrorMessage name="email" class="text-red-600 text-xs" />
					</div>
					<div class="relative">
						<VField
							id="password"
							name="password"
							type="password"
							v-model="password"
							:class="{
								'ring-red-600 ring-1': errors.password,
							}"
							autocomplete="current-password"
							required
							class="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-base"
							placeholder="Password"
						/><span
							class="absolute inset-y-0 right-0 flex items-center pr-3"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="h-5 w-5 text-slate-500"
								viewBox="0 0 16 16"
								aria-hidden="true"
							>
								<path
									d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
								/>
								<path
									d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
								/>
							</svg>
						</span>
						<VErrorMessage name="password" class="text-red-600 text-xs" />
					</div>
				</div>

				<div class="text-sm text-right mt-1 mb-7">
					<a
						href="#"
						class="font-bold text-blue-600 hover:text-blue-500"
						>Forgot password</a
					>
				</div>

				<div>
					<button
						type="submit"
						class="group relative flex w-full justify-center rounded border border-transparent bg-amber-500 py-2 px-4 text-lg font-bold text-black hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
					>
						Sign in
					</button>
				</div>
			</VForm>
		</div>
	</div>
</template>

<style scoped>
form {
	width: 384px;
}

.form_container {
	margin: 0 auto !important;
	/* width: 600px; */
}
</style>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			check: '',
			usernameCheck: (value) => {
				let trimmed = value.trim()
				if (trimmed.length === 0) return true
				const testEmail =
					trimmed.includes('@') ||
					trimmed.includes('.') ||
					!(
						trimmed.replace(/[^0-9]/g, '').length >
						trimmed.length / 2
					)
				if (testEmail) {
					return trimmed.match(
						/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
					)
						? true
						: 'Please enter a valid email address'
				} else if (trimmed.length > 0)
          return 'Please enter a valid mobile number'
        return 'Please enter a valid email address or mobile number' 
				return true
			},
		}
	},
}
</script>

<!-- <script setup>
const usernameCheck = (value) => {
  let trimmed = value.trim()
  if (trimmed.length === 0) return true
	const testEmail =
		trimmed.includes('@') ||
		trimmed.includes('.') ||
		!(trimmed.replace(/[^0-9]/g, '').length > trimmed.length / 2)
	if (testEmail) {
		return trimmed.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
			? true
			: 'Please enter a valid email address'
	} else if (trimmed.length > 0) return 'Please enter a valid mobile number'
	return true
}
</script> -->
