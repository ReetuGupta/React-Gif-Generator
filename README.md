# 🎲 Random GIFs Generator

A fun React project that generates random GIFs using the **GIPHY API**.  
It demonstrates the use of **custom hooks** (`useGif`) to handle API logic, loading states, and reusability between multiple components (`Random` and `Tag`).

## 🚀 Features

- Fetches random GIFs from GIPHY API  
- Includes two components:
  - **Random GIF**: Displays completely random GIFs
  - **Tag GIF**: Displays GIFs based on a custom tag (e.g., “cats”, “dogs”)
- Built with a **Custom Hook (`useGif`)** for reusable API logic  
- Responsive UI with **Tailwind CSS**  
- Spinner shown while loading  


## 🧠 What I Learned

- Creating and using **Custom Hooks** in React  
- Working with **Axios** to fetch API data  
- Managing **loading states** efficiently  
- Using **environment variables** in Vite projects  
- Structuring clean and reusable **React components**


## 📂 Folder Structure

src/\
┣ components/\
┃ ┣ Random.jsx\
┃ ┣ Spinner.jsx\
┃ ┗ Tag.jsx\
┣ hooks/\
┃ ┗ useGif.jsx\
┣ App.jsx\
┣ main.jsx\
┣ index.css\
┗ .env

## ⚙️ Tech Stack

- **React.js (Vite)**
- **Tailwind CSS**
- **Axios**
- **Custom Hooks**
- **GIPHY API**

## 🌐 Live Demo

[👉 View Deployed Site](https://random-gif-generator-reetu.netlify.app/)


## ⚡ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ReetuGupta/React-Gif-Generator.git
   cd React-Gif-Generator
   ```

2. Install dependencies:

    ```
    npm install
    ```

3. Create a .env file in the root directory and add your GIPHY API key:

    ```
    VITE_APP_GIPHY_API_KEY=your_api_key_here
    ```

4. Run the development server:

    ```
    npm run dev
    ```

5. Open your browser and visit:

    ```
    http://localhost:5173
    ```

## 🧠 How It Works
- The custom hook useGif handles:
- Fetching GIF data from GIPHY API
- Managing loading state
- Returning gif, loading, and fetchData for reuse
- Random.jsx calls useGif() with no tag for random GIFs.
- Tag.jsx calls useGif(tag) to get GIFs based on user input.

## 🔮 Future Improvements
- Add category dropdown for quick tag selection
- Save favorite GIFs
- Infinite scroll for continuous GIF loading
- Copy GIF URL / Download option
- Dark/Light mode

## 👨‍💻 Author
- Made with ❤️ by REETU GUPTA
- 🌐 Portfolio: [My Portfolio](https://reetugupta-portfolio.netlify.app/)
- 📩 Reach me: reetu.gupta703@gmail.com