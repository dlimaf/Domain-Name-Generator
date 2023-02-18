/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var extensions = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < extensions.length; m++) {
          let nuevo = document.createElement("div");
          nuevo.innerHTML = pronoun[i] + adj[j] + noun[k] + extensions[m];
          document.querySelector("p").appendChild(nuevo);
          console.log(nuevo.innerHTML);
        }
      }
    }
  }
};
