<template>
	<div class="relative wrapper">
		<Notification :class="{ visible: !show }" @toggleOff="toggleOff" />
		<div class="flex w-full min-h-[100vh]">
			<div class="left_panel flex">
				<div class="left_panel_mascot_box flex flex-col justify-end">
					<img src="~/assets/img/mascot.svg" class="w-full" />
				</div>
				<div class="right_panel_box flex flex-col grow">
					<div class="top_content flex items-end pb-10">
						<img src="~/assets/img/logo.svg" class="h-32" />
					</div>

					<div
						class="bottom_content grow flex flex-col justify-end items-start text-neutral-50 text-xs p-5 w-full"
					>
						<div class="text_content">
							<h3 class="text_heading text-base font-semibold">
								Welcome back!
							</h3>
							<p class="text_body pb-10 pt-1 text-sm font-light">
								Sign In to find opportunities that match your
								interests. We have both part-time and full-time
								roles that can be done online and in-person.
							</p>
						</div>
						<img src="~/assets/img/dashed_line.svg" class="" />
						<p class="text_footer font-light pt-10 text-xs">
							Please contact us at +91-9380644532 if you need any
							assistance.
						</p>
					</div>
				</div>
			</div>
			<div class="login flex mx-auto flex-col justify-center">
				<img
					src="~/assets/img/logo_small.svg"
					class="h-14 mobile my-10"
				/>
				<Form @toggleOn="toggleOn" class='overflow-visible'/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.mobile {
	display: none;
}

.visible {
	display: none;
}

.left_panel {
	width: 480px;
	background-color: #404555;
}

.left_panel_mascot_box {
	width: 140px;
}

.top_content {
	height: 50vh;
}

.bottom_content {
	width: 320px;
}

@media (max-width: 900px) {
	.left_panel {
		display: none;
	}

	.mobile {
		display: flex;
	}

	.login {
		/* height: 100vh; */
		justify-content: flex-start;
	}
}
</style>

<script>
export default {
	data() {
		return {
			show: false,
		}
	},
	methods: {
		toggleOff() {
			this.show = false
		},
		toggleOn() {
			this.show = true
			setTimeout(() => {
				this.show = false
			}, 3000)
		},
	},
}
</script>
