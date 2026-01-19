import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Redux Provider ve PersistGate import ediliyor
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider: Tüm uygulamaya Redux store'u sağlar */}
    <Provider store={store}>
      {/* PersistGate: localStorage'dan state yüklenene kadar bekler */}
      {/* loading={null}: Yükleme sırasında hiçbir şey gösterme */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
