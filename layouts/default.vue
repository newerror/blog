<template>
  <div class="flex flex-col justify-between w-screen h-screen sm:max-w-prose px-4">
    <div class="w-auto max-w-full">
      <header class="site-header">
        <h1 class="site-title">
          <nuxt-link to="/">
            David Soth
          </nuxt-link>
        </h1>
        <!-- <code-svg />
      <info-svg /> -->
        <nuxt-link to="/about" class="font-bold text-gray-warm-400 border border-gray-warm-300 px-2">
          About Me
        </nuxt-link>
      </header>

      <nuxt />
    </div>

    <footer-meta />
  </div>
</template>
