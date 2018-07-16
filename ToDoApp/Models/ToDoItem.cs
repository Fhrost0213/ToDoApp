namespace ReactTest.Models
{
    public class ToDoItem
    {
        public ToDoItem(int id, string value)
        {
            Id = id;
            Value = value;
        }

        public int Id { get; set; }
        public string Value { get; set; }
    }
}
