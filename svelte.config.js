// svelte.config.js
import preprocess from 'svelte-preprocess'

const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
    }),

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
    },
}

export default config
