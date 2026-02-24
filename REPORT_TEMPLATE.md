# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Cat Calculator

**What does your calculator do?**  
Explains your height and weight by cats. Nhere is three types of cats small, medium, big.

Example:  
This calculator calculates Body Mass Index (BMI) using weight and height. It also classifies the result into health categories.

---

## 2. Inputs

List and explain all inputs you used.

| Input Name | Unit | What it Represents |
|---|---|---|
|Weight | kg | User body weight |
|Height | cm | User height |

Explain in words:  Because i explaim human metric in cats. So i need exactly this to convert it.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
(Write your formula or explain how calculation works.)

Example:  
BMI = weight / (height in meters)^2

1. Standard Cat:

Height in cats = Your height (in cm) / 46

Weight in cats = Your weight (in kg) / 4.5

2. Maine Coon:

Height in Maine Coons = Your height (in cm) / 100

Weight in Maine Coons = Your weight (in kg) / 8

3. One-Month-Old Kitten:

Height in kittens = Your height (in cm) / 15

Weight in kittens = Your weight (in kg) / 0.5

**Steps:**
1. The Input
You type your height and weight into the input fields and select a cat breed from the dropdown menu.

2. The Trigger
You click the "Calculate" button. This action acts as a switch that wakes up the JavaScript file.

3. Data Collection
The JavaScript reads the numbers you entered. Then, it looks at the dropdown menu to see which cat you picked and grabs that specific cat's secret data (its base height, weight, and the funny text associated with it).

4. The Math
The script does the actual calculation. It takes your height and divides it by the cat's height. Then, it takes your weight and divides it by the cat's weight.

5. The Reveal
JavaScript takes those final calculated numbers, inserts them into the HTML, and finally changes the CSS of the "Result" box from hidden to visible so you can read your score. 

---

## 4. Conditional Logic (if / else)

Example:

If BMI < 18.5 → Underweight  
If BMI 18.5 – 24.9 → Normal  
If BMI ≥ 25 → Overweight  

It shows you in cats   if (!height || !weight || height <= 0 || weight <= 0) {
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
        heightVerdict = "У тебя отличный средний рост. Примерно 3.5–4 кота — идеальный человек-дерево для лазанья.";
    } else {
        heightVerdict = "Ого, да ты гигант! Больше 4 котов в высоту — настоящая башня.";
    }

    let weightVerdict = "";
    if (weight < 60) {
        weightVerdict = "Ты легкий! Если коты устроят на тебе кучу-малу, тебе будет тяжело дышать.";
    } else if (weight >= 60 && weight < 90) {
        weightVerdict = "Оптимальная масса. На тебе поместится целая кошачья семья.";
    } else {
        weightVerdict = "Мощная комплекция! Ты — непробиваемая крепость и отличная защита от собак.";
    }

---

## 5. Output

What does your program show to the user?

- Calculated value  Kg, sm
- Category or interpretation  Cats
- Personalized message (if used)  
- Optional: binary output (if implemented)

---

## 6. Edge Cases / Unusual Inputs

What happens if:

- User enters zero?  
- User enters negative number?     For all asks to fill corect input
- User leaves input empty?  

Explain how your program handles this.

---

## 7. Optional Features (If You Added Any)

Examples:
- Binary conversion  
- Extra calculations  
- Extra UI features  
- Validation messages  

---

## 8. How to Run the Project

1. Download or clone repository  
2. Open `index.html` in browser  
3. Enter input values  
4. Click calculate button  

---

## 9. AI Usage (If Used)

Did you use AI tools?  
(Yes)

If yes, explain briefly:
- What you asked AI for: help to formate it
- What you modified yourself: Java script
- What you fully understand now: Html, css

---

## 10. Reflection

What did you learn from this assignment?

Good to Practise JS. Other things i knew before.
