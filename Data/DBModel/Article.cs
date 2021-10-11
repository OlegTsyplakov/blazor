
using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class Article : Page
    {
        public Image MainImage { get; set; }
        public List<ArticleBlock> Block { get; set; } = new List<ArticleBlock>();
        public List<Comment> Comments { get; set; } = new List<Comment>();
        public uint Vote { get; set; }
        public bool Published { get; set; } = true;
    }
    public class ArticleBlock
    {
        public MLString Subtitle { get; set; } = new MLString();
        public MLString Content { get; set; } = new MLString();
        public Image Image { get; set; }
    }
}
