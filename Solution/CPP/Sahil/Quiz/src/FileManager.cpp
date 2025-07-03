#include "../include/FileManager.h"

#
using namespace std;

FileManager::FileManager(){
    // Constructor implementation
}

FileManager::~FileManager(){
    // Destructor implementation
}

bool FileManager::readFile(const string &filename, string &content) {

    FILE* ptrFile = fopen(filename.c_str(), "r");
    
    if (!ptrFile) {
        return false; // File not found or could not be opened
    }

    char buffer[1024];  //empty buffer to read lines
    content.clear();    // Clear the content string before reading
    
    while (fgets(buffer, sizeof(buffer), ptrFile)) {
        content += buffer; // Append each line to content
    }

    fclose(ptrFile);
    return true; // Successfully read the file
}


bool FileManager::writeFile(const string &filePath, const std::string &content) {
    
    FILE* ptrFile = fopen(filePath.c_str(), "w");
    
    if (!ptrFile) {
        return false; // Could not open file for writing
    }

    fputs(content.c_str(), ptrFile); // Write content to the file
    fclose(ptrFile);
    return true; // Successfully wrote to the file
}

bool FileManager::deleteFile(const string& filePath) {
    
    if (remove(filePath.c_str()) != 0) {
        return false; // Could not delete the file
    }
    
    return true; // Successfully deleted the file
}