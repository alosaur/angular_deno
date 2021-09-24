## Run as server:

deno run --importmap=importmap.json --location=https://jspm.dev --allow-read
server.ts

Open in browser: https://localhost:8000

## Render app page

deno run --importmap=importmap.json --location=https://jspm.dev --allow-read
main.ts

Output:

```html
<html>
  <head>
    <title>Angular SSR with Deno</title>
    <style>my-app[_ngcontent-sc1]{
        color: green;
    }</style>
  </head>

  <body>
      <my-app _nghost-sc1="" ng-version="12.0.3">Angular in Deno v1.8.0</my-app>
  </body>
</html>
```
