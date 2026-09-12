<template>
  <section class="py-3 px-2 min-h-screen lg:px-0">
    <div class="flex flex-col gap-4 mb-5">
      <div class="w-full p-6 border border-gray-200 rounded-lg shadow bg-[#FCFFE720]">
        <h1 class="mb-2 text-2xl lg:text-3xl font-bold tracking-tight text-primary">Gizlilik Politikası</h1>
        <p class="text-sm lg:text-base text-gray-700">Son güncelleme: 12 Eylül 2026</p>
      </div>

      <div class="w-full p-6 border border-gray-200 rounded-lg shadow bg-[#FCFFE720]">
        <h2 class="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-primary">Kapsam</h2>
        <p class="mb-3 font-normal text-sm lg:text-base text-gray-700">
          Bu politika, Deprem Oldu web sitesi (depremoldu.org) ve Deprem Oldu iOS uygulaması için geçerlidir.
          Uygulama ve site, Türkiye'deki son depremleri bilgilendirme amacıyla sunar.
        </p>
      </div>

      <div class="w-full p-6 border border-gray-200 rounded-lg shadow bg-[#FCFFE720]">
        <h2 class="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-primary">Uygulamada Veri Toplama</h2>
        <p class="mb-3 font-normal text-sm lg:text-base text-gray-700">
          Deprem Oldu iOS uygulaması hiçbir kişisel veri toplamaz, saklamaz veya paylaşmaz. Hesap oluşturma,
          oturum açma, izleme (tracking), reklam ve analitik SDK'sı yoktur. Konum izni istenmez; uygulama
          konum verinize erişmez.
        </p>
      </div>

      <div class="w-full p-6 border border-gray-200 rounded-lg shadow bg-[#FCFFE720]">
        <h2 class="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-primary">Cihazda Saklanan Veriler</h2>
        <p class="mb-3 font-normal text-sm lg:text-base text-gray-700">
          Uygulama, deprem listesini yalnızca cihazınızda geçici olarak önbelleğe alır; bu veri cihazınızdan
          çıkmaz ve uygulamayı sildiğinizde kaldırılır. Önbellek; çevrimdışıyken son verileri görebilmeniz
          için kullanılır.
        </p>
      </div>

      <div class="w-full p-6 border border-gray-200 rounded-lg shadow bg-[#FCFFE720]">
        <h2 class="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-primary">Ağ İstekleri ve Üçüncü Taraflar</h2>
        <p class="mb-3 font-normal text-sm lg:text-base text-gray-700">
          Deprem verileri, uygulamanın cihazınızdan doğrudan Bağaziçi Üniversitesi Kandilli Rasathanesi
          verisini sunan açık API'ye (api.orhanaydogdu.com.tr) yaptığı isteklerle alınır. Bu isteklerde
          kimliğinizi tanımlayan bir bilgi gönderilmez. Fay hattı verisi uygulama içinde gömülüdür
          (GINRAS/AFEAD, 2018).
        </p>
        <p class="font-normal text-sm lg:text-base text-gray-700">
          Harici bağlantılar (AFAD, Evrim Ağacı, YouTube, MTA) yalnız siz dokunduğunuzda açılır; bu sitelerin
          gizlilik uygulamaları kendilerine aittir.
        </p>
      </div>

      <div class="w-full p-6 border border-gray-200 rounded-lg shadow bg-[#FCFFE720]">
        <h2 class="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-primary">Web Sitesi Ölçümü</h2>
        <p class="mb-3 font-normal text-sm lg:text-base text-gray-700">
          depremoldu.org web sitesi, ziyaret istatistikleri için Google Analytics kullanır. Bu ölçüm anonim
          kullanım verileri içerir ve çerezler aracılığıyla çalışır. Tarayıcı ayarlarınızdan çerezleri
          engelleyebilir veya Google Analytics opt-out eklentisini kullanabilirsiniz.
        </p>
      </div>

      <div class="w-full p-6 border border-gray-200 rounded-lg shadow bg-[#FCFFE720]">
        <h2 class="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-primary">Çocukların Gizliliği</h2>
        <p class="mb-3 font-normal text-sm lg:text-base text-gray-700">
          Uygulama ve site, çocuklardan bilerek hiçbir kişisel veri toplamaz. Yaş derecelendirmesi 4+'dır ve
          hesap/veri girişi gerektirmez.
        </p>
      </div>

      <div class="w-full p-6 border border-gray-200 rounded-lg shadow bg-[#FCFFE720]">
        <h2 class="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-primary">Değişiklikler</h2>
        <p class="mb-3 font-normal text-sm lg:text-base text-gray-700">
          Bu politika güncellendiğinde bu sayfadaki "Son güncelleme" tarihi değişir. Önemli değişikliklerde
          uygulama sürüm notlarında bilgilendirme yapılır.
        </p>
      </div>

      <div class="w-full p-6 border border-gray-200 rounded-lg shadow bg-[#FCFFE720]">
        <h2 class="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-primary">İletişim</h2>
        <p class="font-normal text-sm lg:text-base text-gray-700">
          Gizlilikle ilgili sorularınız için:
          <a href="mailto:bedir@proton.me" class="text-blue-800 underline">bedir@proton.me</a>
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
useHead({
  title: "Gizlilik Politikası - Deprem Oldu",
  meta: [
    {
      name: "description",
      content: "Deprem Oldu web sitesi ve iOS uygulaması gizlilik politikası. Uygulama kişisel veri toplamaz; hesap, izleme ve reklam yoktur."
    }
  ]
});
</script>
