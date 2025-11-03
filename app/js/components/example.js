const items = [
    {
        title: '5 кг',
        info: 'снижение веса'
    }, {
        title: '60 дней',
        info: 'затрачено времени'
    },
]

export function renderExample() {
    const exampleSection = document.querySelector(".main-example__achievement-group");

    items.forEach((item) => {
        const card = document.createElement("div");
        card.className = "main-example__achievement-card-wrapper";

        card.innerHTML = `
 <div class="main-example__achievement-card-border">
                        </div>
                        <div class="main-example__achievement-card">
                            <p class="main-example__achievement-card-title">${item.title}</p>
                            <p class="main-example__achievement-card-info">${item.info}</p>
                        </div>
    `;

        exampleSection.appendChild(card);
    });
}
