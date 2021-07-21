---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
---

# vue composition api

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    by Darma <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/Darma1106" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# 什么是 compositionApi?

<ul>vue3发布beta版本的时候，尤雨溪发布了两个形式的写法:
      <li>options-api</li>
      <p>options-api指的就是原vue2所常用的写法，以data、methods、computed、watch和各种生命周期等选项构造出一个vue实例</p>
      <li>composition-api</li>
      <p>composition-api则是把各个选项抽离成方法，在setup函数中对所有的逻辑进行组合。</p>
</ul>

---

# options-api

<Counter :count="10" m="t-4" />

```js {monaco}
export default {
  data() {
    return {
      count: 10
    }
  },
  methods: {
    countReduce() {
      this.count--
    },
    countIncrease() {
      this.count++
    }
  }
}
```

---

# composition-api

<Counter :count="10" m="t-4" />

```js {monaco}
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(10)
    const countReduce = () => {
      count.value--
    }
    const countIncrease = () => {
      count.value++
    }
    return { count, countReduce, countIncrease }
  }
})
```

---

# compostionApi 到底有什么好处？

<ul>
      <li>把方法脱离vue实例</li>
      <li>更好的抽离逻辑模块，让其更好的复用</li>
       <li>更好的代码维护体验</li>
</ul>

## ~~更好的~~typescript 支持

---

# useDate

```ts {all|1,2,3,7|1,12-16|1,18-20|all}
import { ref, onMounted, onUnmounted } from 'vue'
import dayjs from 'dayjs'
import type { Ref } from 'vue'
import type { ConfigType, Dayjs } from 'dayjs'

export default function useDate(d: ConfigType = Date.now(), timeout = 0): Ref<Dayjs> {
  const date: Ref<Dayjs> = ref(dayjs(d))

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
```

---

# typescript

```ts {monaco}
interface Info {
  name: string
  id: string
}

const info: Info = {
  name: 'name',
  id: 'id'
}
```

---

# vue2 + ts

```ts {monaco}
import { Component, Vue, Emit } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
  private mounted() {
    this.$on('demo-log', (data: any): void => {
      alert(data)
    })
  }

  @Emit('demo-log')
  triggerEmit(n: any) {
    console.log('hhh')
  }
}
```

---

<VideoImg />
