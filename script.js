// ========================
// LIFE SKILLS FOR TEENS
// ========================

// Советы (по 20–25 на каждую тему)
const tipsData = {
  cv: [
    "Use clear formatting",
    "Include your contact info",
    "Highlight achievements, not just duties",
    "Use action verbs",
    "Keep it one page if possible",
    "Tailor CV to the job description",
    "Include relevant skills",
    "Check spelling and grammar",
    "Use professional email address",
    "Add LinkedIn profile link",
    "Include volunteer experience",
    "Include awards and honors",
    "Avoid irrelevant personal info",
    "Use bullet points for clarity",
    "Focus on achievements, not tasks",
    "Include keywords from the job posting",
    "Keep layout clean and readable",
    "Update CV regularly",
    "Ask someone to proofread",
    "Include measurable results",
    "List certifications and courses",
    "Highlight soft skills",
    "Use professional tone",
    "Avoid clichés",
    "Customize CV for each application"
  ],
  interview: [
    "Research the company before interview",
    "Dress appropriately",
    "Prepare answers for common questions",
    "Practice your introduction",
    "Arrive on time",
    "Bring extra copies of your CV",
    "Maintain eye contact",
    "Listen carefully",
    "Speak clearly and confidently",
    "Ask relevant questions",
    "Demonstrate your interest in the role",
    "Use positive body language",
    "Highlight achievements with examples",
    "Be honest and professional",
    "Prepare examples for STAR method",
    "Research common interview mistakes",
    "Follow up with a thank-you note",
    "Show enthusiasm for learning",
    "Be aware of non-verbal cues",
    "Know your strengths and weaknesses",
    "Avoid talking negatively about previous jobs",
    "Practice mock interviews",
    "Stay calm under pressure",
    "Prepare questions to ask the interviewer",
    "Show problem-solving skills"
  ],
  money: [
    "Create a monthly budget",
    "Save at least 10% of income",
    "Avoid unnecessary spending",
    "Track your expenses",
    "Set financial goals",
    "Use separate accounts for savings",
    "Invest wisely",
    "Understand interest rates",
    "Use coupons and discounts",
    "Avoid credit card debt",
    "Learn about taxes",
    "Plan for emergencies",
    "Prioritize needs over wants",
    "Understand loans before borrowing",
    "Start saving early",
    "Compare prices before buying",
    "Limit online shopping",
    "Understand compound interest",
    "Plan for long-term goals",
    "Use financial apps to track spending",
    "Learn about stocks and bonds",
    "Avoid impulse buying",
    "Set a weekly spending limit",
    "Teach yourself about money",
    "Discuss finances openly with family"
  ],
  time: [
    "Use a daily planner",
    "Prioritize tasks",
    "Set small goals each day",
    "Break large tasks into steps",
    "Avoid multitasking",
    "Track how you spend your time",
    "Set deadlines for yourself",
    "Use a timer for tasks",
    "Limit social media during work",
    "Focus on one task at a time",
    "Take regular breaks",
    "Start with the most important tasks",
    "Delegate when possible",
    "Avoid procrastination",
    "Use to-do lists",
    "Review your day at night",
    "Prepare for the next day in advance",
    "Set long-term and short-term goals",
    "Use reminders for deadlines",
    "Reward yourself for completing tasks",
    "Learn to say no",
    "Stay organized",
    "Minimize distractions",
    "Plan buffer time for unexpected events",
    "Reflect on productivity weekly"
  ]
};

// ========================
// Тесты (по 20+ вопросов на каждую тему)
const quizData = {
  cv: [
    {q:"What is most important in a CV?", a:"Achievements"},
    {q:"Should you include contact info?", a:"Yes"},
    {q:"Use action verbs? (Yes/No)", a:"Yes"},
    {q:"Keep CV one page if possible? (Yes/No)", a:"Yes"},
    {q:"Tailor CV to each job? (Yes/No)", a:"Yes"},
    {q:"Check spelling and grammar? (Yes/No)", a:"Yes"},
    {q:"Include volunteer experience? (Yes/No)", a:"Yes"},
    {q:"Use bullet points for clarity? (Yes/No)", a:"Yes"},
    {q:"Avoid irrelevant personal info? (Yes/No)", a:"Yes"},
    {q:"Include LinkedIn profile? (Yes/No)", a:"Yes"},
    {q:"Highlight achievements, not tasks? (Yes/No)", a:"Yes"},
    {q:"Customize CV for each application? (Yes/No)", a:"Yes"},
    {q:"Include measurable results? (Yes/No)", a:"Yes"},
    {q:"Use professional email address? (Yes/No)", a:"Yes"},
    {q:"Update CV regularly? (Yes/No)", a:"Yes"},
    {q:"Include awards and honors? (Yes/No)", a:"Yes"},
    {q:"List certifications and courses? (Yes/No)", a:"Yes"},
    {q:"Focus on achievements? (Yes/No)", a:"Yes"},
    {q:"Use consistent fonts? (Yes/No)", a:"Yes"},
    {q:"Ask someone to proofread? (Yes/No)", a:"Yes"}
  ],
  interview: [
    {q:"Research the company before interview? (Yes/No)", a:"Yes"},
    {q:"Dress appropriately? (Yes/No)", a:"Yes"},
    {q:"Prepare answers for common questions? (Yes/No)", a:"Yes"},
    {q:"Maintain eye contact? (Yes/No)", a:"Yes"},
    {q:"Arrive on time? (Yes/No)", a:"Yes"},
    {q:"Bring extra copies of CV? (Yes/No)", a:"Yes"},
    {q:"Listen carefully? (Yes/No)", a:"Yes"},
    {q:"Speak clearly and confidently? (Yes/No)", a:"Yes"},
    {q:"Ask relevant questions? (Yes/No)", a:"Yes"},
    {q:"Use positive body language? (Yes/No)", a:"Yes"},
    {q:"Highlight achievements with examples? (Yes/No)", a:"Yes"},
    {q:"Be honest and professional? (Yes/No)", a:"Yes"},
    {q:"Practice mock interviews? (Yes/No)", a:"Yes"},
    {q:"Follow up with thank-you note? (Yes/No)", a:"Yes"},
    {q:"Show enthusiasm for learning? (Yes/No)", a:"Yes"},
    {q:"Be aware of non-verbal cues? (Yes/No)", a:"Yes"},
    {q:"Know strengths and weaknesses? (Yes/No)", a:"Yes"},
    {q:"Avoid talking negatively? (Yes/No)", a:"Yes"},
    {q:"Prepare STAR method examples? (Yes/No)", a:"Yes"},
    {q:"Stay calm under pressure? (Yes/No)", a:"Yes"}
  ],
  money: [
    {q:"Create a monthly budget? (Yes/No)", a:"Yes"},
    {q:"Save at least 10% of income? (Yes/No)", a:"Yes"},
    {q:"Avoid unnecessary spending? (Yes/No)", a:"Yes"},
    {q:"Track your expenses? (Yes/No)", a:"Yes"},
    {q:"Set financial goals? (Yes/No)", a:"Yes"},
    {q:"Use separate accounts for savings? (Yes/No)", a:"Yes"},
    {q:"Invest wisely? (Yes/No)", a:"Yes"},
    {q:"Understand interest rates? (Yes/No)", a:"Yes"},
    {q:"Use coupons and discounts? (Yes/No)", a:"Yes"},
    {q:"Avoid credit card debt? (Yes/No)", a:"Yes"},
    {q:"Plan for emergencies? (Yes/No)", a:"Yes"},
    {q:"Prioritize needs over wants? (Yes/No)", a:"Yes"},
    {q:"Understand loans before borrowing? (Yes/No)", a:"Yes"},
    {q:"Start saving early? (Yes/No)", a:"Yes"},
    {q:"Compare prices before buying? (Yes/No)", a:"Yes"},
    {q:"Limit online shopping? (Yes/No)", a:"Yes"},
    {q:"Understand compound interest? (Yes/No)", a:"Yes"},
    {q:"Plan long-term goals? (Yes/No)", a:"Yes"},
    {q:"Use financial apps to track spending? (Yes/No)", a:"Yes"},
    {q:"Avoid impulse buying? (Yes/No)", a:"Yes"}
  ],
  time: [
    {q:"Use a daily planner? (Yes/No)", a:"Yes"},
    {q:"Prioritize tasks? (Yes/No)", a:"Yes"},
    {q:"Set small goals each day? (Yes/No)", a:"Yes"},
    {q:"Break large tasks into steps? (Yes/No)", a:"Yes"},
    {q:"Avoid multitasking? (Yes/No)", a:"Yes"},
    {q:"Track how you spend time? (Yes/No)", a:"Yes"},
    {q:"Set deadlines for yourself? (Yes/No)", a:"Yes"},
    {q:"Use timer for tasks? (Yes/No)", a:"Yes"},
    {q:"Limit social media during work? (Yes/No)", a:"Yes"},
    {q:"Focus on one task at a time? (Yes/No)", a:"Yes"},
    {q:"Take regular breaks? (Yes/No)", a:"Yes"},
    {q:"Start with most important tasks? (Yes/No)", a:"Yes"},
    {q:"Delegate when possible? (Yes/No)", a:"Yes"},
    {q:"Avoid procrastination? (Yes/No)", a:"Yes"},
    {q:"Use to-do lists? (Yes/No)", a:"Yes"},
    {q:"Review your day at night? (Yes/No)", a:"Yes"},
    {q:"Prepare for next day in advance? (Yes/No)", a:"Yes"},
    {q:"Set long-term and short-term goals? (Yes/No)", a:"Yes"},
    {q:"Use reminders for deadlines? (Yes/No)", a:"Yes"},
    {q:"Reward yourself for completing tasks? (Yes/No)", a:"Yes"}
  ]
};

// ========================
// Функции для сайта
// ========================

// Показать советы (только мини-превью, для подробных переход на tips.html)
function showTips(section) {
  const container = document.getElementById(section + "-tips");
  const tips = tipsData[section].slice(0, 5); // показываем первые 5 для превью
  container.innerHTML = "<ul>" + tips.map(tip => "<li>" + tip + "</li>").join("") + "</ul>";
}

// Мини-тест с подсчетом баллов
function takeQuiz(section) {
  const questions = quizData[section];
  let score = 0;
  for(let i = 0; i < questions.length; i++){
    const answer = prompt(questions[i].q);
    if(answer && answer.trim().toLowerCase() === questions[i].a.toLowerCase()){
      alert("✅ Correct!");
      score++;
    } else {
      alert("❌ Wrong! Correct answer: " + questions[i].a);
    }
  }
  alert(`You scored ${score} out of ${questions.length}!`);
}
