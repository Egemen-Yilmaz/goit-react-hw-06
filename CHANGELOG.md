# 📝 Changelog

Tüm önemli değişiklikler bu dosyada belgelenmiştir.

Format [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) standardına dayanmaktadır.

---

## [1.0.0] - 2026-01-19

### 🎉 İlk Release

#### ✨ Eklenenler
- **Redux Toolkit Entegrasyonu**
  - `contactsSlice` - İletişim yönetimi
  - `filtersSlice` - Arama filtresi yönetimi
  - Redux store yapılandırması
  
- **Redux Persist**
  - LocalStorage entegrasyonu
  - Otomatik veri kalıcılığı
  - Sayfa yenilemede veri koruması

- **React Bileşenleri**
  - `App` - Ana container
  - `ContactForm` - İletişim ekleme formu
  - `ContactList` - İletişim listesi
  - `Contact` - İletişim kartı
  - `SearchBox` - Arama kutusu

- **Form Yönetimi**
  - Formik entegrasyonu
  - Yup validasyon şeması
  - Gerçek zamanlı hata mesajları
  - Form reset fonksiyonu

- **CSS Modül Sistemi**
  - CSS değişkenleri (Custom Properties)
  - Modüler stil dosyaları
  - Responsive tasarım (640px breakpoint)
  - Tutarlı renk paleti
  - Gölge sistemi

- **Animasyonlar ve Efektler**
  - fadeIn animasyonu (App)
  - slideIn animasyonu (ContactList)
  - contactSlideIn animasyonu (Contact)
  - Hover transformasyonları
  - Focus ring efektleri
  - Gradient arka planlar

- **Özellikler**
  - İletişim ekleme
  - İletişim silme
  - Gerçek zamanlı arama/filtreleme
  - Form validasyonu
  - Empty state mesajı
  - Responsive tasarım

- **Dokümantasyon**
  - README.md - Ana dokümantasyon
  - CSS_DOCUMENTATION.md - CSS rehberi
  - REDUX_GUIDE.md - Redux öğrenme rehberi
  - WORKFLOW.md - Geliştirme adımları
  - QUICKSTART.md - Hızlı başlangıç
  - LICENSE - MIT lisansı

#### 🔧 Teknik Detaylar
- React 19.2.0
- Redux Toolkit 2.11.2
- React Redux 9.2.0
- Redux Persist 6.0.0
- Vite 7.3.1
- Formik 2.4.9
- Yup 1.7.1
- nanoid 5.1.6

#### 📱 Tarayıcı Desteği
- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

---

## [Unreleased]

### 🚀 Gelecek Özellikler
- [ ] Dark mode desteği
- [ ] İletişim düzenleme
- [ ] Toplu silme
- [ ] İletişim grupları
- [ ] Favori iletişimler
- [ ] Export/Import (JSON, CSV)
- [ ] İletişim fotoğrafı ekleme
- [ ] Email adresi desteği
- [ ] Doğum günü hatırlatıcıları
- [ ] Klavye kısayolları
- [ ] Arama geçmişi
- [ ] Son eklenenler
- [ ] Alfabetik sıralama seçenekleri
- [ ] Türkçe/İngilizce dil desteği

### 🐛 Bilinen Sorunlar
- Yok (şu anda)

---

## Versiyon Notları

### Semantic Versioning
Bu proje [Semantic Versioning](https://semver.org/) kullanır:
- **MAJOR** version: Uyumsuz API değişiklikleri
- **MINOR** version: Yeni özellikler (geriye dönük uyumlu)
- **PATCH** version: Hata düzeltmeleri (geriye dönük uyumlu)

### Değişiklik Kategorileri
- **✨ Eklenenler** - Yeni özellikler
- **🔧 Değiştirilenler** - Mevcut özelliklerde değişiklikler
- **⚠️ Deprecated** - Yakında kaldırılacak özellikler
- **❌ Kaldırılanlar** - Kaldırılan özellikler
- **🐛 Düzeltmeler** - Hata düzeltmeleri
- **🔒 Güvenlik** - Güvenlik yamalarına

---

## Destek ve Yardım

Sorular veya öneriler için:
- 🐛 [Issue Aç](https://github.com/Egemen-Yilmaz/goit-react-hw-06/issues)
- 💬 [Discussion Başlat](https://github.com/Egemen-Yilmaz/goit-react-hw-06/discussions)

---

[1.0.0]: https://github.com/Egemen-Yilmaz/goit-react-hw-06/releases/tag/v1.0.0
[Unreleased]: https://github.com/Egemen-Yilmaz/goit-react-hw-06/compare/v1.0.0...HEAD
