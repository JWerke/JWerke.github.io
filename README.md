# Carousel Studio – Legal pages

The Carousel Studio app's legal pages, published with GitHub Pages at https://jwerke.github.io/:

- `carousel-studio/privacy/` – the privacy policy, https://jwerke.github.io/carousel-studio/privacy/
- `carousel-studio/impressum/` – the Impressum (§ 5 DDG) in English, with the German original below it,
  https://jwerke.github.io/carousel-studio/impressum/
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

## Contact details

The email address and phone number are never in the pages as plain text, so simple harvesters that
read the page source don't find them: they are written as HTML character codes with a hidden decoy
inside (`.pc-x`, not shown, not read out, not copied), and `assets/contact.js` makes them links.
People see them at once either way, also without JavaScript, as the Impressum requires. A bot that
renders pages like a browser still sees them; no legally sound method can prevent that.
