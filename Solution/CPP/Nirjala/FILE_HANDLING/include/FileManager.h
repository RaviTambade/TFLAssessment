#include <iostream>
#include <string>
using namespace std;

class FileManager {
public:
    // Constructor
    FileManager();

    // Destructor
    ~FileManager();

    // Function to read a file
    bool readFile(const string& filePath, string& content);

    // Function to write to a file
    bool writeFile(const string& filePath, const string& content);

    // Function to delete a file
    bool deleteFile(const string& filePath);


};