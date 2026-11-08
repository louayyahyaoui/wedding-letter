# Deploy to GitHub Pages

Repository: https://github.com/louayyahyaoui/wedding-letter

Website after deployment: https://louayyahyaoui.github.io/wedding-letter/

## 1. Push the project

Run these commands in PowerShell from this project folder:

```powershell
Set-Location 'C:\Users\user\Documents\REA\golden-letter-clone'
git init
git add .
git commit -m "Publish Louay and Maram wedding invitation"
git branch -M main
git remote add origin https://github.com/louayyahyaoui/wedding-letter.git
git push -u origin main
```

Complete GitHub sign-in if Git prompts for it. The repository was empty when
these instructions were prepared. Do not force-push if it has since changed.

## 2. Enable GitHub Pages

Open https://github.com/louayyahyaoui/wedding-letter/settings/pages.
Under **Build and deployment**, set **Source** to **GitHub Actions**.

## 3. Run the deployment

Open https://github.com/louayyahyaoui/wedding-letter/actions.
Select **Deploy wedding invitation**, then **Run workflow**, choose **main**,
and click **Run workflow**. If the first automatic run failed before Pages was
enabled, rerunning it after step 2 is enough.

Wait for the workflow to show a green check, then open the website URL above.

## Future updates

```powershell
git add .
git commit -m "Update wedding invitation"
git push
```

Every push to `main` runs the deployment workflow automatically.

## How the build works

The workflow runs `npm ci` and `npm run build:pages`, then publishes `dist`.
`tools/build-pages.mjs` uses the Pages base path and rebases the invitation's
public asset references, including the existing public font stylesheets.
The source files and `npm run dev` keep their localhost paths.

GitHub Pages serves static files. The invitation's RSVP feature is disabled;
`server.mjs` and its RSVP endpoint do not run on GitHub Pages.

Local evidence, generated design archives, editor configuration, environment
files, dependencies and build output are excluded by `.gitignore`.
