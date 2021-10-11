

namespace Site.Data.DBModel
{
    public class FileRef
    {
        public LookupRef<File> Ref { get; set; } = new LookupRef<File>();
        public bool Propagate { get; set; } = true;
    }
}
