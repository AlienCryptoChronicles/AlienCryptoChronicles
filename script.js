<script>
    const quotes = [
        "Kripto evreni, kaosun sanatı! Ama en azından cebimizdeki sıfırlar artıyor.",
        "Bitcoin, galaksiler arası bir altın standardıdır... veya en azından öyle olduğuna inanmak istiyoruz.",
        "Ethereum, akıllı sözleşmelerin merkezi! Ama bazen de akıllıca davranmayan sözleşmeler de oluyor.",
        "Altcoinler uzayın jokerleridir! Bazen büyük kazançlar, bazen de büyük kayıplar..."
        "HODL, uzay gemisinin yakıtıdır! Ama roket yakıtı kadar pahalı olabilir."
        "Kripto yatırımı yapmadan önce uzaylılara danışın, onlar geleceği daha iyi görür (belki de)!",
        "Bitcoin madenciliği yaparken elektrik faturam o kadar yükseldi ki, şimdi evimde uzay gemisi inşa ediyorum!",
        "Altcoinler, kripto dünyasının popüler çocukları gibidir, bugün var yarın yok!"
    ];

    document.querySelector(".alien-container").addEventListener("click", () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("quote").innerText = randomQuote;
    });
</script>
