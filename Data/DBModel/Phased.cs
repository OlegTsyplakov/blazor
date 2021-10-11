

using System;
using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class Phased<T> : List<Phase<T>>
    {
        public T At(DateTime Moment)
        {
            if (Count == 0 || Moment < this[0].Start) return default(T);

            // Todo: replace linear with binary search
            for (int i = Count - 1; i >= 0; i--)
            {
                Phase<T> P = this[i];
                if (P.Start <= Moment)
                    return P.Value;
            }
            throw new Exception("Must never come here");
        }

        public new void Add(Phase<T> NewPhase)
        {
            base.Add(NewPhase);
            Sort((a, b) => (DateTime.Compare(a.Start, b.Start)));
        }

        public void Add(DateTime Moment, T NewValue)
        {
            Add(new Phase<T>(Moment, NewValue));
        }

        public Phase<T> Last
        {
            get
            {
                if (Count == 0) return null;
                return this[Count - 1];
            }
        }

        public T LastValue
        {
            get
            {
                if (Count == 0) return default(T);
                return this[Count - 1].Value;
            }
            set
            {
                if (Count > 0 && Equals(this[Count - 1].Value, value))
                    return;

                DateTime Moment = DateTime.Now;
                if (Count > 0 && this[Count - 1].Start >= Moment)
                    Moment = this[Count - 1].Start.AddSeconds(1);

                base.Add(new Phase<T>(Moment, value));
            }
        }

        public DateTime LastStart
        {
            get
            {
                if (Count == 0) return default(DateTime);
                return this[Count - 1].Start;
            }
        }
    }
    public class Phase<T>
    {
        public DateTime Start { get; set; }
        public T Value { get; set; }

        public Phase()
        {
            Type TT = typeof(T);
            if (TT.IsClass && TT != typeof(string))
            {
                Value = (T)Activator.CreateInstance(TT);
            }
        }

        public Phase(DateTime Moment, T NewValue)
        {
            Start = Moment;
            Value = NewValue;
        }
    }
}
