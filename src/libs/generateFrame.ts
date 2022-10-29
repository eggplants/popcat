import { blue, cyan, green, magenta, red, StyleFunction, white, yellow } from 'ansi-colors'

import { sample } from '~/utils'

const colors: StyleFunction[] = [red, yellow, green, blue, magenta, cyan, white]

const frames = [
  [
    '                                                                       ',
    '                                                                       ',
    '                                                                       ',
    '                                              ;@f@                     ',
    '             @GGt@                          00    C                    ',
    '            ;     ;ff                     0f  888@                     ',
    '             CCLLC    Gf       @ff88@@@@@@  00888008f                  ',
    '          f LLLfffftt    ifiif;           iCC0000G00 0                 ',
    '          f ff1tffLLfttf       1fLG8@@@@@8CCC000GGG00;@                ',
    '          G Lf1ttffLLLfttt111tLG08@@@@@@@@@@8CffLCG00 8                ',
    '          @ GfttttttfLLt1tttfG88808@@@@@@@888GCLLGG00  0               ',
    '           f LLf111ttfLfffffLfi1tL8@@@80Cf111tC8@@@@80G G              ',
    '            f CGLttttttffftL008@@@@0L1;,..     .;tC888GC G             ',
    '             C G0GCf11tft11G8@880L1,              .;tLCCC i            ',
    '              C G00Cftfti;tG0GCL1,                  ,itLLC @           ',
    '              ;tGLt1t11;:1LCLLfi                     ,itLL 0           ',
    '                  i;:::.;tLLft:                      .;1fL 0           ',
    '                01 ;,,.,1fLfti                   .....:1fL             ',
    '                 ; ;:..:itfft1.  ...           .....,,i1Lf f           ',
    '                  t :, .;tffff1:,,,,.....   .....,,,:i1ffff0           ',
    '                   ; :,:1ffffffti;::,,,.......,,,::;i1ttt f            ',
    '                   C CftfffLLLLfft1i;;;:::,,::::;;111ttt t             ',
    '                  C CCCLLLLLLLLLffftt111iiiiiiii1111tff f              ',
    '                 C 00GLLLLLLLLLLfffffftttttt11111111ff f               ',
    '                0f00GCCLLLLLLLLfffffffttttt11111tttfLCfG               ',
    '                C 00CCCCCLLLLLLLLLffffttttttttttttffCC f               ',
    '               G G0GCCCCCLCCCLLLLLLLLLffftttttttttffCC 0               ',
    '             @  f00GCCCCCCCCLLLLLLLLLffffffffttttfffLC0                ',
    '           @@ ,@80GGGGCCCCCCLLLLLLLLLffffffffffffffLLCG 0              ',
    '          @  @@@8GGCCCCCCCCCCCLLLLLLLLfffffffffffffffCG C              ',
    '         @@8@@@@8GCCCCCCCCCCCCCCCLLLLLffLLfffffffffffCC G              ',
    '        ;@ 8@@@@8GCCCCCCCCCCCCCCCLLLLLfffffffffffffffCC C              ',
    '        @ 8@@@@80CCCCCCCCCCCCCCCCLLLLLLLLffffffffffffL0 @              ',
    '       0 8@@@@@80GGGGGGGGGGCCCCCCCCCCCCLLLLLLLLLLLLfLL ;               ',
    '       @ 8@@@8880CCCCCCCCCCCCCCCCCCCCLLLLLLLLLLffffffL;;               ',
  ],
  [
    '                                                                       ',
    '                                                                       ',
    '                                                ;                      ',
    '                @f@                          @CC  0f                   ',
    '               f    fft                     G   8@  0                  ',
    '                0CC8    G0          ;@@   @i 0088000 f                 ',
    '             f LLffffff0  tftffftfG     @@  GG088000G@@                ',
    '             i ffttfLLfttf          @8G   1LLCG00GG00 C                ',
    '             t Lt1tfffLLftttfffttffLG8@@@@0CfLGGGCC00 0                ',
    '             G LLttttttfft11111tLG08@@@@@@@@880GCCC00 8                ',
    '              0 Lft1111fLfttftfC8@@@@@@@@@@@@0f11LC88 G                ',
    '               f CCt11tttfLftffL1:::,t8@@@@@@0:.,tG00@ G               ',
    '                C G0GLt11tttttLGCLftfL8@@@@@@@808@@8C1: ;              ',
    '                CfCG0Gftff11;;tG88@@@@@@@@0LffG@@@880Lft f             ',
    '                 f Cti1t11i,,;1LCCLLLCCCGGGLt1fft1tfffLf10;            ',
    '                  f 1;::::,.;1fLLfttt1t1111iiii;i1111tfff @            ',
    '                   f i:... .11tLLffffttttttt11t11tt11tfttf             ',
    '                    ; :,  .:iitLfffffftttttttttt11111ttt f             ',
    '                      ;,. .,:iffffffftttt111t1111111ttt t              ',
    '                     f t;..,itffffLfffttt111111111ttfL f               ',
    '                    0ffCLtttffffLLLffffttttt111ttttfLC@0               ',
    '                    C GGLLLLLLLfLffffftttttttttttttfLG f               ',
    '                   G G0CCLLLLLLfffffffttttttttttttffCC f               ',
    '                  8 GGCCCLLLLLLLLLffffffttttttttttffCC G               ',
    '                08 80GCCCCLLLLLLLLLLLfffftfffttttttfLCG ;              ',
    '               @@ 880CCCCCLLLLLLLLLLLfLLfffftttttttffCG C              ',
    '              @  880GGGCCCLLLLLLLLLLLLffffffffftttfffCC C              ',
    '             @ 0@@8GGCCCCCCCLLLLLLLLLffffffffffttffffCC t              ',
    '            @ 8@@@8GCCCCCCCCLCCLLLLLLffffffffffffffffLC8               ',
    '           f 0@@@88GCCCCCCCCCCCCLLLLLLfffffffffffffffLCG               ',
    '          @888@@@80CCCCCCCCCCCCLLLLLLLLffffffffttffffLL f              ',
    '          @ 8@@@880CCCCCCCCCCCCCCCCLLLLLfffffffffffffLL f              ',
    '         0 88@@888GCCCCCCCCLLCCCLLLLLLLLffffffffffffffL f              ',
    '         8 8@88888GGCCCCCCCCCCCCLLLLLLLLLLLLLffffffffLL f              ',
    '         @ 8888880CCCCCCCCCLLLLLLLLLfffffffffttttttttfL ;              ',
  ],
]

export const numOfFrames = frames.length

const getFrame = (n: number) => frames[n % frames.length]

const getColor = () => sample(colors)

export const generateFrame = (n: number, flip: boolean | undefined) => {
  const frame = getFrame(n)

  return getColor()((flip ? frame.reverse() : frame).join('\n'))
}
