import usersData from "../data/users";

const USERS_KEY = "users";

const getUsers = () => {
  const stored = localStorage.getItem(USERS_KEY);
  return stored ? JSON.parse(stored) : usersData;
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const login = (email, password) => {
  const users = getUsers();
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) return null;

  const token = btoa(JSON.stringify({ userId: user.userId }));
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  return user;
};

export const register = (username, email, password) => {
  const users = getUsers();

  const exists = users.some((u) => u.email === email);
  if (exists) return null;

  const newUser = {
    userId: "user" + Date.now(),
    username,
    email,
    password,
    avatar: `https://i.pravatar.cc/150?u=${email}`,
    channels: [],
  };

  const updatedUsers = [...users, newUser];
  saveUsers(updatedUsers);

  const token = btoa(JSON.stringify({ userId: newUser.userId }));
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(newUser));

  return newUser;
};

export const logout = () => {
  localStorage.clear();
};

export const getCurrentUser = () =>
  JSON.parse(localStorage.getItem("user"));
