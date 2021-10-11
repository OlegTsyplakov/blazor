
using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    public class ClientAndControl
    {
        public LookupRef<Client> Partner { get; set; } = new LookupRef<Client>();
        public ClientControlMode Mode;
    }
}
