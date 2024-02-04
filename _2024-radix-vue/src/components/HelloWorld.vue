<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div :style="{ display: 'flex', gap: '20px', justifyContent: 'center' }">
    <AvatarRoot class="AvatarRoot">
      <AvatarImage
        class="AvatarImage"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <AvatarFallback
        class="AvatarFallback"
        :delay-ms="600"
      >
        CT
      </AvatarFallback>
    </AvatarRoot>
    <AvatarRoot class="AvatarRoot">
      <AvatarImage
        class="AvatarImage"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <AvatarFallback
        class="AvatarFallback"
        :delay-ms="600"
      >
        JD
      </AvatarFallback>
    </AvatarRoot>
    <AvatarRoot class="AvatarRoot">
      <AvatarFallback class="AvatarFallback">
        PD
      </AvatarFallback>
    </AvatarRoot>
  </div>

  <div class="card">
    <button type="button" @click="count++">
      count is {{ count }}
    </button>
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
@import '@radix-ui/colors/black-alpha.css';
@import '@radix-ui/colors/grass.css';

.read-the-docs {
  color: #888;
}

.AvatarRoot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: var(--black-a3);
}

.AvatarImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.AvatarFallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--grass-11);
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
}
</style>
