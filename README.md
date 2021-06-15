# pop

## Requirement

```bash
wget https://v.redd.it/mhogbpazd1s51/DASH_360.mp4
ffmpeg -i DASH_360.mp4 -vf fps=1 out%d.png
# upload out{1,2}.png to remove.bg, then...
pip install i2a
i2a out1-re* > o1
i2a out2-re* > o2
```

## Pop on terminal

```bash
./pop
```
