// Hero button
function showMessage() {
    alert("Welcome! Start learning life skills now 🚀");
}

// Tips для каждой секции
const tipsData = {
    cv: ["Use clear formatting", "Include your contact info", "Highlight achievements, not just duties"],
    interview: ["Research the company", "Dress appropriately", "Prepare answers for common questions"],
    money: ["Create a monthly budget", "Save at least 10% of income", "Avoid unnecessary spending"],
    time: ["Use a daily planner", "Prioritize tasks", "Set small goals each day"]
};

// Quiz вопросы для каждой секции
const quizData = {
    cv: [{q: "What is most important in a CV?", a: "Achievements"}, {q: "Should you include contact info?", a: "Yes"}],
    interview: [{q: "Should you research the company? (Yes/No)", a: "Yes"}, {q: "Is it important to dress professionally? (Yes/No)", a: "Yes"}],
    money: [{q: "Should you save part of your income? (Yes/No)", a: "Yes"}, {q: "Is overspending smart? (Yes/No)", a: "No"}],
    time: [{q: "Is planning your day useful? (Yes/No)", a: "Yes"}, {q: "Should you set small goals? (Yes/No)", a: "Yes"}]
};

// Показать советы
function showTips(section) {
    const container = document.getElementById(section + "-tips");
    const tips = tipsData[section];
    container.innerHTML = "<ul>" + tips.map(t => "<li>✅ " + t + "</li>").join('') + "</ul>";
}

// Пройти мини-квиз с подсчётом баллов
function takeQuiz(section) {
    const questions = quizData[section];
    let score = 0;

    questions.forEach(item => {
        const answer = prompt(item.q);
        if(answer && answer.trim().toLowerCase() === item.a.toLowerCase()) {
            score++;
        }
    });

    const resultContainer = document.getElementById(section + "-result");
    const total = questions.length;
    let message = `You scored ${score} out of ${total}.\n`;

    if(score === total) message += "🎉 Excellent! You mastered this section.";
    else if(score >= total/2) message += "✅ Good! Review the tips to improve.";
    else message += "❌ You need to study more. Follow the tips carefully.";

    resultContainer.innerHTML = message.replace(/\n/g, "<br>");
}

// Обработчики кнопок
document.querySelectorAll(".tips-btn").forEach(btn => {
    btn.addEventListener("click", () => showTips(btn.dataset.section));
});

document.querySelectorAll(".quiz-btn").forEach(btn => {
    btn.addEventListener("click", () => takeQuiz(btn.dataset.section));
});
