import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage kullanır

// Slice'lardan reducer'ları import ediyoruz
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

// Redux Persist için yapılandırma
// Bu yapılandırma, hangi reducer'ın hangi alanlarının saklanacağını belirtir
const persistConfig = {
  key: 'contacts', // localStorage'da hangi key altında saklanacak
  storage, // localStorage kullanılacak
  whitelist: ['items'], // contacts state'inden SADECE 'items' alanını sakla
};

// contactsReducer'ı persistReducer ile sarmalıyoruz
// Böylece contacts state'i localStorage'da saklanacak
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Store'u oluşturuyoruz
export const store = configureStore({
  reducer: {
    // contacts state'i için persisted reducer kullanıyoruz
    contacts: persistedContactsReducer,
    // filters state'i için normal reducer kullanıyoruz
    filters: filtersReducer,
  },
  // Redux Persist middleware yapılandırması
  // Bu, persist işlemleri sırasında gereksiz uyarıları engellemek için gerekli
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor oluşturuluyor
// Bu, localStorage ile senkronizasyonu yönetir
export const persistor = persistStore(store);
