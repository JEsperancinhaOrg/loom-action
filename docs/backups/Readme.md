## Testing the image

```shell
docker build -t test  --build-arg LINUX=ubuntu:22.10 --build-arg LOOM=19-loom+6-625 .
```

```shell
docker build -t test .
```