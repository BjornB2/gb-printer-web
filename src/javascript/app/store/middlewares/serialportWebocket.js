import Sockette from '../../../libs/sockette';
import handleLines from '../../../tools/handleLines';

const newSocket = (dispatch, socketUrl) => (
  new Sockette(socketUrl, {
    timeout: 5000,
    maxAttempts: 10,
    onstatechange: (readyState) => {
      dispatch({
        type: 'SET_SOCKET_STATE',
        payload: readyState,
      });
    },
    onmessage: ({ data }) => {
      data
        .split('\n')
        .map(handleLines)
        .filter(Boolean)
        .forEach(dispatch);
    },
  })
);

const serialportWebocket = (store) => {

  const socketUrl = store.getState().socketUrl;

  let socket;

  // Do not autoconnect when on prod
  if (socketUrl && window.location.protocol !== 'https:') {
    window.setTimeout(() => {
      socket = newSocket(store.dispatch, `ws://${socketUrl}`);
    }, 1000);
  }

  return (next) => (action) => {
    if (action.type === 'SET_SOCKET_URL') {
      const protocolSocketUrl = `ws://${action.payload}`;
      if (socket) {
        socket.setUrl(protocolSocketUrl);
      } else {
        socket = newSocket(store.dispatch, protocolSocketUrl);
      }
    }

    return next(action);
  };
};

export default serialportWebocket;