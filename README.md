# loom-action

[![Twitter URL](https://img.shields.io/twitter/url?logoColor=blue&style=social&url=https%3A%2F%2Fimg.shields.io%2Ftwitter%2Furl%3Fstyle%3Dsocial)](https://twitter.com/intent/tweet?text=%20Checkout%20this%20%40github%20repo%20by%20%40joaofse%20%F0%9F%91%A8%F0%9F%8F%BD%E2%80%8D%F0%9F%92%BB%3A%20https%3A//github.com/JEsperancinhaOrg/loom-action)
[![Generic badge](https://img.shields.io/static/v1.svg?label=GitHub&message=loom-action☕️&color=informational)](https://github.com/JEsperancinhaOrg/loom-action)
[![GitHub release](https://img.shields.io/github/release/JEsperancinhaOrg/loom-action.svg)](https://github.com/marketplace/actions/jesperancinhaorg-loom-action)
[![GitHub release](https://img.shields.io/github/v/release/JEsperancinhaOrg/loom-action?color=green&include_prereleases&label=pre-release)](https://github.com/marketplace/actions/jesperancinhaorg-loom-action)

[![GitHub License](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg?style=flat)](https://www.apache.org/licenses/LICENSE-2.0)

[![GitHub language count](https://img.shields.io/github/languages/count/jesperancinhaorg/loom-action.svg)](#)
[![GitHub top language](https://img.shields.io/github/languages/top/jesperancinhaorg/loom-action.svg)](#)
[![GitHub top language](https://img.shields.io/github/languages/code-size/jesperancinhaorg/loom-action.svg)](#)

## Introduction

Action to support Loom JDK

## Example usage

```yml
-   uses: jesperancinhaorg/loom-action@v0.0.0-alfa-a
```

## Testing the image

```shell
docker build -t test  --build-arg LINUX=ubuntu:22.10 --build-arg LOOM=19-loom+6-625 .
```

```shell
docker build -t test .
```

## Example projects

- [![Generic badge](https://img.shields.io/static/v1.svg?label=GitHub&message=Good%20Story%20🐉&color=informational)](https://github.com/jesperancinha/good-story)


## Development notes

```shell
npm i -g @vercel/ncc
```

## References

- [Project Loom Downloads](http://jdk.java.net/loom/)
- [Creating a Docker container action](https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action)
- [Publishing actions in GitHub Marketplace](https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)
