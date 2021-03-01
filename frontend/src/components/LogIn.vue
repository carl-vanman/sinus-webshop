<template>
  <div class="login">
    <div class="background">
      <img src="@/assets/icon-user-black.svg" alt="login" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  height: 44px;
  width: 44px;
}
img {
    height: 60%;
    margin-left: 1px;
    margin-top: 6px;
}

.background:hover {
  cursor: pointer;
}
</style>