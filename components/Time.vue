<template>
  <div>{{ date.format('YYYY-MM-DD HH:mm:ss') }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDate } from './useDate'

export default defineComponent({
  name: '',
  components: {},
  setup() {
    const date = useDate(Date.now(), 1000)

    return { date }
  }
})
</script>

<style lang="less" scoped></style>
