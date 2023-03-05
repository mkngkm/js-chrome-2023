const planForm = document.getElementById("studyplan-form");
const planInput = planForm.querySelector("input");
const planList = document.getElementById("studyplan-list");



const PLANS_KEY ="plans"

let Plans = [];


function savePlans() {
    localStorage.setItem(PLANS_KEY, JSON.stringify(Plans));
}


function deletePlan(event) {
    const li = event.target.parentElement;
    li.remove();
    Plans = Plans.filter(plan => plan.id !== parseInt(li.id));
    savePlans() //지운 배열을 다시 local storage에 저장
}


function paintPlan(newPlan){
    const li = document.createElement("li");
    li.id = newPlan.id;
    const span = document.createElement("span");
    span.innerText = newPlan.text;
    const button = document.createElement("button");
    button.addEventListener("click", deletePlan);
    button.innerText = "✖";
    li.appendChild(span);
    li.appendChild(button);
    planList.appendChild(li);
}

function handlePlanSubmit(event){
    event.preventDefault();    
    const newPlan = planInput.value;
    planInput.value = "";
    const newPlanObj = {
        text: newPlan,
        id: Date.now(),
    }
    Plans.push(newPlanObj);
    paintPlan(newPlanObj);
    savePlans();
    
}



planForm.addEventListener("submit", handlePlanSubmit);

const savedPlans = localStorage.getItem(PLANS_KEY);

if(savedPlans) {
    const parsedPlans = JSON.parse(savedPlans);
    Plans = parsedPlans;
    parsedPlans.forEach(paintPlan);
}
