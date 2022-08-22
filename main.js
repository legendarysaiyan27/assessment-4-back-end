const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("./api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const misfortuneBtn = document.getElementById("misfortuneButton")

const getMisfortune =() => {
    axios.get("./api/misfortune/")
        .then(res => {
            const data = res.date;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune)
misfortuneBtn.addEventListener('click', getMisfortune)
