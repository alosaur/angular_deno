## Run as server:

deno run --config tsconfig.json --importmap=importmap.json -A --unstable server.ts

Open in browser: https://localhost:8000 

## Render app page

deno run --config tsconfig.json --importmap=importmap.json -A --unstable main.ts

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
      <my-app _nghost-sc1="" ng-version="10.0.1">Angular in Deno v1.1.2</my-app>
  </body>
</html>
```