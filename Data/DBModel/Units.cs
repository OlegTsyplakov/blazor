

namespace Site.Data.DBModel
{
    public class Units
    {
        public string Unit { get; set; }

        public double Coefficient { get; set; }

        public double Multiplicity { get; set; }

        public double Weight { get; set; }

        public string WeightUnitOfMeasurement { get; set; }

        public double Volume { get; set; }

        public string VolumeUnitOfMeasurement { get; set; }

        public double MultiplicityRelease { get; set; }

        public bool CheckRelease { get; set; }

        public double Length { get; set; }

        public double Width { get; set; }

        public double Height { get; set; }

        public string SizeUnitOfMeasurement { get; set; }

        public bool CalculateVolumeBySize { get; set; }

        public int QuantityPerPack { get; set; }

        public double FreeVolume { get; set; }
    }
}
