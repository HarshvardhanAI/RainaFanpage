var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

const texts = [
  "Suresh Raina, one of India’s most celebrated cricketers, has been an integral part of the Indian cricket team, known for his aggressive batting style and sharp fielding. – Harsha Bhogle, Cricket Commentator",
  "Raina was instrumental in India’s 2011 ICC Cricket World Cup victory, where his performances under pressure were crucial. His adaptability and calm approach in tight situations made him a dependable player in the middle order, helping India lift the coveted trophy after 28 years. – Ravi Shastri, Former Head Coach of India",
  "In the Indian Premier League (IPL), Suresh Raina has been a pillar for the Chennai Super Kings (CSK), earning the nickname 'Mr. IPL' for his consistent performances over the years. He played a key role in CSK’s multiple title wins and is among the top run-scorers in the league’s history. – MS Dhoni, Captain of Chennai Super Kings",
  "Beyond cricket, Raina has been actively involved in philanthropic activities, supporting various causes in education and healthcare. His dedication to the game and his contributions off the field have earned him immense respect and admiration from fans worldwide. – Sachin Tendulkar, Cricket Legend"
];

let currentIndex = 0;

function updateText() {
  const textContent = document.getElementById("text-content");
  textContent.innerText = texts[currentIndex];
}

function nextText() {
  currentIndex = (currentIndex + 1) % texts.length;
  updateText();
}

function prevText() {
  currentIndex = (currentIndex - 1 + texts.length) % texts.length;
  updateText();
}


function showContent(sectionId) {
  const contentDiv = document.getElementById('content');
  const sections = document.querySelectorAll('.content-section');

  // Toggle the slide-down effect
  contentDiv.classList.remove('hidden');
  contentDiv.classList.add('show');

  // Hide all sections and show only the selected one
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}


// Initialize with the first text
updateText();


document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

