# 🚀 Hızlı Başlangıç Rehberi

## İlk Kurulum (5 dakika)

### 1. Projeyi İndirin
```bash
git clone https://github.com/Egemen-Yilmaz/goit-react-hw-06.git
cd goit-react-hw-06
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Uygulamayı Başlatın
```bash
npm run dev
```

### 4. Tarayıcıda Açın
```
http://localhost:5173
```

🎉 **Tebrikler! Uygulama çalışıyor!**

---

## İlk İletişiminizi Ekleyin

1. **Form'u doldurun:**
   - İsim: "Ahmet Yılmaz"
   - Tel: "0555 123 4567"

2. **"EKLE" butonuna tıklayın**

3. **Sonuç:** İletişim listede görünecek! 🎊

---

## Temel Özellikler

### ✅ İletişim Ekleme
```
Form ➜ İsim + Telefon ➜ Ekle ➜ ✨ Liste
```

### 🔍 Arama
```
Arama Kutusu ➜ İsim Yaz ➜ 🔎 Otomatik Filtre
```

### ❌ Silme
```
İletişim Kartı ➜ SIL Butonu ➜ 🗑️ Kaldırıldı
```

### 💾 Veri Kalıcılığı
```
İletişim Ekle ➜ Sayfa Yenile (F5) ➜ ✅ Hala Orada!
```

---

## Klavye Kısayolları

| Kısayol | Aksiyon |
|---------|---------|
| `Tab` | Formdaki alanlarda gezinme |
| `Enter` | Form gönderme |
| `Ctrl/Cmd + K` | Arama kutusuna odaklanma (gelecek özellik) |

---

## Sorun Giderme

### Port 5173 kullanımda?
```bash
# Farklı bir port kullanın
npm run dev -- --port 3000
```

### Bağımlılıklar yüklenmiyor?
```bash
# Cache temizle ve tekrar dene
rm -rf node_modules package-lock.json
npm install
```

### Build hatası?
```bash
# Projeyi temizle
rm -rf dist
npm run build
```

---

## Özelleştirme

### Renkleri Değiştir
📁 `src/index.css` ➜ CSS değişkenlerini düzenle

```css
:root {
  --primary-color: #2c3e50;  /* ← Burası */
  --secondary-color: #3498db; /* ← Burası */
}
```

### Başlangıç Verileri Ekle
📁 `src/redux/contactsSlice.js` ➜ initialState'i düzenle

```javascript
const initialState = {
  items: [
    { id: nanoid(), name: "Örnek İsim", number: "0555 123 4567" }
  ]
};
```

---

## Daha Fazla Bilgi

- 📖 Tam Dokümantasyon: [README.md](./README.md)
- 🎨 CSS Rehberi: [CSS_DOCUMENTATION.md](./CSS_DOCUMENTATION.md)
- 🔄 Redux Rehberi: [REDUX_GUIDE.md](./REDUX_GUIDE.md)
- 📋 Workflow: [WORKFLOW.md](./WORKFLOW.md)

---

## Yardım

Sorun mu yaşıyorsunuz?
- 🐛 [Issue Aç](https://github.com/Egemen-Yilmaz/goit-react-hw-06/issues)
- 💬 [Discussion](https://github.com/Egemen-Yilmaz/goit-react-hw-06/discussions)

---

**Mutlu Kodlamalar! 🚀**
