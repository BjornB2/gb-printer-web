import transformSav from '../../../tools/transformSav';

const handleFile = (dispatch) => (file) => {

  // roughly larger than 1MB is too much....
  if (file.size > 0xfffff) {
    dispatch({
      type: 'FILE_TOO_LARGE',
    });
    return;
  }

  const reader = new FileReader();

  reader.onload = (ev) => {

    // for now let's assume all .sav files have the same size...
    const dumpText = file.size === 131072 ? transformSav(ev.target.result) : ev.target.result;

    dispatch({
      type: 'IMPORT_PLAIN_TEXT',
      payload: dumpText,
      file: file.name,
    });
  };

  if (file.size === 131072) {
    reader.readAsArrayBuffer(file);
  } else {
    reader.readAsText(file);
  }
};

const fileDrop = (store) => {
  const root = document.querySelector('#app');
  const handleFileDispatch = handleFile(store.dispatch);
  let dragoverTimeout;
  let dragging = false;

  // detect start and end of dragover as there is no native dragend ecent for files
  root.addEventListener('dragover', (ev) => {
    ev.preventDefault();

    if (!dragging) {
      store.dispatch({
        type: 'IMPORT_DRAGOVER_START',
      });
    }

    window.clearTimeout(dragoverTimeout);

    dragging = true;

    dragoverTimeout = window.setTimeout(() => {
      dragging = false;
      store.dispatch({
        type: 'IMPORT_DRAGOVER_END',
      });
    }, 250);
  });

  root.addEventListener('drop', (ev) => {
    ev.preventDefault();

    let files;

    if (ev.dataTransfer.items) {
      files = [...ev.dataTransfer.items]
        .filter(({ kind }) => kind === 'file')
        .map((item) => item.getAsFile());
    } else {
      files = [...ev.dataTransfer.files];
    }

    files.forEach(handleFileDispatch);
  });

  return (next) => (action) => {
    next(action);
  };
};

export default fileDrop;
