#!/usr/bin/env bash

output_folder="./dist/Electron-Calculator-linux-x64"
echo "Moving binary to new path"
mv "${output_folder}/Electron-Calculator" "${output_folder}/binary"
echo "Creating new launcher file"
cp "./compilers/launcher.sh" "${output_folder}/Electron-Calculator"
echo "Done!"