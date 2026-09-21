const screens = {
  spaces: {src:'assets/comatch-spaces.webp',alt:'CoMatch Space page with membership controls and teammate recruitment posts',caption:'Spaces bring members and recruitment posts together in one place.'},
  posts: {src:'assets/comatch-posts.webp',alt:'CoMatch recruitment post showing open roles, likes, and inline comments',caption:'Recruitment posts turn an idea into a call for teammates, with roles and discussion.'},
  chat: {src:'assets/comatch-chat.webp',alt:'CoMatch real-time chat workspace with a conversation list and message thread',caption:'One-to-one messaging helps potential teammates start a conversation.'}
};
const screenImage = document.querySelector('#project-screen');
document.querySelectorAll('[data-screen]').forEach(button => {
  button.addEventListener('click', () => {
    const screen = screens[button.dataset.screen];
    if (!screenImage || !screen) return;
    screenImage.src = screen.src;
    screenImage.alt = screen.alt;
    document.querySelector('#screen-caption').textContent = screen.caption;
    document.querySelectorAll('[data-screen]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  });
});
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
document.querySelector('[data-copy-email]')?.addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText('tharnaymin028@gmail.com');
    status.textContent = 'Email copied';
  } catch {
    status.textContent = 'Select the email above to copy it.';
  }
});
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
