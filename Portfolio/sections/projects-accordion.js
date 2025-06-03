document.addEventListener('DOMContentLoaded', () => {
  // Toggle project category expand/collapse
  document.querySelectorAll('.project-category > h3').forEach(categoryHeader => {
    categoryHeader.addEventListener('click', () => {
      const category = categoryHeader.parentElement;
      const isActive = category.classList.contains('active');

      // Close all categories
      document.querySelectorAll('.project-category').forEach(cat => cat.classList.remove('active'));

      // Toggle current category
      if (!isActive) {
        category.classList.add('active');
      }
    });
  });

  // Toggle project item expand/collapse
  document.querySelectorAll('.project-item > .project-header').forEach(projectHeader => {
    projectHeader.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectItem = projectHeader.parentElement;
      const isActive = projectItem.classList.contains('active');

      // Close all project items in the same category
      const categoryContent = projectItem.closest('.category-content');
      categoryContent.querySelectorAll('.project-item').forEach(item => item.classList.remove('active'));

      // Toggle current project item
      if (!isActive) {
        projectItem.classList.add('active');
      }
    });
  });
});
