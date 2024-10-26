//consuming json

async function summaryScore() {
    const res = await fetch('./data.json');
    const resConvert = await res.json();
    
    const card = document.querySelectorAll(".summary-card-item");

    for (let i = 0; i <= 3; i++) {
        card[i].innerHTML = `<span class="flex">
                                <img src="${resConvert[i].icon}" alt="">
                                <h3>${resConvert[i].category}</h3>
                             </span>
                
                        <p><span>${resConvert[i].score}</span> / 100</p>`
    }
}

summaryScore()
   

    



 