# Personal site

## 1. Install dependencies

```
npm install
```

### 2. Edit \_data/metadata.json

### 3. Run Eleventy

```
npx @11ty/eleventy
```

Or build and host locally for local development

```
npx @11ty/eleventy --serve
```

Or build automatically when a template changes:

```
npx @11ty/eleventy --watch
```

Or in debug mode:

```
DEBUG=* npx @11ty/eleventy
```

### Implementation Notes

- `about/index.md` shows how to add a content page.
- `posts/` has the blog posts but really they can live in any directory. They need only the `post` tag to be added to this collection.
- Use the `eleventyNavigation` key in your front matter to add a template to the top level site navigation. For example, this is in use on `index.njk` and `about/index.md`.
- Content can be any template format (blog posts needn’t be markdown, for example). Configure your supported templates in `.eleventy.js` -> `templateFormats`.
- The `css` and `img` directories in the input directory will be copied to the output folder (via `addPassthroughCopy()` in the `.eleventy.js` file).
- The blog post feed template is in `feed/feed.njk`. This is also a good example of using a global data files in that it uses `_data/metadata.json`.
- This example uses three layouts:
  - `_includes/layouts/base.njk`: the top level HTML structure
  - `_includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
  - `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
- `_includes/postlist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `index.njk` has an example of how to use it.


## Site theme
- [Dracula](https://draculatheme.com/)

### Color Palette

Palette      | Hex       | RGB             | HSL             
---          | ---       | ---             | ---           
Foreground   | `#F8F8F2` | `248, 248, 242` | `60°  30% 96%`
Cyan         | `#80FFEA` | `128, 255, 234` | `170° 100% 75%`
Green        | `#8AFF80` | `138, 255, 128` | `115° 100% 75%`
Orange       | `#FFCA80` | `255, 202, 128` | `35°  100% 75%`
Pink         | `#FF80BF` | `255, 128, 191` | `330° 100% 75%`
Purple       | `#9580FF` | `149, 128, 255` | `250° 100% 75%`
Red          | `#FF9580` | `255, 149, 128` | `10°  100% 75%`
Yellow       | `#FFFF80` | `255, 255, 128` | `60°  100% 75%`