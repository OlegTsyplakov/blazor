

using System;
using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class NewsItem : Page
    {
        public MLString Content { get; set; } = new MLString();
        public DateTime Moment { get; set; }
        public MLString Brief { get; set; } = new MLString();
        public List<Image> Images { get; set; } = new List<Image>();
        public List<Comment> Comments { get; set; } = new List<Comment>();
        public uint Vote { get; set; }
        public bool ShowInShop { get; set; }
    }
    public class Comment
    {
        public string Name { get; set; }
        public string Message { get; set; }
        public DateTime Moment { get; set; }

    }
}
