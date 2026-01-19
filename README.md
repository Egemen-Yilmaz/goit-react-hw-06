# 📱 İletişim Kitabı (Phonebook) - Redux Toolkit

Modern, responsive ve kullanıcı dostu bir iletişim yönetim uygulaması. Redux Toolkit ile state yönetimi, Redux Persist ile veri kalıcılığı ve CSS Modules ile modüler stil sistemi.

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-purple.svg)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

![Demo Screenshot](https://via.placeholder.com/800x400/ecf0f1/2c3e50?text=Iletisim+Kitabi+Demo)

---

## 🚀 Canlı Demo

**[Vercel'de Görüntüle →](https://your-project-url.vercel.app)**

---

## ✨ Özellikler

### 📋 Temel Özellikler
- ✅ **İletişim Ekleme** - Ad ve telefon numarası ile yeni iletişim kaydetme
- ✅ **İletişim Silme** - İstenmeyen iletişimleri kolayca kaldırma
- ✅ **Gerçek Zamanlı Arama** - İletişimleri isimlerine göre anında filtreleme
- ✅ **Veri Kalıcılığı** - LocalStorage ile tarayıcı kapansa bile veriler kaybolmaz

### 🎨 Tasarım Özellikleri
- 🎯 Modern ve minimalist arayüz
- 📱 Tam responsive tasarım (desktop, tablet, mobile)
- ✨ Smooth animasyonlar ve geçişler
- 🎨 Gradient efektler ve hover animasyonları
- 🌈 Tutarlı renk paleti ve tasarım sistemi
- 💫 Interactive UI elementleri

### 🛠️ Teknik Özellikler
- ⚛️ React 18 - Modern React özellikleri
- 🔄 Redux Toolkit - Gelişmiş state yönetimi
- 💾 Redux Persist - LocalStorage entegrasyonu
- 📝 Formik & Yup - Form yönetimi ve validasyon
- 🎨 CSS Modules - Modüler ve scoped stil sistemi
- ⚡ Vite - Hızlı geliştirme ve build
- 🎯 ES6+ - Modern JavaScript özellikleri

---

## 🖼️ Ekran Görüntüleri

### Desktop Görünümü
```
┌─────────────────────────────────────────┐
│          📱 İletişim Kitabı             │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐   │
│  │  📝 Yeni İletişim Ekle          │   │
│  │  ├─ İsim: [_____________]       │   │
│  │  └─ Tel:  [_____________]       │   │
│  │         [Ekle]                  │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  🔍 [Ara...]                    │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  👤 Ahmet Yılmaz                │   │
│  │  📞 0555 123 4567    [Sil]      │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  👤 Ayşe Demir                  │   │
│  │  📞 0532 987 6543    [Sil]      │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 🏗️ Proje Yapısı

```
goit-react-hw-06/
├── public/                      # Statik dosyalar
├── src/
│   ├── components/              # React bileşenleri
│   │   ├── App/
│   │   │   ├── App.jsx
│   │   │   └── App.module.css
│   │   ├── Contact/             # İletişim kartı
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.css
│   │   ├── ContactForm/         # İletişim formu
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.module.css
│   │   ├── ContactList/         # İletişim listesi
│   │   │   ├── ContactList.jsx
│   │   │   └── ContactList.module.css
│   │   └── SearchBox/           # Arama kutusu
│   │       ├── SearchBox.jsx
│   │       └── SearchBox.module.css
│   ├── redux/                   # Redux yönetimi
│   │   ├── store.js            # Redux store
│   │   ├── contactsSlice.js    # İletişimler slice
│   │   └── filtersSlice.js     # Filtreler slice
│   ├── main.jsx                # Giriş noktası
│   └── index.css               # Global stiller
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔧 Kurulum

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/Egemen-Yilmaz/goit-react-hw-06.git
cd goit-react-hw-06
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:5173
```

---

## 📦 Bağımlılıklar

### Ana Bağımlılıklar
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "@reduxjs/toolkit": "^2.x",
  "react-redux": "^9.x",
  "redux-persist": "^6.x",
  "formik": "^2.x",
  "yup": "^1.x",
  "nanoid": "^5.x"
}
```

### Geliştirme Bağımlılıkları
```json
{
  "vite": "^7.3.1",
  "@vitejs/plugin-react": "^4.x",
  "eslint": "^9.x"
}
```

---

## 🎯 Kullanım

### İletişim Ekleme
1. "İsim" alanına kişinin adını girin
2. "Tel" alanına telefon numarasını girin
3. "EKLE" butonuna tıklayın
4. ✅ İletişim listeye eklenir ve localStorage'a kaydedilir

### İletişim Arama
1. Arama kutusuna aramak istediğiniz ismi yazın
2. 🔍 Liste otomatik olarak filtrelenir
3. Arama kutusunu temizleyince tüm liste görünür

### İletişim Silme
1. Silmek istediğiniz iletişimin yanındaki "SIL" butonuna tıklayın
2. ❌ İletişim listeden ve localStorage'dan kaldırılır

---

## 🏛️ Redux State Yapısı

### State Şeması
```javascript
{
  contacts: {
    items: [
      {
        id: "unique-id-1",
        name: "Ahmet Yılmaz",
        number: "0555 123 4567"
      },
      // ...
    ]
  },
  filters: {
    name: "" // Arama filtresi
  }
}
```

### Redux Slices

#### 📇 contactsSlice
- **Actions:**
  - `addContact(contact)` - Yeni iletişim ekle
  - `deleteContact(id)` - İletişimi sil
- **Selector:**
  - `selectContacts` - Tüm iletişimleri getir

#### 🔍 filtersSlice
- **Actions:**
  - `changeFilter(filterValue)` - Filtre değerini değiştir
- **Selector:**
  - `selectNameFilter` - Mevcut filtre değerini getir

---

## 🎨 CSS Modül Sistemi

### Renk Paleti
```css
/* Ana Renkler */
--primary-color: #2c3e50      /* Koyu Lacivert */
--secondary-color: #3498db    /* Parlak Mavi */
--accent-color: #e74c3c       /* Kırmızı */
--success-color: #27ae60      /* Yeşil */

/* Arka Planlar */
--bg-primary: #ecf0f1         /* Ana arka plan */
--bg-secondary: #ffffff       /* Kart arka planları */

/* Gölgeler */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15)
```

### Animasyonlar
- **fadeIn** - Sayfa girişi (0.5s)
- **slideIn** - Liste girişi (0.4s)
- **contactSlideIn** - Her kart girişi (0.3s)
- **Hover efektleri** - Transform ve shadow değişimleri

Detaylı CSS dokümantasyonu için: [`CSS_DOCUMENTATION.md`](./CSS_DOCUMENTATION.md)

---

## 🧪 Test

### Manuel Test Senaryoları

#### ✅ Test 1: İletişim Ekleme
1. Forma "Test Kullanıcı" ve "1234567890" girin
2. "EKLE" butonuna tıklayın
3. ✓ İletişim listede görünmeli
4. Sayfayı yenileyin (F5)
5. ✓ İletişim hala listede olmalı

#### ✅ Test 2: Arama Fonksiyonu
1. Birkaç iletişim ekleyin
2. Arama kutusuna bir isim yazın
3. ✓ Sadece eşleşen iletişimler görünmeli
4. Arama kutusunu temizleyin
5. ✓ Tüm iletişimler tekrar görünmeli

#### ✅ Test 3: İletişim Silme
1. Bir iletişimin "SIL" butonuna tıklayın
2. ✓ İletişim listeden kaldırılmalı
3. Sayfayı yenileyin
4. ✓ Silinen iletişim geri gelmemeli

#### ✅ Test 4: Form Validasyonu
1. Boş form göndermeyi deneyin
2. ✓ Hata mesajları görünmeli
3. Sadece 2 karakter girin
4. ✓ "Too Short!" hatası görünmeli

---

## 📱 Responsive Tasarım

### Breakpoint: 640px

#### Desktop (> 640px)
- İki sütunlu layout
- Geniş padding ve spacing
- Hover efektleri aktif
- Side-by-side yerleşim

#### Mobile (≤ 640px)
- Tek sütun layout
- Küçültülmüş padding
- Touch-friendly buton boyutları
- Dikey yerleşim
- Full-width delete butonu

---

## 🚀 Deployment

### Vercel'e Deploy

1. **Vercel CLI Kurulumu**
```bash
npm install -g vercel
```

2. **Deploy Komutu**
```bash
npm run build
vercel --prod
```

3. **Otomatik Deploy**
- GitHub'a push yapın
- Vercel otomatik deploy eder

### Build
```bash
npm run build
```
Build dosyaları `dist/` klasöründe oluşturulur.

---

## 🔐 Veri Güvenliği

- ✅ Tüm veriler **localStorage**'da saklanır
- ✅ Client-side storage (sunucuya gönderilmez)
- ✅ Tarayıcıya özgü veri (cihazlar arası senkronizasyon yok)
- ⚠️ Tarayıcı cache'i temizlenirse veriler kaybolur

---

## 🛠️ Geliştirme

### NPM Scripts
```bash
npm run dev        # Geliştirme sunucusu
npm run build      # Production build
npm run preview    # Build önizleme
npm run lint       # ESLint kontrolü
```

### Kod Standartları
- ESLint yapılandırması aktif
- Prettier ile kod formatlama
- React best practices
- CSS Modules naming convention

---

## 📚 Öğrenme Kaynakları

### Redux Toolkit
- [Redux Toolkit Dokümantasyon](https://redux-toolkit.js.org/)
- [Redux Persist GitHub](https://github.com/rt2zz/redux-persist)
- [React Redux Hooks](https://react-redux.js.org/api/hooks)

### React & Vite
- [React Dokümantasyon](https://react.dev/)
- [Vite Dokümantasyon](https://vitejs.dev/)
- [Formik Dokümantasyon](https://formik.org/)

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! 

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

---

## 📝 Changelog

### v1.0.0 (19 Ocak 2026)
- ✨ İlk release
- ✅ Redux Toolkit entegrasyonu
- ✅ Redux Persist ile veri kalıcılığı
- ✅ Formik & Yup validasyon
- ✅ Modern CSS modül sistemi
- ✅ Responsive tasarım
- ✅ Animasyonlar ve efektler

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👨‍💻 Geliştirici

**Egemen Yılmaz**

- GitHub: [@Egemen-Yilmaz](https://github.com/Egemen-Yilmaz)
- Email: egemen.yilmaz.r@gmail.com

---

## 🙏 Teşekkürler

- [GoIT](https://goit.global/) - Eğitim ve proje gereksinimleri
- [Redux Toolkit Team](https://redux-toolkit.js.org/) - Harika state yönetim aracı
- [Vercel](https://vercel.com/) - Ücretsiz hosting

---

## 📞 Destek

Sorularınız veya önerileriniz için:
- 🐛 [Issue açın](https://github.com/Egemen-Yilmaz/goit-react-hw-06/issues)
- 💬 [Discussion başlatın](https://github.com/Egemen-Yilmaz/goit-react-hw-06/discussions)

---

<div align="center">

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐**

Made with ❤️ and ⚛️ React

</div>
