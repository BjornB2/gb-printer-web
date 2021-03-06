import { combineReducers } from 'redux';
import activePalette from './reducers/activePaletteReducer';
import canShare from './reducers/canShareReducer';
import confirmation from './reducers/confirmationReducer';
import dragover from './reducers/dragoverReducer';
import editImage from './reducers/editImageReducer';
import exportCropFrame from './reducers/exportCropFrameReducer';
import exportFileTypes from './reducers/exportFileTypesReducer';
import exportScaleFactors from './reducers/exportScaleFactorsReducer';
import filter from './reducers/filtersReducer';
import galleryView from './reducers/galleryViewReducer';
import globalIndex from './reducers/globalIndexReducer';
import images from './reducers/imagesReducer';
import imageSelection from './reducers/imageSelectionReducer';
import importQueueSize from './reducers/importQueueSizeReducer';
import isFullscreen from './reducers/isFullscreenReducer';
import lastSelectedImage from './reducers/lastSelectedImageReducer';
import lightboxImage from './reducers/lightboxImageReducer';
import lineBuffer from './reducers/lineBufferReducer';
import pageSize from './reducers/pageSizeReducer';
import palettes from './reducers/palettesReducer';
import printerData from './reducers/printerDataReducer';
import printerUrl from './reducers/printerUrlReducer';
import rgbnImages from './reducers/rgbnImagesReducer';
import savFrameTypes from './reducers/savFrameTypesReducer';
import socketState from './reducers/socketStateReducer';
import socketUrl from './reducers/socketUrlReducer';
import videoParams from './reducers/videoParamsReducer';
import windowDimensions from './reducers/windowDimensionsReducer';

export default combineReducers({
  activePalette,
  canShare,
  confirmation,
  dragover,
  editImage,
  exportCropFrame,
  exportFileTypes,
  exportScaleFactors,
  filter,
  galleryView,
  globalIndex,
  images,
  imageSelection,
  importQueueSize,
  isFullscreen,
  lastSelectedImage,
  lightboxImage,
  lineBuffer,
  pageSize,
  palettes,
  printerData,
  printerUrl,
  rgbnImages,
  savFrameTypes,
  socketState,
  socketUrl,
  videoParams,
  windowDimensions,
});
