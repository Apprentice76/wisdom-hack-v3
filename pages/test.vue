<template>
	<VForm>
		<VField name="field" :rules="isRequired" />
    <VErrorMessage name="field"/>
	</VForm>
</template>

<script setup>
const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return "This is required right now!";
};
</script>
