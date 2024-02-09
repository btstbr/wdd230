// BOM lesson bom.html

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", addBookOfMormon);

function addBookOfMormon() {
    if (input.value != "") {
        let listItem = document.createElement("li");
        //capitalize first letter of input value
        listItem.textContent = capitalizeWords(input.value.trim());

        //delete button to append to list item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        listItem.append(deleteButton);

        list.append(listItem);
        input.value = "";
        input.focus();

        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
            input.focus();
        });
    } else {
        alert("You must enter a chapter name");
        input.focus();
        return;
    }
}

function capitalizeWords(string) {
    // Split the string by whitespace characters
    const words = string.split(/\s+/);

    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
        // Capitalize the first letter of the word
        const capitalizedFirstLetter = word.charAt(0).toUpperCase();
        // Keep the rest of the word unchanged
        const restOfWord = word.slice(1);
        // Return the capitalized word
        return capitalizedFirstLetter + restOfWord;
    });

    // Join the words back together with whitespace and return the result
    return capitalizedWords.join(" ");
}

