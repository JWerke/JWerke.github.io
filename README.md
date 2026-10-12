# Carousel Studio – Legal pages

The Carousel Studio app's legal pages, published with GitHub Pages at https://jwerke.github.io/:

- `carousel-studio/privacy/` – the privacy policy, https://jwerke.github.io/carousel-studio/privacy/
- `index.html` – a start page linking to it

No app code lives here.

The policy's text is the "No Tracking" privacy policy from the open-source
[App Privacy Policy Generator](https://app-privacy-policy-generator.nisrulz.com/)
([source](https://github.com/nisrulz/app-privacy-policy-generator)), for a mobile app, with its
template fields filled in. It is unchanged otherwise, apart from one added section, "Your photos and
projects", written by the developer.

## Publishing

GitHub publishes the `main` branch of this repository (named `<user>.github.io`) by itself, a minute
or so after each push.

The app shows the same text in Settings → About (`src/utils/legal.js` in the app's repository):
change both together.
