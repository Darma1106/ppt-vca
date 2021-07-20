import { ref, onMounted, onUnmounted, Ref } from 'vue'
import dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime'

// dayjs.extend(relativeTime)

export function useDate(d: dayjs.ConfigType = Date.now(), timeout = 0): Ref<dayjs.Dayjs> {
  const date: Ref<dayjs.Dayjs> = ref(dayjs(d))

  if (timeout) {
    let timerId: number

    onMounted(() => {
      timerId = window.setInterval(() => {
        date.value = date.value.add(timeout / 1000, 'second')
      }, timeout)
    })

    onUnmounted(() => {
      window.clearInterval(timerId)
    })
  }

  return date
}
