/* http-message.js — annotated, clickable raw HTTP messages.
 *
 * Markup:
 *   <figure class="http-msg" data-http-msg data-mode="explore|find">
 *     <pre><span data-part="method" data-kind="start"
 *                data-name="Method" data-note="What to do with the resource.">GET</span> …</pre>
 *     <ol class="msg-tasks" hidden>                 <!-- only for data-mode="find" -->
 *       <li data-find="method">Click the <b>method</b>.</li>
 *     </ol>
 *     <figcaption>…</figcaption>
 *   </figure>
 *
 * data-kind colours a part: start | head | blank | body (see course.css).
 * explore: clicking a part shows its note.
 * find:    colours are hidden; the learner clicks the part each task names,
 *          with immediate hit/miss feedback. Colours return when all are found.
 */
(function () {
  function setup(fig) {
    const mode = fig.dataset.mode || "explore";
    const pre = fig.querySelector("pre");
    const parts = Array.from(fig.querySelectorAll("[data-part]"));
    const note = document.createElement("div");
    note.className = "msg-note";
    note.setAttribute("aria-live", "polite");
    pre.after(note);

    parts.forEach((p) => {
      p.tabIndex = 0;
      p.setAttribute("role", "button");
      p.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); p.click(); }
      });
    });

    const describe = (p) =>
      `<b>${p.dataset.name || p.dataset.part}</b> — ${p.dataset.note || ""}`;

    if (mode === "explore") {
      note.innerHTML = "Click any coloured part of the message to see what it is.";
      parts.forEach((p) =>
        p.addEventListener("click", () => {
          parts.forEach((x) => x.classList.remove("active"));
          p.classList.add("active");
          note.innerHTML = describe(p);
        })
      );
      return;
    }

    // find mode
    const tasks = Array.from(fig.querySelectorAll(".msg-tasks > li"));
    const taskLine = document.createElement("p");
    taskLine.className = "msg-task";
    const progress = document.createElement("span");
    progress.className = "msg-progress";
    pre.before(taskLine);
    let i = 0;
    let missTimer;

    function showTask() {
      if (i >= tasks.length) {
        taskLine.innerHTML = `All ${tasks.length} found. Colours restored.`;
        pre.classList.remove("plain");
        const again = document.createElement("button");
        again.type = "button";
        again.className = "q-retry";
        again.textContent = "Do it again";
        again.addEventListener("click", reset);
        taskLine.append(" ", again);
        return;
      }
      progress.textContent = ` (${i + 1}/${tasks.length})`;
      taskLine.innerHTML = tasks[i].innerHTML;
      taskLine.appendChild(progress);
    }

    function reset() {
      i = 0;
      parts.forEach((x) => x.classList.remove("hit", "miss", "active"));
      pre.classList.add("plain");
      note.innerHTML = "Click inside the message.";
      showTask();
    }

    parts.forEach((p) =>
      p.addEventListener("click", () => {
        if (i >= tasks.length) { note.innerHTML = describe(p); return; }
        if (p.dataset.part === tasks[i].dataset.find) {
          p.classList.add("hit");
          note.innerHTML = "✓ " + describe(p);
          i++;
          showTask();
        } else {
          clearTimeout(missTimer);
          p.classList.add("miss");
          note.innerHTML = `✗ That's the <b>${p.dataset.name || p.dataset.part}</b>. Try again.`;
          missTimer = setTimeout(() => p.classList.remove("miss"), 700);
        }
      })
    );

    reset();
  }

  document.querySelectorAll("[data-http-msg]").forEach(setup);
})();
