document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      // Deactivate all tabs and hide contents
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(tc => {
        tc.classList.remove('active');
        tc.style.display = 'none';
      });

      // Activate clicked tab and show content
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      const tabContent = document.getElementById(tabId);
      if (tabContent) {
        tabContent.classList.add('active');
        tabContent.style.display = '';
      }
    });
  });

  // Show first tab by default
  const firstTab = document.querySelector('.tab-btn');
  if (firstTab) firstTab.click();
});
