import React from "react";
import ChatBot from "react-chatbotify";
import Data from "./Data";

let searchResults = []; // store results outside the component

export default function MyChatBot() {

  const flow = {
    start: {
      message: "Hello! I am CIVI 👋 What would you like to do?",
      options: ["Search Movies"],
      chatDisabled: true,
      path: (params) => (params.userInput === "Search Movies" ? "movie_start" : "start"),
    },

    movie_start: {
      message: "🎬 Great! Which movie are you interested in? (vikram, coolie..)",
      path: "movie_results",
    },

    movie_results: {
      message: (params) => {
        const query = params.userInput.toLowerCase();
        searchResults = Data.filter(
          (m) =>
            (m.genres || []).some((g) => g.name.toLowerCase().includes(query)) ||
            m.name.toLowerCase().includes(query)
        );

        if (!searchResults.length) {
          return `Sorry, no movies found for "${query}". Try Action, Comedy, Thriller, or Sci-Fi.`;
        }

        return searchResults
          .map(
            (m) => `🎥 ${m.name} (${m.releaseDate.split("-")[0]}) 🍿 Available on: ${m.ottplatform}`
          )
          .join("\n");
      },

      // Use the external variable to generate buttons
      

      path: "movie_search_more",
    },

    movie_search_more: {

      message: "Would you like to search another movie or genre?",
      options: ["Yes", "No"],
      chatDisabled: true,
      path: (params) => (params.userInput === "Yes" ? "movie_start" : "start"),
    },
  };

  return (
   <ChatBot
      flow={flow}
      settings={{
        general: {
          embedded: false,
          floating: true,
          floatingStyle: {
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
          },
        },
        header: {
          title: "CIVI",
          style: {
            background: "linear-gradient(90deg, #6366f1, #2563eb)",
            color: "#fff",
            borderRadius: "10px 10px 0 0",
            fontWeight: "bold",
          },
        },
        chatWidth: "350px",
        chatHeight: "500px",
        chatHistory: { storageKey: "movie_chatbot_history" },
        theme: {
          primaryColor: "#1f2937",    // user message bubble
          secondaryColor: "#2563eb",  // bot bubble
          backgroundColor: "#ffffff",
          botMessageColor: "#ffffff",
          botMessageBackground: "#2563eb",
          userMessageColor: "#000000",
          userMessageBackground: "#e5e7eb",
        },
        input: {
          style: {
            borderRadius: "0 0 10px 10px",
          },
        },
      }}
    />
  );
}
