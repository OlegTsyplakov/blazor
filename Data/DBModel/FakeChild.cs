

namespace Site.Data.DBModel
{
    public class FakeChild
    {
        public LookupRef<WareGroup> Child { get; set; } = new LookupRef<WareGroup>();
        public int Position { get; set; } = 1000;
    }
}
