import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://redfox320701.github.io',
  base: '/code-library',
  markdown: {
    shikiConfig: {
      transformers: [
        {
          pre(node) {
            const lang = this.options.lang || '';
            if (lang) {
              const cls = node.properties.class || '';
              node.properties.class = `${cls} language-${lang}`.trim();
            }
          },
        },
      ],
    },
  },
});
