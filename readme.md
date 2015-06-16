# server-side-rendering-perf

Trying to get baseline for various server-side rendering solutions.

Each route should render the same nodes or amount of nodes:

```
# 300 nodes using `React.renderToString`
/react
```

```
# 300 nodes using `ReacyAsync.renderToStringAsync`
/react-async
```

```
# 300 nodes using `React.renderToStaticMarkup`
/react-static-markup
```

```
# 300 nodes using `deku.renderString`
/deku
```
