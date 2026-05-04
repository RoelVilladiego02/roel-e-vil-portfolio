import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
  const observedElements = ref(new Map());
  const observer = ref(null);

  const createObserver = () => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observer.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeUp');
          if (observer.value) {
            observer.value.unobserve(entry.target);
          }
        }
      });
    }, options);
  };

  const observe = (el) => {
    if (!observer.value) {
      createObserver();
    }
    if (el && observer.value) {
      observer.value.observe(el);
      observedElements.value.set(el, true);
    }
  };

  const unobserve = (el) => {
    if (el && observer.value) {
      observer.value.unobserve(el);
      observedElements.value.delete(el);
    }
  };

  const cleanup = () => {
    if (observer.value) {
      observedElements.value.forEach((_, el) => {
        observer.value.unobserve(el);
      });
      observer.value.disconnect();
    }
  };

  onMounted(() => {
    createObserver();
  });

  onUnmounted(() => {
    cleanup();
  });

  return {
    observe,
    unobserve,
    cleanup
  };
}

export function useStaggerAnimation(staggerDelay = 100) {
  const elements = ref([]);

  const stagger = (nodeList, baseDelay = 0) => {
    elements.value = Array.from(nodeList);
    elements.value.forEach((el, index) => {
      el.style.setProperty('--stagger-index', index);
      el.style.setProperty('--stagger-delay', `${baseDelay + index * staggerDelay}ms`);
      el.classList.add('animate-fadeUp');
    });
  };

  const reset = () => {
    elements.value.forEach(el => {
      el.style.removeProperty('--stagger-index');
      el.style.removeProperty('--stagger-delay');
      el.classList.remove('animate-fadeUp');
    });
    elements.value = [];
  };

  return {
    stagger,
    reset
  };
}
