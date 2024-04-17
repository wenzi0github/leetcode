g++ -std=c++17 $1 -o temp.o

echo "compile success, you can input anything.\n";

./temp.o
rm -rf ./temp.o