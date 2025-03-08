
## 📌 **Gamified To-Do App**
A **fun and interactive** To-Do application with a **gamification twist**. Users can add tasks, earn XP, view charts, toggle themes, and manage their tasks efficiently.

---

## 📜 **Features**
✔️ Add, delete, and complete tasks  
✔️ Assign tasks to users dynamically  
✔️ Gamification with XP system  
✔️ Light/Dark theme toggle  
✔️ Track time taken for task completion  
✔️ Show user with the **fastest task completion**  
✔️ Visual charts for task progress  
✔️ Fully responsive UI  

---

## 🛠 **Installation & Setup**
### 1️⃣ Clone the repository
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/gamified-todo-app.git
cd gamified-todo-app
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Start the development server
```sh
npm start
```
This will start the React app at `http://localhost:3000`

---

## 📂 **Project Structure**
```
gamified-todo-app/
│── public/                # Static assets
│── src/
│   ├── components/        # React components
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   │   ├── UserInput.js
│   │   ├── UserList.js
│   │   ├── ThemeToggle.js
│   │   ├── XPBar.js
│   │   ├── TaskChart.js
│   ├── redux/             # Redux store setup
│   │   ├── actions.js
│   │   ├── reducer.js
│   ├── App.js             # Main App component
│   ├── index.js           # Entry point
│   ├── styles.css         # Global styling
│── package.json
│── README.md              # Project documentation
│── .gitignore             # Git ignored files
```

---

## 🎮 **How to Use**
1️⃣ **Add a task** using the input field and select priority  
2️⃣ **Assign task** to a user from the dropdown  
3️⃣ **Complete tasks** to gain XP  
4️⃣ **Track user performance** with charts  
5️⃣ **Toggle between light/dark mode**  
6️⃣ **Fastest user gets a congratulatory message** 🎉  

---

## 🚀 **Deploying to GitHub Pages**
### 1️⃣ Install the GitHub Pages package
```sh
npm install gh-pages --save-dev
```

### 2️⃣ Add the following scripts to `package.json`
```json
"homepage": "https://your-github-username.github.io/gamified-todo-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 3️⃣ Deploy the app
```sh
npm run deploy
```
Your app will be live at `https://your-github-username.github.io/gamified-todo-app`

---

## 🔗 **Pushing to GitHub**
### 1️⃣ Initialize Git
```sh
git init
git add .
git commit -m "Initial commit - Gamified To-Do App"
```

### 2️⃣ Connect to GitHub
```sh
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/gamified-todo-app.git
```

### 3️⃣ Push to GitHub
```sh
git branch -M main
git push -u origin main
```

---

## 🛠 **Troubleshooting**
### ❌ GitHub Push Error: `failed to push some refs`
- Run:
```sh
git pull origin main --rebase
git push origin main
```
- If conflicts appear, **resolve manually** in files and commit again.

### ❌ React App Not Starting?
- Try:
```sh
npm install
npm start
```

---

## 📜 **License**
This project is open-source and free to use. Feel free to improve it! 🚀

