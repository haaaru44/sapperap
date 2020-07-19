<script>
  import Nav from '../components/Nav.svelte'

  import GoogleAnalytics from 'sapper-google-analytics/GoogleAnalytics.svelte'
  import { stores } from '@sapper/app'

  let ga_measurment_id = 'UA-172142370-1'
  // your analytics id
  export let segment
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<GoogleAnalytics {stores} id={ga_measurment_id} />
<Nav {segment} />

<main>
  <slot />
</main>
