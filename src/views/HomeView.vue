<script setup lang="ts">
import { marked } from 'marked'
import { nextTick, onMounted, ref } from 'vue'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
// import 'github-markdown-css'
import '@/assets/github-markdown-css/github-markdown-dark.css'
import 'highlight.js/styles/atom-one-dark.css'

import { mdobj } from './data'

hljs.registerLanguage('javascript', javascript)

const isDark = ref(false)
function toggleTheme() {
  isDark.value = !isDark.value
  const cssFile = isDark.value
    ? 'github-markdown-dark.css'
    : 'github-markdown.css'
  const linkElement = document.createElement('link')
  linkElement.setAttribute('rel', 'stylesheet')
  linkElement.setAttribute('href', cssFile)
  document.head.appendChild(linkElement)
}

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code).value
    }
    return hljs.highlightAuto(code).value
  },
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
})

const content = ref(marked.parse(mdobj.content))
onMounted(() => {})
</script>

<template>
  <div>
    <button @click="toggleTheme">btn</button>
    <div class="markdown-body" >
      <div v-html="content"></div>
    </div>
  </div>
</template>

<style scoped></style>
