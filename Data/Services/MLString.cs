using MongoDB.Bson.Serialization.Attributes;
using System;


namespace Site.Data
{
    public class MLString
    {
        [BsonIgnoreIfNull]
        public string Ru { get; set; }
        [BsonIgnoreIfNull]
        public string En { get; set; }
        [BsonIgnore]
        public string Default
        {
            get { return Ru; }
            set { Ru = value; }
        }

        public MLString ConcatMLS(MLString A, MLString B, string delimetr = null)
        {

            MLString mls = new MLString
            {
                Ru = A.Ru + delimetr + B.Ru,
                En = A.En + delimetr + B.En
            };
            return mls;
        }

        public bool SameAs(MLString B)
        {
            if (B == null) return this == null;
            if (this == null) return false;

            return Ru == B.Ru && En == B.En;
        }

        public string GetRu()
        {
            string Result = Ru;
            if (String.IsNullOrEmpty(Result)) Result = En;
            return Result;
        }

        public string GetEn()
        {
            string Result = En;
            if (String.IsNullOrEmpty(Result)) Result = Ru;
            return Result;
        }

       public override string ToString()
        {
            return "Ru: " + Ru + " En: " + En;
        }

        public static bool IsNullOrEmpty(MLString mls)
        {
            if (mls == null) return true;
            if (string.IsNullOrEmpty(mls.En) && string.IsNullOrEmpty(mls.Ru)) return true;
            return false;
        }

        public bool ContainsWord(string Word)
        {
            return
                (Ru != null && Ru.IndexOf(Word, StringComparison.InvariantCultureIgnoreCase) >= 0) ||
                (En != null && En.IndexOf(Word, StringComparison.InvariantCultureIgnoreCase) >= 0);
        }
        public MLString()
        {
        }

        public MLString(string En = null, string Ru = null)
        {
            this.En = En;
            this.Ru = Ru;
        }
        public static MLString MLS(string Ru = null, string En = null)
        {
            MLString mls = new MLString();
            mls.Ru = Ru;
            mls.En = En;
            return mls;
        }
       
        private const string DefaultResult = null; //string.Empty;
        public static MLStringUse Use(string UICulture)
        {
            if (UICulture.StartsWith("ru"))
            {
                return mls =>
                {
                    if (mls == null)
                        return DefaultResult;

                    return mls.GetRu();
                };
            }

            if (UICulture.StartsWith("en"))
            {
                return mls =>
                {
                    if (mls == null)
                        return DefaultResult;

                    return mls.GetEn();
                };
            }

            return mls =>
            {
                if (mls == null)
                    return DefaultResult;

                return mls.GetRu();
            };
        }

    }

    public delegate string MLStringUse(MLString Source);

}


