const config = {
  blockRules: [
    { selector: '.ad, .advertisement, .textwidget, .custom-html-widget', action: 'hide' },

  ],
  classSelectors: [
    '.ad, .ad-container, .ad-banner, .adsbygoogle, .taboola, .outbrain',
  ],
};

function applyRules(rules) {
  rules.forEach(rule => {
    const elements = document.querySelectorAll(rule.selector);
    elements.forEach(element => {
      element.style.display = rule.action === 'hide' ? 'none' : '';
    });
  });
}

function applyClassNameBasedBlocking(classSelectors) {
  const selectorString = classSelectors.join(', ');
  const adElements = document.querySelectorAll(selectorString);
  adElements.forEach(adElement => {
    adElement.style.display = 'none';
  });
}

applyRules(config.blockRules);


applyClassNameBasedBlocking(config.classSelectors);
