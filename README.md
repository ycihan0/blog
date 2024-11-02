# Blog Uygulaması
Bu proje, React Native ve Expo kullanarak geliştirilmiş bir blog uygulamasıdır. Kullanıcıların blog yazıları eklemelerine, düzenlemelerine ve silmelerine olanak tanır. Veriler, bir sunucu API'sine (ngrok aracılığıyla oluşturulmuş bir bağlantıya) HTTP istekleri göndererek yönetilir.

## 📸 Ekran Görüntüleri
![Screenshot_1730577029](https://github.com/user-attachments/assets/c95ffc38-f6f2-4676-9a90-b1467e6bf31a)
![Screenshot_1730580606](https://github.com/user-attachments/assets/db9a7851-ba07-4073-b589-96a9e6ac1b02)
![Screenshot_1730580764](https://github.com/user-attachments/assets/1656eb78-924c-44f2-bce3-85c254da150d)
![Screenshot_1730580774](https://github.com/user-attachments/assets/e6360de3-a148-4d36-b8b3-93dca5fc9d25)

## 🛠 Kullanılan Teknolojiler ve Kütüphaneler
- React Native: Mobil uygulama geliştirmek için.
- Expo: React Native uygulamalarını hızlı bir şekilde çalıştırmak için.
- axios: RESTful API'lerle etkileşim için HTTP istemcisi.
- React Navigation: Uygulama içi sayfalar arasında geçiş ve yönlendirme.
- Ngrok: Yerel geliştirme sunucusunu geçici bir genel URL'ye yönlendirmek için.

## Özellikler
- Blog yazıları ekleyebilme
- Mevcut blog yazılarını düzenleyebilme
- Blog yazılarını silebilme
- API ile veri senkronizasyonu
 ## 📂 Proje Yapısı
 ```bash
├── .expo                     # Expo yapılandırma dosyaları
├── api
│   └── jsonServer.js         # API isteklerini yapan axios yapılandırması
├── assets                    # Uygulama varlıkları (görseller, sesler vb.)
├── components
│   └── BlogPostForm.js       # Blog yazısı formu bileşeni
├── context
│   ├── BlogContext.js        # Blog uygulaması için context yapılandırması
│   └── createDataContext.js  # Context ve reducer oluşturucu
├── screens
│   ├── CreateScreen.js       # Blog yazısı oluşturma ekranı
│   ├── EditScreen.js         # Blog yazısı düzenleme ekranı
│   ├── IndexScreen.js        # Blog yazılarının listelendiği ekran
│   └── ShowScreen.js         # Blog yazısı detay ekranı
├── App.js                    # Ana uygulama dosyası
├── app.json                  # Expo uygulama yapılandırması
├── babel.config.js           # Babel yapılandırması
├── package.json              # Proje bağımlılıkları ve komutları
└── .gitignore                # Git tarafından yoksayılan dosyalar

```
