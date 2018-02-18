tupydir="/home/gian/uerjInterpreter"
mv tupy _tupy_symlink
cp -r $tupydir/tupy tupy
docker build -t registry.heroku.com/tupyviz/web .
rm -rf tupy
mv _tupy_symlink tupy
