# 📚 Redux Toolkit Öğrenme Rehberi

## 🎯 Proje Yapısı

```
src/
├── redux/
│   ├── store.js           ✅ Store yapılandırması
│   ├── contactsSlice.js   ✅ İletişimler için slice
│   └── filtersSlice.js    ✅ Filtreler için slice
├── components/            📦 React bileşenleri (goit-react-hw-03'ten kopyalayın)
└── main.jsx              ✅ Redux Provider entegrasyonu
```

## 📖 Redux Toolkit Kavramları

### 1️⃣ Store (Mağaza)
**Ne işe yarar?** Tüm uygulamanın state'ini tek bir yerde tutar.

**Nasıl çalışır?**
```javascript
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,  // contacts state'i için
    filters: filtersReducer     // filters state'i için
  }
});
```

### 2️⃣ Slice (Dilim)
**Ne işe yarar?** State'in bir parçasını ve onu değiştiren fonksiyonları (reducers) bir arada tutar.

**Nasıl çalışır?**
```javascript
const contactsSlice = createSlice({
  name: 'contacts',           // Slice'ın adı
  initialState: { items: [] }, // Başlangıç state'i
  reducers: {                  // State'i değiştiren fonksiyonlar
    addContact: (state, action) => {
      state.items.push(action.payload); // Yeni iletişim ekle
    }
  }
});
```

### 3️⃣ Actions (Eylemler)
**Ne işe yarar?** State'te değişiklik yapmak için gönderilen mesajlar.

**Nasıl kullanılır?**
```javascript
// Action creator (otomatik oluşturulur)
const { addContact } = contactsSlice.actions;

// Kullanım (bileşende)
dispatch(addContact({ id: 1, name: 'Ahmet', number: '123' }));
```

### 4️⃣ Selectors (Seçiciler)
**Ne işe yarar?** State'ten veri okumak için kullanılır.

**Nasıl kullanılır?**
```javascript
// Selector fonksiyonu
export const selectContacts = (state) => state.contacts.items;

// Kullanım (bileşende)
const contacts = useSelector(selectContacts);
```

### 5️⃣ Redux Persist
**Ne işe yarar?** State'i localStorage'da saklar, sayfa yenilendiğinde verileri geri yükler.

**Nasıl çalışır?**
```javascript
const persistConfig = {
  key: 'contacts',          // localStorage key'i
  storage,                  // localStorage kullan
  whitelist: ['items']      // Sadece items'ı sakla
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);
```

## ✅ Yapılacaklar Listesi

### Adım 1: Slice Dosyalarını Tamamlayın

#### 📄 contactsSlice.js
- [ ] `addContact` reducer'ını yazın
- [ ] `deleteContact` reducer'ını yazın
- [ ] Action creator'ları dışa aktarın
- [ ] `selectContacts` selector'ını yazın
- [ ] Reducer'ı default export yapın

**İpuçları:**
```javascript
// addContact için:
state.items.push(action.payload);

// deleteContact için:
state.items = state.items.filter(item => item.id !== action.payload);

// Export için:
export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactsSlice.reducer;
```

#### 📄 filtersSlice.js
- [ ] `changeFilter` reducer'ını yazın
- [ ] Action creator'ı dışa aktarın
- [ ] `selectNameFilter` selector'ını yazın
- [ ] Reducer'ı default export yapın

**İpuçları:**
```javascript
// changeFilter için:
state.name = action.payload;

// Export için:
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export default filtersSlice.reducer;
```

### Adım 2: Store'u Tamamlayın

#### 📄 store.js
- [ ] contactsReducer ve filtersReducer'ı import edin
- [ ] persistedContactsReducer oluşturun
- [ ] Reducer'ları configureStore'a ekleyin
- [ ] persistor'ı oluşturun ve export edin

### Adım 3: Provider Entegrasyonu

#### 📄 main.jsx
- [ ] Provider ve PersistGate'i import edin
- [ ] store ve persistor'ı import edin
- [ ] App'i Provider ile sarmalayın
- [ ] Provider'ı PersistGate ile sarmalayın

### Adım 4: Bileşenleri Redux'a Bağlayın

goit-react-hw-03 projenizden bileşenleri kopyaladıktan sonra:

#### ContactForm Bileşeni
- [ ] `useDispatch` hook'unu import edin
- [ ] `addContact` action'ını import edin
- [ ] Form gönderildiğinde `dispatch(addContact(...))` çağırın

```javascript
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

const dispatch = useDispatch();

const handleSubmit = (values, actions) => {
  dispatch(addContact({
    id: nanoid(),
    name: values.name,
    number: values.number
  }));
  actions.resetForm();
};
```

#### Contact Bileşeni
- [ ] `useDispatch` hook'unu import edin
- [ ] `deleteContact` action'ını import edin
- [ ] Silme butonunda `dispatch(deleteContact(id))` çağırın

#### SearchBox Bileşeni
- [ ] `useDispatch` ve `useSelector` hook'larını import edin
- [ ] `changeFilter` action'ını ve `selectNameFilter` selector'ını import edin
- [ ] Input değerini state'ten alın
- [ ] Input değiştiğinde action dispatch edin

#### ContactList Bileşeni
- [ ] `useSelector` hook'unu import edin
- [ ] `selectContacts` ve `selectNameFilter` selector'larını import edin
- [ ] Filtreleme mantığını ekleyin

```javascript
const contacts = useSelector(selectContacts);
const filter = useSelector(selectNameFilter);

const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);
```

## 🔍 Test Etme

1. **Ekleme testi:**
   - Yeni iletişim ekleyin
   - Sayfayı yenileyin
   - İletişimin hala orada olduğunu kontrol edin (Redux Persist çalışıyor!)

2. **Silme testi:**
   - Bir iletişimi silin
   - Sayfayı yenileyin
   - Silinen iletişimin geri gelmediğini kontrol edin

3. **Filtreleme testi:**
   - Arama kutusuna bir şeyler yazın
   - Sonuçların filtrelendiğini kontrol edin
   - Sayfayı yenileyin
   - Filtre değerinin kaybolduğunu kontrol edin (whitelist'te yok!)

## 🎓 Öğrenme Kaynakları

- [Redux Toolkit Resmi Dokümantasyon](https://redux-toolkit.js.org/)
- [Redux Persist Dokümantasyon](https://github.com/rt2zz/redux-persist)
- [React Redux Hooks](https://react-redux.js.org/api/hooks)

## 💡 Sık Sorulan Sorular

**S: Neden Redux Toolkit kullanıyoruz?**
C: Redux Toolkit, Redux kullanımını basitleştirir. Boilerplate kod yazımını azaltır ve best practice'leri otomatik uygular.

**S: useSelector ve useDispatch ne işe yarar?**
C: 
- `useSelector`: State'ten veri okumak için
- `useDispatch`: Action göndermek (state değiştirmek) için

**S: Redux Persist neden gerekli?**
C: Sayfa yenilendiğinde state kaybolmasın diye. localStorage'da saklar.

**S: Neden items'ı whitelist'e ekledik ama name'i eklemedik?**
C: İletişimlerin kalıcı olmasını isteriz ama her sayfada filtre temiz başlamalı.

## 🚀 Başarılar!

Adım adım ilerleyin. Her TODO'yu tamamladığınızda nasıl çalıştığını test edin!
