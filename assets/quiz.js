/* quiz.js — reusable multiple-choice retrieval quiz.
 *
 * Markup:
 *   <div class="quiz" data-quiz>
 *     <div class="q" data-answer="2">            <!-- 1-indexed correct option -->
 *       <p class="q-prompt">Question text</p>
 *       <ul class="q-options"><li>Option</li>…</ul>
 *       <div class="q-explain">Why the answer is right.</div>
 *     </div>
 *   </div>
 *
 * One attempt per question; feedback is immediate. A score line with a
 * "Try again" button appears once every question is answered.
 */
(function () {
  function setupQuiz(quiz) {
    const questions = Array.from(quiz.querySelectorAll(".q"));
    const score = document.createElement("p");
    score.className = "q-score";
    quiz.appendChild(score);

    questions.forEach((q, qi) => {
      const prompt = q.querySelector(".q-prompt");
      if (prompt && !prompt.querySelector(".num")) {
        const num = document.createElement("span");
        num.className = "num";
        num.textContent = String(qi + 1).padStart(2, "0");
        prompt.prepend(num);
      }
      const explain = q.querySelector(".q-explain");
      const verdict = document.createElement("span");
      verdict.className = "q-verdict";
      if (explain) explain.prepend(verdict, " ");

      const answer = Number(q.dataset.answer);
      const items = Array.from(q.querySelectorAll(".q-options > li"));
      items.forEach((li, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "opt";
        btn.innerHTML = li.innerHTML;
        li.replaceChildren(btn);
        btn.addEventListener("click", () => {
          if (q.classList.contains("answered")) return;
          q.classList.add("answered");
          const right = i + 1 === answer;
          q.dataset.result = right ? "right" : "wrong";
          btn.classList.add(right ? "correct" : "wrong");
          items[answer - 1].querySelector("button").classList.add("correct");
          items.forEach((x) => (x.querySelector("button").disabled = true));
          verdict.textContent = right ? "Correct." : "Not quite.";
          verdict.className = "q-verdict " + (right ? "ok" : "bad");
          updateScore();
        });
      });
    });

    function updateScore() {
      const done = questions.filter((q) => q.classList.contains("answered"));
      if (done.length < questions.length) { score.textContent = ""; return; }
      const right = done.filter((q) => q.dataset.result === "right").length;
      score.textContent = `${right} / ${questions.length} correct. `;
      const retry = document.createElement("button");
      retry.type = "button";
      retry.className = "q-retry";
      retry.textContent = "Try again";
      retry.addEventListener("click", reset);
      score.appendChild(retry);
    }

    function reset() {
      questions.forEach((q) => {
        q.classList.remove("answered");
        delete q.dataset.result;
        q.querySelectorAll("button.opt").forEach((b) => {
          b.disabled = false;
          b.classList.remove("correct", "wrong");
        });
      });
      score.textContent = "";
      quiz.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  document.querySelectorAll("[data-quiz]").forEach(setupQuiz);
})();
