// 星空生成
const starsContainer = document.getElementById('stars');
const starCount = 120;
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.width = star.style.height = Math.random() * 3 + 'px';
  star.style.animationDelay = Math.random() * 3 + 's';
  starsContainer.appendChild(star);
}

// MathJax 渲染
if (window.MathJax) {
  MathJax.typesetPromise().catch(err => console.error('MathJax 渲染错误:', err));
}

// 折叠按钮
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});



// 当前章节高亮
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 300 && scrollY < sectionTop + sectionHeight - 300) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});
