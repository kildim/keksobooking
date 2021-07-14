import * as AdForm from './components/ad-form.js';
import * as MapFilters from  './components/map-filters.js';
import * as Map from './components/map.js';

import * as ErrMsg from './components/err-msg.js';
import * as SuccMsg from './components/succ-msg.js';

// ErrMsg.renderErrorMsg();

AdForm.activate();
MapFilters.deactivate();
Map.markerMoved(AdForm.setAddress);
Map.afterLoad(MapFilters.activate);
Map.activate();

