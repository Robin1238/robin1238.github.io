const projectGroups = document.querySelectorAll('.project-group');
const prevBtn = document.getElementById('PrevPage');
const nextBtn = document.getElementById('NextPage');

let pageIndex = 0;

const showProjectGroup = (index) => {

  projectGroups.forEach(group => group.style.display = 'none');

  const groupToShow = projectGroups[index];
  if (groupToShow) {
    groupToShow.style.display = 'block';
  }
};

showProjectGroup(pageIndex);

prevBtn.addEventListener('click', () => {
  pageIndex = Math.max(0, pageIndex - 1);
  showProjectGroup(pageIndex);
});

nextBtn.addEventListener('click', () => {
  pageIndex = Math.min(projectGroups.length - 1, pageIndex + 1);
  showProjectGroup(pageIndex);
});
