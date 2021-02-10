<template>
  <main>
    <section v-for="post in posts" :key="post.path" class="border-b-2 border-red-900">
      <nuxt-link :to="post.path" class="no-underline">
        <h2 class="article-title">
          {{ post.title }}
        </h2>
        <p class="article-description">
          {{ post.description }}
        </p>
        <div class="flex flex-row justify-end items-center">
          <div class="read-more border border-gray-500 text-red-900 w-36 text-center">
            Read More...
          </div>
        </div>
      </nuxt-link>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts').only(['title', 'description']).fetch()

    console.log(posts)

    return {
      posts,
    }
  },
}
</script>
