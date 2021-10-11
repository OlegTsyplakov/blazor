

using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class BuildingItem : ObjectCommon
    {
        [BsonIgnoreIfDefault]
        public bool flagManufacturing { get; set; }

        [BsonIgnoreIfDefault]
        public bool flagInstallation { get; set; }

        [BsonIgnoreIfDefault]
        public bool flagSupply { get; set; }

        [BsonIgnoreIfDefault]
        public bool flagMainContractor { get; set; }

        [BsonIgnoreIfDefault]
        public bool flagDesign { get; set; }

        public MLString ConstructionCompleted { get; set; } = new MLString();
        public MLString Square { get; set; } = new MLString();
        public MLString Address { get; set; } = new MLString();
        public MLString SystemUsed { get; set; } = new MLString();

        public MLString Builder { get; set; } = new MLString();
        public MLString City { get; set; } = new MLString();
        public MLString Developer { get; set; } = new MLString();
        public MLString DesignBureau { get; set; } = new MLString();
        public MLString MainContractor { get; set; } = new MLString();
        public MLString URL { get; set; } = new MLString();

        public List<Caption> Captions { get; set; } = new List<Caption>();

        public LookupRef<Region> Region { get; set; } = new LookupRef<Region>();
        //public List<LookupRef<BuildingGroup>> BelongsTo { get; set; } = new List<LookupRef<BuildingGroup>>(); // replace with group!!!
        public bool Published { get; set; }
        public bool ShowOnMainPage { get; set; }
    }
}
