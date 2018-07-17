using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTest.Models
{
    public static class ItemRepository
    {
        private static List<ToDoItem> _items = new List<ToDoItem>();

        public static List<ToDoItem> GetItems()
        {
            return _items;
        }

        public static void AddItem(ToDoItem item)
        {
            var newId = 1;

            if (_items.Any())
            {
                newId = _items.Max(x => x.Id) + 1;
            }

            var newItem = new ToDoItem(newId, item.Value, false);

            _items.Add(newItem);
        }
    }
}
