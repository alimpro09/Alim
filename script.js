const catData = {
    standard: { 
        w: 4.5, 
        h: 46, 
        name: "стандартных котов", 
        hText: "Если поставить их друг на друга, они смогут смотреть вам прямо в глаза.", 
        wText: "Вы официально признаны лучшей в мире лежанкой." 
    },
    mainecoon: { 
        w: 8, 
        h: 100, 
        name: "мейн-кунов", 
        hText: "Этим гигантам даже не нужно прыгать, чтобы достать вам до макушки.", 
        wText: "Такая масса суровой пушистости требует отдельного дивана." 
    },
    kitten: { 
        w: 0.5, 
        h: 15, 
        name: "котят", 
        hText: "Пожалуйста, ступайте осторожнее.", 
        wText: "Столько котят могут захватить небольшой район города." 
    }
};

// Ждем загрузки HTML, чтобы кнопка точно нашлась
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcBtn').addEventListener('click', function() {
        const height = parseFloat(document.getElementById('humanHeight').value);
        const weight = parseFloat(document.getElementById('humanWeight').value);
        const type = document.getElementById('catType').value;

        if (!height || !weight || height <= 0 || weight <= 0) {
            alert("Пожалуйста, введите корректные рост и вес!");
            return;
        }

        const cat = catData[type];
        const catHeight = (height / cat.h).toFixed(1);
        const catWeight = (weight / cat.w).toFixed(1);

        let heightVerdict = "";
        if (height < 160) {
            heightVerdict = "Кстати, ты довольно компактный! Меньше трех с половиной котов в высоту.";
        } else if (height >= 160 && height < 185) {
            heightVerdict = "У тебя отличный средний рост. Идеальное дерево для лазанья.";
        } else {
            heightVerdict = "Ого, да ты гигант! Настоящая башня.";
        }

        let weightVerdict = "";
        if (weight < 60) {
            weightVerdict = "Ты легкий! Если коты устроят на тебе кучу-малу, тебе будет тяжело дышать.";
        } else if (weight >= 60 && weight < 90) {
            weightVerdict = "Оптимальная масса. На тебе поместится целая кошачья семья.";
        } else {
            weightVerdict = "Мощная комплекция! Непробиваемая крепость и отличная защита от собак.";
        }

        document.getElementById('heightTitle').innerText = `Ваш рост: ${catHeight} ${cat.name}`;
        document.getElementById('heightText').innerText = cat.hText + " " + heightVerdict;
        
        document.getElementById('weightTitle').innerText = `Ваш вес: ${catWeight} ${cat.name}`;
        document.getElementById('weightText').innerText = cat.wText + " " + weightVerdict;

        document.getElementById('result').style.display = 'block';
    });
});
