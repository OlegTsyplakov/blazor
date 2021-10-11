

namespace Site.Data.DBModel
{
    public class GroupUnitCaption
    {
        public LookupRef<Unit> GroupUnit { get; set; } = new LookupRef<Unit>();
        public MLString Caption { get; set; } = new MLString();
    }
}
