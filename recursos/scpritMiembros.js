document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const tabId = params.get('tab'); // Obtiene el parámetro de la URL

  if (tabId) {
    // Elimina 'active' de todas las pestañas
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('show', 'active'));

    // Activa la pestaña correspondiente
    const tabLink = document.querySelector(`#${tabId}-tab`);
    const tabContent = document.querySelector(`#${tabId}`);
    if (tabLink && tabContent) {
      tabLink.classList.add('active');
      tabContent.classList.add('show', 'active');
    } else {
      console.error('La pestaña especificada no existe:', tabId);
    }
  } else {
    // Si no hay parámetros, mostrar la pestaña predeterminada (OT4)
    document.querySelector('#pills-ot4-tab').classList.add('active');
    document.querySelector('#pills-ot4').classList.add('show', 'active');
  }
});
