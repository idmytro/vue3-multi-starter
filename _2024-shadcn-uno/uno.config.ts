import { defineConfig, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  transformers: [
    transformerDirectives(),
    // @ts-expect-error transformerVariantGroup is not yet typed
    transformerVariantGroup(),
  ],
  presets: [
    presetUno(),
    presetAnimations(),
    presetShadcn({
      color: 'red',
    }),
  ],
  // By default, `.ts` and `.js` files are NOT extracted.
  // If you want to extract them, you can use the following configuration.
  // It's necessary to add following configuration if you are using shadcn-vue or shadcn-svelte.
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]s|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
      ],
    },
  },
})
