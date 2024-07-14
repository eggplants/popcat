# popcat

- [Pop cat](https://knowyourmeme.com/memes/pop-cat) from curl
- Inspired by <http://parrot.live>

## Run

```bash
curl -L popcat.egpl.dev
```

## Options

- Query parameters:
  - `flip=true`
    - Cat is flipped. Defaults to `false`.
  - `t=<positive integer>`
    - Interval of frames. Defaults to `1000`(ms).

```bash
curl -L 'popcat.egpl.dev?flip=true&t=500'
```

## Demo

![demo](https://raw.githubusercontent.com/eggplants/popcat/master/demo.gif)
