namespace ReactTest.Models
{
    public class ToDoItem
    {
        public ToDoItem(int id, string value, bool isCompleted)
        {
            Id = id;
            Value = value;
            IsCompleted = isCompleted;
        }

        public int Id { get; set; }
        public string Value { get; set; }
        public bool IsCompleted { get; set; }
    }
}
