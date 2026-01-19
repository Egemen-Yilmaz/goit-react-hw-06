import { createSlice } from '@reduxjs/toolkit';

// Başlangıç durumu - Sadece contacts için!
// İletişimler için başlangıç state'i boş bir dizi olmalı
const initialState = {
  items: [] // Tüm iletişimler burada saklanacak
};

// createSlice şunları içerir:
// - name: slice'ın adı (örnek: 'contacts')
// - initialState: yukarıda tanımladığınız başlangıç state
// - reducers: state'i değiştiren fonksiyonlar
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // addContact reducer'ı
    // Yeni bir iletişimi items dizisine ekler
    // action.payload = { id, name, number }
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    // deleteContact reducer'ı
    // items dizisinden id'ye göre iletişimi siler
    // action.payload = id (silinecek iletişimin id'si)
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

// Action creator'ları dışa aktarıyoruz
// createSlice otomatik olarak action creator'lar oluşturur
export const { addContact, deleteContact } = contactsSlice.actions;

// Selector fonksiyonu - State'ten contacts listesini alır
// state.contacts Redux store'daki contacts slice'ı
// state.contacts.items ise içindeki items dizisi
export const selectContacts = (state) => state.contacts.items;

// Reducer'ı default export olarak dışa aktarıyoruz
// Bu, store.js'te kullanılacak
export default contactsSlice.reducer;
