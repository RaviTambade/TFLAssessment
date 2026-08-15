
using DataHelper.Repository.Interface;

namespace DataHelper.Repository.Implementation
{
    public class FileIoService<T> :IFileIoService<T>
    {
        private readonly FileIoRepository<T> _repository;
        public FileIoService(FileIoRepository<T> repository)
        {
            _repository=repository;
        }
        public List<T> ReadDataFromCSV(string _file, Func<string[], T> createObject)
        {
           return _repository.ReadDataFromCSV(_file,createObject);
        }

        public List<T> ReadDataFromJSON(string _file)
        {
            return _repository.ReadDataFromJSON(_file);
        }

        public bool WriteDataToCSV(string _file, List<T> tobj)
        {
           return _repository.WriteDataToCSV(_file,tobj);
        }

        public bool WriteDataToJSON(string _file, List<T> tobj)
        {
            return _repository.WriteDataToJSON(_file,tobj);
        }

    }
}