{
    "name": "gruppuppgift_nodejs",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
      "@cypress/listr-verbose-renderer": {
        "version": "0.4.1",
        "resolved": "https://registry.npmjs.org/@cypress/listr-verbose-renderer/-/listr-verbose-renderer-0.4.1.tgz",
        "integrity": "sha1-p3SS9LEdzHxEajSz4ochr9M8ZCo=",
        "dev": true,
        "requires": {
          "chalk": "^1.1.3",
          "cli-cursor": "^1.0.2",
          "date-fns": "^1.27.2",
          "figures": "^1.7.0"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
            "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
            "dev": true
          },
          "chalk": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
            "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
            "dev": true,
            "requires": {
              "ansi-styles": "^2.2.1",
              "escape-string-regexp": "^1.0.2",
              "has-ansi": "^2.0.0",
              "strip-ansi": "^3.0.0",
              "supports-color": "^2.0.0"
            }
          },
          "supports-color": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
            "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
            "dev": true
          }
        }
      },
      "@cypress/xvfb": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/@cypress/xvfb/-/xvfb-1.2.4.tgz",
        "integrity": "sha512-skbBzPggOVYCbnGgV+0dmBdW/s77ZkAOXIC1knS8NagwDjBrNC1LuXtQJeiN6l+m7lzmHtaoUw/ctJKdqkG57Q==",
        "dev": true,
        "requires": {
          "debug": "^3.1.0",
          "lodash.once": "^4.1.1"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "dev": true,
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
            "dev": true
          }
        }
      },
      "@hapi/address": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/@hapi/address/-/address-4.0.1.tgz",
        "integrity": "sha512-0oEP5UiyV4f3d6cBL8F3Z5S7iWSX39Knnl0lY8i+6gfmmIBj44JCBNtcMgwyS+5v7j3VYavNay0NFHDS+UGQcw==",
        "requires": {
          "@hapi/hoek": "^9.0.0"
        }
      },
      "@hapi/formula": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@hapi/formula/-/formula-2.0.0.tgz",
        "integrity": "sha512-V87P8fv7PI0LH7LiVi8Lkf3x+KCO7pQozXRssAHNXXL9L1K+uyu4XypLXwxqVDKgyQai6qj3/KteNlrqDx4W5A=="
      },
      "@hapi/hoek": {
        "version": "9.0.4",
        "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-9.0.4.tgz",
        "integrity": "sha512-EwaJS7RjoXUZ2cXXKZZxZqieGtc7RbvQhUy8FwDoMQtxWVi14tFjeFCYPZAM1mBCpOpiBpyaZbb9NeHc7eGKgw=="
      },
      "@hapi/joi": {
        "version": "17.1.1",
        "resolved": "https://registry.npmjs.org/@hapi/joi/-/joi-17.1.1.tgz",
        "integrity": "sha512-p4DKeZAoeZW4g3u7ZeRo+vCDuSDgSvtsB/NpfjXEHTUjSeINAi/RrVOWiVQ1isaoLzMvFEhe8n5065mQq1AdQg==",
        "requires": {
          "@hapi/address": "^4.0.1",
          "@hapi/formula": "^2.0.0",
          "@hapi/hoek": "^9.0.0",
          "@hapi/pinpoint": "^2.0.0",
          "@hapi/topo": "^5.0.0"
        }
      },
      "@hapi/pinpoint": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@hapi/pinpoint/-/pinpoint-2.0.0.tgz",
        "integrity": "sha512-vzXR5MY7n4XeIvLpfl3HtE3coZYO4raKXW766R6DZw/6aLqR26iuZ109K7a0NtF2Db0jxqh7xz2AxkUwpUFybw=="
      },
      "@hapi/topo": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/@hapi/topo/-/topo-5.0.0.tgz",
        "integrity": "sha512-tFJlT47db0kMqVm3H4nQYgn6Pwg10GTZHb1pwmSiv1K4ks6drQOtfEF5ZnPjkvC+y4/bUPHK+bc87QvLcL+WMw==",
        "requires": {
          "@hapi/hoek": "^9.0.0"
        }
      },
      "@samverschueren/stream-to-observable": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/@samverschueren/stream-to-observable/-/stream-to-observable-0.3.0.tgz",
        "integrity": "sha512-MI4Xx6LHs4Webyvi6EbspgyAb4D2Q2VtnCQ1blOJcoLS6mVa8lNN2rkIy1CVxfTUpoyIbCTkXES1rLXztFD1lg==",
        "dev": true,
        "requires": {
          "any-observable": "^0.3.0"
        }
      },
      "@sendgrid/client": {
        "version": "6.5.5",
        "resolved": "https://registry.npmjs.org/@sendgrid/client/-/client-6.5.5.tgz",
        "integrity": "sha512-Nbfgo94gbWSL8PIgJfuHoifyOJJepvV8NQkkglctAEfb1hyozKhrzE6v1kPG/z4j0RodaTtXD5LJj/t0q/VhLA==",
        "requires": {
          "@sendgrid/helpers": "^6.5.5",
          "@types/request": "^2.48.4",
          "request": "^2.88.0"
        }
      },
      "@sendgrid/helpers": {
        "version": "6.5.5",
        "resolved": "https://registry.npmjs.org/@sendgrid/helpers/-/helpers-6.5.5.tgz",
        "integrity": "sha512-uRFEanalfss5hDsuzVXZ1wm7i7eEXHh1py80piOXjobiQ+MxmtR19EU+gDSXZ+uMcEehBGhxnb7QDNN0q65qig==",
        "requires": {
          "chalk": "^2.0.1",
          "deepmerge": "^4.2.2"
        }
      },
      "@sendgrid/mail": {
        "version": "6.5.5",
        "resolved": "https://registry.npmjs.org/@sendgrid/mail/-/mail-6.5.5.tgz",
        "integrity": "sha512-DSu8oTPI0BJFH60jMOG9gM+oeNMoRALFmdAYg2PIXpL+Zbxd7L2GzQZtmf1jLy/8UBImkbB3D74TjiOBiLRK1w==",
        "requires": {
          "@sendgrid/client": "^6.5.5",
          "@sendgrid/helpers": "^6.5.5"
        }
      },
      "@types/caseless": {
        "version": "0.12.2",
        "resolved": "https://registry.npmjs.org/@types/caseless/-/caseless-0.12.2.tgz",
        "integrity": "sha512-6ckxMjBBD8URvjB6J3NcnuAn5Pkl7t3TizAg+xdlzzQGSPSmBcXf8KoIH0ua/i+tio+ZRUHEXp0HEmvaR4kt0w=="
      },
      "@types/node": {
        "version": "12.12.31",
        "resolved": "https://registry.npmjs.org/@types/node/-/node-12.12.31.tgz",
        "integrity": "sha512-T+wnJno8uh27G9c+1T+a1/WYCHzLeDqtsGJkoEdSp2X8RTh3oOCZQcUnjAx90CS8cmmADX51O0FI/tu9s0yssg=="
      },
      "@types/request": {
        "version": "2.48.4",
        "resolved": "https://registry.npmjs.org/@types/request/-/request-2.48.4.tgz",
        "integrity": "sha512-W1t1MTKYR8PxICH+A4HgEIPuAC3sbljoEVfyZbeFJJDbr30guDspJri2XOaM2E+Un7ZjrihaDi7cf6fPa2tbgw==",
        "requires": {
          "@types/caseless": "*",
          "@types/node": "*",
          "@types/tough-cookie": "*",
          "form-data": "^2.5.0"
        },
        "dependencies": {
          "form-data": {
            "version": "2.5.1",
            "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.5.1.tgz",
            "integrity": "sha512-m21N3WOmEEURgk6B9GLOE4RuWOFf28Lhh9qGYeNlGq4VDXUlJy2th2slBNU8Gp8EzloYZOibZJ7t5ecIrFSjVA==",
            "requires": {
              "asynckit": "^0.4.0",
              "combined-stream": "^1.0.6",
              "mime-types": "^2.1.12"
            }
          }
        }
      },
      "@types/sizzle": {
        "version": "2.3.2",
        "resolved": "https://registry.npmjs.org/@types/sizzle/-/sizzle-2.3.2.tgz",
        "integrity": "sha512-7EJYyKTL7tFR8+gDbB6Wwz/arpGa0Mywk1TJbNzKzHtzbwVmY4HR9WqS5VV7dsBUKQmPNr192jHr/VpBluj/hg==",
        "dev": true
      },
      "@types/tough-cookie": {
        "version": "2.3.6",
        "resolved": "https://registry.npmjs.org/@types/tough-cookie/-/tough-cookie-2.3.6.tgz",
        "integrity": "sha512-wHNBMnkoEBiRAd3s8KTKwIuO9biFtTf0LehITzBhSco+HQI0xkXZbLOD55SW3Aqw3oUkHstkm5SPv58yaAdFPQ=="
      },
      "abab": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/abab/-/abab-1.0.4.tgz",
        "integrity": "sha1-X6rZwsB/YN12dw9xzwJbYqY8/U4=",
        "optional": true
      },
      "abbrev": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
      },
      "accepts": {
        "version": "1.3.7",
        "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
        "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
        "requires": {
          "mime-types": "~2.1.24",
          "negotiator": "0.6.2"
        }
      },
      "acorn": {
        "version": "2.7.0",
        "resolved": "https://registry.npmjs.org/acorn/-/acorn-2.7.0.tgz",
        "integrity": "sha1-q259nYhqrKiwhbwzEreaGYQz8Oc=",
        "optional": true
      },
      "acorn-globals": {
        "version": "1.0.9",
        "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-1.0.9.tgz",
        "integrity": "sha1-VbtemGkVB7dFedBRNBMhfDgMVM8=",
        "optional": true,
        "requires": {
          "acorn": "^2.1.0"
        }
      },
      "ajv": {
        "version": "6.12.0",
        "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.0.tgz",
        "integrity": "sha512-D6gFiFA0RRLyUbvijN74DWAjXSFxWKaWP7mldxkVhyhAV3+SWA9HEJPHQ2c9soIeTFJqcSdFDGFgdqs1iUU2Hw==",
        "requires": {
          "fast-deep-equal": "^3.1.1",
          "fast-json-stable-stringify": "^2.0.0",
          "json-schema-traverse": "^0.4.1",
          "uri-js": "^4.2.2"
        }
      },
      "amdefine": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-1.0.1.tgz",
        "integrity": "sha1-SlKCrBZHKek2Gbz9OtFR+BfOkfU="
      },
      "ansi-colors": {
        "version": "3.2.3",
        "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-3.2.3.tgz",
        "integrity": "sha512-LEHHyuhlPY3TmuUYMh2oz89lTShfvgbmzaBcxve9t/9Wuy7Dwf4yoAKcND7KFT1HAQfqZ12qtc+DUrBMeKF9nw==",
        "dev": true
      },
      "ansi-escapes": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
        "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ==",
        "dev": true
      },
      "ansi-regex": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
        "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
      },
      "ansi-styles": {
        "version": "3.2.1",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
        "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
        "requires": {
          "color-convert": "^1.9.0"
        }
      },
      "any-observable": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/any-observable/-/any-observable-0.3.0.tgz",
        "integrity": "sha512-/FQM1EDkTsf63Ub2C6O7GuYFDsSXUwsaZDurV0np41ocwq0jthUAYCmhBX9f+KwlaCgIuWyr/4WlUQUBfKfZog==",
        "dev": true
      },
      "anymatch": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
        "integrity": "sha512-mM8522psRCqzV+6LhomX5wgp25YVibjh8Wj23I5RPkPppSVSjyKD2A2mBJmWGa+KN7f2D6LNh9jkBCeyLktzjg==",
        "dev": true,
        "requires": {
          "normalize-path": "^3.0.0",
          "picomatch": "^2.0.4"
        }
      },
      "append-field": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz",
        "integrity": "sha1-HjRA6RXwsSA9I3SOeO3XubW0PlY=",
        "dev": true
      },
      "aproba": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
        "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw=="
      },
      "arch": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/arch/-/arch-2.1.1.tgz",
        "integrity": "sha512-BLM56aPo9vLLFVa8+/+pJLnrZ7QGGTVHWsCwieAWT9o9K8UeGaQbzZbGoabWLOo2ksBCztoXdqBZBplqLDDCSg==",
        "dev": true
      },
      "are-we-there-yet": {
        "version": "1.1.5",
        "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
        "integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
        "requires": {
          "delegates": "^1.0.0",
          "readable-stream": "^2.0.6"
        }
      },
      "argparse": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
        "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
        "dev": true,
        "requires": {
          "sprintf-js": "~1.0.2"
        }
      },
      "array-find-index": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz",
        "integrity": "sha1-3wEKoSh+Fku9pvlyOwqWoexBh6E="
      },
      "array-flatten": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
        "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
      },
      "asn1": {
        "version": "0.2.4",
        "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
        "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
        "requires": {
          "safer-buffer": "~2.1.0"
        }
      },
      "assert-plus": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
        "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU="
      },
      "assertion-error": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-1.1.0.tgz",
        "integrity": "sha512-jgsaNduz+ndvGyFt3uSuWqvy4lCnIJiovtouQN5JZHOKCS2QuhEdbcQHFhVksz2N2U9hXJo8odG7ETyWlEeuDw==",
        "dev": true
      },
      "async": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/async/-/async-3.2.0.tgz",
        "integrity": "sha512-TR2mEZFVOj2pLStYxLht7TyfuRzaydfpxr3k9RpHIzMgw7A64dzsdqCxH1WJyQdoe8T10nDXd9wnEigmiuHIZw==",
        "dev": true
      },
      "async-foreach": {
        "version": "0.1.3",
        "resolved": "https://registry.npmjs.org/async-foreach/-/async-foreach-0.1.3.tgz",
        "integrity": "sha1-NhIfhFwFeBct5Bmpfb6x0W7DRUI="
      },
      "asynckit": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
        "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k="
      },
      "aws-sign2": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
        "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg="
      },
      "aws4": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.9.1.tgz",
        "integrity": "sha512-wMHVg2EOHaMRxbzgFJ9gtjOOCrI80OHLG14rxi28XwOW8ux6IiEbRCGGGqCtdAIg4FQCbW20k9RsT4y3gJlFug=="
      },
      "babel-code-frame": {
        "version": "6.26.0",
        "resolved": "https://registry.npmjs.org/babel-code-frame/-/babel-code-frame-6.26.0.tgz",
        "integrity": "sha1-Y/1D99weO7fONZR9uP42mj9Yx0s=",
        "requires": {
          "chalk": "^1.1.3",
          "esutils": "^2.0.2",
          "js-tokens": "^3.0.2"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
            "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4="
          },
          "chalk": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
            "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
            "requires": {
              "ansi-styles": "^2.2.1",
              "escape-string-regexp": "^1.0.2",
              "has-ansi": "^2.0.0",
              "strip-ansi": "^3.0.0",
              "supports-color": "^2.0.0"
            }
          },
          "supports-color": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
            "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc="
          }
        }
      },
      "babel-generator": {
        "version": "6.26.1",
        "resolved": "https://registry.npmjs.org/babel-generator/-/babel-generator-6.26.1.tgz",
        "integrity": "sha512-HyfwY6ApZj7BYTcJURpM5tznulaBvyio7/0d4zFOeMPUmfxkCjHocCuoLa2SAGzBI8AREcH3eP3758F672DppA==",
        "requires": {
          "babel-messages": "^6.23.0",
          "babel-runtime": "^6.26.0",
          "babel-types": "^6.26.0",
          "detect-indent": "^4.0.0",
          "jsesc": "^1.3.0",
          "lodash": "^4.17.4",
          "source-map": "^0.5.7",
          "trim-right": "^1.0.1"
        },
        "dependencies": {
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
          }
        }
      },
      "babel-messages": {
        "version": "6.23.0",
        "resolved": "https://registry.npmjs.org/babel-messages/-/babel-messages-6.23.0.tgz",
        "integrity": "sha1-8830cDhYA1sqKVHG7F7fbGLyYw4=",
        "requires": {
          "babel-runtime": "^6.22.0"
        }
      },
      "babel-runtime": {
        "version": "6.26.0",
        "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
        "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
        "requires": {
          "core-js": "^2.4.0",
          "regenerator-runtime": "^0.11.0"
        }
      },
      "babel-traverse": {
        "version": "6.26.0",
        "resolved": "https://registry.npmjs.org/babel-traverse/-/babel-traverse-6.26.0.tgz",
        "integrity": "sha1-RqnL1+3MYsjlwGTi0tjQ9ANXZu4=",
        "requires": {
          "babel-code-frame": "^6.26.0",
          "babel-messages": "^6.23.0",
          "babel-runtime": "^6.26.0",
          "babel-types": "^6.26.0",
          "babylon": "^6.18.0",
          "debug": "^2.6.8",
          "globals": "^9.18.0",
          "invariant": "^2.2.2",
          "lodash": "^4.17.4"
        }
      },
      "babel-types": {
        "version": "6.26.0",
        "resolved": "https://registry.npmjs.org/babel-types/-/babel-types-6.26.0.tgz",
        "integrity": "sha1-o7Bz+Uq0nrb6Vc1lInozQ4BjJJc=",
        "requires": {
          "babel-runtime": "^6.26.0",
          "esutils": "^2.0.2",
          "lodash": "^4.17.4",
          "to-fast-properties": "^1.0.3"
        }
      },
      "babylon": {
        "version": "6.18.0",
        "resolved": "https://registry.npmjs.org/babylon/-/babylon-6.18.0.tgz",
        "integrity": "sha512-q/UEjfGJ2Cm3oKV71DJz9d25TPnq5rhBVL2Q4fA5wcC3jcrdn7+SssEybFIxwAvvP+YCsCYNKughoF33GxgycQ=="
      },
      "balanced-match": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
      },
      "bcrypt": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-4.0.1.tgz",
        "integrity": "sha512-hSIZHkUxIDS5zA2o00Kf2O5RfVbQ888n54xQoF/eIaquU4uaLxK8vhhBdktd0B3n2MjkcAWzv4mnhogykBKOUQ==",
        "requires": {
          "node-addon-api": "^2.0.0",
          "node-pre-gyp": "0.14.0"
        }
      },
      "bcrypt-pbkdf": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
        "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
        "requires": {
          "tweetnacl": "^0.14.3"
        }
      },
      "bcryptjs": {
        "version": "2.4.3",
        "resolved": "https://registry.npmjs.org/bcryptjs/-/bcryptjs-2.4.3.tgz",
        "integrity": "sha1-mrVie5PmBiH/fNrF2pczAn3x0Ms="
      },
      "binary-extensions": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.0.0.tgz",
        "integrity": "sha512-Phlt0plgpIIBOGTT/ehfFnbNlfsDEiqmzE2KRXoX1bLIlir4X/MR+zSyBEkL05ffWgnRSf/DXv+WrUAVr93/ow==",
        "dev": true
      },
      "bl": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/bl/-/bl-2.2.0.tgz",
        "integrity": "sha512-wbgvOpqopSr7uq6fJrLH8EsvYMJf9gzfo2jCsL2eTy75qXPukA4pCgHamOQkZtY5vmfVtjB+P3LNlMHW5CEZXA==",
        "requires": {
          "readable-stream": "^2.3.5",
          "safe-buffer": "^5.1.1"
        }
      },
      "block-stream": {
        "version": "0.0.9",
        "resolved": "https://registry.npmjs.org/block-stream/-/block-stream-0.0.9.tgz",
        "integrity": "sha1-E+v+d4oDIFz+A3UUgeu0szAMEmo=",
        "requires": {
          "inherits": "~2.0.0"
        }
      },
      "bluebird": {
        "version": "3.5.1",
        "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.1.tgz",
        "integrity": "sha512-MKiLiV+I1AA596t9w1sQJ8jkiSr5+ZKi0WKrYGUn6d1Fx+Ij4tIj+m2WMQSGczs5jZVxV339chE8iwk6F64wjA=="
      },
      "body-parser": {
        "version": "1.19.0",
        "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
        "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
        "requires": {
          "bytes": "3.1.0",
          "content-type": "~1.0.4",
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "http-errors": "1.7.2",
          "iconv-lite": "0.4.24",
          "on-finished": "~2.3.0",
          "qs": "6.7.0",
          "raw-body": "2.4.0",
          "type-is": "~1.6.17"
        }
      },
      "boolbase": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
        "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24="
      },
      "brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "requires": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "braces": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
        "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
        "dev": true,
        "requires": {
          "fill-range": "^7.0.1"
        }
      },
      "browser-stdout": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/browser-stdout/-/browser-stdout-1.3.1.tgz",
        "integrity": "sha512-qhAVI1+Av2X7qelOfAIYwXONood6XlZE/fXaBSmW/T5SzLAmCgzi+eiWE7fUvbHaeNBQH13UftjpXxsfLkMpgw==",
        "dev": true
      },
      "bson": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/bson/-/bson-1.1.3.tgz",
        "integrity": "sha512-TdiJxMVnodVS7r0BdL42y/pqC9cL2iKynVwA0Ho3qbsQYr428veL3l7BQyuqiw+Q5SqqoT0m4srSY/BlZ9AxXg=="
      },
      "buffer-crc32": {
        "version": "0.2.13",
        "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
        "integrity": "sha1-DTM+PwDqxQqhRUq9MO+MKl2ackI=",
        "dev": true
      },
      "buffer-equal-constant-time": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
        "integrity": "sha1-+OcRMvf/5uAaXJaXpMbz5I1cyBk="
      },
      "buffer-from": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
        "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
        "dev": true
      },
      "busboy": {
        "version": "0.2.14",
        "resolved": "https://registry.npmjs.org/busboy/-/busboy-0.2.14.tgz",
        "integrity": "sha1-bCpiLvz0fFe7vh4qnDetNseSVFM=",
        "dev": true,
        "requires": {
          "dicer": "0.2.5",
          "readable-stream": "1.1.x"
        },
        "dependencies": {
          "isarray": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
            "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8=",
            "dev": true
          },
          "readable-stream": {
            "version": "1.1.14",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
            "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
            "dev": true,
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.1",
              "isarray": "0.0.1",
              "string_decoder": "~0.10.x"
            }
          },
          "string_decoder": {
            "version": "0.10.31",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
            "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ=",
            "dev": true
          }
        }
      },
      "bytes": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
        "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
      },
      "cachedir": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/cachedir/-/cachedir-2.3.0.tgz",
        "integrity": "sha512-A+Fezp4zxnit6FanDmv9EqXNAi3vt9DWp51/71UEhXukb7QUuvtv9344h91dyAxuTLoSYJFU299qzR3tzwPAhw==",
        "dev": true
      },
      "camelcase": {
        "version": "5.3.1",
        "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
        "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
        "dev": true
      },
      "camelcase-keys": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-2.1.0.tgz",
        "integrity": "sha1-MIvur/3ygRkFHvodkyITyRuPkuc=",
        "requires": {
          "camelcase": "^2.0.0",
          "map-obj": "^1.0.0"
        },
        "dependencies": {
          "camelcase": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-2.1.1.tgz",
            "integrity": "sha1-fB0W1nmhu+WcoCys7PsBHiAfWh8="
          }
        }
      },
      "caseless": {
        "version": "0.12.0",
        "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
        "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw="
      },
      "chai": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/chai/-/chai-4.2.0.tgz",
        "integrity": "sha512-XQU3bhBukrOsQCuwZndwGcCVQHyZi53fQ6Ys1Fym7E4olpIqqZZhhoFJoaKVvV17lWQoXYwgWN2nF5crA8J2jw==",
        "dev": true,
        "requires": {
          "assertion-error": "^1.1.0",
          "check-error": "^1.0.2",
          "deep-eql": "^3.0.1",
          "get-func-name": "^2.0.0",
          "pathval": "^1.1.0",
          "type-detect": "^4.0.5"
        }
      },
      "chalk": {
        "version": "2.4.2",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
        "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
        "requires": {
          "ansi-styles": "^3.2.1",
          "escape-string-regexp": "^1.0.5",
          "supports-color": "^5.3.0"
        }
      },
      "check-error": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/check-error/-/check-error-1.0.2.tgz",
        "integrity": "sha1-V00xLt2Iu13YkS6Sht1sCu1KrII=",
        "dev": true
      },
      "check-more-types": {
        "version": "2.24.0",
        "resolved": "https://registry.npmjs.org/check-more-types/-/check-more-types-2.24.0.tgz",
        "integrity": "sha1-FCD/sQ/URNz8ebQ4kbv//TKoRgA=",
        "dev": true
      },
      "cheerio": {
        "version": "1.0.0-rc.2",
        "resolved": "https://registry.npmjs.org/cheerio/-/cheerio-1.0.0-rc.2.tgz",
        "integrity": "sha1-S59TqBsn5NXawxwP/Qz6A8xoMNs=",
        "requires": {
          "css-select": "~1.2.0",
          "dom-serializer": "~0.1.0",
          "entities": "~1.1.1",
          "htmlparser2": "^3.9.1",
          "lodash": "^4.15.0",
          "parse5": "^3.0.1"
        }
      },
      "chokidar": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.3.0.tgz",
        "integrity": "sha512-dGmKLDdT3Gdl7fBUe8XK+gAtGmzy5Fn0XkkWQuYxGIgWVPPse2CxFA5mtrlD0TOHaHjEUqkWNyP1XdHoJES/4A==",
        "dev": true,
        "requires": {
          "anymatch": "~3.1.1",
          "braces": "~3.0.2",
          "fsevents": "~2.1.1",
          "glob-parent": "~5.1.0",
          "is-binary-path": "~2.1.0",
          "is-glob": "~4.0.1",
          "normalize-path": "~3.0.0",
          "readdirp": "~3.2.0"
        }
      },
      "chownr": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
        "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg=="
      },
      "ci-info": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
        "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
        "dev": true
      },
      "cli-cursor": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-1.0.2.tgz",
        "integrity": "sha1-ZNo/fValRBLll5S9Ytw1KV6PKYc=",
        "dev": true,
        "requires": {
          "restore-cursor": "^1.0.1"
        }
      },
      "cli-table3": {
        "version": "0.5.1",
        "resolved": "https://registry.npmjs.org/cli-table3/-/cli-table3-0.5.1.tgz",
        "integrity": "sha512-7Qg2Jrep1S/+Q3EceiZtQcDPWxhAvBw+ERf1162v4sikJrvojMHFqXt8QIVha8UlH9rgU0BeWPytZ9/TzYqlUw==",
        "dev": true,
        "requires": {
          "colors": "^1.1.2",
          "object-assign": "^4.1.0",
          "string-width": "^2.1.1"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
            "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
            "dev": true
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
            "dev": true
          },
          "string-width": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
            "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
            "dev": true,
            "requires": {
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^4.0.0"
            }
          },
          "strip-ansi": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
            "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
            "dev": true,
            "requires": {
              "ansi-regex": "^3.0.0"
            }
          }
        }
      },
      "cli-truncate": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/cli-truncate/-/cli-truncate-0.2.1.tgz",
        "integrity": "sha1-nxXPuwcFAFNpIWxiasfQWrkN1XQ=",
        "dev": true,
        "requires": {
          "slice-ansi": "0.0.4",
          "string-width": "^1.0.1"
        }
      },
      "cliui": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
        "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
        "dev": true,
        "requires": {
          "string-width": "^3.1.0",
          "strip-ansi": "^5.2.0",
          "wrap-ansi": "^5.1.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
            "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
            "dev": true
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
            "dev": true
          },
          "string-width": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
            "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
            "dev": true,
            "requires": {
              "emoji-regex": "^7.0.1",
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^5.1.0"
            }
          },
          "strip-ansi": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
            "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
            "dev": true,
            "requires": {
              "ansi-regex": "^4.1.0"
            }
          },
          "wrap-ansi": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
            "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
            "dev": true,
            "requires": {
              "ansi-styles": "^3.2.0",
              "string-width": "^3.0.0",
              "strip-ansi": "^5.0.0"
            }
          }
        }
      },
      "code-point-at": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
        "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
      },
      "color-convert": {
        "version": "1.9.3",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
        "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
        "requires": {
          "color-name": "1.1.3"
        }
      },
      "color-logger": {
        "version": "0.0.6",
        "resolved": "https://registry.npmjs.org/color-logger/-/color-logger-0.0.6.tgz",
        "integrity": "sha1-5WJF7ymCJlcRDHy3WpzXhstp7Rs="
      },
      "color-name": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
        "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
      },
      "colors": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/colors/-/colors-1.4.0.tgz",
        "integrity": "sha512-a+UqTh4kgZg/SlGvfbzDHpgRu7AAQOmmqRHJnxhRZICKFUT91brVhNNt58CMWU9PsBbv3PDCZUHbVxuDiH2mtA==",
        "dev": true,
        "optional": true
      },
      "combined-stream": {
        "version": "1.0.8",
        "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
        "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
        "requires": {
          "delayed-stream": "~1.0.0"
        }
      },
      "commander": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.0.tgz",
        "integrity": "sha512-NIQrwvv9V39FHgGFm36+U9SMQzbiHvU79k+iADraJTpmrFFfx7Ds0IvDoAdZsDrknlkRk14OYoWXb57uTh7/sw==",
        "dev": true
      },
      "common-tags": {
        "version": "1.8.0",
        "resolved": "https://registry.npmjs.org/common-tags/-/common-tags-1.8.0.tgz",
        "integrity": "sha512-6P6g0uetGpW/sdyUy/iQQCbFF0kWVMSIVSyYz7Zgjcgh8mgw8PQzDNZeyZ5DQ2gM7LBoZPHmnjz8rUthkBG5tw==",
        "dev": true
      },
      "component-emitter": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
        "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
        "dev": true
      },
      "concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
      },
      "concat-stream": {
        "version": "1.6.2",
        "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
        "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
        "dev": true,
        "requires": {
          "buffer-from": "^1.0.0",
          "inherits": "^2.0.3",
          "readable-stream": "^2.2.2",
          "typedarray": "^0.0.6"
        }
      },
      "console-control-strings": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
        "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4="
      },
      "content-disposition": {
        "version": "0.5.3",
        "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
        "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
        "requires": {
          "safe-buffer": "5.1.2"
        }
      },
      "content-type": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
        "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
      },
      "cookie": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
        "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg=="
      },
      "cookie-parser": {
        "version": "1.4.5",
        "resolved": "https://registry.npmjs.org/cookie-parser/-/cookie-parser-1.4.5.tgz",
        "integrity": "sha512-f13bPUj/gG/5mDr+xLmSxxDsB9DQiTIfhJS/sqjrmfAWiAN+x2O4i/XguTL9yDZ+/IFDanJ+5x7hC4CXT9Tdzw==",
        "requires": {
          "cookie": "0.4.0",
          "cookie-signature": "1.0.6"
        }
      },
      "cookie-signature": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
        "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
      },
      "cookiejar": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/cookiejar/-/cookiejar-2.1.2.tgz",
        "integrity": "sha512-Mw+adcfzPxcPeI+0WlvRrr/3lGVO0bD75SxX6811cxSh1Wbxx7xZBGK1eVtDf6si8rg2lhnUjsVLMFMfbRIuwA==",
        "dev": true
      },
      "core-js": {
        "version": "2.6.11",
        "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.11.tgz",
        "integrity": "sha512-5wjnpaT/3dV+XB4borEsnAYQchn00XSgTAWKDkEqv+K8KevjbzmofK6hfJ9TZIlpj2N0xQpazy7PiRQiWHqzWg=="
      },
      "core-util-is": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
        "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
      },
      "cross-spawn": {
        "version": "6.0.5",
        "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
        "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
        "dev": true,
        "requires": {
          "nice-try": "^1.0.4",
          "path-key": "^2.0.1",
          "semver": "^5.5.0",
          "shebang-command": "^1.2.0",
          "which": "^1.2.9"
        }
      },
      "css-select": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/css-select/-/css-select-1.2.0.tgz",
        "integrity": "sha1-KzoRBTnFNV8c2NMUYj6HCxIeyFg=",
        "requires": {
          "boolbase": "~1.0.0",
          "css-what": "2.1",
          "domutils": "1.5.1",
          "nth-check": "~1.0.1"
        }
      },
      "css-what": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/css-what/-/css-what-2.1.3.tgz",
        "integrity": "sha512-a+EPoD+uZiNfh+5fxw2nO9QwFa6nJe2Or35fGY6Ipw1R3R4AGz1d1TEZrCegvw2YTmZ0jXirGYlzxxpYSHwpEg=="
      },
      "cssom": {
        "version": "0.3.8",
        "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
        "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",
        "optional": true
      },
      "cssstyle": {
        "version": "0.2.37",
        "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-0.2.37.tgz",
        "integrity": "sha1-VBCXI0yyUTyDzu06zdwn/yeYfVQ=",
        "optional": true,
        "requires": {
          "cssom": "0.3.x"
        }
      },
      "currently-unhandled": {
        "version": "0.4.1",
        "resolved": "https://registry.npmjs.org/currently-unhandled/-/currently-unhandled-0.4.1.tgz",
        "integrity": "sha1-mI3zP+qxke95mmE2nddsF635V+o=",
        "requires": {
          "array-find-index": "^1.0.1"
        }
      },
      "cypress": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/cypress/-/cypress-4.2.0.tgz",
        "integrity": "sha512-8LdreL91S/QiTCLYLNbIjLL8Ht4fJmu/4HGLxUI20Tc7JSfqEfCmXELrRfuPT0kjosJwJJZacdSji9XSRkPKUw==",
        "dev": true,
        "requires": {
          "@cypress/listr-verbose-renderer": "0.4.1",
          "@cypress/xvfb": "1.2.4",
          "@types/sizzle": "2.3.2",
          "arch": "2.1.1",
          "bluebird": "3.7.2",
          "cachedir": "2.3.0",
          "chalk": "2.4.2",
          "check-more-types": "2.24.0",
          "cli-table3": "0.5.1",
          "commander": "4.1.0",
          "common-tags": "1.8.0",
          "debug": "4.1.1",
          "eventemitter2": "4.1.2",
          "execa": "1.0.0",
          "executable": "4.1.1",
          "extract-zip": "1.6.7",
          "fs-extra": "8.1.0",
          "getos": "3.1.4",
          "is-ci": "2.0.0",
          "is-installed-globally": "0.1.0",
          "lazy-ass": "1.6.0",
          "listr": "0.14.3",
          "lodash": "4.17.15",
          "log-symbols": "3.0.0",
          "minimist": "1.2.2",
          "moment": "2.24.0",
          "ospath": "1.2.2",
          "pretty-bytes": "5.3.0",
          "ramda": "0.26.1",
          "request": "github:cypress-io/request#b5af0d1fa47eec97ba980cde90a13e69a2afcd16",
          "request-progress": "3.0.0",
          "supports-color": "7.1.0",
          "tmp": "0.1.0",
          "untildify": "4.0.0",
          "url": "0.11.0",
          "yauzl": "2.10.0"
        },
        "dependencies": {
          "bluebird": {
            "version": "3.7.2",
            "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz",
            "integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg==",
            "dev": true
          },
          "debug": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
            "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
            "dev": true,
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
            "dev": true
          },
          "minimist": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.2.tgz",
            "integrity": "sha512-rIqbOrKb8GJmx/5bc2M0QchhUouMXSpd1RTclXsB41JdL+VtnojfaJR+h7F9k18/4kHUsBFgk80Uk+q569vjPA==",
            "dev": true
          },
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
            "dev": true
          },
          "qs": {
            "version": "6.5.2",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
            "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
            "dev": true
          },
          "request": {
            "version": "github:cypress-io/request#b5af0d1fa47eec97ba980cde90a13e69a2afcd16",
            "from": "github:cypress-io/request#b5af0d1fa47eec97ba980cde90a13e69a2afcd16",
            "dev": true,
            "requires": {
              "aws-sign2": "~0.7.0",
              "aws4": "^1.8.0",
              "caseless": "~0.12.0",
              "combined-stream": "~1.0.6",
              "extend": "~3.0.2",
              "forever-agent": "~0.6.1",
              "form-data": "~2.3.2",
              "har-validator": "~5.1.3",
              "http-signature": "~1.2.0",
              "is-typedarray": "~1.0.0",
              "isstream": "~0.1.2",
              "json-stringify-safe": "~5.0.1",
              "mime-types": "~2.1.19",
              "oauth-sign": "~0.9.0",
              "performance-now": "^2.1.0",
              "qs": "~6.5.2",
              "safe-buffer": "^5.1.2",
              "tough-cookie": "~2.5.0",
              "tunnel-agent": "^0.6.0",
              "uuid": "^3.3.2"
            }
          },
          "supports-color": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
            "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
            "dev": true,
            "requires": {
              "has-flag": "^4.0.0"
            }
          },
          "tough-cookie": {
            "version": "2.5.0",
            "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
            "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
            "dev": true,
            "requires": {
              "psl": "^1.1.28",
              "punycode": "^2.1.1"
            }
          }
        }
      },
      "dashdash": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
        "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
        "requires": {
          "assert-plus": "^1.0.0"
        }
      },
      "date-fns": {
        "version": "1.30.1",
        "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-1.30.1.tgz",
        "integrity": "sha512-hBSVCvSmWC+QypYObzwGOd9wqdDpOt+0wl0KbU+R+uuZBS1jN8VsD1ss3irQDknRj5NvxiTF6oj/nDRnN/UQNw==",
        "dev": true
      },
      "debug": {
        "version": "2.6.9",
        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
        "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
        "requires": {
          "ms": "2.0.0"
        }
      },
      "decamelize": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
        "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA="
      },
      "deep-eql": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-3.0.1.tgz",
        "integrity": "sha512-+QeIQyN5ZuO+3Uk5DYh6/1eKO0m0YmJFGNmFHGACpf1ClL1nmlV/p4gNgbl2pJGxgXb4faqo6UE+M5ACEMyVcw==",
        "dev": true,
        "requires": {
          "type-detect": "^4.0.0"
        }
      },
      "deep-extend": {
        "version": "0.6.0",
        "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
        "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA=="
      },
      "deep-is": {
        "version": "0.1.3",
        "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
        "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
        "optional": true
      },
      "deepmerge": {
        "version": "4.2.2",
        "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz",
        "integrity": "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg=="
      },
      "define-properties": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
        "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
        "dev": true,
        "requires": {
          "object-keys": "^1.0.12"
        }
      },
      "delayed-stream": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
        "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="
      },
      "delegates": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
        "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o="
      },
      "denque": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/denque/-/denque-1.4.1.tgz",
        "integrity": "sha512-OfzPuSZKGcgr96rf1oODnfjqBFmr1DVoc/TrItj3Ohe0Ah1C5WX5Baquw/9U9KovnQ88EqmJbD66rKYUQYN1tQ=="
      },
      "depd": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
        "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
      },
      "destroy": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
        "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
      },
      "detect-indent": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-4.0.0.tgz",
        "integrity": "sha1-920GQ1LN9Docts5hnE7jqUdd4gg=",
        "requires": {
          "repeating": "^2.0.0"
        }
      },
      "detect-libc": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
        "integrity": "sha1-+hN8S9aY7fVc1c0CrFWfkaTEups="
      },
      "dicer": {
        "version": "0.2.5",
        "resolved": "https://registry.npmjs.org/dicer/-/dicer-0.2.5.tgz",
        "integrity": "sha1-WZbAhrszIYyBLAkL3cCc0S+stw8=",
        "dev": true,
        "requires": {
          "readable-stream": "1.1.x",
          "streamsearch": "0.1.2"
        },
        "dependencies": {
          "isarray": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
            "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8=",
            "dev": true
          },
          "readable-stream": {
            "version": "1.1.14",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
            "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
            "dev": true,
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.1",
              "isarray": "0.0.1",
              "string_decoder": "~0.10.x"
            }
          },
          "string_decoder": {
            "version": "0.10.31",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
            "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ=",
            "dev": true
          }
        }
      },
      "diff": {
        "version": "3.5.0",
        "resolved": "https://registry.npmjs.org/diff/-/diff-3.5.0.tgz",
        "integrity": "sha512-A46qtFgd+g7pDZinpnwiRJtxbC1hpgf0uzP3iG89scHk0AUC7A1TGxf5OiiOUv/JMZR8GOt8hL900hV0bOy5xA==",
        "dev": true
      },
      "dom-serializer": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.1.1.tgz",
        "integrity": "sha512-l0IU0pPzLWSHBcieZbpOKgkIn3ts3vAh7ZuFyXNwJxJXk/c4Gwj9xaTJwIDVQCXawWD0qb3IzMGH5rglQaO0XA==",
        "requires": {
          "domelementtype": "^1.3.0",
          "entities": "^1.1.1"
        }
      },
      "domelementtype": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
        "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w=="
      },
      "domhandler": {
        "version": "2.4.2",
        "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.4.2.tgz",
        "integrity": "sha512-JiK04h0Ht5u/80fdLMCEmV4zkNh2BcoMFBmZ/91WtYZ8qVXSKjiw7fXMgFPnHcSZgOo3XdinHvmnDUeMf5R4wA==",
        "requires": {
          "domelementtype": "1"
        }
      },
      "domutils": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.5.1.tgz",
        "integrity": "sha1-3NhIiib1Y9YQeeSMn3t+Mjc2gs8=",
        "requires": {
          "dom-serializer": "0",
          "domelementtype": "1"
        }
      },
      "dotenv": {
        "version": "8.2.0",
        "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-8.2.0.tgz",
        "integrity": "sha512-8sJ78ElpbDJBHNeBzUbUVLsqKdccaa/BXF1uPTw3GrvQTBgrQrtObr2mUrE38vzYd8cEv+m/JBfDLioYcfXoaw=="
      },
      "ecc-jsbn": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
        "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
        "requires": {
          "jsbn": "~0.1.0",
          "safer-buffer": "^2.1.0"
        }
      },
      "ecdsa-sig-formatter": {
        "version": "1.0.11",
        "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
        "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
        "requires": {
          "safe-buffer": "^5.0.1"
        }
      },
      "ee-first": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
        "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
      },
      "ejs": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/ejs/-/ejs-3.0.1.tgz",
        "integrity": "sha512-cuIMtJwxvzumSAkqaaoGY/L6Fc/t6YvoP9/VIaK0V/CyqKLEQ8sqODmYfy/cjXEdZ9+OOL8TecbJu+1RsofGDw=="
      },
      "elegant-spinner": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/elegant-spinner/-/elegant-spinner-1.0.1.tgz",
        "integrity": "sha1-2wQ1IcldfjA/2PNFvtwzSc+wcp4=",
        "dev": true
      },
      "emoji-regex": {
        "version": "7.0.3",
        "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
        "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
        "dev": true
      },
      "encodeurl": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
        "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
      },
      "end-of-stream": {
        "version": "1.4.4",
        "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
        "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
        "dev": true,
        "requires": {
          "once": "^1.4.0"
        }
      },
      "entities": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/entities/-/entities-1.1.2.tgz",
        "integrity": "sha512-f2LZMYl1Fzu7YSBKg+RoROelpOaNrcGmE9AZubeDfrCEia483oW4MI4VyFd5VNHIgQ/7qm1I0wUHK1eJnn2y2w=="
      },
      "error-ex": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
        "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
        "requires": {
          "is-arrayish": "^0.2.1"
        }
      },
      "es-abstract": {
        "version": "1.17.4",
        "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.4.tgz",
        "integrity": "sha512-Ae3um/gb8F0mui/jPL+QiqmglkUsaQf7FwBEHYIFkztkneosu9imhqHpBzQ3h1vit8t5iQ74t6PEVvphBZiuiQ==",
        "dev": true,
        "requires": {
          "es-to-primitive": "^1.2.1",
          "function-bind": "^1.1.1",
          "has": "^1.0.3",
          "has-symbols": "^1.0.1",
          "is-callable": "^1.1.5",
          "is-regex": "^1.0.5",
          "object-inspect": "^1.7.0",
          "object-keys": "^1.1.1",
          "object.assign": "^4.1.0",
          "string.prototype.trimleft": "^2.1.1",
          "string.prototype.trimright": "^2.1.1"
        }
      },
      "es-to-primitive": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
        "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
        "dev": true,
        "requires": {
          "is-callable": "^1.1.4",
          "is-date-object": "^1.0.1",
          "is-symbol": "^1.0.2"
        }
      },
      "escape-html": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
        "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
      },
      "escape-string-regexp": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
        "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
      },
      "escodegen": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.1.tgz",
        "integrity": "sha512-Bmt7NcRySdIfNPfU2ZoXDrrXsG9ZjvDxcAlMfDUgRBjLOWTuIACXPBFJH7Z+cLb40JeQco5toikyc9t9P8E9SQ==",
        "optional": true,
        "requires": {
          "esprima": "^4.0.1",
          "estraverse": "^4.2.0",
          "esutils": "^2.0.2",
          "optionator": "^0.8.1",
          "source-map": "~0.6.1"
        },
        "dependencies": {
          "source-map": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
            "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
            "optional": true
          }
        }
      },
      "esdoc": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/esdoc/-/esdoc-1.1.0.tgz",
        "integrity": "sha512-vsUcp52XJkOWg9m1vDYplGZN2iDzvmjDL5M/Mp8qkoDG3p2s0yIQCIjKR5wfPBaM3eV14a6zhQNYiNTCVzPnxA==",
        "requires": {
          "babel-generator": "6.26.1",
          "babel-traverse": "6.26.0",
          "babylon": "6.18.0",
          "cheerio": "1.0.0-rc.2",
          "color-logger": "0.0.6",
          "escape-html": "1.0.3",
          "fs-extra": "5.0.0",
          "ice-cap": "0.0.4",
          "marked": "0.3.19",
          "minimist": "1.2.0",
          "taffydb": "2.7.3"
        },
        "dependencies": {
          "fs-extra": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-5.0.0.tgz",
            "integrity": "sha512-66Pm4RYbjzdyeuqudYqhFiNBbCIuI9kgRqLPSHIlXHidW8NIQtVdkM1yeZ4lXwuhbTETv3EUGMNHAAw6hiundQ==",
            "requires": {
              "graceful-fs": "^4.1.2",
              "jsonfile": "^4.0.0",
              "universalify": "^0.1.0"
            }
          }
        }
      },
      "esdoc-coverage-plugin": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/esdoc-coverage-plugin/-/esdoc-coverage-plugin-1.1.0.tgz",
        "integrity": "sha1-OGmGnNf4eJH5cmJXh2laKZrs5Fw="
      },
      "esdoc-type-inference-plugin": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/esdoc-type-inference-plugin/-/esdoc-type-inference-plugin-1.0.2.tgz",
        "integrity": "sha512-tMIcEHNe1uhUGA7lT1UTWc9hs2dzthnTgmqXpmeUhurk7fL2tinvoH+IVvG/sLROzwOGZQS9zW/F9KWnpMzLIQ=="
      },
      "esprima": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
        "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
      },
      "estraverse": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
        "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
        "optional": true
      },
      "esutils": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
        "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
      },
      "etag": {
        "version": "1.8.1",
        "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
        "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
      },
      "eventemitter2": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/eventemitter2/-/eventemitter2-4.1.2.tgz",
        "integrity": "sha1-DhqEd6+CGm7zmVsxG/dMI6UkfxU=",
        "dev": true
      },
      "execa": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/execa/-/execa-1.0.0.tgz",
        "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
        "dev": true,
        "requires": {
          "cross-spawn": "^6.0.0",
          "get-stream": "^4.0.0",
          "is-stream": "^1.1.0",
          "npm-run-path": "^2.0.0",
          "p-finally": "^1.0.0",
          "signal-exit": "^3.0.0",
          "strip-eof": "^1.0.0"
        }
      },
      "executable": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/executable/-/executable-4.1.1.tgz",
        "integrity": "sha512-8iA79xD3uAch729dUG8xaaBBFGaEa0wdD2VkYLFHwlqosEj/jT66AzcreRDSgV7ehnNLBW2WR5jIXwGKjVdTLg==",
        "dev": true,
        "requires": {
          "pify": "^2.2.0"
        },
        "dependencies": {
          "pify": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
            "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
            "dev": true
          }
        }
      },
      "exit-hook": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/exit-hook/-/exit-hook-1.1.1.tgz",
        "integrity": "sha1-8FyiM7SMBdVP/wd2XfhQfpXAL/g=",
        "dev": true
      },
      "express": {
        "version": "4.17.1",
        "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
        "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
        "requires": {
          "accepts": "~1.3.7",
          "array-flatten": "1.1.1",
          "body-parser": "1.19.0",
          "content-disposition": "0.5.3",
          "content-type": "~1.0.4",
          "cookie": "0.4.0",
          "cookie-signature": "1.0.6",
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "finalhandler": "~1.1.2",
          "fresh": "0.5.2",
          "merge-descriptors": "1.0.1",
          "methods": "~1.1.2",
          "on-finished": "~2.3.0",
          "parseurl": "~1.3.3",
          "path-to-regexp": "0.1.7",
          "proxy-addr": "~2.0.5",
          "qs": "6.7.0",
          "range-parser": "~1.2.1",
          "safe-buffer": "5.1.2",
          "send": "0.17.1",
          "serve-static": "1.14.1",
          "setprototypeof": "1.1.1",
          "statuses": "~1.5.0",
          "type-is": "~1.6.18",
          "utils-merge": "1.0.1",
          "vary": "~1.1.2"
        }
      },
      "express-joi-validation": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/express-joi-validation/-/express-joi-validation-4.0.3.tgz",
        "integrity": "sha512-XnEyhlllurczZDx1vLPWnaohTAQzxlvaP7ifEbvRf2zvYC5C5ZZrgFH75g0/XcL7OuaZ0XlVtB0J0E/R0O1L4A=="
      },
      "express-validator": {
        "version": "6.4.0",
        "resolved": "https://registry.npmjs.org/express-validator/-/express-validator-6.4.0.tgz",
        "integrity": "sha512-Fs+x0yDOSiUV+o5jIRloMyBxqpSzJiMM8KQW1IRVv2l49F6ATU0F9uPa+3K6vXNlLlhUjauv2FCGLFPMaNr24w==",
        "requires": {
          "lodash": "^4.17.15",
          "validator": "^12.1.0"
        }
      },
      "extend": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
        "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="
      },
      "extract-zip": {
        "version": "1.6.7",
        "resolved": "https://registry.npmjs.org/extract-zip/-/extract-zip-1.6.7.tgz",
        "integrity": "sha1-qEC0uK9kAyZMjbV/Txp0Mz74H+k=",
        "dev": true,
        "requires": {
          "concat-stream": "1.6.2",
          "debug": "2.6.9",
          "mkdirp": "0.5.1",
          "yauzl": "2.4.1"
        },
        "dependencies": {
          "yauzl": {
            "version": "2.4.1",
            "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.4.1.tgz",
            "integrity": "sha1-lSj0QtqxsihOWLQ3m7GU4i4MQAU=",
            "dev": true,
            "requires": {
              "fd-slicer": "~1.0.1"
            }
          }
        }
      },
      "extsprintf": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
        "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU="
      },
      "fast-deep-equal": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.1.tgz",
        "integrity": "sha512-8UEa58QDLauDNfpbrX55Q9jrGHThw2ZMdOky5Gl1CDtVeJDPVrG4Jxx1N8jw2gkWaff5UUuX1KJd+9zGe2B+ZA=="
      },
      "fast-json-stable-stringify": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
        "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
      },
      "fast-levenshtein": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
        "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
        "optional": true
      },
      "fd-slicer": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.0.1.tgz",
        "integrity": "sha1-i1vL2ewyfFBBv5qwI/1nUPEXfmU=",
        "dev": true,
        "requires": {
          "pend": "~1.2.0"
        }
      },
      "figures": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/figures/-/figures-1.7.0.tgz",
        "integrity": "sha1-y+Hjr/zxzUS4DK3+0o3Hk6lwHS4=",
        "dev": true,
        "requires": {
          "escape-string-regexp": "^1.0.5",
          "object-assign": "^4.1.0"
        }
      },
      "fill-range": {
        "version": "7.0.1",
        "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
        "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
        "dev": true,
        "requires": {
          "to-regex-range": "^5.0.1"
        }
      },
      "finalhandler": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
        "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
        "requires": {
          "debug": "2.6.9",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "on-finished": "~2.3.0",
          "parseurl": "~1.3.3",
          "statuses": "~1.5.0",
          "unpipe": "~1.0.0"
        }
      },
      "find-up": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
        "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
        "dev": true,
        "requires": {
          "locate-path": "^3.0.0"
        }
      },
      "flat": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/flat/-/flat-4.1.0.tgz",
        "integrity": "sha512-Px/TiLIznH7gEDlPXcUD4KnBusa6kR6ayRUVcnEAbreRIuhkqow/mun59BuRXwoYk7ZQOLW1ZM05ilIvK38hFw==",
        "dev": true,
        "requires": {
          "is-buffer": "~2.0.3"
        }
      },
      "forever-agent": {
        "version": "0.6.1",
        "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
        "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE="
      },
      "form-data": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
        "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
        "requires": {
          "asynckit": "^0.4.0",
          "combined-stream": "^1.0.6",
          "mime-types": "^2.1.12"
        }
      },
      "formidable": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/formidable/-/formidable-1.2.2.tgz",
        "integrity": "sha512-V8gLm+41I/8kguQ4/o1D3RIHRmhYFG4pnNyonvua+40rqcEmT4+V71yaZ3B457xbbgCsCfjSPi65u/W6vK1U5Q==",
        "dev": true
      },
      "forwarded": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
        "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
      },
      "fresh": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
        "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
      },
      "fs-extra": {
        "version": "8.1.0",
        "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
        "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
        "dev": true,
        "requires": {
          "graceful-fs": "^4.2.0",
          "jsonfile": "^4.0.0",
          "universalify": "^0.1.0"
        }
      },
      "fs-minipass": {
        "version": "1.2.7",
        "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-1.2.7.tgz",
        "integrity": "sha512-GWSSJGFy4e9GUeCcbIkED+bgAoFyj7XF1mV8rma3QW4NIqX9Kyx79N/PF61H5udOV3aY1IaMLs6pGbH71nlCTA==",
        "requires": {
          "minipass": "^2.6.0"
        }
      },
      "fs.realpath": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
      },
      "fsevents": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.1.2.tgz",
        "integrity": "sha512-R4wDiBwZ0KzpgOWetKDug1FZcYhqYnUYKtfZYt4mD5SBz76q0KR4Q9o7GIPamsVPGmW3EYPPJ0dOOjvx32ldZA==",
        "dev": true,
        "optional": true
      },
      "fstream": {
        "version": "1.0.12",
        "resolved": "https://registry.npmjs.org/fstream/-/fstream-1.0.12.tgz",
        "integrity": "sha512-WvJ193OHa0GHPEL+AycEJgxvBEwyfRkN1vhjca23OaPVMCaLCXTd5qAu82AjTcgP1UJmytkOKb63Ypde7raDIg==",
        "requires": {
          "graceful-fs": "^4.1.2",
          "inherits": "~2.0.0",
          "mkdirp": ">=0.5 0",
          "rimraf": "2"
        }
      },
      "function-bind": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
        "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
        "dev": true
      },
      "gauge": {
        "version": "2.7.4",
        "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
        "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
        "requires": {
          "aproba": "^1.0.3",
          "console-control-strings": "^1.0.0",
          "has-unicode": "^2.0.0",
          "object-assign": "^4.1.0",
          "signal-exit": "^3.0.0",
          "string-width": "^1.0.1",
          "strip-ansi": "^3.0.1",
          "wide-align": "^1.1.0"
        }
      },
      "gaze": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/gaze/-/gaze-1.1.3.tgz",
        "integrity": "sha512-BRdNm8hbWzFzWHERTrejLqwHDfS4GibPoq5wjTPIoJHoBtKGPg3xAFfxmM+9ztbXelxcf2hwQcaz1PtmFeue8g==",
        "requires": {
          "globule": "^1.0.0"
        }
      },
      "get-caller-file": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
        "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
        "dev": true
      },
      "get-func-name": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/get-func-name/-/get-func-name-2.0.0.tgz",
        "integrity": "sha1-6td0q+5y4gQJQzoGY2YCPdaIekE=",
        "dev": true
      },
      "get-stdin": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz",
        "integrity": "sha1-uWjGsKBDhDJJAui/Gl3zJXmkUP4="
      },
      "get-stream": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
        "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
        "dev": true,
        "requires": {
          "pump": "^3.0.0"
        }
      },
      "getos": {
        "version": "3.1.4",
        "resolved": "https://registry.npmjs.org/getos/-/getos-3.1.4.tgz",
        "integrity": "sha512-UORPzguEB/7UG5hqiZai8f0vQ7hzynMQyJLxStoQ8dPGAcmgsfXOPA4iE/fGtweHYkK+z4zc9V0g+CIFRf5HYw==",
        "dev": true,
        "requires": {
          "async": "^3.1.0"
        }
      },
      "getpass": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
        "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
        "requires": {
          "assert-plus": "^1.0.0"
        }
      },
      "glob": {
        "version": "7.1.6",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
        "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
        "requires": {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0"
        }
      },
      "glob-parent": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.0.tgz",
        "integrity": "sha512-qjtRgnIVmOfnKUE3NJAQEdk+lKrxfw8t5ke7SXtfMTHcjsBfOfWXCQfdb30zfDoZQ2IRSIiidmjtbHZPZ++Ihw==",
        "dev": true,
        "requires": {
          "is-glob": "^4.0.1"
        }
      },
      "global-dirs": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-0.1.1.tgz",
        "integrity": "sha1-sxnA3UYH81PzvpzKTHL8FIxJ9EU=",
        "dev": true,
        "requires": {
          "ini": "^1.3.4"
        }
      },
      "globals": {
        "version": "9.18.0",
        "resolved": "https://registry.npmjs.org/globals/-/globals-9.18.0.tgz",
        "integrity": "sha512-S0nG3CLEQiY/ILxqtztTWH/3iRRdyBLw6KMDxnKMchrtbj2OFmehVh0WUCfW3DUrIgx/qFrJPICrq4Z4sTR9UQ=="
      },
      "globule": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/globule/-/globule-1.3.1.tgz",
        "integrity": "sha512-OVyWOHgw29yosRHCHo7NncwR1hW5ew0W/UrvtwvjefVJeQ26q4/8r8FmPsSF1hJ93IgWkyv16pCTz6WblMzm/g==",
        "requires": {
          "glob": "~7.1.1",
          "lodash": "~4.17.12",
          "minimatch": "~3.0.2"
        }
      },
      "graceful-fs": {
        "version": "4.2.3",
        "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.3.tgz",
        "integrity": "sha512-a30VEBm4PEdx1dRB7MFK7BejejvCvBronbLjht+sHuGYj8PHs7M/5Z+rt5lw551vZ7yfTCj4Vuyy3mSJytDWRQ=="
      },
      "growl": {
        "version": "1.10.5",
        "resolved": "https://registry.npmjs.org/growl/-/growl-1.10.5.tgz",
        "integrity": "sha512-qBr4OuELkhPenW6goKVXiv47US3clb3/IbuWF9KNKEijAy9oeHxU9IgzjvJhHkUzhaj7rOUD7+YGWqUjLp5oSA==",
        "dev": true
      },
      "har-schema": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
        "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI="
      },
      "har-validator": {
        "version": "5.1.3",
        "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.3.tgz",
        "integrity": "sha512-sNvOCzEQNr/qrvJgc3UG/kD4QtlHycrzwS+6mfTrrSq97BvaYcPZZI1ZSqGSPR73Cxn4LKTD4PttRwfU7jWq5g==",
        "requires": {
          "ajv": "^6.5.5",
          "har-schema": "^2.0.0"
        }
      },
      "has": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
        "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
        "dev": true,
        "requires": {
          "function-bind": "^1.1.1"
        }
      },
      "has-ansi": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
        "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
        "requires": {
          "ansi-regex": "^2.0.0"
        }
      },
      "has-flag": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
        "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
      },
      "has-symbols": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz",
        "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg==",
        "dev": true
      },
      "has-unicode": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
        "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk="
      },
      "he": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
        "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
        "dev": true
      },
      "hosted-git-info": {
        "version": "2.8.7",
        "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.7.tgz",
        "integrity": "sha512-ChkjQtKJ3GI6SsI4O5jwr8q8EPrWCnxuc4Tbx+vRI5x6mDOpjKKltNo1lRlszw3xwgTOSns1ZRBiMmmwpcvLxg=="
      },
      "htmlparser2": {
        "version": "3.10.1",
        "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.10.1.tgz",
        "integrity": "sha512-IgieNijUMbkDovyoKObU1DUhm1iwNYE/fuifEoEHfd1oZKZDaONBSkal7Y01shxsM49R4XaMdGez3WnF9UfiCQ==",
        "requires": {
          "domelementtype": "^1.3.1",
          "domhandler": "^2.3.0",
          "domutils": "^1.5.1",
          "entities": "^1.1.1",
          "inherits": "^2.0.1",
          "readable-stream": "^3.1.1"
        },
        "dependencies": {
          "readable-stream": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
            "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
            "requires": {
              "inherits": "^2.0.3",
              "string_decoder": "^1.1.1",
              "util-deprecate": "^1.0.1"
            }
          }
        }
      },
      "http-errors": {
        "version": "1.7.2",
        "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
        "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
        "requires": {
          "depd": "~1.1.2",
          "inherits": "2.0.3",
          "setprototypeof": "1.1.1",
          "statuses": ">= 1.5.0 < 2",
          "toidentifier": "1.0.0"
        }
      },
      "http-signature": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
        "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
        "requires": {
          "assert-plus": "^1.0.0",
          "jsprim": "^1.2.2",
          "sshpk": "^1.7.0"
        }
      },
      "ice-cap": {
        "version": "0.0.4",
        "resolved": "https://registry.npmjs.org/ice-cap/-/ice-cap-0.0.4.tgz",
        "integrity": "sha1-im0xq0ysjUtW3k+pRt8zUlYbbhg=",
        "requires": {
          "cheerio": "0.20.0",
          "color-logger": "0.0.3"
        },
        "dependencies": {
          "cheerio": {
            "version": "0.20.0",
            "resolved": "https://registry.npmjs.org/cheerio/-/cheerio-0.20.0.tgz",
            "integrity": "sha1-XHEPK6uVZTJyhCugHG6mGzVF7DU=",
            "requires": {
              "css-select": "~1.2.0",
              "dom-serializer": "~0.1.0",
              "entities": "~1.1.1",
              "htmlparser2": "~3.8.1",
              "jsdom": "^7.0.2",
              "lodash": "^4.1.0"
            }
          },
          "color-logger": {
            "version": "0.0.3",
            "resolved": "https://registry.npmjs.org/color-logger/-/color-logger-0.0.3.tgz",
            "integrity": "sha1-2bIt0dlz4Waxi/MT+fSBu6TfIBg="
          },
          "domhandler": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.3.0.tgz",
            "integrity": "sha1-LeWaCCLVAn+r/28DLCsloqir5zg=",
            "requires": {
              "domelementtype": "1"
            }
          },
          "htmlparser2": {
            "version": "3.8.3",
            "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.8.3.tgz",
            "integrity": "sha1-mWwosZFRaovoZQGn15dX5ccMEGg=",
            "requires": {
              "domelementtype": "1",
              "domhandler": "2.3",
              "domutils": "1.5",
              "entities": "1.0",
              "readable-stream": "1.1"
            },
            "dependencies": {
              "entities": {
                "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/entities/-/entities-1.0.0.tgz",
                "integrity": "sha1-sph6o4ITR/zeZCsk/fyeT7cSvyY="
              }
            }
          },
          "isarray": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
            "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
          },
          "readable-stream": {
            "version": "1.1.14",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
            "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.1",
              "isarray": "0.0.1",
              "string_decoder": "~0.10.x"
            }
          },
          "string_decoder": {
            "version": "0.10.31",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
            "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
          }
        }
      },
      "iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "requires": {
          "safer-buffer": ">= 2.1.2 < 3"
        }
      },
      "ignore-walk": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-3.0.3.tgz",
        "integrity": "sha512-m7o6xuOaT1aqheYHKf8W6J5pYH85ZI9w077erOzLje3JsB1gkafkAhHHY19dqjulgIZHFm32Cp5uNZgcQqdJKw==",
        "requires": {
          "minimatch": "^3.0.4"
        }
      },
      "in-publish": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/in-publish/-/in-publish-2.0.1.tgz",
        "integrity": "sha512-oDM0kUSNFC31ShNxHKUyfZKy8ZeXZBWMjMdZHKLOk13uvT27VTL/QzRGfRUcevJhpkZAvlhPYuXkF7eNWrtyxQ=="
      },
      "indent-string": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-3.2.0.tgz",
        "integrity": "sha1-Sl/W0nzDMvN+VBmlBNu4NxBckok=",
        "dev": true
      },
      "inflight": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "requires": {
          "once": "^1.3.0",
          "wrappy": "1"
        }
      },
      "inherits": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
        "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
      },
      "ini": {
        "version": "1.3.5",
        "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.5.tgz",
        "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw=="
      },
      "invariant": {
        "version": "2.2.4",
        "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
        "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
        "requires": {
          "loose-envify": "^1.0.0"
        }
      },
      "invert-kv": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",
        "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY="
      },
      "ipaddr.js": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
        "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
      },
      "is-arrayish": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
        "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
      },
      "is-binary-path": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
        "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
        "dev": true,
        "requires": {
          "binary-extensions": "^2.0.0"
        }
      },
      "is-buffer": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-2.0.4.tgz",
        "integrity": "sha512-Kq1rokWXOPXWuaMAqZiJW4XxsmD9zGx9q4aePabbn3qCRGedtH7Cm+zV8WETitMfu1wdh+Rvd6w5egwSngUX2A==",
        "dev": true
      },
      "is-callable": {
        "version": "1.1.5",
        "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.1.5.tgz",
        "integrity": "sha512-ESKv5sMCJB2jnHTWZ3O5itG+O128Hsus4K4Qh1h2/cgn2vbgnLSVqfV46AeJA9D5EeeLa9w81KUXMtn34zhX+Q==",
        "dev": true
      },
      "is-ci": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
        "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
        "dev": true,
        "requires": {
          "ci-info": "^2.0.0"
        }
      },
      "is-date-object": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
        "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==",
        "dev": true
      },
      "is-extglob": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
        "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
        "dev": true
      },
      "is-finite": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.1.0.tgz",
        "integrity": "sha512-cdyMtqX/BOqqNBBiKlIVkytNHm49MtMlYyn1zxzvJKWmFMlGzm+ry5BBfYyeY9YmNKbRSo/o7OX9w9ale0wg3w=="
      },
      "is-fullwidth-code-point": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
        "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
        "requires": {
          "number-is-nan": "^1.0.0"
        }
      },
      "is-glob": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
        "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
        "dev": true,
        "requires": {
          "is-extglob": "^2.1.1"
        }
      },
      "is-installed-globally": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.1.0.tgz",
        "integrity": "sha1-Df2Y9akRFxbdU13aZJL2e/PSWoA=",
        "dev": true,
        "requires": {
          "global-dirs": "^0.1.0",
          "is-path-inside": "^1.0.0"
        }
      },
      "is-number": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
        "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
        "dev": true
      },
      "is-observable": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-observable/-/is-observable-1.1.0.tgz",
        "integrity": "sha512-NqCa4Sa2d+u7BWc6CukaObG3Fh+CU9bvixbpcXYhy2VvYS7vVGIdAgnIS5Ks3A/cqk4rebLJ9s8zBstT2aKnIA==",
        "dev": true,
        "requires": {
          "symbol-observable": "^1.1.0"
        }
      },
      "is-path-inside": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-1.0.1.tgz",
        "integrity": "sha1-jvW33lBDej/cprToZe96pVy0gDY=",
        "dev": true,
        "requires": {
          "path-is-inside": "^1.0.1"
        }
      },
      "is-promise": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-2.1.0.tgz",
        "integrity": "sha1-eaKp7OfwlugPNtKy87wWwf9L8/o=",
        "dev": true
      },
      "is-regex": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.0.5.tgz",
        "integrity": "sha512-vlKW17SNq44owv5AQR3Cq0bQPEb8+kF3UKZ2fiZNOWtztYE5i0CzCZxFDwO58qAOWtxdBRVO/V5Qin1wjCqFYQ==",
        "dev": true,
        "requires": {
          "has": "^1.0.3"
        }
      },
      "is-stream": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
        "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
        "dev": true
      },
      "is-symbol": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
        "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
        "dev": true,
        "requires": {
          "has-symbols": "^1.0.1"
        }
      },
      "is-typedarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
        "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
      },
      "is-utf8": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
        "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI="
      },
      "isarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
        "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
      },
      "isexe": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
        "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
      },
      "isstream": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
        "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo="
      },
      "js-base64": {
        "version": "2.5.2",
        "resolved": "https://registry.npmjs.org/js-base64/-/js-base64-2.5.2.tgz",
        "integrity": "sha512-Vg8czh0Q7sFBSUMWWArX/miJeBWYBPpdU/3M/DKSaekLMqrqVPaedp+5mZhie/r0lgrcaYBfwXatEew6gwgiQQ=="
      },
      "js-tokens": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz",
        "integrity": "sha1-mGbfOVECEw449/mWvOtlRDIJwls="
      },
      "js-yaml": {
        "version": "3.13.1",
        "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
        "integrity": "sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==",
        "dev": true,
        "requires": {
          "argparse": "^1.0.7",
          "esprima": "^4.0.0"
        }
      },
      "jsbn": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
        "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM="
      },
      "jsdom": {
        "version": "7.2.2",
        "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-7.2.2.tgz",
        "integrity": "sha1-QLQCdwwr2iNGkJa+6Rq2deOx/G4=",
        "optional": true,
        "requires": {
          "abab": "^1.0.0",
          "acorn": "^2.4.0",
          "acorn-globals": "^1.0.4",
          "cssom": ">= 0.3.0 < 0.4.0",
          "cssstyle": ">= 0.2.29 < 0.3.0",
          "escodegen": "^1.6.1",
          "nwmatcher": ">= 1.3.7 < 2.0.0",
          "parse5": "^1.5.1",
          "request": "^2.55.0",
          "sax": "^1.1.4",
          "symbol-tree": ">= 3.1.0 < 4.0.0",
          "tough-cookie": "^2.2.0",
          "webidl-conversions": "^2.0.0",
          "whatwg-url-compat": "~0.6.5",
          "xml-name-validator": ">= 2.0.1 < 3.0.0"
        },
        "dependencies": {
          "parse5": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/parse5/-/parse5-1.5.1.tgz",
            "integrity": "sha1-m387DeMr543CQBsXVzzK8Pb1nZQ=",
            "optional": true
          }
        }
      },
      "jsesc": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-1.3.0.tgz",
        "integrity": "sha1-RsP+yMGJKxKwgz25vHYiF226s0s="
      },
      "json-parse-better-errors": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
        "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
        "dev": true
      },
      "json-schema": {
        "version": "0.2.3",
        "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
        "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM="
      },
      "json-schema-traverse": {
        "version": "0.4.1",
        "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
        "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
      },
      "json-stringify-safe": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
        "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus="
      },
      "jsonfile": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
        "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
        "requires": {
          "graceful-fs": "^4.1.6"
        }
      },
      "jsonwebtoken": {
        "version": "8.5.1",
        "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-8.5.1.tgz",
        "integrity": "sha512-XjwVfRS6jTMsqYs0EsuJ4LGxXV14zQybNd4L2r0UvbVnSF9Af8x7p5MzbJ90Ioz/9TI41/hTCvznF/loiSzn8w==",
        "requires": {
          "jws": "^3.2.2",
          "lodash.includes": "^4.3.0",
          "lodash.isboolean": "^3.0.3",
          "lodash.isinteger": "^4.0.4",
          "lodash.isnumber": "^3.0.3",
          "lodash.isplainobject": "^4.0.6",
          "lodash.isstring": "^4.0.1",
          "lodash.once": "^4.0.0",
          "ms": "^2.1.1",
          "semver": "^5.6.0"
        },
        "dependencies": {
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
          }
        }
      },
      "jsprim": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
        "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
        "requires": {
          "assert-plus": "1.0.0",
          "extsprintf": "1.3.0",
          "json-schema": "0.2.3",
          "verror": "1.10.0"
        }
      },
      "jwa": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/jwa/-/jwa-1.4.1.tgz",
        "integrity": "sha512-qiLX/xhEEFKUAJ6FiBMbes3w9ATzyk5W7Hvzpa/SLYdxNtng+gcurvrI7TbACjIXlsJyr05/S1oUhZrc63evQA==",
        "requires": {
          "buffer-equal-constant-time": "1.0.1",
          "ecdsa-sig-formatter": "1.0.11",
          "safe-buffer": "^5.0.1"
        }
      },
      "jws": {
        "version": "3.2.2",
        "resolved": "https://registry.npmjs.org/jws/-/jws-3.2.2.tgz",
        "integrity": "sha512-YHlZCB6lMTllWDtSPHz/ZXTsi8S00usEV6v1tjq8tOUZzw7DpSDWVXjXDre6ed1w/pd495ODpHZYSdkRTsa0HA==",
        "requires": {
          "jwa": "^1.4.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "kareem": {
        "version": "2.3.1",
        "resolved": "https://registry.npmjs.org/kareem/-/kareem-2.3.1.tgz",
        "integrity": "sha512-l3hLhffs9zqoDe8zjmb/mAN4B8VT3L56EUvKNqLFVs9YlFA+zx7ke1DO8STAdDyYNkeSo1nKmjuvQeI12So8Xw=="
      },
      "lazy-ass": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/lazy-ass/-/lazy-ass-1.6.0.tgz",
        "integrity": "sha1-eZllXoZGwX8In90YfRUNMyTVRRM=",
        "dev": true
      },
      "lcid": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",
        "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",
        "requires": {
          "invert-kv": "^1.0.0"
        }
      },
      "levn": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
        "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
        "optional": true,
        "requires": {
          "prelude-ls": "~1.1.2",
          "type-check": "~0.3.2"
        }
      },
      "listr": {
        "version": "0.14.3",
        "resolved": "https://registry.npmjs.org/listr/-/listr-0.14.3.tgz",
        "integrity": "sha512-RmAl7su35BFd/xoMamRjpIE4j3v+L28o8CT5YhAXQJm1fD+1l9ngXY8JAQRJ+tFK2i5njvi0iRUKV09vPwA0iA==",
        "dev": true,
        "requires": {
          "@samverschueren/stream-to-observable": "^0.3.0",
          "is-observable": "^1.1.0",
          "is-promise": "^2.1.0",
          "is-stream": "^1.1.0",
          "listr-silent-renderer": "^1.1.1",
          "listr-update-renderer": "^0.5.0",
          "listr-verbose-renderer": "^0.5.0",
          "p-map": "^2.0.0",
          "rxjs": "^6.3.3"
        }
      },
      "listr-silent-renderer": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/listr-silent-renderer/-/listr-silent-renderer-1.1.1.tgz",
        "integrity": "sha1-kktaN1cVN3C/Go4/v3S4u/P5JC4=",
        "dev": true
      },
      "listr-update-renderer": {
        "version": "0.5.0",
        "resolved": "https://registry.npmjs.org/listr-update-renderer/-/listr-update-renderer-0.5.0.tgz",
        "integrity": "sha512-tKRsZpKz8GSGqoI/+caPmfrypiaq+OQCbd+CovEC24uk1h952lVj5sC7SqyFUm+OaJ5HN/a1YLt5cit2FMNsFA==",
        "dev": true,
        "requires": {
          "chalk": "^1.1.3",
          "cli-truncate": "^0.2.1",
          "elegant-spinner": "^1.0.1",
          "figures": "^1.7.0",
          "indent-string": "^3.0.0",
          "log-symbols": "^1.0.2",
          "log-update": "^2.3.0",
          "strip-ansi": "^3.0.1"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
            "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
            "dev": true
          },
          "chalk": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
            "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
            "dev": true,
            "requires": {
              "ansi-styles": "^2.2.1",
              "escape-string-regexp": "^1.0.2",
              "has-ansi": "^2.0.0",
              "strip-ansi": "^3.0.0",
              "supports-color": "^2.0.0"
            }
          },
          "log-symbols": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-1.0.2.tgz",
            "integrity": "sha1-N2/3tY6jCGoPCfrMdGF+ylAeGhg=",
            "dev": true,
            "requires": {
              "chalk": "^1.0.0"
            }
          },
          "supports-color": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
            "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
            "dev": true
          }
        }
      },
      "listr-verbose-renderer": {
        "version": "0.5.0",
        "resolved": "https://registry.npmjs.org/listr-verbose-renderer/-/listr-verbose-renderer-0.5.0.tgz",
        "integrity": "sha512-04PDPqSlsqIOaaaGZ+41vq5FejI9auqTInicFRndCBgE3bXG8D6W1I+mWhk+1nqbHmyhla/6BUrd5OSiHwKRXw==",
        "dev": true,
        "requires": {
          "chalk": "^2.4.1",
          "cli-cursor": "^2.1.0",
          "date-fns": "^1.27.2",
          "figures": "^2.0.0"
        },
        "dependencies": {
          "cli-cursor": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
            "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
            "dev": true,
            "requires": {
              "restore-cursor": "^2.0.0"
            }
          },
          "figures": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
            "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
            "dev": true,
            "requires": {
              "escape-string-regexp": "^1.0.5"
            }
          },
          "onetime": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
            "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
            "dev": true,
            "requires": {
              "mimic-fn": "^1.0.0"
            }
          },
          "restore-cursor": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
            "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
            "dev": true,
            "requires": {
              "onetime": "^2.0.0",
              "signal-exit": "^3.0.2"
            }
          }
        }
      },
      "load-json-file": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
        "integrity": "sha1-L19Fq5HjMhYjT9U62rZo607AmTs=",
        "dev": true,
        "requires": {
          "graceful-fs": "^4.1.2",
          "parse-json": "^4.0.0",
          "pify": "^3.0.0",
          "strip-bom": "^3.0.0"
        }
      },
      "locate-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
        "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
        "dev": true,
        "requires": {
          "p-locate": "^3.0.0",
          "path-exists": "^3.0.0"
        }
      },
      "lodash": {
        "version": "4.17.15",
        "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
        "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A=="
      },
      "lodash.includes": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
        "integrity": "sha1-YLuYqHy5I8aMoeUTJUgzFISfVT8="
      },
      "lodash.isboolean": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
        "integrity": "sha1-bC4XHbKiV82WgC/UOwGyDV9YcPY="
      },
      "lodash.isinteger": {
        "version": "4.0.4",
        "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
        "integrity": "sha1-YZwK89A/iwTDH1iChAt3sRzWg0M="
      },
      "lodash.isnumber": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
        "integrity": "sha1-POdoEMWSjQM1IwGsKHMX8RwLH/w="
      },
      "lodash.isplainobject": {
        "version": "4.0.6",
        "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
        "integrity": "sha1-fFJqUtibRcRcxpC4gWO+BJf1UMs="
      },
      "lodash.isstring": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
        "integrity": "sha1-1SfftUVuynzJu5XV2ur4i6VKVFE="
      },
      "lodash.once": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
        "integrity": "sha1-DdOXEhPHxW34gJd9UEyI+0cal6w="
      },
      "log-symbols": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-3.0.0.tgz",
        "integrity": "sha512-dSkNGuI7iG3mfvDzUuYZyvk5dD9ocYCYzNU6CYDE6+Xqd+gwme6Z00NS3dUh8mq/73HaEtT7m6W+yUPtU6BZnQ==",
        "dev": true,
        "requires": {
          "chalk": "^2.4.2"
        }
      },
      "log-update": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/log-update/-/log-update-2.3.0.tgz",
        "integrity": "sha1-iDKP19HOeTiykoN0bwsbwSayRwg=",
        "dev": true,
        "requires": {
          "ansi-escapes": "^3.0.0",
          "cli-cursor": "^2.0.0",
          "wrap-ansi": "^3.0.1"
        },
        "dependencies": {
          "cli-cursor": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
            "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
            "dev": true,
            "requires": {
              "restore-cursor": "^2.0.0"
            }
          },
          "onetime": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
            "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
            "dev": true,
            "requires": {
              "mimic-fn": "^1.0.0"
            }
          },
          "restore-cursor": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
            "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
            "dev": true,
            "requires": {
              "onetime": "^2.0.0",
              "signal-exit": "^3.0.2"
            }
          }
        }
      },
      "loose-envify": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
        "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
        "requires": {
          "js-tokens": "^3.0.0 || ^4.0.0"
        }
      },
      "loud-rejection": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/loud-rejection/-/loud-rejection-1.6.0.tgz",
        "integrity": "sha1-W0b4AUft7leIcPCG0Eghz5mOVR8=",
        "requires": {
          "currently-unhandled": "^0.4.1",
          "signal-exit": "^3.0.0"
        }
      },
      "lru-cache": {
        "version": "4.1.5",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
        "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
        "requires": {
          "pseudomap": "^1.0.2",
          "yallist": "^2.1.2"
        }
      },
      "map-obj": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
        "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0="
      },
      "marked": {
        "version": "0.3.19",
        "resolved": "https://registry.npmjs.org/marked/-/marked-0.3.19.tgz",
        "integrity": "sha512-ea2eGWOqNxPcXv8dyERdSr/6FmzvWwzjMxpfGB/sbMccXoct+xY+YukPD+QTUZwyvK7BZwcr4m21WBOW41pAkg=="
      },
      "media-typer": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
        "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
      },
      "memory-pager": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
        "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
        "optional": true
      },
      "memorystream": {
        "version": "0.3.1",
        "resolved": "https://registry.npmjs.org/memorystream/-/memorystream-0.3.1.tgz",
        "integrity": "sha1-htcJCzDORV1j+64S3aUaR93K+bI=",
        "dev": true
      },
      "meow": {
        "version": "3.7.0",
        "resolved": "https://registry.npmjs.org/meow/-/meow-3.7.0.tgz",
        "integrity": "sha1-cstmi0JSKCkKu/qFaJJYcwioAfs=",
        "requires": {
          "camelcase-keys": "^2.0.0",
          "decamelize": "^1.1.2",
          "loud-rejection": "^1.0.0",
          "map-obj": "^1.0.1",
          "minimist": "^1.1.3",
          "normalize-package-data": "^2.3.4",
          "object-assign": "^4.0.1",
          "read-pkg-up": "^1.0.1",
          "redent": "^1.0.0",
          "trim-newlines": "^1.0.0"
        }
      },
      "merge-descriptors": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
        "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
      },
      "methods": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
        "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
      },
      "mime": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
        "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
      },
      "mime-db": {
        "version": "1.43.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.43.0.tgz",
        "integrity": "sha512-+5dsGEEovYbT8UY9yD7eE4XTc4UwJ1jBYlgaQQF38ENsKR3wj/8q8RFZrF9WIZpB2V1ArTVFUva8sAul1NzRzQ=="
      },
      "mime-types": {
        "version": "2.1.26",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.26.tgz",
        "integrity": "sha512-01paPWYgLrkqAyrlDorC1uDwl2p3qZT7yl806vW7DvDoxwXi46jsjFbg+WdwotBIk6/MbEhO/dh5aZ5sNj/dWQ==",
        "requires": {
          "mime-db": "1.43.0"
        }
      },
      "mimic-fn": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
        "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
        "dev": true
      },
      "minimatch": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "requires": {
          "brace-expansion": "^1.1.7"
        }
      },
      "minimist": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
        "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ="
      },
      "minipass": {
        "version": "2.9.0",
        "resolved": "https://registry.npmjs.org/minipass/-/minipass-2.9.0.tgz",
        "integrity": "sha512-wxfUjg9WebH+CUDX/CdbRlh5SmfZiy/hpkxaRI16Y9W56Pa75sWgd/rvFilSgrauD9NyFymP/+JFV3KwzIsJeg==",
        "requires": {
          "safe-buffer": "^5.1.2",
          "yallist": "^3.0.0"
        },
        "dependencies": {
          "yallist": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
            "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
          }
        }
      },
      "minizlib": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-1.3.3.tgz",
        "integrity": "sha512-6ZYMOEnmVsdCeTJVE0W9ZD+pVnE8h9Hma/iOwwRDsdQoePpoX56/8B6z3P9VNwppJuBKNRuFDRNRqRWexT9G9Q==",
        "requires": {
          "minipass": "^2.9.0"
        }
      },
      "mkdirp": {
        "version": "0.5.1",
        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
        "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
        "requires": {
          "minimist": "0.0.8"
        },
        "dependencies": {
          "minimist": {
            "version": "0.0.8",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
            "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0="
          }
        }
      },
      "mocha": {
        "version": "7.1.0",
        "resolved": "https://registry.npmjs.org/mocha/-/mocha-7.1.0.tgz",
        "integrity": "sha512-MymHK8UkU0K15Q/zX7uflZgVoRWiTjy0fXE/QjKts6mowUvGxOdPhZ2qj3b0iZdUrNZlW9LAIMFHB4IW+2b3EQ==",
        "dev": true,
        "requires": {
          "ansi-colors": "3.2.3",
          "browser-stdout": "1.3.1",
          "chokidar": "3.3.0",
          "debug": "3.2.6",
          "diff": "3.5.0",
          "escape-string-regexp": "1.0.5",
          "find-up": "3.0.0",
          "glob": "7.1.3",
          "growl": "1.10.5",
          "he": "1.2.0",
          "js-yaml": "3.13.1",
          "log-symbols": "3.0.0",
          "minimatch": "3.0.4",
          "mkdirp": "0.5.1",
          "ms": "2.1.1",
          "node-environment-flags": "1.0.6",
          "object.assign": "4.1.0",
          "strip-json-comments": "2.0.1",
          "supports-color": "6.0.0",
          "which": "1.3.1",
          "wide-align": "1.1.3",
          "yargs": "13.3.0",
          "yargs-parser": "13.1.1",
          "yargs-unparser": "1.6.0"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "dev": true,
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "glob": {
            "version": "7.1.3",
            "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.3.tgz",
            "integrity": "sha512-vcfuiIxogLV4DlGBHIUOwI0IbrJ8HWPc4MU7HzviGeNho/UJDfi6B5p3sHeWIQ0KGIU0Jpxi5ZHxemQfLkkAwQ==",
            "dev": true,
            "requires": {
              "fs.realpath": "^1.0.0",
              "inflight": "^1.0.4",
              "inherits": "2",
              "minimatch": "^3.0.4",
              "once": "^1.3.0",
              "path-is-absolute": "^1.0.0"
            }
          },
          "ms": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
            "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
            "dev": true
          },
          "supports-color": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.0.0.tgz",
            "integrity": "sha512-on9Kwidc1IUQo+bQdhi8+Tijpo0e1SS6RoGo2guUwn5vdaxw8RXOF9Vb2ws+ihWOmh4JnCJOvaziZWP1VABaLg==",
            "dev": true,
            "requires": {
              "has-flag": "^3.0.0"
            }
          }
        }
      },
      "moment": {
        "version": "2.24.0",
        "resolved": "https://registry.npmjs.org/moment/-/moment-2.24.0.tgz",
        "integrity": "sha512-bV7f+6l2QigeBBZSM/6yTNq4P2fNpSWj/0e7jQcy87A8e7o2nAfP/34/2ky5Vw4B9S446EtIhodAzkFCcR4dQg==",
        "dev": true
      },
      "mongodb": {
        "version": "3.5.3",
        "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-3.5.3.tgz",
        "integrity": "sha512-II7P7A3XUdPiXRgcN96qIoRa1oesM6qLNZkzfPluNZjVkgQk3jnQwOT6/uDk4USRDTTLjNFw2vwfmbRGTA7msg==",
        "requires": {
          "bl": "^2.2.0",
          "bson": "^1.1.1",
          "denque": "^1.4.1",
          "require_optional": "^1.0.1",
          "safe-buffer": "^5.1.2",
          "saslprep": "^1.0.0"
        }
      },
      "mongoose": {
        "version": "5.9.2",
        "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-5.9.2.tgz",
        "integrity": "sha512-Sa1qfqBvUfAgsrXpZjbBoIx8PEDUJSKF5Ous8gnBFI7TPiueSgJjg6GRA7A0teU8AB/vd0h8rl1rD5RQNfWhIw==",
        "requires": {
          "bson": "~1.1.1",
          "kareem": "2.3.1",
          "mongodb": "3.5.3",
          "mongoose-legacy-pluralize": "1.0.2",
          "mpath": "0.6.0",
          "mquery": "3.2.2",
          "ms": "2.1.2",
          "regexp-clone": "1.0.0",
          "safe-buffer": "5.1.2",
          "sift": "7.0.1",
          "sliced": "1.0.1"
        },
        "dependencies": {
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
          }
        }
      },
      "mongoose-legacy-pluralize": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/mongoose-legacy-pluralize/-/mongoose-legacy-pluralize-1.0.2.tgz",
        "integrity": "sha512-Yo/7qQU4/EyIS8YDFSeenIvXxZN+ld7YdV9LqFVQJzTLye8unujAWPZ4NWKfFA+RNjh+wvTWKY9Z3E5XM6ZZiQ=="
      },
      "mpath": {
        "version": "0.6.0",
        "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.6.0.tgz",
        "integrity": "sha512-i75qh79MJ5Xo/sbhxrDrPSEG0H/mr1kcZXJ8dH6URU5jD/knFxCVqVC/gVSW7GIXL/9hHWlT9haLbCXWOll3qw=="
      },
      "mquery": {
        "version": "3.2.2",
        "resolved": "https://registry.npmjs.org/mquery/-/mquery-3.2.2.tgz",
        "integrity": "sha512-XB52992COp0KP230I3qloVUbkLUxJIu328HBP2t2EsxSFtf4W1HPSOBWOXf1bqxK4Xbb66lfMJ+Bpfd9/yZE1Q==",
        "requires": {
          "bluebird": "3.5.1",
          "debug": "3.1.0",
          "regexp-clone": "^1.0.0",
          "safe-buffer": "5.1.2",
          "sliced": "1.0.1"
        },
        "dependencies": {
          "debug": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
            "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
            "requires": {
              "ms": "2.0.0"
            }
          }
        }
      },
      "ms": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
        "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
      },
      "multer": {
        "version": "1.4.2",
        "resolved": "https://registry.npmjs.org/multer/-/multer-1.4.2.tgz",
        "integrity": "sha512-xY8pX7V+ybyUpbYMxtjM9KAiD9ixtg5/JkeKUTD6xilfDv0vzzOFcCp4Ljb1UU3tSOM3VTZtKo63OmzOrGi3Cg==",
        "dev": true,
        "requires": {
          "append-field": "^1.0.0",
          "busboy": "^0.2.11",
          "concat-stream": "^1.5.2",
          "mkdirp": "^0.5.1",
          "object-assign": "^4.1.1",
          "on-finished": "^2.3.0",
          "type-is": "^1.6.4",
          "xtend": "^4.0.0"
        }
      },
      "nan": {
        "version": "2.14.0",
        "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.0.tgz",
        "integrity": "sha512-INOFj37C7k3AfaNTtX8RhsTw7qRy7eLET14cROi9+5HAVbbHuIWUHEauBv5qT4Av2tWasiTY1Jw6puUNqRJXQg=="
      },
      "needle": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/needle/-/needle-2.3.3.tgz",
        "integrity": "sha512-EkY0GeSq87rWp1hoq/sH/wnTWgFVhYlnIkbJ0YJFfRgEFlz2RraCjBpFQ+vrEgEdp0ThfyHADmkChEhcb7PKyw==",
        "requires": {
          "debug": "^3.2.6",
          "iconv-lite": "^0.4.4",
          "sax": "^1.2.4"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
          }
        }
      },
      "negotiator": {
        "version": "0.6.2",
        "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
        "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
      },
      "nice-try": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
        "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
        "dev": true
      },
      "node-addon-api": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-2.0.0.tgz",
        "integrity": "sha512-ASCL5U13as7HhOExbT6OlWJJUV/lLzL2voOSP1UVehpRD8FbSrSDjfScK/KwAvVTI5AS6r4VwbOMlIqtvRidnA=="
      },
      "node-environment-flags": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/node-environment-flags/-/node-environment-flags-1.0.6.tgz",
        "integrity": "sha512-5Evy2epuL+6TM0lCQGpFIj6KwiEsGh1SrHUhTbNX+sLbBtjidPZFAnVK9y5yU1+h//RitLbRHTIMyxQPtxMdHw==",
        "dev": true,
        "requires": {
          "object.getownpropertydescriptors": "^2.0.3",
          "semver": "^5.7.0"
        }
      },
      "node-gyp": {
        "version": "3.8.0",
        "resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-3.8.0.tgz",
        "integrity": "sha512-3g8lYefrRRzvGeSowdJKAKyks8oUpLEd/DyPV4eMhVlhJ0aNaZqIrNUIPuEWWTAoPqyFkfGrM67MC69baqn6vA==",
        "requires": {
          "fstream": "^1.0.0",
          "glob": "^7.0.3",
          "graceful-fs": "^4.1.2",
          "mkdirp": "^0.5.0",
          "nopt": "2 || 3",
          "npmlog": "0 || 1 || 2 || 3 || 4",
          "osenv": "0",
          "request": "^2.87.0",
          "rimraf": "2",
          "semver": "~5.3.0",
          "tar": "^2.0.0",
          "which": "1"
        },
        "dependencies": {
          "semver": {
            "version": "5.3.0",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.3.0.tgz",
            "integrity": "sha1-myzl094C0XxgEq0yaqa00M9U+U8="
          }
        }
      },
      "node-pre-gyp": {
        "version": "0.14.0",
        "resolved": "https://registry.npmjs.org/node-pre-gyp/-/node-pre-gyp-0.14.0.tgz",
        "integrity": "sha512-+CvDC7ZttU/sSt9rFjix/P05iS43qHCOOGzcr3Ry99bXG7VX953+vFyEuph/tfqoYu8dttBkE86JSKBO2OzcxA==",
        "requires": {
          "detect-libc": "^1.0.2",
          "mkdirp": "^0.5.1",
          "needle": "^2.2.1",
          "nopt": "^4.0.1",
          "npm-packlist": "^1.1.6",
          "npmlog": "^4.0.2",
          "rc": "^1.2.7",
          "rimraf": "^2.6.1",
          "semver": "^5.3.0",
          "tar": "^4.4.2"
        },
        "dependencies": {
          "nopt": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/nopt/-/nopt-4.0.3.tgz",
            "integrity": "sha512-CvaGwVMztSMJLOeXPrez7fyfObdZqNUK1cPAEzLHrTybIua9pMdmmPR5YwtfNftIOMv3DPUhFaxsZMNTQO20Kg==",
            "requires": {
              "abbrev": "1",
              "osenv": "^0.1.4"
            }
          },
          "tar": {
            "version": "4.4.13",
            "resolved": "https://registry.npmjs.org/tar/-/tar-4.4.13.tgz",
            "integrity": "sha512-w2VwSrBoHa5BsSyH+KxEqeQBAllHhccyMFVHtGtdMpF4W7IRWfZjFiQceJPChOeTsSDVUpER2T8FA93pr0L+QA==",
            "requires": {
              "chownr": "^1.1.1",
              "fs-minipass": "^1.2.5",
              "minipass": "^2.8.6",
              "minizlib": "^1.2.1",
              "mkdirp": "^0.5.0",
              "safe-buffer": "^5.1.2",
              "yallist": "^3.0.3"
            }
          },
          "yallist": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
            "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
          }
        }
      },
      "node-sass": {
        "version": "4.13.1",
        "resolved": "https://registry.npmjs.org/node-sass/-/node-sass-4.13.1.tgz",
        "integrity": "sha512-TTWFx+ZhyDx1Biiez2nB0L3YrCZ/8oHagaDalbuBSlqXgUPsdkUSzJsVxeDO9LtPB49+Fh3WQl3slABo6AotNw==",
        "requires": {
          "async-foreach": "^0.1.3",
          "chalk": "^1.1.1",
          "cross-spawn": "^3.0.0",
          "gaze": "^1.0.0",
          "get-stdin": "^4.0.1",
          "glob": "^7.0.3",
          "in-publish": "^2.0.0",
          "lodash": "^4.17.15",
          "meow": "^3.7.0",
          "mkdirp": "^0.5.1",
          "nan": "^2.13.2",
          "node-gyp": "^3.8.0",
          "npmlog": "^4.0.0",
          "request": "^2.88.0",
          "sass-graph": "^2.2.4",
          "stdout-stream": "^1.4.0",
          "true-case-path": "^1.0.2"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
            "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4="
          },
          "chalk": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
            "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
            "requires": {
              "ansi-styles": "^2.2.1",
              "escape-string-regexp": "^1.0.2",
              "has-ansi": "^2.0.0",
              "strip-ansi": "^3.0.0",
              "supports-color": "^2.0.0"
            }
          },
          "cross-spawn": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-3.0.1.tgz",
            "integrity": "sha1-ElYDfsufDF9549bvE14wdwGEuYI=",
            "requires": {
              "lru-cache": "^4.0.1",
              "which": "^1.2.9"
            }
          },
          "supports-color": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
            "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc="
          }
        }
      },
      "node-sass-middleware": {
        "version": "0.11.0",
        "resolved": "https://registry.npmjs.org/node-sass-middleware/-/node-sass-middleware-0.11.0.tgz",
        "integrity": "sha1-KrVhJDYpQRAuLNVNihwc70Ra+xU=",
        "requires": {
          "mkdirp": "^0.5.1",
          "node-sass": "^4.3.0"
        }
      },
      "nodemailer": {
        "version": "6.4.6",
        "resolved": "https://registry.npmjs.org/nodemailer/-/nodemailer-6.4.6.tgz",
        "integrity": "sha512-/kJ+FYVEm2HuUlw87hjSqTss+GU35D4giOpdSfGp7DO+5h6RlJj7R94YaYHOkoxu1CSaM0d3WRBtCzwXrY6MKA=="
      },
      "nodemailer-sendgrid-transport": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/nodemailer-sendgrid-transport/-/nodemailer-sendgrid-transport-0.2.0.tgz",
        "integrity": "sha1-pRZZO/49HyeM/hcGDh2yNlio9Pw=",
        "requires": {
          "sendgrid": "^1.8.0"
        }
      },
      "nopt": {
        "version": "3.0.6",
        "resolved": "https://registry.npmjs.org/nopt/-/nopt-3.0.6.tgz",
        "integrity": "sha1-xkZdvwirzU2zWTF/eaxopkayj/k=",
        "requires": {
          "abbrev": "1"
        }
      },
      "normalize-package-data": {
        "version": "2.5.0",
        "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
        "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
        "requires": {
          "hosted-git-info": "^2.1.4",
          "resolve": "^1.10.0",
          "semver": "2 || 3 || 4 || 5",
          "validate-npm-package-license": "^3.0.1"
        }
      },
      "normalize-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
        "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
        "dev": true
      },
      "npm-bundled": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-1.1.1.tgz",
        "integrity": "sha512-gqkfgGePhTpAEgUsGEgcq1rqPXA+tv/aVBlgEzfXwA1yiUJF7xtEt3CtVwOjNYQOVknDk0F20w58Fnm3EtG0fA==",
        "requires": {
          "npm-normalize-package-bin": "^1.0.1"
        }
      },
      "npm-normalize-package-bin": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-1.0.1.tgz",
        "integrity": "sha512-EPfafl6JL5/rU+ot6P3gRSCpPDW5VmIzX959Ob1+ySFUuuYHWHekXpwdUZcKP5C+DS4GEtdJluwBjnsNDl+fSA=="
      },
      "npm-packlist": {
        "version": "1.4.8",
        "resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-1.4.8.tgz",
        "integrity": "sha512-5+AZgwru5IevF5ZdnFglB5wNlHG1AOOuw28WhUq8/8emhBmLv6jX5by4WJCh7lW0uSYZYS6DXqIsyZVIXRZU9A==",
        "requires": {
          "ignore-walk": "^3.0.1",
          "npm-bundled": "^1.0.1",
          "npm-normalize-package-bin": "^1.0.1"
        }
      },
      "npm-run-all": {
        "version": "4.1.5",
        "resolved": "https://registry.npmjs.org/npm-run-all/-/npm-run-all-4.1.5.tgz",
        "integrity": "sha512-Oo82gJDAVcaMdi3nuoKFavkIHBRVqQ1qvMb+9LHk/cF4P6B2m8aP04hGf7oL6wZ9BuGwX1onlLhpuoofSyoQDQ==",
        "dev": true,
        "requires": {
          "ansi-styles": "^3.2.1",
          "chalk": "^2.4.1",
          "cross-spawn": "^6.0.5",
          "memorystream": "^0.3.1",
          "minimatch": "^3.0.4",
          "pidtree": "^0.3.0",
          "read-pkg": "^3.0.0",
          "shell-quote": "^1.6.1",
          "string.prototype.padend": "^3.0.0"
        }
      },
      "npm-run-path": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
        "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
        "dev": true,
        "requires": {
          "path-key": "^2.0.0"
        }
      },
      "npmlog": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
        "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
        "requires": {
          "are-we-there-yet": "~1.1.2",
          "console-control-strings": "~1.1.0",
          "gauge": "~2.7.3",
          "set-blocking": "~2.0.0"
        }
      },
      "nth-check": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
        "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
        "requires": {
          "boolbase": "~1.0.0"
        }
      },
      "number-is-nan": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
        "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
      },
      "nwmatcher": {
        "version": "1.4.4",
        "resolved": "https://registry.npmjs.org/nwmatcher/-/nwmatcher-1.4.4.tgz",
        "integrity": "sha512-3iuY4N5dhgMpCUrOVnuAdGrgxVqV2cJpM+XNccjR2DKOB1RUP0aA+wGXEiNziG/UKboFyGBIoKOaNlJxx8bciQ==",
        "optional": true
      },
      "oauth-sign": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
        "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ=="
      },
      "object-assign": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
        "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
      },
      "object-inspect": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.7.0.tgz",
        "integrity": "sha512-a7pEHdh1xKIAgTySUGgLMx/xwDZskN1Ud6egYYN3EdRW4ZMPNEDUTF+hwy2LUC+Bl+SyLXANnwz/jyh/qutKUw==",
        "dev": true
      },
      "object-keys": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
        "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
        "dev": true
      },
      "object.assign": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.0.tgz",
        "integrity": "sha512-exHJeq6kBKj58mqGyTQ9DFvrZC/eR6OwxzoM9YRoGBqrXYonaFyGiFMuc9VZrXf7DarreEwMpurG3dd+CNyW5w==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.2",
          "function-bind": "^1.1.1",
          "has-symbols": "^1.0.0",
          "object-keys": "^1.0.11"
        }
      },
      "object.getownpropertydescriptors": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.0.tgz",
        "integrity": "sha512-Z53Oah9A3TdLoblT7VKJaTDdXdT+lQO+cNpKVnya5JDe9uLvzu1YyY1yFDFrcxrlRgWrEFH0jJtD/IbuwjcEVg==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0-next.1"
        }
      },
      "on-finished": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
        "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
        "requires": {
          "ee-first": "1.1.1"
        }
      },
      "once": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
        "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
        "requires": {
          "wrappy": "1"
        }
      },
      "onetime": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/onetime/-/onetime-1.1.0.tgz",
        "integrity": "sha1-ofeDj4MUxRbwXs78vEzP4EtO14k=",
        "dev": true
      },
      "optionator": {
        "version": "0.8.3",
        "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
        "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
        "optional": true,
        "requires": {
          "deep-is": "~0.1.3",
          "fast-levenshtein": "~2.0.6",
          "levn": "~0.3.0",
          "prelude-ls": "~1.1.2",
          "type-check": "~0.3.2",
          "word-wrap": "~1.2.3"
        }
      },
      "os-homedir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
        "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M="
      },
      "os-locale": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-1.4.0.tgz",
        "integrity": "sha1-IPnxeuKe00XoveWDsT0gCYA8FNk=",
        "requires": {
          "lcid": "^1.0.0"
        }
      },
      "os-tmpdir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
        "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
      },
      "osenv": {
        "version": "0.1.5",
        "resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
        "integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
        "requires": {
          "os-homedir": "^1.0.0",
          "os-tmpdir": "^1.0.0"
        }
      },
      "ospath": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/ospath/-/ospath-1.2.2.tgz",
        "integrity": "sha1-EnZjl3Sj+O8lcvf+QoDg6kVQwHs=",
        "dev": true
      },
      "p-finally": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
        "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
        "dev": true
      },
      "p-limit": {
        "version": "2.2.2",
        "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.2.2.tgz",
        "integrity": "sha512-WGR+xHecKTr7EbUEhyLSh5Dube9JtdiG78ufaeLxTgpudf/20KqyMioIUZJAezlTIi6evxuoUs9YXc11cU+yzQ==",
        "dev": true,
        "requires": {
          "p-try": "^2.0.0"
        }
      },
      "p-locate": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
        "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
        "dev": true,
        "requires": {
          "p-limit": "^2.0.0"
        }
      },
      "p-map": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/p-map/-/p-map-2.1.0.tgz",
        "integrity": "sha512-y3b8Kpd8OAN444hxfBbFfj1FY/RjtTd8tzYwhUqNYXx0fXx2iX4maP4Qr6qhIKbQXI02wTLAda4fYUbDagTUFw==",
        "dev": true
      },
      "p-try": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
        "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
        "dev": true
      },
      "parse-json": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
        "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
        "dev": true,
        "requires": {
          "error-ex": "^1.3.1",
          "json-parse-better-errors": "^1.0.1"
        }
      },
      "parse5": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/parse5/-/parse5-3.0.3.tgz",
        "integrity": "sha512-rgO9Zg5LLLkfJF9E6CCmXlSE4UVceloys8JrFqCcHloC3usd/kJCyPDwH2SOlzix2j3xaP9sUX3e8+kvkuleAA==",
        "requires": {
          "@types/node": "*"
        }
      },
      "parseurl": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
        "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
      },
      "path-exists": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
        "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
        "dev": true
      },
      "path-is-absolute": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
      },
      "path-is-inside": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz",
        "integrity": "sha1-NlQX3t5EQw0cEa9hAn+s8HS9/FM=",
        "dev": true
      },
      "path-key": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
        "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
        "dev": true
      },
      "path-parse": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
        "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw=="
      },
      "path-to-regexp": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
        "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
      },
      "path-type": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
        "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
        "dev": true,
        "requires": {
          "pify": "^3.0.0"
        }
      },
      "pathval": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/pathval/-/pathval-1.1.0.tgz",
        "integrity": "sha1-uULm1L3mUwBe9rcTYd74cn0GReA=",
        "dev": true
      },
      "pend": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
        "integrity": "sha1-elfrVQpng/kRUzH89GY9XI4AelA=",
        "dev": true
      },
      "performance-now": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
        "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns="
      },
      "picomatch": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.1.tgz",
        "integrity": "sha512-ISBaA8xQNmwELC7eOjqFKMESB2VIqt4PPDD0nsS95b/9dZXvVKOlz9keMSnoGGKcOHXfTvDD6WMaRoSc9UuhRA==",
        "dev": true
      },
      "pidtree": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/pidtree/-/pidtree-0.3.0.tgz",
        "integrity": "sha512-9CT4NFlDcosssyg8KVFltgokyKZIFjoBxw8CTGy+5F38Y1eQWrt8tRayiUOXE+zVKQnYu5BR8JjCtvK3BcnBhg==",
        "dev": true
      },
      "pify": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
        "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
        "dev": true
      },
      "pinkie": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
        "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA="
      },
      "pinkie-promise": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
        "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
        "requires": {
          "pinkie": "^2.0.0"
        }
      },
      "prelude-ls": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
        "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
        "optional": true
      },
      "pretty-bytes": {
        "version": "5.3.0",
        "resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-5.3.0.tgz",
        "integrity": "sha512-hjGrh+P926p4R4WbaB6OckyRtO0F0/lQBiT+0gnxjV+5kjPBrfVBFCsCLbMqVQeydvIoouYTCmmEURiH3R1Bdg==",
        "dev": true
      },
      "process-nextick-args": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
        "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
      },
      "proxy-addr": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
        "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
        "requires": {
          "forwarded": "~0.1.2",
          "ipaddr.js": "1.9.1"
        }
      },
      "pseudomap": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
        "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM="
      },
      "psl": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/psl/-/psl-1.7.0.tgz",
        "integrity": "sha512-5NsSEDv8zY70ScRnOTn7bK7eanl2MvFrOrS/R6x+dBt5g1ghnj9Zv90kO8GwT8gxcu2ANyFprnFYB85IogIJOQ=="
      },
      "pump": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
        "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
        "dev": true,
        "requires": {
          "end-of-stream": "^1.1.0",
          "once": "^1.3.1"
        }
      },
      "punycode": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
        "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
      },
      "qs": {
        "version": "6.7.0",
        "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
        "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
      },
      "querystring": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
        "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
        "dev": true
      },
      "ramda": {
        "version": "0.26.1",
        "resolved": "https://registry.npmjs.org/ramda/-/ramda-0.26.1.tgz",
        "integrity": "sha512-hLWjpy7EnsDBb0p+Z3B7rPi3GDeRG5ZtiI33kJhTt+ORCd38AbAIjB/9zRIUoeTbE/AVX5ZkU7m6bznsvrf8eQ==",
        "dev": true
      },
      "range-parser": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
        "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
      },
      "raw-body": {
        "version": "2.4.0",
        "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
        "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
        "requires": {
          "bytes": "3.1.0",
          "http-errors": "1.7.2",
          "iconv-lite": "0.4.24",
          "unpipe": "1.0.0"
        }
      },
      "rc": {
        "version": "1.2.8",
        "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
        "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
        "requires": {
          "deep-extend": "^0.6.0",
          "ini": "~1.3.0",
          "minimist": "^1.2.0",
          "strip-json-comments": "~2.0.1"
        }
      },
      "read-pkg": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
        "integrity": "sha1-nLxoaXj+5l0WwA4rGcI3/Pbjg4k=",
        "dev": true,
        "requires": {
          "load-json-file": "^4.0.0",
          "normalize-package-data": "^2.3.2",
          "path-type": "^3.0.0"
        }
      },
      "read-pkg-up": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
        "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
        "requires": {
          "find-up": "^1.0.0",
          "read-pkg": "^1.0.0"
        },
        "dependencies": {
          "find-up": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
            "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
            "requires": {
              "path-exists": "^2.0.0",
              "pinkie-promise": "^2.0.0"
            }
          },
          "load-json-file": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
            "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
            "requires": {
              "graceful-fs": "^4.1.2",
              "parse-json": "^2.2.0",
              "pify": "^2.0.0",
              "pinkie-promise": "^2.0.0",
              "strip-bom": "^2.0.0"
            }
          },
          "parse-json": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
            "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
            "requires": {
              "error-ex": "^1.2.0"
            }
          },
          "path-exists": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
            "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
            "requires": {
              "pinkie-promise": "^2.0.0"
            }
          },
          "path-type": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
            "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
            "requires": {
              "graceful-fs": "^4.1.2",
              "pify": "^2.0.0",
              "pinkie-promise": "^2.0.0"
            }
          },
          "pify": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
            "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw="
          },
          "read-pkg": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
            "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
            "requires": {
              "load-json-file": "^1.0.0",
              "normalize-package-data": "^2.3.2",
              "path-type": "^1.0.0"
            }
          },
          "strip-bom": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
            "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
            "requires": {
              "is-utf8": "^0.2.0"
            }
          }
        }
      },
      "readable-stream": {
        "version": "2.3.7",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
        "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
        "requires": {
          "core-util-is": "~1.0.0",
          "inherits": "~2.0.3",
          "isarray": "~1.0.0",
          "process-nextick-args": "~2.0.0",
          "safe-buffer": "~5.1.1",
          "string_decoder": "~1.1.1",
          "util-deprecate": "~1.0.1"
        }
      },
      "readdirp": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.2.0.tgz",
        "integrity": "sha512-crk4Qu3pmXwgxdSgGhgA/eXiJAPQiX4GMOZZMXnqKxHX7TaoL+3gQVo/WeuAiogr07DpnfjIMpXXa+PAIvwPGQ==",
        "dev": true,
        "requires": {
          "picomatch": "^2.0.4"
        }
      },
      "redent": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/redent/-/redent-1.0.0.tgz",
        "integrity": "sha1-z5Fqsf1fHxbfsggi3W7H9zDCr94=",
        "requires": {
          "indent-string": "^2.1.0",
          "strip-indent": "^1.0.1"
        },
        "dependencies": {
          "indent-string": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-2.1.0.tgz",
            "integrity": "sha1-ji1INIdCEhtKghi3oTfppSBJ3IA=",
            "requires": {
              "repeating": "^2.0.0"
            }
          }
        }
      },
      "regenerator-runtime": {
        "version": "0.11.1",
        "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
        "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg=="
      },
      "regexp-clone": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/regexp-clone/-/regexp-clone-1.0.0.tgz",
        "integrity": "sha512-TuAasHQNamyyJ2hb97IuBEif4qBHGjPHBS64sZwytpLEqtBQ1gPJTnOaQ6qmpET16cK14kkjbazl6+p0RRv0yw=="
      },
      "repeating": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
        "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
        "requires": {
          "is-finite": "^1.0.0"
        }
      },
      "request": {
        "version": "2.88.0",
        "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
        "integrity": "sha512-NAqBSrijGLZdM0WZNsInLJpkJokL72XYjUpnB0iwsRgxh7dB6COrHnTBNwN0E+lHDAJzu7kLAkDeY08z2/A0hg==",
        "requires": {
          "aws-sign2": "~0.7.0",
          "aws4": "^1.8.0",
          "caseless": "~0.12.0",
          "combined-stream": "~1.0.6",
          "extend": "~3.0.2",
          "forever-agent": "~0.6.1",
          "form-data": "~2.3.2",
          "har-validator": "~5.1.0",
          "http-signature": "~1.2.0",
          "is-typedarray": "~1.0.0",
          "isstream": "~0.1.2",
          "json-stringify-safe": "~5.0.1",
          "mime-types": "~2.1.19",
          "oauth-sign": "~0.9.0",
          "performance-now": "^2.1.0",
          "qs": "~6.5.2",
          "safe-buffer": "^5.1.2",
          "tough-cookie": "~2.4.3",
          "tunnel-agent": "^0.6.0",
          "uuid": "^3.3.2"
        },
        "dependencies": {
          "qs": {
            "version": "6.5.2",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
            "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA=="
          }
        }
      },
      "request-progress": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/request-progress/-/request-progress-3.0.0.tgz",
        "integrity": "sha1-TKdUCBx/7GP1BeT6qCWqBs1mnb4=",
        "dev": true,
        "requires": {
          "throttleit": "^1.0.0"
        }
      },
      "require-directory": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
        "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
      },
      "require-main-filename": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
        "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
        "dev": true
      },
      "require_optional": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/require_optional/-/require_optional-1.0.1.tgz",
        "integrity": "sha512-qhM/y57enGWHAe3v/NcwML6a3/vfESLe/sGM2dII+gEO0BpKRUkWZow/tyloNqJyN6kXSl3RyyM8Ll5D/sJP8g==",
        "requires": {
          "resolve-from": "^2.0.0",
          "semver": "^5.1.0"
        }
      },
      "resolve": {
        "version": "1.15.1",
        "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.15.1.tgz",
        "integrity": "sha512-84oo6ZTtoTUpjgNEr5SJyzQhzL72gaRodsSfyxC/AXRvwu0Yse9H8eF9IpGo7b8YetZhlI6v7ZQ6bKBFV/6S7w==",
        "requires": {
          "path-parse": "^1.0.6"
        }
      },
      "resolve-from": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-2.0.0.tgz",
        "integrity": "sha1-lICrIOlP+h2egKgEx+oUdhGWa1c="
      },
      "restore-cursor": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-1.0.1.tgz",
        "integrity": "sha1-NGYfRohjJ/7SmRR5FSJS35LapUE=",
        "dev": true,
        "requires": {
          "exit-hook": "^1.0.0",
          "onetime": "^1.0.0"
        }
      },
      "rimraf": {
        "version": "2.7.1",
        "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
        "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
        "requires": {
          "glob": "^7.1.3"
        }
      },
      "rxjs": {
        "version": "6.5.4",
        "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.5.4.tgz",
        "integrity": "sha512-naMQXcgEo3csAEGvw/NydRA0fuS2nDZJiw1YUWFKU7aPPAPGZEsD4Iimit96qwCieH6y614MCLYwdkrWx7z/7Q==",
        "dev": true,
        "requires": {
          "tslib": "^1.9.0"
        }
      },
      "safe-buffer": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
        "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
      },
      "safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "saslprep": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/saslprep/-/saslprep-1.0.3.tgz",
        "integrity": "sha512-/MY/PEMbk2SuY5sScONwhUDsV2p77Znkb/q3nSVstq/yQzYJOH/Azh29p9oJLsl3LnQwSvZDKagDGBsBwSooag==",
        "optional": true,
        "requires": {
          "sparse-bitfield": "^3.0.3"
        }
      },
      "sass-graph": {
        "version": "2.2.4",
        "resolved": "https://registry.npmjs.org/sass-graph/-/sass-graph-2.2.4.tgz",
        "integrity": "sha1-E/vWPNHK8JCLn9k0dq1DpR0eC0k=",
        "requires": {
          "glob": "^7.0.0",
          "lodash": "^4.0.0",
          "scss-tokenizer": "^0.2.3",
          "yargs": "^7.0.0"
        },
        "dependencies": {
          "camelcase": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-3.0.0.tgz",
            "integrity": "sha1-MvxLn82vhF/N9+c7uXysImHwqwo="
          },
          "cliui": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz",
            "integrity": "sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=",
            "requires": {
              "string-width": "^1.0.1",
              "strip-ansi": "^3.0.1",
              "wrap-ansi": "^2.0.0"
            }
          },
          "get-caller-file": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",
            "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w=="
          },
          "require-main-filename": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
            "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE="
          },
          "which-module": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/which-module/-/which-module-1.0.0.tgz",
            "integrity": "sha1-u6Y8qGGUiZT/MHc2CJ47lgJsKk8="
          },
          "wrap-ansi": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
            "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
            "requires": {
              "string-width": "^1.0.1",
              "strip-ansi": "^3.0.1"
            }
          },
          "y18n": {
            "version": "3.2.1",
            "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.1.tgz",
            "integrity": "sha1-bRX7qITAhnnA136I53WegR4H+kE="
          },
          "yargs": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/yargs/-/yargs-7.1.0.tgz",
            "integrity": "sha1-a6MY6xaWFyf10oT46gA+jWFU0Mg=",
            "requires": {
              "camelcase": "^3.0.0",
              "cliui": "^3.2.0",
              "decamelize": "^1.1.1",
              "get-caller-file": "^1.0.1",
              "os-locale": "^1.4.0",
              "read-pkg-up": "^1.0.1",
              "require-directory": "^2.1.1",
              "require-main-filename": "^1.0.1",
              "set-blocking": "^2.0.0",
              "string-width": "^1.0.2",
              "which-module": "^1.0.0",
              "y18n": "^3.2.1",
              "yargs-parser": "^5.0.0"
            }
          },
          "yargs-parser": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-5.0.0.tgz",
            "integrity": "sha1-J17PDX/+Bcd+ZOfIbkzZS/DhIoo=",
            "requires": {
              "camelcase": "^3.0.0"
            }
          }
        }
      },
      "sax": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
        "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
      },
      "scss-tokenizer": {
        "version": "0.2.3",
        "resolved": "https://registry.npmjs.org/scss-tokenizer/-/scss-tokenizer-0.2.3.tgz",
        "integrity": "sha1-jrBtualyMzOCTT9VMGQRSYR85dE=",
        "requires": {
          "js-base64": "^2.1.8",
          "source-map": "^0.4.2"
        }
      },
      "semver": {
        "version": "5.7.1",
        "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
        "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
      },
      "send": {
        "version": "0.17.1",
        "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
        "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
        "requires": {
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "destroy": "~1.0.4",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "fresh": "0.5.2",
          "http-errors": "~1.7.2",
          "mime": "1.6.0",
          "ms": "2.1.1",
          "on-finished": "~2.3.0",
          "range-parser": "~1.2.1",
          "statuses": "~1.5.0"
        },
        "dependencies": {
          "ms": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
            "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
          }
        }
      },
      "sendgrid": {
        "version": "1.9.2",
        "resolved": "https://registry.npmjs.org/sendgrid/-/sendgrid-1.9.2.tgz",
        "integrity": "sha1-1AfmogawoqaWQkbdnAZBwQvwLxk=",
        "requires": {
          "lodash": "^3.0.1 || ^2.0.0",
          "mime": "^1.2.9",
          "request": "^2.60.0",
          "smtpapi": "^1.2.0"
        },
        "dependencies": {
          "lodash": {
            "version": "3.10.1",
            "resolved": "https://registry.npmjs.org/lodash/-/lodash-3.10.1.tgz",
            "integrity": "sha1-W/Rejkm6QYnhfUgnid/RW9FAt7Y="
          }
        }
      },
      "serve-static": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
        "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
        "requires": {
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "parseurl": "~1.3.3",
          "send": "0.17.1"
        }
      },
      "set-blocking": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
        "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
      },
      "setprototypeof": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
        "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
      },
      "shebang-command": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
        "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
        "dev": true,
        "requires": {
          "shebang-regex": "^1.0.0"
        }
      },
      "shebang-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
        "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
        "dev": true
      },
      "shell-quote": {
        "version": "1.7.2",
        "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.7.2.tgz",
        "integrity": "sha512-mRz/m/JVscCrkMyPqHc/bczi3OQHkLTqXHEFu0zDhK/qfv3UcOA4SVmRCLmos4bhjr9ekVQubj/R7waKapmiQg==",
        "dev": true
      },
      "sift": {
        "version": "7.0.1",
        "resolved": "https://registry.npmjs.org/sift/-/sift-7.0.1.tgz",
        "integrity": "sha512-oqD7PMJ+uO6jV9EQCl0LrRw1OwsiPsiFQR5AR30heR+4Dl7jBBbDLnNvWiak20tzZlSE1H7RB30SX/1j/YYT7g=="
      },
      "signal-exit": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
        "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0="
      },
      "slice-ansi": {
        "version": "0.0.4",
        "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-0.0.4.tgz",
        "integrity": "sha1-7b+JA/ZvfOL46v1s7tZeJkyDGzU=",
        "dev": true
      },
      "sliced": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/sliced/-/sliced-1.0.1.tgz",
        "integrity": "sha1-CzpmK10Ewxd7GSa+qCsD+Dei70E="
      },
      "smtpapi": {
        "version": "1.4.2",
        "resolved": "https://registry.npmjs.org/smtpapi/-/smtpapi-1.4.2.tgz",
        "integrity": "sha512-rkb2Qkl8JnsLr/1unpZs1sUZODVMyl9kcYyBNvsilP+RyWMQw2yXUpgHsW41oEAu2yM5z9e2tmyZu52RAbB8Xw==",
        "requires": {
          "chai": "^2.3.0",
          "esdoc": "^1.0.3",
          "esdoc-coverage-plugin": "^1.1.0",
          "esdoc-type-inference-plugin": "^1.0.1"
        },
        "dependencies": {
          "assertion-error": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-1.0.0.tgz",
            "integrity": "sha1-x/hUOP3UZrx8oWq5DIFRN5el0js="
          },
          "chai": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/chai/-/chai-2.3.0.tgz",
            "integrity": "sha1-ii9qNHSNqAEJD9cyh7Kqc5pOkJo=",
            "requires": {
              "assertion-error": "1.0.0",
              "deep-eql": "0.1.3"
            }
          },
          "deep-eql": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-0.1.3.tgz",
            "integrity": "sha1-71WKyrjeJSBs1xOQbXTlaTDrafI=",
            "requires": {
              "type-detect": "0.1.1"
            }
          },
          "type-detect": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-0.1.1.tgz",
            "integrity": "sha1-C6XsKohWQORw6k6FBZcZANrFiCI="
          }
        }
      },
      "source-map": {
        "version": "0.4.4",
        "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.4.4.tgz",
        "integrity": "sha1-66T12pwNyZneaAMti092FzZSA2s=",
        "requires": {
          "amdefine": ">=0.0.4"
        }
      },
      "sparse-bitfield": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
        "integrity": "sha1-/0rm5oZWBWuks+eSqzM004JzyhE=",
        "optional": true,
        "requires": {
          "memory-pager": "^1.0.2"
        }
      },
      "spdx-correct": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.0.tgz",
        "integrity": "sha512-lr2EZCctC2BNR7j7WzJ2FpDznxky1sjfxvvYEyzxNyb6lZXHODmEoJeFu4JupYlkfha1KZpJyoqiJ7pgA1qq8Q==",
        "requires": {
          "spdx-expression-parse": "^3.0.0",
          "spdx-license-ids": "^3.0.0"
        }
      },
      "spdx-exceptions": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.2.0.tgz",
        "integrity": "sha512-2XQACfElKi9SlVb1CYadKDXvoajPgBVPn/gOQLrTvHdElaVhr7ZEbqJaRnJLVNeaI4cMEAgVCeBMKF6MWRDCRA=="
      },
      "spdx-expression-parse": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
        "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
        "requires": {
          "spdx-exceptions": "^2.1.0",
          "spdx-license-ids": "^3.0.0"
        }
      },
      "spdx-license-ids": {
        "version": "3.0.5",
        "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.5.tgz",
        "integrity": "sha512-J+FWzZoynJEXGphVIS+XEh3kFSjZX/1i9gFBaWQcB+/tmpe2qUsSBABpcxqxnAxFdiUFEgAX1bjYGQvIZmoz9Q=="
      },
      "sprintf-js": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
        "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
        "dev": true
      },
      "sshpk": {
        "version": "1.16.1",
        "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
        "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
        "requires": {
          "asn1": "~0.2.3",
          "assert-plus": "^1.0.0",
          "bcrypt-pbkdf": "^1.0.0",
          "dashdash": "^1.12.0",
          "ecc-jsbn": "~0.1.1",
          "getpass": "^0.1.1",
          "jsbn": "~0.1.0",
          "safer-buffer": "^2.0.2",
          "tweetnacl": "~0.14.0"
        }
      },
      "statuses": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
        "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
      },
      "stdout-stream": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/stdout-stream/-/stdout-stream-1.4.1.tgz",
        "integrity": "sha512-j4emi03KXqJWcIeF8eIXkjMFN1Cmb8gUlDYGeBALLPo5qdyTfA9bOtl8m33lRoC+vFMkP3gl0WsDr6+gzxbbTA==",
        "requires": {
          "readable-stream": "^2.0.1"
        }
      },
      "streamsearch": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-0.1.2.tgz",
        "integrity": "sha1-gIudDlb8Jz2Am6VzOOkpkZoanxo=",
        "dev": true
      },
      "string-width": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
        "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
        "requires": {
          "code-point-at": "^1.0.0",
          "is-fullwidth-code-point": "^1.0.0",
          "strip-ansi": "^3.0.0"
        }
      },
      "string.prototype.padend": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/string.prototype.padend/-/string.prototype.padend-3.1.0.tgz",
        "integrity": "sha512-3aIv8Ffdp8EZj8iLwREGpQaUZiPyrWrpzMBHvkiSW/bK/EGve9np07Vwy7IJ5waydpGXzQZu/F8Oze2/IWkBaA==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0-next.1"
        }
      },
      "string.prototype.trimleft": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/string.prototype.trimleft/-/string.prototype.trimleft-2.1.1.tgz",
        "integrity": "sha512-iu2AGd3PuP5Rp7x2kEZCrB2Nf41ehzh+goo8TV7z8/XDBbsvc6HQIlUl9RjkZ4oyrW1XM5UwlGl1oVEaDjg6Ag==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.3",
          "function-bind": "^1.1.1"
        }
      },
      "string.prototype.trimright": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/string.prototype.trimright/-/string.prototype.trimright-2.1.1.tgz",
        "integrity": "sha512-qFvWL3/+QIgZXVmJBfpHmxLB7xsUXz6HsUmP8+5dRaC3Q7oKUv9Vo6aMCRZC1smrtyECFsIT30PqBJ1gTjAs+g==",
        "dev": true,
        "requires": {
          "define-properties": "^1.1.3",
          "function-bind": "^1.1.1"
        }
      },
      "string_decoder": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
        "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
        "requires": {
          "safe-buffer": "~5.1.0"
        }
      },
      "strip-ansi": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
        "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
        "requires": {
          "ansi-regex": "^2.0.0"
        }
      },
      "strip-bom": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
        "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
        "dev": true
      },
      "strip-eof": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
        "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8=",
        "dev": true
      },
      "strip-indent": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz",
        "integrity": "sha1-DHlipq3vp7vUrDZkYKY4VSrhoKI=",
        "requires": {
          "get-stdin": "^4.0.1"
        }
      },
      "strip-json-comments": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
        "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo="
      },
      "superagent": {
        "version": "3.8.3",
        "resolved": "https://registry.npmjs.org/superagent/-/superagent-3.8.3.tgz",
        "integrity": "sha512-GLQtLMCoEIK4eDv6OGtkOoSMt3D+oq0y3dsxMuYuDvaNUvuT8eFBuLmfR0iYYzHC1e8hpzC6ZsxbuP6DIalMFA==",
        "dev": true,
        "requires": {
          "component-emitter": "^1.2.0",
          "cookiejar": "^2.1.0",
          "debug": "^3.1.0",
          "extend": "^3.0.0",
          "form-data": "^2.3.1",
          "formidable": "^1.2.0",
          "methods": "^1.1.1",
          "mime": "^1.4.1",
          "qs": "^6.5.1",
          "readable-stream": "^2.3.5"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "dev": true,
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
            "dev": true
          }
        }
      },
      "supertest": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/supertest/-/supertest-4.0.2.tgz",
        "integrity": "sha512-1BAbvrOZsGA3YTCWqbmh14L0YEq0EGICX/nBnfkfVJn7SrxQV1I3pMYjSzG9y/7ZU2V9dWqyqk2POwxlb09duQ==",
        "dev": true,
        "requires": {
          "methods": "^1.1.2",
          "superagent": "^3.8.3"
        }
      },
      "supports-color": {
        "version": "5.5.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
        "requires": {
          "has-flag": "^3.0.0"
        }
      },
      "symbol-observable": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.2.0.tgz",
        "integrity": "sha512-e900nM8RRtGhlV36KGEU9k65K3mPb1WV70OdjfxlG2EAuM1noi/E/BaW/uMhL7bPEssK8QV57vN3esixjUvcXQ==",
        "dev": true
      },
      "symbol-tree": {
        "version": "3.2.4",
        "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
        "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
        "optional": true
      },
      "taffydb": {
        "version": "2.7.3",
        "resolved": "https://registry.npmjs.org/taffydb/-/taffydb-2.7.3.tgz",
        "integrity": "sha1-KtNxaWKUmPylvIQkMJbTzeDsOjQ="
      },
      "tar": {
        "version": "2.2.2",
        "resolved": "https://registry.npmjs.org/tar/-/tar-2.2.2.tgz",
        "integrity": "sha512-FCEhQ/4rE1zYv9rYXJw/msRqsnmlje5jHP6huWeBZ704jUTy02c5AZyWujpMR1ax6mVw9NyJMfuK2CMDWVIfgA==",
        "requires": {
          "block-stream": "*",
          "fstream": "^1.0.12",
          "inherits": "2"
        }
      },
      "throttleit": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/throttleit/-/throttleit-1.0.0.tgz",
        "integrity": "sha1-nnhYNtr0Z0MUWlmEtiaNgoUorGw=",
        "dev": true
      },
      "tmp": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.1.0.tgz",
        "integrity": "sha512-J7Z2K08jbGcdA1kkQpJSqLF6T0tdQqpR2pnSUXsIchbPdTI9v3e85cLW0d6WDhwuAleOV71j2xWs8qMPfK7nKw==",
        "dev": true,
        "requires": {
          "rimraf": "^2.6.3"
        }
      },
      "to-fast-properties": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-1.0.3.tgz",
        "integrity": "sha1-uDVx+k2MJbguIxsG46MFXeTKGkc="
      },
      "to-regex-range": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
        "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
        "dev": true,
        "requires": {
          "is-number": "^7.0.0"
        }
      },
      "toidentifier": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
        "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
      },
      "tough-cookie": {
        "version": "2.4.3",
        "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
        "integrity": "sha512-Q5srk/4vDM54WJsJio3XNn6K2sCG+CQ8G5Wz6bZhRZoAe/+TxjWB/GlFAnYEbkYVlON9FMk/fE3h2RLpPXo4lQ==",
        "requires": {
          "psl": "^1.1.24",
          "punycode": "^1.4.1"
        },
        "dependencies": {
          "punycode": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
            "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4="
          }
        }
      },
      "tr46": {
        "version": "0.0.3",
        "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
        "integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o=",
        "optional": true
      },
      "trim-newlines": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-1.0.0.tgz",
        "integrity": "sha1-WIeWa7WCpFA6QetST301ARgVphM="
      },
      "trim-right": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/trim-right/-/trim-right-1.0.1.tgz",
        "integrity": "sha1-yy4SAwZ+DI3h9hQJS5/kVwTqYAM="
      },
      "true-case-path": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/true-case-path/-/true-case-path-1.0.3.tgz",
        "integrity": "sha512-m6s2OdQe5wgpFMC+pAJ+q9djG82O2jcHPOI6RNg1yy9rCYR+WD6Nbpl32fDpfC56nirdRy+opFa/Vk7HYhqaew==",
        "requires": {
          "glob": "^7.1.2"
        }
      },
      "tslib": {
        "version": "1.11.1",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.11.1.tgz",
        "integrity": "sha512-aZW88SY8kQbU7gpV19lN24LtXh/yD4ZZg6qieAJDDg+YBsJcSmLGK9QpnUjAKVG/xefmvJGd1WUmfpT/g6AJGA==",
        "dev": true
      },
      "tunnel-agent": {
        "version": "0.6.0",
        "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
        "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
        "requires": {
          "safe-buffer": "^5.0.1"
        }
      },
      "tweetnacl": {
        "version": "0.14.5",
        "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
        "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q="
      },
      "type-check": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
        "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
        "optional": true,
        "requires": {
          "prelude-ls": "~1.1.2"
        }
      },
      "type-detect": {
        "version": "4.0.8",
        "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
        "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==",
        "dev": true
      },
      "type-is": {
        "version": "1.6.18",
        "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
        "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
        "requires": {
          "media-typer": "0.3.0",
          "mime-types": "~2.1.24"
        }
      },
      "typedarray": {
        "version": "0.0.6",
        "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
        "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
        "dev": true
      },
      "universalify": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
        "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
      },
      "unpipe": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
        "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
      },
      "untildify": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/untildify/-/untildify-4.0.0.tgz",
        "integrity": "sha512-KK8xQ1mkzZeg9inewmFVDNkg3l5LUhoq9kN6iWYB/CC9YMG8HA+c1Q8HwDe6dEX7kErrEVNVBO3fWsVq5iDgtw==",
        "dev": true
      },
      "uri-js": {
        "version": "4.2.2",
        "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
        "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
        "requires": {
          "punycode": "^2.1.0"
        }
      },
      "url": {
        "version": "0.11.0",
        "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
        "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
        "dev": true,
        "requires": {
          "punycode": "1.3.2",
          "querystring": "0.2.0"
        },
        "dependencies": {
          "punycode": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
            "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0=",
            "dev": true
          }
        }
      },
      "util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
      },
      "utils-merge": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
        "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
      },
      "uuid": {
        "version": "3.4.0",
        "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
        "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A=="
      },
      "validate-npm-package-license": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
        "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
        "requires": {
          "spdx-correct": "^3.0.0",
          "spdx-expression-parse": "^3.0.0"
        }
      },
      "validator": {
        "version": "12.2.0",
        "resolved": "https://registry.npmjs.org/validator/-/validator-12.2.0.tgz",
        "integrity": "sha512-jJfE/DW6tIK1Ek8nCfNFqt8Wb3nzMoAbocBF6/Icgg1ZFSBpObdnwVY2jQj6qUqzhx5jc71fpvBWyLGO7Xl+nQ=="
      },
      "vary": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
        "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
      },
      "verror": {
        "version": "1.10.0",
        "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
        "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
        "requires": {
          "assert-plus": "^1.0.0",
          "core-util-is": "1.0.2",
          "extsprintf": "^1.2.0"
        }
      },
      "webidl-conversions": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-2.0.1.tgz",
        "integrity": "sha1-O/glj30xjHRDw28uFpQCoaZwNQY=",
        "optional": true
      },
      "whatwg-url-compat": {
        "version": "0.6.5",
        "resolved": "https://registry.npmjs.org/whatwg-url-compat/-/whatwg-url-compat-0.6.5.tgz",
        "integrity": "sha1-AImBEa9om7CXVBzVpFymyHmERb8=",
        "optional": true,
        "requires": {
          "tr46": "~0.0.1"
        }
      },
      "which": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
        "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
        "requires": {
          "isexe": "^2.0.0"
        }
      },
      "which-module": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
        "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
        "dev": true
      },
      "wide-align": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
        "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
        "requires": {
          "string-width": "^1.0.2 || 2"
        }
      },
      "word-wrap": {
        "version": "1.2.3",
        "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
        "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
        "optional": true
      },
      "wrap-ansi": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-3.0.1.tgz",
        "integrity": "sha1-KIoE2H7aXChuBg3+jxNc6NAH+Lo=",
        "dev": true,
        "requires": {
          "string-width": "^2.1.1",
          "strip-ansi": "^4.0.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
            "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
            "dev": true
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
            "dev": true
          },
          "string-width": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
            "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
            "dev": true,
            "requires": {
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^4.0.0"
            }
          },
          "strip-ansi": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
            "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
            "dev": true,
            "requires": {
              "ansi-regex": "^3.0.0"
            }
          }
        }
      },
      "wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
      },
      "xml-name-validator": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-2.0.1.tgz",
        "integrity": "sha1-TYuPHszTQZqjYgYb7O9RXh5VljU=",
        "optional": true
      },
      "xtend": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
        "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
        "dev": true
      },
      "y18n": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
        "integrity": "sha512-r9S/ZyXu/Xu9q1tYlpsLIsa3EeLXXk0VwlxqTcFRfg9EhMW+17kbt9G0NrgCmhGb5vT2hyhJZLfDGx+7+5Uj/w==",
        "dev": true
      },
      "yallist": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
        "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI="
      },
      "yargs": {
        "version": "13.3.0",
        "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.0.tgz",
        "integrity": "sha512-2eehun/8ALW8TLoIl7MVaRUrg+yCnenu8B4kBlRxj3GJGDKU1Og7sMXPNm1BYyM1DOJmTZ4YeN/Nwxv+8XJsUA==",
        "dev": true,
        "requires": {
          "cliui": "^5.0.0",
          "find-up": "^3.0.0",
          "get-caller-file": "^2.0.1",
          "require-directory": "^2.1.1",
          "require-main-filename": "^2.0.0",
          "set-blocking": "^2.0.0",
          "string-width": "^3.0.0",
          "which-module": "^2.0.0",
          "y18n": "^4.0.0",
          "yargs-parser": "^13.1.1"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
            "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
            "dev": true
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
            "dev": true
          },
          "string-width": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
            "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
            "dev": true,
            "requires": {
              "emoji-regex": "^7.0.1",
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^5.1.0"
            }
          },
          "strip-ansi": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
            "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
            "dev": true,
            "requires": {
              "ansi-regex": "^4.1.0"
            }
          }
        }
      },
      "yargs-parser": {
        "version": "13.1.1",
        "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.1.tgz",
        "integrity": "sha512-oVAVsHz6uFrg3XQheFII8ESO2ssAf9luWuAd6Wexsu4F3OtIW0o8IribPXYrD4WC24LWtPrJlGy87y5udK+dxQ==",
        "dev": true,
        "requires": {
          "camelcase": "^5.0.0",
          "decamelize": "^1.2.0"
        }
      },
      "yargs-unparser": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/yargs-unparser/-/yargs-unparser-1.6.0.tgz",
        "integrity": "sha512-W9tKgmSn0DpSatfri0nx52Joq5hVXgeLiqR/5G0sZNDoLZFOr/xjBUDcShCOGNsBnEMNo1KAMBkTej1Hm62HTw==",
        "dev": true,
        "requires": {
          "flat": "^4.1.0",
          "lodash": "^4.17.15",
          "yargs": "^13.3.0"
        }
      },
      "yauzl": {
        "version": "2.10.0",
        "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz",
        "integrity": "sha1-x+sXyT4RLLEIb6bY5R+wZnt5pfk=",
        "dev": true,
        "requires": {
          "buffer-crc32": "~0.2.3",
          "fd-slicer": "~1.1.0"
        },
        "dependencies": {
          "fd-slicer": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz",
            "integrity": "sha1-JcfInLH5B3+IkbvmHY85Dq4lbx4=",
            "dev": true,
            "requires": {
              "pend": "~1.2.0"
            }
          }
        }
      }
    }
  }
  