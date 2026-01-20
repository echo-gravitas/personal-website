import gsap from 'gsap';

console.log('Going dark is no longer an option.');

const run = () => {
  const el = document.querySelector('[data-animate="h1"]');
  if (!el) return;

  if (!el.dataset.split) {
    const walker = document.createTreeWalker(
      el,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          if (!node.nodeValue || !node.nodeValue.trim()) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      },
    );

    const textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach((node) => {
      const parts = node.nodeValue.split(/(\s+)/);
      const fragment = document.createDocumentFragment();
      parts.forEach((part) => {
        if (!part) return;
        if (/\s+/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
          return;
        }
        const span = document.createElement('span');
        span.textContent = part;
        span.dataset.word = '1';
        span.style.display = 'inline-block';
        fragment.appendChild(span);
      });
      node.parentNode?.replaceChild(fragment, node);
    });

    el.dataset.split = '1';
  }

  const wordEls = el.querySelectorAll('[data-word]');

  gsap.set(wordEls, { opacity: 0, y: 48, filter: 'blur(8px)' });
  gsap.set(el, { opacity: 0, y: 24, rotateX: 8, filter: 'blur(20px)' });
  el.classList.remove('opacity-0', 'translate-y-10');

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => {
      gsap.set(el, { clearProps: 'transform,filter,opacity' });
      gsap.set(wordEls, { clearProps: 'transform,filter,opacity' });
    },
  });

  tl.to(el, {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    duration: 3,
  }, 0);

  if (wordEls.length) {
    tl.to(wordEls, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.9,
      stagger: 0.25,
    }, 0.1);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', run, { once: true });
} else {
  run();
}
