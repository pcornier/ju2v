## Jedutil to Verilog

This tool has been quickly written in about one hour to help with some of my PAL files. It is incomplete and certainly buggy but the same concept could be used for a more robust tool that could do JEDEC to Verilog.

```bash
docker run -it --rm -p 3000:3000 -v `pwd`:/work node:latest bash -c 'npm install -g serve && serve /work'
```
then go to http://localhost:3000/ju2v

CTRL+C to stop

### references
- https://github.com/mamedev/mame/blob/1f2fb58b875e06fa6eff6628a7da815bbd9cedbe/src/tools/jedutil.cpp
