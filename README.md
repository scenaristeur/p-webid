# p-webid

[DEMO](https://scenaristeur.github.io/p-webid/)

### usage with webcomponents
(npm run build:wc)
```
<html>
<head>
<meta charset="utf-8">
<title>popock demo</title>

<script src="https://cdn.jsdelivr.net/npm/solid-auth-client/dist-lib/solid-auth-client.bundle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/solid-file-client@1.0.0/dist/window/solid-file-client.bundle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rdflib/dist/rdflib.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@solid/query-ldflex/dist/solid-query-ldflex.rdflib.js"></script>

<script src="https://unpkg.com/vue"></script>
<script src="https://raw.githack.com/scenaristeur/p-webid/main/dist/popock.js"></script>
</head>

<body>
<popock-login></popock-login>
<popock-webid></popock-webid>
<popock-storage></popock-storage>
<popock-todo></popock-todo>
</body>

</html>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Build in dist folder & publish to gh-pages
```
npm run git -- "new version"
```

### Compiles and minifies for production (webcomponents)
```
npm run build:wc
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
