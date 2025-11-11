// main.js

// 星空背景生成
function createStars() {
  const starsContainer = document.getElementById('stars');
  const starCount = 150;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // 随机位置
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // 随机大小和动画延迟
    const size = Math.random() * 2 + 1;
    const delay = Math.random() * 3;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${delay}s`;
    
    starsContainer.appendChild(star);
  }
}

// 侧边栏折叠功能
function setupSidebar() {
  const toggleBtn = document.getElementById('toggleBtn');
  const sidebar = document.getElementById('sidebar');
  
  toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
  });
}

// 导航链接高亮
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');
  
  // 点击导航时添加active类
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // 滚动时根据位置高亮对应导航
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// 平滑滚动
function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });
}

// 浮动公式动画增强
function enhanceFormulaAnimation() {
  const formulas = document.querySelectorAll('.formula');
  
  formulas.forEach((formula, index) => {
    // 为每个公式设置不同的动画延迟和持续时间
    const delay = (index * 0.5) % 5;
    const duration = 10 + (index % 5);
    
    formula.style.animationDelay = `${delay}s`;
    formula.style.animationDuration = `${duration}s`;
    
    // 添加鼠标悬停效果
    formula.addEventListener('mouseenter', function() {
      this.style.opacity = '0.9';
      this.style.transform = 'scale(1.2)';
      this.style.transition = 'all 0.3s ease';
    });
    
    formula.addEventListener('mouseleave', function() {
      this.style.opacity = '0.6';
      this.style.transform = 'scale(1)';
    });
  });
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
  createStars();
  setupSidebar();
  setupNavigation();
  setupSmoothScroll();
  enhanceFormulaAnimation();
  
  console.log('数学笔记导航页面初始化完成');
});

// 监听MathJax加载完成
window.addEventListener('mathjax-loaded', function() {
  console.log('MathJax公式渲染完成');
});

// 添加窗口调整大小时的响应式处理
window.addEventListener('resize', function() {
  // 可以在这里添加响应式调整逻辑
});