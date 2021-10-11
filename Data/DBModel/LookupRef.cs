
using MongoDB.Bson;

namespace Site.Data.DBModel
{
    public class LookupRef<T> where T : BaseData
    {
        private BsonObjectId key;

        public BsonObjectId Key
        {
            get
            {
                return key;
            }
            set
            {
                if (_Value != null && value != key) _Value = null;
                key = value;
            }
        }

        public string KeyAsString
        {
            get
            {
                return (key ?? BaseData.BsonZeroId).ToString(); //!!!
            }
            set
            {
                BsonObjectId NewKey = value != null ? new BsonObjectId(new ObjectId(value)) : BaseData.BsonZeroId;
                if (_Value != null && NewKey != key) _Value = null;
                key = NewKey;
            }
        }

        private T _Value;

        public T Value
        {
            get
            {
                if (_Value == null)
                    if (key != BaseData.BsonZeroId)
                        _Value = DbContext.ItemById<T>(key);
                return _Value;
            }
            set
            {
                _Value = value;
                if (value != null)
                    key = value.Id;
                else
                    key = BaseData.BsonZeroId;
            }
        }

        public LookupRef()
        {
        }

        public LookupRef(T A)
        {
            Value = A;
        }
     
    }
}
