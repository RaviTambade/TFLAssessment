
namespace DataHelper.Repository.Interface
{
    public interface IFileIoRepository<T>
    {

        public List<T> ReadDataFromCSV(string _file, Func<string[], T> createObject);
        public bool WriteDataToCSV(string _file,List<T> t);
        public bool WriteDataToJSON(string _file,List<T> t);
        public List<T> ReadDataFromJSON(string _file);
    }
}