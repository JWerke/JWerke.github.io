# Carousel Studio – Legal pages

The Carousel Studio app's legal pages, published with GitHub Pages at https://jwerke.github.io/:

- `carousel-studio/privacy/` – the privacy policy, https://jwerke.github.io/carousel-studio/privacy/
- `index.html` – a start page linking to it
- `assets/` – the shared stylesheet, the app icon and the Inter font (SIL Open Font License, see
  `assets/fonts/LICENSE-Inter.txt`). Everything is served from this site: no external fonts,
  scripts or trackers.

No app code lives here.

The policy's text is the "No Tracking" privacy policy from the open-source
[App Privacy Policy Generator](https://app-privacy-policy-generator.nisrulz.com/)
([source](https://github.com/nisrulz/app-privacy-policy-generator)), for a mobile app, with its
template fields filled in. It is unchanged otherwise, apart from three added sections: "Your photos
and projects" and "Website and email contact", written by the developer, and "What are your GDPR
data protection rights?", word for word from the same generator's GDPR template.

## Publishing

GitHub publishes the `main` branch of this repository (named `<user>.github.io`) by itself, a minute
or so after each push.

The app shows the same text in Settings → About (`src/utils/legal.js` in the app's repository):
change both together.
