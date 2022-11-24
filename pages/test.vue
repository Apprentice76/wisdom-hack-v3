<template>
	<Notification />
</template>

<script setup>
const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return "This is required right now!";
};
</script>
