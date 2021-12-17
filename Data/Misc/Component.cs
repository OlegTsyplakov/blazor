using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;


namespace Site.Data
{
    public static class Component
    {
        public static RenderFragment Create(Type type,Dictionary<string, string> items, Dictionary<string, Action<ElementReference>> callbacks) => builder =>
        {
            int count = 1;
            if (items == null)
            {
                builder.OpenComponent(0, type);
                foreach (var callback in callbacks)
                {
                    builder.AddAttribute(count, callback.Key, callback.Value);
                    count++;
                }
                builder.CloseComponent();
            }
            else
            {
                
                builder.OpenComponent(0, type);
                foreach (var item in items)
                {
                    builder.AddAttribute(count, item.Key, item.Value);
                    count++;
                }
                foreach (var callback in callbacks)
                {
                    builder.AddAttribute(count, callback.Key, callback.Value);
                    count++;
                }
                builder.CloseComponent();
            }


        };
    }
}
