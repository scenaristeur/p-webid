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

## dynamic css
https://www.codegrepper.com/code-examples/whatever/vue+3+conditonal+class+binding


### Charte graphique
https://baseline.is/beta
https://baseline.is/brand/1048

## styles
fb : https://webdesign.tutsplus.com/articles/design-and-code-an-integrated-facebook-app-html-css--webdesign-4378


## next ml5
https://www.youtube.com/watch?v=FYgYyq-xqAw

## storybook
https://www.learnstorybook.com/intro-to-storybook/vue/fr/simple-component/

## categories of personnal info
https://enterprivacy.com/wp-content/uploads/2018/09/Categories-of-Personal-Information.pdf
https://dpvcg.github.io/dpv/#PrivacyPreference

## loading external script
https://levelup.gitconnected.com/how-to-load-external-javascript-files-from-the-browser-console-8eb97f7db778

---------------------

document.write(`<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"></script>`)

---------------------

const script = document.createElement("script")
script.type = "text/javascript"
script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"
document.head.appendChild(script)
eval(script)

---------------------

fetch("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js")
  .then((response) => response.text())
  .then((text) => eval(text))
  .then(() => {
    /* Now you can use the script */
  })


---------------------

  const loadScript = async (url) {
    const response = await fetch(url)
    const script = await response.text()
    eval(script)
  }

  const scriptUrl = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"
  loadScript(scriptUrl)

  ---------------------
A saisir en deux fois

// <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
const scriptSource = "https://code.jquery.com/jquery-3.5.0.js"
document.write(`<script src="${scriptSource}" type="text/javascript"></script>`)
------
// I would use jQuery, but I'm looking at blank page...
$("div").css("border", "3px dotted orange") // TypeError: $(...) is null
---------------------
