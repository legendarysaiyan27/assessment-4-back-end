const fortuneBtn = document.getElementById("fortuneButton")
const misfortuneBtn = document.getElementById("misfortuneButton")
const form = document.getElementById("form")
const formInput = document.getElementById("form-input")
const selection = document.getElementById("selection")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getMisfortune =() => {
    axios.get("http://localhost:4000/api/misfortune/")
        .then(res => {
            const data = res.date;
            alert(data);
        });
};

const postMake = (e) => {
    e.preventDefault();
    const inputValue = formInput.value;

    axios.post("http://localhost:4000/api/make/", { inputValue }).then((res) => {
        res.data.forEach((element, index) => {
            let charCard = document.createElement("div");
            charCard.innerHTML = `<h3>${element}</h3>
            <button id=${index}>Delete</button>
            `;
            selection.appendChild(charCard);
            const button = document.getElementById(index);
            button.addEventListener("click", () => {
                axios.delete(`http://localhost:4000/api/make/${index}`).then((res) => {
                    console.log(res.data);
                });
            });
        });
    });
};


fortuneBtn.addEventListener("click", getFortune);
misfortuneBtn.addEventListener("click", getMisfortune);
form.addEventListener("submit", postMake);
