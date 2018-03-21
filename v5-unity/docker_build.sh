tupydir="interpreter"
mv tupy _tupy_symlink
cp -r $tupydir/tupy tupy
docker build -t registry.heroku.com/tutortupy/web .
rm -rf tupy
mv _tupy_symlink tupy
