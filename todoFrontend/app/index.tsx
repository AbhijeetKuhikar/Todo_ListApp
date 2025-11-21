import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
} from "react-native"
import axios from "axios"

interface Todo {
  _id: string;
  text: string;
  completed: boolean;
}
const API = "http://10.210.108.190:5000";//we have to add the ip address of the laptop which is on same wifi as the mobile

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<string | null>(null)

  // to Load the Todos
  useEffect(() => {
    fetchTodos();
  }, [])

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API}/todos`)
      setTodos(res.data)
    } catch (err) {
      console.log("Error fetching todos", err);
    }
  };

  // TO handle the updates and delete operations
  const handleAddOrUpdate = async () => {
    if (!input.trim()) return;

    try {
      if (editId) {
        const res = await axios.put(`${API}/todos/${editId}`, {
          text: input,
        });
        setTodos((prev) =>
          prev.map((t) => (t._id == editId ? res.data : t))
        );

        setEditId(null);
      } else {
        const res = await axios.post(`${API}/todos`, {
          text: input,
        });
        setTodos((prev) => [...prev, res.data])
      }
      setInput("");
    } catch (err) {
      console.log("Error saving todo", err);
    }
  }

  // TO handle the delete operation.
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API}/todos/${id}`);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (err) {
      console.log("Delete error", err);
    }
  };

  // to handle the toggle
  const toggleComplete = async (id: string) => {
    try {
      const res = await axios.patch(`${API}/todos/${id}/toggle`);
      setTodos((prev) => prev.map((t) => (t._id == id ? res.data : t)));
    } catch (err) {
      console.log("Toggle error", err);
    }
  }

  // TO handle the Edits
  const handleEdit = (todo: Todo) => {
    setInput(todo.text);
    setEditId(todo._id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO LIST APP</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter todo tasks...."
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleAddOrUpdate} style={styles.btn}>
          <Text style={styles.btnText}>{editId ? "Update" : "Add"}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) =>(
          <View style={styles.todoItem}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Switch
                value={item.completed}
                onValueChange={() => toggleComplete(item._id)}
              />
              <Text
                style={[
                  styles.todoText,
                  item.completed && styles.completedText,
                  { marginLeft: 10 },
                ]}
              >
                {item.text}
              </Text>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => handleEdit(item)}
                style={styles.actionBtn}
              >
                <Text>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleDelete(item._id)}
                style={styles.actionBtn}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
//This is the Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#452829",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color:"#F3E8DF",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    color:"#F3E8DF"
  },
  input: {
    flex: 1,
    backgroundColor: "#E8D1C5",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color:"#452829"
  },
  btn: {
    backgroundColor: "#57595B",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
  },
  btnText: {
    color: "#F3E8DF",
    fontWeight: "bold",
  },
  todoItem: {
    backgroundColor: "#F3E8DF",
    padding: 8,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoText: {
    fontSize: 15,
    color: "#452829",
  },
  completedText: {
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  actionBtn: {
    padding: 5,
  },
})
