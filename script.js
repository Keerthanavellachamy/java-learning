/* JavaMaster Academy – all interactions, vanilla JS, static mock data */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- MOCK DATA ---------- */
const WHY = [
  ['🌱', 'Beginner Friendly', 'Start from programming fundamentals.'],
  ['🏢', 'Industry Relevant', 'Learn technologies used in real-world applications.'],
  ['🛠️', 'Practical Projects', 'Build projects while learning.'],
  ['🎯', 'Career Focused', 'Prepare for development jobs and interviews.']
];
const ROAD = [
  ['Java Fundamentals', ['Introduction to Java','Variables','Data Types','Operators','Input & Output','Conditions','Loops']],
  ['Object-Oriented Programming', ['Classes & Objects','Encapsulation','Inheritance','Polymorphism','Abstraction','Interfaces']],
  ['Advanced Java', ['Exception Handling','Collections','Generics','Multithreading','File Handling','Java Streams']],
  ['Real-World Java', ['JDBC','SQL Basics','REST API Concepts','Spring Boot Basics','Project Development']]
];
const COURSES = [

  {
    course: 'java-basics',
    t: 'Java Programming Basics',
    l: 'Beginner',
    d: '4 Weeks',
    n: '8 Lessons',
    m: 8,
    r: 4.8,
    i: 'Dr. Meera Iyer',
    desc: 'Write your first programs and master syntax, variables, conditions and loops.'
  },

  {
    course: 'core-java',
    t: 'Core Java',
    l: 'Intermediate',
    d: '6 Weeks',
    n: '8 Lessons',
    m: 8,
    r: 4.7,
    i: 'Arjun Nair',
    desc: 'Learn OOP concepts including classes, objects, constructors, inheritance, polymorphism, abstraction, encapsulation and interfaces.'
  },

  {
    course: 'advanced-java',
    t: 'Advanced Java',
    l: 'Advanced',
    d: '8 Weeks',
    n: '5 Lessons',
    m: 5,
    r: 4.9,
    i: 'Priya Raman',
    desc: 'Learn collections, file handling, multithreading, JDBC and database projects.'
  },

  {
    course: 'oop-masterclass',
    t: 'Java OOP Masterclass',
    l: 'Intermediate',
    d: '4 Weeks',
    n: '30 Lessons',
    m: 6,
    r: 4.8,
    i: 'Karthik Rao',
    desc: 'Design clean object-oriented systems with inheritance, interfaces and patterns.'
  },

  {
    course: 'java-projects',
    t: 'Java Projects',
    l: 'Advanced',
    d: '6 Weeks',
    n: '5 Projects',
    m: 5,
    r: 4.9,
    i: 'Sana Sheikh',
    desc: 'Build five portfolio-ready applications from planning to finished code.'
  },

  {
    course: 'interview-preparation',
    t: 'Java Interview Preparation',
    l: 'Intermediate',
    d: '3 Weeks',
    n: '150+ Questions',
    m: 6,
    r: 4.6,
    i: 'Vikram Das',
    desc: 'Practise the questions interviewers actually ask, with clear model answers.'
  }

];
const PROJECTS = [
  ['Student Management System','Beginner','Core Java, Collections','Add, search and update student records.'],
  ['Bank Management System','Intermediate','OOP, Exceptions','Accounts, deposits, withdrawals and statements.'],
  ['Library Management System','Intermediate','OOP, File Handling','Track books, members and due dates.'],
  ['Employee Management System','Intermediate','JDBC, SQL','Store staff data in a database with reports.'],
  ['Online Quiz Application','Advanced','Swing, Collections','Timed quizzes with scoring and leaderboards.'],
  ['Expense Tracker','Advanced','Streams, JDBC','Categorise spending and summarise by month.']
];
const IV = [
  ['📝','Java MCQs','100+ Questions',['Which keyword prevents a class from being inherited?','What does JVM stand for?','Which collection does not allow duplicates?']],
  ['🧩','OOP Interview','50+ Questions',['Explain polymorphism with an example.','Abstract class vs interface – when to use which?','What is encapsulation?']],
  ['💻','Coding Challenges','30+ Problems',['Reverse a string without StringBuilder.','Check whether a number is prime.','Find the second largest element in an array.']],
  ['🎤','Java Interview Questions','150+ Questions',['How does HashMap work internally?','Difference between == and equals()?','What is the Java memory model?']]
];
const QUIZ = [
  ['What is the default value of an int variable in Java?',['0','null','undefined','false'],0],
  ['Which keyword is used to inherit a class?',['implements','extends','inherits','super'],1],
  ['Which collection stores unique elements only?',['List','ArrayList','Set','Queue'],2],
  ['Which method is the entry point of a Java program?',['start()','run()','main()','init()'],2],
  ['Which is NOT a primitive type in Java?',['int','boolean','String','char'],2]
];
const TESTI = [
  ['Ananya S.','Junior Developer','The roadmap kept me focused. I built my first Bank Management System in three weeks.'],
  ['Rahul M.','CS Student','Clear lessons and real projects. The interview section helped me land an internship.'],
  ['Divya K.','Career Switcher','I started with zero experience. Now I write Java at work every day.']
];
const FAQ = [
  ['Is Java suitable for beginners?','Yes. Java has clear syntax and strong tooling, and our first course starts from zero.'],
  ['How long does it take to learn Java?','Most learners cover the fundamentals in 4–6 weeks and reach job-ready skills in 4–6 months of steady practice.'],
  ['Do I need programming experience?','No. Java Programming Basics assumes no prior experience.'],
  ['What projects will I build?','Student, bank, library and employee management systems, an online quiz app and an expense tracker.'],
  ['Can I learn Java from mobile?','Yes. Lessons, quizzes and the practice playground work on phones and tablets.'],
  ['Will I get a certificate?','Yes. You receive a certificate of completion for every finished course.']
];

/* ---------- RENDER STATIC SECTIONS ---------- */
$('#why').innerHTML = WHY.map(w => `<div class="card rv"><div class="ico">${w[0]}</div><h3>${w[1]}</h3><p class="muted">${w[2]}</p></div>`).join('');
$('#road').innerHTML = ROAD.map((s, i) => `<div class="stage rv"><div class="n">0${i + 1}</div><h3>${s[0]}</h3><ul>${s[1].map(x => `<li>${x}</li>`).join('')}</ul><a href="#courses" class="btn sm">Learn Now</a></div>`).join('');
$('#projGrid').innerHTML = PROJECTS.map((p, i) => `<div class="card rv"><span class="tag">${p[1]}</span><h3>${p[0]}</h3><p class="muted">${p[3]}</p><div class="meta">🧰 ${p[2]}</div><button class="btn sm" data-proj="${i}">View Project</button></div>`).join('');
$('#ivGrid').innerHTML = IV.map((c, i) => `<div class="card rv"><div class="ico">${c[0]}</div><h3>${c[1]}</h3><p class="muted">${c[2]}</p><div class="meta"></div><button class="btn sm" data-iv="${i}">Practice Now</button></div>`).join('');

/* ---------- MODAL (open/close via X, outside click, ESC) ---------- */
const modal = $('#modal');
function openModal(html) { $('#mbody').innerHTML = html; modal.hidden = false; document.body.style.overflow = 'hidden'; $('#mx').focus(); }
function closeModal() { modal.hidden = true; document.body.style.overflow = ''; }
$('#mx').onclick = closeModal;
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

/* ---------- COURSES: search + filter + details modal ---------- */
let level = 'All';
function renderCourses() {
  const q = $('#search').value.trim().toLowerCase();
  const list = COURSES.map((c, i) => ({ ...c, i })).filter(c => (level === 'All' || c.l === level) && (c.t + c.desc).toLowerCase().includes(q));
  $('#courseGrid').innerHTML = list.map(c => `<div class="card rv in"><span class="tag">${c.l}</span><h3>${c.t}</h3><p class="muted">${c.desc}</p><div class="meta"><span>⏱ ${c.d}</span><span>📚 ${c.n}</span><span>⭐ ${c.r}</span></div><button class="btn sm" data-course="${c.i}">View Course</button></div>`).join('');
  $('#empty').hidden = list.length > 0;
}
$('#search').addEventListener('input', renderCourses);
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('.chip'); if (!b) return;
  $$('.chip').forEach(c => c.classList.toggle('on', c === b)); level = b.dataset.f; renderCourses();
});
$('#searchBtn').onclick = () => { location.hash = '#courses'; setTimeout(() => $('#search').focus(), 500); };
renderCourses();

document.addEventListener('click', e => {
  const b = e.target.closest('[data-course],[data-proj],[data-iv],#viewCert'); if (!b) return;
  if (b.dataset.course) {
    const c = COURSES[b.dataset.course];

    if (c.course === 'core-java') {
  window.location.href = '/java-learning/core-java/lesson1.html';
  return;
}
if (c.course === 'advanced-java') {
  window.location.href = '/java-learning/core-java/advanced-java/lesson1.html';
  return;
}
if (c.course === 'oop-masterclass') {
  window.location.href = '/java-learning/core-java/advanced-java/java-oop-masterclass/lesson1.html';
  return;
}
if (c.course === 'java-projects') {
  window.location.href = '/java-learning/core-java/advanced-java/java-oop-masterclass/java-projects/project1.html';
  return;
}
if (c.course === 'interview-preparation') {
  window.location.href = '/java-learning/java-interview.html';
  return;
}
    openModal(`<h3>${c.t}</h3><p class="muted">${c.desc}</p><div class="mgrid"><div><b>Level</b>${c.l}</div><div><b>Duration</b>${c.d}</div><div><b>Lessons</b>${c.n}</div><div><b>Modules</b>${c.m}</div><div><b>Instructor</b>${c.i}</div><div><b>Rating</b>⭐ ${c.r} / 5</div></div><a href="/java-learning/lesson/java-basics/lesson1.html" class="btn">Start Learning</a>`);
  }  else if (b.dataset.proj) {

    if (b.dataset.proj === '0') {
        window.location.href = '/java-learning/core-java/advanced-java/java-oop-masterclass/java-projects/project1.html';
        return;
    }

    if (b.dataset.proj === '1') {
        window.location.href = '/java-learning/core-java/advanced-java/java-oop-masterclass/java-projects/project3.html';
        return;
    }

    if (b.dataset.proj === '2') {
    window.location.href = '/java-learning/core-java/advanced-java/java-oop-masterclass/java-projects/project2.html';
    return;
}
if (b.dataset.proj === '3') {
        window.location.href = '/java-learning/core-java/advanced-java/java-oop-masterclass/java-projects/project4.html';
        return;
    }
if (b.dataset.proj === '4') {
    window.location.href = '/java-learning/core-java/advanced-java/java-oop-masterclass/java-projects/project6.html';
    return;
}
if (b.dataset.proj === '5') {
    window.location.href = '/java-learning/core-java/advanced-java/java-oop-masterclass/java-projects/project7.html';
    return;
}
}
  else if (b.dataset.iv) {

    const c = IV[b.dataset.iv];

    if (b.dataset.iv === '0') {
        window.location.href = '/java-learning/java-mcqs.html';
        return;
    }
        
        if (b.dataset.iv === '1') {
    window.location.href = '/java-oops-interview.html';
    return;
}
     if (b.dataset.iv === '2') {
    window.location.href = '/java-coding-challenges.html';
    return;
}
    if (b.dataset.iv === '3') {
        window.location.href = '/java-interview-questions.html';
        return;
    }

    openModal(`
        <h3>${c[1]}</h3>

        <p class="muted">
            Sample questions from ${c[2]}:
        </p>

        <ol>
            ${c[3].map(q => `<li>${q}</li>`).join('')}
        </ol>

        <a href="#courses" class="btn" onclick="closeModal()">
            Start Full Practice
        </a>
    `);

} else {
    openModal(`<h3>Certificate Preview</h3><div class="cert" style="margin:16px 0 0;padding:26px 16px"><p class="ct">Certificate of Completion</p><p class="name">Alex Kumar</p><p class="cc">Java Programming Masterclass</p><p class="muted" style="margin-top:12px">ID: JMA-2026-48213</p></div>`);
  }
});

/* ---------- NAV: hamburger, active link, back-to-top ---------- */
const burger = $('#burger'), links = $('#links');
burger.onclick = () => { burger.classList.toggle('open'); links.classList.toggle('open'); };
links.addEventListener('click', e => { if (e.target.tagName === 'A') { burger.classList.remove('open'); links.classList.remove('open'); } });
const secs = $$('section[id]');
function onScroll() {
  const y = scrollY + 120;
  let cur = secs[0].id;
  secs.forEach(s => { if (s.offsetTop <= y) cur = s.id; });
  $$('.links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  $('#totop').classList.toggle('show', scrollY > 600);
}
addEventListener('scroll', onScroll, { passive: true }); onScroll();
$('#totop').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

/* ---------- SCROLL REVEAL + COUNTERS + PROGRESS BARS ---------- */
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12 });
$$('.rv').forEach(el => io.observe(el));

function countUp(el) {
  const end = +el.dataset.count, suf = el.dataset.suf || '', t0 = performance.now();
  (function tick(t) { const p = Math.min((t - t0) / 1500, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(tick); })(t0);
}
const dashIO = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  $$('[data-count]', en.target).forEach(countUp);
  $$('.fill[data-w]', en.target).forEach(f => f.style.width = f.dataset.w + '%');
  dashIO.unobserve(en.target);
}), { threshold: .3 });
dashIO.observe($('.dash'));

/* ---------- PLAYGROUND (mock run) ---------- */
const starter = $('#editor').value;
$('#run').onclick = () => {
  const out = $('#output'), code = $('#editor').value;
  const lines = [...code.matchAll(/System\.out\.println\(\s*"([^"]*)"\s*\)/g)].map(m => m[1]);
  out.textContent = 'Compiling...';
  setTimeout(() => { out.textContent = lines.length ? lines.join('\n') : 'Hello, Java!'; }, 400);
};
$('#reset').onclick = () => { $('#editor').value = starter; $('#output').textContent = 'Click “Run Code” to see output.'; };

/* ---------- QUIZ ---------- */
let qi = 0, score = 0, picks = [];
function renderQuiz() {
  const box = $('#quiz');
  if (qi >= QUIZ.length) {
    box.innerHTML = `<div class="final"><h3>Quiz complete!</h3><div class="score">${score}/${QUIZ.length}</div><p>${score >= 4 ? 'Excellent work – you know your Java.' : 'Good start. Review the roadmap and try again.'}</p><div class="row c"><button class="btn" id="restart">Restart Quiz</button></div></div>`;
    $('#restart').onclick = () => { qi = 0; score = 0; picks = []; renderQuiz(); };
    return;
  }
  const [q, opts] = QUIZ[qi];
  box.innerHTML = `<div class="qtop"><span>Question ${qi + 1} of ${QUIZ.length}</span><span>Score: ${score}</span></div>
    <div class="bar"><div class="fill" style="width:${(qi / QUIZ.length) * 100}%"></div></div><h3>${q}</h3>
    ${opts.map((o, i) => `<button class="opt ${picks[qi] === i ? 'sel' : ''}" data-i="${i}">${'ABCD'[i]}. ${o}</button>`).join('')}
    <div class="qnav"><button class="btn sm" id="qp" ${qi === 0 ? 'disabled' : ''}>Previous</button><button class="btn sm" id="qn" ${picks[qi] === undefined ? 'disabled' : ''}>${qi === QUIZ.length - 1 ? 'Finish' : 'Next'}</button></div>`;
  $$('.opt', box).forEach(b => b.onclick = () => { picks[qi] = +b.dataset.i; score = picks.filter((p, k) => p === QUIZ[k][2]).length; renderQuiz(); });
  $('#qp').onclick = () => { qi--; renderQuiz(); };
  $('#qn').onclick = () => { qi++; renderQuiz(); };
}
renderQuiz();

/* ---------- TESTIMONIAL SLIDER ---------- */
let ti = 0, timer;
$('#track').innerHTML = TESTI.map(t => `<div class="slide"><div class="card"><div class="av">${t[0][0]}</div><h3>${t[0]}</h3><p class="muted">${t[1]}</p><div class="stars">★★★★★</div><p>“${t[2]}”</p></div></div>`).join('');
$('#dots').innerHTML = TESTI.map((_, i) => `<i data-d="${i}"></i>`).join('');
function goTo(i) {
  ti = (i + TESTI.length) % TESTI.length;
  $('#track').style.transform = `translateX(-${ti * 100}%)`;
  $$('#dots i').forEach((d, k) => d.classList.toggle('on', k === ti));
}
$('#prev').onclick = () => { goTo(ti - 1); auto(); };
$('#next').onclick = () => { goTo(ti + 1); auto(); };
$('#dots').onclick = e => { if (e.target.dataset.d) { goTo(+e.target.dataset.d); auto(); } };
function auto() { clearInterval(timer); timer = setInterval(() => goTo(ti + 1), 6000); }
goTo(0); auto();

/* ---------- FAQ ACCORDION ---------- */
$('#faq').innerHTML = FAQ.map(f => `<div class="qa"><button aria-expanded="false">${f[0]}</button><div class="ans"><p>${f[1]}</p></div></div>`).join('');
$('#faq').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  const item = b.parentElement, ans = $('.ans', item), open = item.classList.toggle('open');
  b.setAttribute('aria-expanded', open); ans.style.maxHeight = open ? ans.scrollHeight + 'px' : 0;
});
