# file-manager

The program can be run using the following npm script in the develop branch:

```bash
npm run start -- --username=your_username
```

NOTE: If the path contains spaces, it must be wrapped in quotation marks like this:

```bash
'C:\username\folder name'
```
or:

```bash
"C:\username\folder name"
```

If you want to compress or decompress a file in the current directory, you can use the dot "." as the second argument, for example:

```bash
decompress C:\Folder\fileToDecompress.txt.br .
compress C:\Folder\fileToCompress.txt .
```

List of commands:

+ Go upper from current directory
```bash
up
```

+ Go to dedicated folder from current directory
```bash
cd path_to_directory
```

+ Print in console list of all files and folders in current directory
```bash
ls
```

+ Read file and print it's content in console
```bash
cat path_to_file
```

+ Create empty file in current working directory
```bash
add new_file_name 
```

+ Rename file
```bash
rn path_to_file new_filename
```

+ Copy file
```bash
cp path_to_file path_to_new_directory
```

+ Move file
```bash
mv path_to_file path_to_new_directory
```

+ Delete file
```bash
rm path_to_file
```

+ Calculate sha256 hash for file
```bash
hash path_to_file
```

+ Compress file using Brotli algorithm
```bash
compress path_to_file path_to_destination
```

+ Deompress file
```bash
decompress path_to_file path_to_destination
```

+ Get EOL sym
```bash
os --EOL
```

+ Get cpu info
```bash
os --cpus
```

+ Get home dir and print it in console
```bash
os --homedir
```

+ Get current system user name
```bash
os --username
```

+ Get CPU architecture
```bash
os --architecture
```
