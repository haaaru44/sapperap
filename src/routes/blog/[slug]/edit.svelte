<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(
      `https://sapperblog-8a647.firebaseio.com/${params.slug}.json`,
    )
    const data = await res.json()

    if (res.status === 200) {
      return { post: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import BlogView from './_form.svelte'
  export let post
</script>

<h1>Edit</h1>
<BlogView {post} isEditMode={true} />
