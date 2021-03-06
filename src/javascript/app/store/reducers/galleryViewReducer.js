const galleryViewReducer = (value = '1x', action) => {
  switch (action.type) {
    case 'SET_CURRENT_GALLERY_VIEW':
      return action.payload;
    case 'GLOBAL_UPDATE':
      return action.payload.galleryView || value;
    default:
      return value;
  }
};

export default galleryViewReducer;
