using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using ReactTest.Models;

namespace ToDoApp.Controllers
{
    [Route("api/[controller]")]
    public class ItemsController
    {
        [HttpGet("[action]")]
        public IEnumerable<ToDoItem> Get()
        {
            return ItemRepository.GetItems();
        }

        [HttpPost("[action]")]
        public HttpResponseMessage Post([FromBody]ToDoItem item)
        {
            ItemRepository.AddItem(item);

            return new HttpResponseMessage(HttpStatusCode.Created);
        }

        [HttpPost("[action]")]
        public HttpResponseMessage Put([FromBody]ToDoItem item)
        {
            ItemRepository.UpdateItem(item);

            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }
    }
}
