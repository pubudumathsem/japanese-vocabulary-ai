# Japanese Vocabulary AI - GitHub Pages Edition

A static Japanese vocabulary application that displays:

- Hiragana pronunciation
- English meaning
- Sinhala meaning
- Japanese example sentence
- Hiragana reading of the sentence
- English and Sinhala sentence translations
- Japanese browser speech
- Recent lookup history

## Publish with GitHub Pages using only the browser

1. Create a new public GitHub repository, for example `japanese-vocabulary-ai`.
2. Open the repository and choose **Add file > Upload files**.
3. Extract the downloaded ZIP first.
4. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root. Do not upload the containing folder itself.
5. Commit the files to the `main` branch.
6. Open **Settings > Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Select branch **main** and folder **/(root)**, then save.
9. Wait several minutes and use **Visit site** from the Pages settings.

The public address normally follows this pattern:

`https://YOUR-USERNAME.github.io/japanese-vocabulary-ai/`

## Add more vocabulary

Open `script.js` on GitHub, click the pencil icon, and add another entry inside the `vocabulary` object using the existing entries as a model. Commit the change and GitHub Pages will publish the updated version.

## Important limitation

This is a static application. It searches only the vocabulary stored in `script.js`. Do not put an OpenAI key, Azure key, password, token, or other secret in these files because all browser code is public.
