# popcat

[![Heroku App Status](http://heroku-shields.herokuapp.com/popcatlive)](https://popcatlive.herokuapp.com)

**🖕If the status badge is not shown correctly, please click to wake up hibernated server.**

- [Pop cat](https://knowyourmeme.com/memes/pop-cat) from curl
- Inspired by <http://parrot.live>

## Run

```bash
curl -L popcatlive.tk
# or
curl popcatlive.herokuapp.com
```

## Demo

![heroku](https://github.com/eggplants/popcat/wiki/gif/heroku.gif)

## Options

- Query parameters:
  - `flip=true`
    - Cat is flipped. Defaults to `false`.
  - `t=<positive integer>`
    - Interval of frames. Defaults to `200`(ms).

```bash
curl 'http://popcatlive.herokuapp.com/?flip=true&t=500'
```

![heroku_flipped](https://github.com/eggplants/popcat/wiki/gif/heroku_flipped.gif)

## Command

```bash
chmod +x src/pop
./src/pop
```

![command](https://github.com/eggplants/popcat/wiki/gif/command.gif)
