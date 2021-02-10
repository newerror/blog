<template>
  <div>
    <h2 class="article-title">
      {{ content.title }}
    </h2>

    <div class="article-meta bg-gray-warm-300 text-gray-warm-50 w-screen -ml-4 pl-4 text-sm">
      📅 {{ formatDate(content.updatedAt) }}
    </div>

    <!-- <div class="article-toc border border-gray-warm-400 bg-gray-warm-300 p-1">
      <ol>
        <li v-for="header in content.toc" :key="header.id" class="font-bold text-sm" :class="header.depth > 2 ? 'ml-4 italic' : ''">
          <span>{{ header.text }}</span>
        </li>
      </ol>
    </div> -->

    <nuxt-content :document="content" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const content = await $content('posts', params.slug).fetch()
    const title = content.title

    console.log('CONTENT', content)

    return {
      content,
      title,
    }
  },

  head () {
    return {
      title: this.title + ' | ' + 'David ▼ Soth',
    }
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
