tupydir="/home/gian/uerjInterpreter"
mv tupy _tupy_symlink
cp -r $tupydir/tupy tupy
docker build -t visualizador_tupy . 
rm -rf tupy
mv _tupy_symlink tupy
