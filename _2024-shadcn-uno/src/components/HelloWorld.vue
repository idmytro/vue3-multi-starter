<script setup lang="ts">
import { Button } from '@/components/ui/button'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p class="children:m-10px">
      <Button @click="count++">
        count is {{ count }}
      </Button>
      <Button variant="destructive" @click="count++">
        count is {{ count }}
      </Button>
      <Button variant="outline" @click="count++">
        count is {{ count }}
      </Button>
      <Button variant="secondary" @click="count++">
        count is {{ count }}
      </Button>
      <Button variant="ghost" @click="count++">
        count is {{ count }}
      </Button>
      <Button variant="link" class="text-green-800" @click="count++">
        count is {{ count }}
      </Button>
    </p>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<style>
.read-the-docs {
  color: #888;
}
</style>
