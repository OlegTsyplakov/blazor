using Microsoft.AspNetCore.Components;
using Site.Data.DBModel;
using System.Collections.Generic;
using MongoDB.Bson;
using System.IO;
using System.Drawing;
using System.Drawing.Drawing2D;
using System;

namespace Site.Data.Services
{
    public static class Utils
    {
       
        public static string LC(string Ru = null, string En = null, string lang = "ru")
        {
            if (lang == "en" && !string.IsNullOrEmpty(En)) 
            {
                return En;
            }
            return Ru ?? string.Empty;
        }
        public static string LC(MLString mls, string lang = "ru")
        {
            if (lang == "en" && !string.IsNullOrEmpty(mls.En))
            {
                return mls.En;
            }
            return mls.Ru ?? string.Empty; 
        }
        public static string LangHref(string lang, string url) 
        {
            return "/" + lang + "/" + url ?? string.Empty;
        }
      
        public static MarkupString HtmlRaw(string text)
        {
            return (MarkupString)text;
        }
        public static DBModel.Image GetImageByIndex<T>(T item, int Index) where T : ObjectCommon
        {
            if (item.Images.Count > Index)
                return item.Images[Index];

            return null;
        }
        public static string ImgAlt(DBModel.Image im, string AltAlt)
        {
            string Alt = null;
            if (im != null)
            {
                Alt = LC(im.Alt);
                if (string.IsNullOrEmpty(Alt)) Alt = AltAlt;
            }
            return Alt ?? string.Empty;
        }
        public static bool CheckImageExists(DBModel.Image im,string lang) {
            if (im == null)
                return false;
            var href = (im.FileName != null) ? Utils.LC(im.FileName, lang) : string.Empty;
            if (string.IsNullOrEmpty(href))
            {
                return false;
            }
            return true;
        }
            public static string CutString(string str, int num)
        {
            var listWords = str.Split(' ');
            var text = string.Empty;
            foreach (var lw in listWords)
            {
                if ((text + lw).Length > num)
                {
                    text += " ...";
                    break;
                }

                text += lw + " ";
            }
            return text;
        }
        public static Youtube GetMainYoutube(WareGroup WG)
        {
            Youtube Result = new Youtube();
            var group_pointer = WG;
            var top_group = WG.TopParent;
            if (WG?.YoutubeVideo.KeyAsString != null || WG.YoutubeVideo.KeyAsString == Settings.DBZeros)
            {
                while (group_pointer != top_group && group_pointer.YoutubeVideo.KeyAsString == Settings.DBZeros)
                {
                    group_pointer = group_pointer.Parent.Value;
                }
                if (group_pointer.YoutubeVideo.KeyAsString != Settings.DBZeros && group_pointer.YoutubeVideo.Value.Name.Ru != null)
                {
                    Result = group_pointer.YoutubeVideo.Value;


                }
            }
            else
            {
                Result = WG.YoutubeVideo.Value;
            }

            return Result;
        }
        public static List<Youtube> CollectYoutube(WareGroup WG)
        {
            List<Youtube> Result = DbContext.GetAllItemsFromCollection<Youtube>(x => x.PSO != null && x.PSO == WG.GetPSO(), x => x.Position);
            if (Result.Count == 0)
            {
                Result = DbContext.GetAllItemsFromCollection<Youtube>(null, x => x.Position);
            }

            return Result;
        }
        public static WareGroup GetCatalogRoot()
        {
            WareGroup Cat = null;
            try
            {
                Cat = DbContext.ItemById<WareGroup>(ObjectId.Parse(Settings.CatalogId));
            }
            catch { }
            return Cat;
        }
        public static string HtmlEncode(string value)
        {
            if (string.IsNullOrEmpty(value))
                return string.Empty;
            return value
              .Replace("<", "&lt;")
              .Replace(">", "&gt;")
              .Replace("\"", "&quot;")
              .Replace("'", "&apos;")
              .Replace("&", "&amp;");
        }

        public static string HtmlDecode(string value)
        {
            if (string.IsNullOrEmpty(value))
                return string.Empty;
            return value
              .Replace("&lt;", "<")
              .Replace("&gt;", ">")
              .Replace("&quot;", "\"")
              .Replace("&apos;", "'")
              .Replace("&amp;", "&");
        }
        public static string GetImageUrl(string filename)
        {

            return Utils.LC(filename).Substring(1) ?? Settings.NoPhotoUrl;
        }
        public static string GetImageCropedUrl(MLString FileName, int width = 1, int height = 1)
        {
            var no_tilda = Utils.LC(FileName).Substring(1);
            var no_tilda_filename = Directory.GetCurrentDirectory() + "\\wwwroot\\" + no_tilda;
            var filename_path = Path.GetDirectoryName(no_tilda_filename);
            var filename = Path.GetFileNameWithoutExtension(no_tilda_filename);
            var filename_extension = Path.GetExtension(no_tilda_filename);
            if (filename_extension.ToLower()==".svg") 
            {
                return no_tilda;
            }
            var filename_croped = filename + "_" + width + "x" + height + filename_extension;
            var filename_croped_path = filename_path + "/.cache/" + filename_croped;
            var url_croped = Path.GetDirectoryName(no_tilda).Replace("\\", "/") + "/.cache/" + filename_croped;

            if (System.IO.File.Exists(filename_croped_path))
            {
                return url_croped;
            }
            try
            {
                var source = System.Drawing.Image.FromFile(no_tilda_filename);

                if (source.Width != width || source.Height != height)
                {
                    // Resize image
                    float sourceRatio = (float)source.Width / source.Height;

                    // Scaling
                    float scaling;
                    float scalingY = (float)source.Height / height;
                    float scalingX = (float)source.Width / width;
                    if (scalingX > scalingY) scaling = scalingX; else scaling = scalingY;

                    int newWidth = (int)(source.Width / scaling);
                    int newHeight = (int)(source.Height / scaling);

                    using (var target = new Bitmap(newWidth, newHeight))
                    {
                        using (var g = Graphics.FromImage(target))
                        {
                            g.CompositingQuality = CompositingQuality.HighQuality;
                            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
                            g.SmoothingMode = SmoothingMode.HighQuality;



                            // Correct float to int rounding
                            //if (newWidth < width) newWidth = width;
                            //if (newHeight < height) newHeight = height;

                            // See if image needs to be cropped
                            int shiftX = 0;
                            int shiftY = 0;

                            //if (newWidth > width)
                            //{
                            //    shiftX = (newWidth - width) / 2;
                            //}

                            //if (newHeight > height)
                            //{
                            //    shiftY = (newHeight - height) / 2;
                            //}

                            // Draw image
                            g.DrawImage(source, -shiftX, -shiftY, newWidth, newHeight);
                        }

                        target.Save(filename_croped_path);
                    }
                }
                else
                {
                    return no_tilda;
                }

            }
            catch (Exception ex)
            {
                return ex.Message;
            }

            return url_croped;
        }

    }


}
