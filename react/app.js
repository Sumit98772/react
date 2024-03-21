const parent =React.createElement("div",{id: "parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"I am H1 tag"),
React.createElement("h1",{},"Here is 2nd one")));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

