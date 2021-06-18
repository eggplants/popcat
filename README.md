# popcat

[![Heroku App Status](http://heroku-shields.herokuapp.com/popcatlive)](https://popcatlive.herokuapp.com)

- [Pop cat](https://knowyourmeme.com/memes/pop-cat) from curl
- Inspired by <http://parrot.live>

## Run

```bash
curl popcatlive.herokuapp.com
```

## Demo

https://user-images.githubusercontent.com/42153744/122168116-d520d300-ceb6-11eb-8cfa-eaae2e3f1d8c.mp4


## Options

- Query parameters:
  - `flip=true`
    - Cat is flipped. Defaults to `false`.
  - `t=<positive integer>`
    - Interval of frames. Defaults to `200`(ms).

```bash
curl 'http://popcatlive.herokuapp.com/?flip=true&t=500'
```

https://user-images.githubusercontent.com/42153744/122504278-f0b1e800-d034-11eb-8965-310077f346c7.mp4
