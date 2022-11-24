<template>
	<div
		class="flex flex-col form_container items-center justify-center h-100 grow"
	>
		<div class="w-full max-w-md space-y-8 inner_form">
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
			<VForm class="mt-8" v-slot="{ errors }" @submit="login">
				<div>
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
							<span role="alert" class="text-red-600 text-xs"
								>Please enter a valid email address</span
							>
							<VErrorMessage
								name="email"
								class="text-red-600 text-xs"
							/>
						</div>
						<div class="relative">
							<VField
								id="password"
								name="password"
								type="password"
								:rules="passwordCheck"
								v-model="password"
								:class="{
									'ring-red-600 ring-1': errors.password,
								}"
								autocomplete="current-password"
								required
								class="relative w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-base"
								placeholder="Password"
							/>
							<VErrorMessage
								name="password"
								class="text-red-600 text-xs"
							/>
							<span
								class="absolute top-3 right-0 flex items-center pr-3"
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
						</div>
					</div>

					<div class="text-sm text-right mt-1 mb-7">
						<a
							href="#"
							class="font-bold text-blue-600 hover:text-blue-500"
							>Forgot password</a
						>
					</div>
				</div>
				<div>
					<button
						type="submit"
						class="group relative flex w-full justify-center rounded border border-transparent bg-amber-500 py-2 px-4 text-lg font-bold text-black hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 mb-10"
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

@media (max-width: 900px) {
	.form_container {
		align-items: flex-start;
	}

	.inner_form,
	form {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	form {
    justify-content: space-between;
	}

	h2 {
		margin: 0;
	}
}
</style>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			email: '',
			password: '',
			notification: false,
			usernameCheck: (value) => {
				let trimmed = value.trim()
				if (trimmed.length === 0) return true
				// return 'Please enter a valid email address or mobile number'
				const testEmail =
					trimmed.includes('@') ||
					trimmed.includes('.') ||
					!(
						trimmed.replace(/[^0-9]/g, '').length >
						trimmed.length / 2
					)
				if (testEmail) {
					return this.mailRegex(trimmed)
						? true
						: 'Please enter a valid email address'
				} else if (trimmed.length > 0)
					return trimmed.length === 10
						? true
						: 'Please enter a valid mobile number'
				return true
			},
			passwordCheck: (value) => {
				return value.length > 0 ? true : 'Please enter a valid password'
			},
		}
	},
	methods: {
		login() {
			let body = {
				password: this.password,
			}
			if (this.mailRegex(this.email)) {
				body.email = this.email
			} else {
				body.number = this.email
			}
			axios
				.post('/api/login', body)
				.then((resp) => {
					const { data } = resp
					if (data.message === 'success') this.notification = true
				})
				.then(() => {
					this.$emit('toggleOn')
				})
			return false
		},
		mailRegex(val) {
			return val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
		},
	},
}
</script>