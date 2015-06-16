# server-side-rendering-perf

Trying to get baseline for various server-side rendering solutions.

# installation

```
git clone git@github.com:derekr/server-side-rendering-perf.git
cd server-side-rendering-perf
npm install
npm start
```

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

Other tests to try out:

- Using `require('react/dist/react')` though this is a nightmare with any dependencies that have react installed as a peerDependecy
- Someone using process.nextTick to yield the thread when performing the rendering operation (no idea if that will even work)
- Thoughts?

# suggested testing

We were hitting issues w/ rendering react server side and so we've been using `npm install -g loadtest` and running variations of this command:

```
loadtest -c 10 --rps 200 http://localhost:8080/{test from above}
```

Trying out different rps etc…

# notes

The server is using the `cluster` module and will default to however many CPUs your host machine has.

Not sure of the overhead of using babel and requiring different JSX solutions, but I think they're isolated and after the modules get cached it shouldn't really matter :shrug:.
