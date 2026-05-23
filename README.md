# DAD Tierlist Archive

[DAD Tierlist Archive](https://dad-tier-archive.netlify.app/)

This site allows anonymous user submissions for the archiving fanmade tierlists made on the dad.gallery website. It is open source - as you can see in the actions server, no data about the user is saved at all. It stores information on Postgres database, and images on Cloudinary. The environment variables are linked to the owner of the account where it is deployed on Netlify.

## Developing Locally

1. Clone this repository, then run `npm install` in its root directory.

2. For the starter to have full functionality locally (e.g. edge functions, blob store), please ensure you have an up-to-date version of Netlify CLI. Run:

```
npm install netlify-cli@latest -g
```

3. Link your local repository to the deployed Netlify site. This will ensure you're using the same runtime version for both local development and your deployed site.

```
netlify link
```

4. Then, run the Next.js development server via Netlify CLI:

```
netlify dev
```

If your browser doesn't navigate to the site automatically, visit [localhost:8888](http://localhost:8888).

## Resources

- Check out the [Next.js on Netlify docs](https://docs.netlify.com/frameworks/next-js/overview/)
