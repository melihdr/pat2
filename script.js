const questions = [
  {
    q: "Ahmet, iş yerindeki arkadaşlarının kendi hakkında olumsuz konuştuğunu düşünüyor. Kimsenin ona zarar vermek istediğini açıkça söylememesine rağmen, ofiste fısıldaşan kişilere sürekli kulak kabartıyor ve not alıyor. İnsanların yüzüne gülüp arkasından iş çevirdiklerinden emin.",
    options: [
      "Paranoid Kişilik Bozukluğu",
      "Şizotipal Kişilik Bozukluğu",
      "Şizoid Kişilik Bozukluğu",
    ],
    answer: "Paranoid Kişilik Bozukluğu",
    why: "Neden? Çünkü kişi sürekli başkalarının kendisine zarar vereceğine, arkadan iş çevirdiğine inanıyor. Aşırı kuşkuculuk, güven problemi ve tehdit algısı paranoid kişilik bozukluğunun temel özellikleridir.",
  },
  {
    q: "Zeynep, üniversiteyi bitirdikten sonra ailesinden uzak bir şehirde yalnız yaşamayı tercih etti. Ne arkadaş edinmek istiyor ne de ilişkiler kurmak. İnsanlarla iletişim kurduğunda ise duygu göstermiyor, yüzü ifadesiz kalıyor. Sosyal ortamlardan bilinçli olarak uzak duruyor.",
    options: [
      "Paranoid Kişilik Bozukluğu",
      "Şizotipal Kişilik Bozukluğu",
      "Şizoid Kişilik Bozukluğu",
    ],
    answer: "Şizoid Kişilik Bozukluğu",
    why: "Neden? Şizoid bireyler genellikle sosyal ilişkilerden uzak durur, duygusal yakınlık kurmak istemez ve yalnızlıktan rahatsız olmazlar. Duygusal düz ifadeler de tipiktir.",
  },
  {
    q: "Baran, insanların davranışlarının “gizli anlamlar” taşıdığına inanıyor. Bazı geceler televizyondaki karakterlerin kendisine mesaj gönderdiğini düşünüyor. Ayrıca bazen garip sesler duyduğunu ama bunların “başka bir gerçeklikten” geldiğini söylüyor.",
    options: [
      "Paranoid Kişilik Bozukluğu",
      "Şizotipal Kişilik Bozukluğu",
      "Şizoid Kişilik Bozukluğu",
    ],
    answer: " Şizotipal Kişilik Bozukluğu",
    why: "Neden? Şizotipal kişilerde gerçeklikten kopuk, sihirsel düşünceler, garip inançlar ve algı bozuklukları olabilir. Halüsinasyon benzeri yaşantılar ve paranoid düşünceye benzer fikirler olabilir ama organize olmayan, garip düşünceler daha baskındır.",
  },
  {
    q: "Meral, komşularının evine gizlice girip eşyalarıyla oynadığından şüpheleniyor. Kapısının önüne un serpip iz bırakmaya çalışıyor. Polis çağırmayı düşündü ama “kanıtım yok, beni deli sanmasınlar” diyerek vazgeçti.",
    options: [
      "Paranoid Kişilik Bozukluğu",
      "Şizotipal Kişilik Bozukluğu",
      "Şizoid Kişilik Bozukluğu",
    ],
    answer: "Paranoid Kişilik Bozukluğu",
    why: "Neden? Kişi ciddi ve temelsiz kuşkular besliyor. Komşulara yönelik zararlı niyet atfetme ve özel önlemler alma, paranoid yapının işaretidir.",
  },
  {
    q: "Emre, arkadaş ortamlarında konuşmayı tercih etmiyor. Sohbete dahil olmuyor, çoğu zaman uzak bir köşede yalnız oturuyor. Bir arkadaşının doğum gününe davet edildiğinde “rahatsız oluyorum” diyerek gitmedi. Ne yalnızlıktan şikâyet ediyor, ne de insan arıyor.",
    options: [
      "Paranoid Kişilik Bozukluğu",
      "Şizotipal Kişilik Bozukluğu",
      "Şizoid Kişilik Bozukluğu",
    ],
    answer: "Şizoid Kişilik Bozukluğu",
    why: "Neden? Bu bireylerde sosyal ilişki kurma isteği bulunmaz ve genellikle yalnız kalmaktan memnuniyet duyulur. Duygusal düzeyde ilgisizlik de dikkat çekicidir.",
  },
  {
    q: "Serap, çevresindeki enerjilerden etkilendiğini ve bazı insanlarla “telepatik bağ” kurduğunu iddia ediyor. Göz temasından kaçınıyor, davranışları tuhaf ve konuşması dağınık. Bir toplantıda ansızın yıldız fallarından bahsetmeye başladı.",
    options: [
      "Paranoid Kişilik Bozukluğu",
      "Şizotipal Kişilik Bozukluğu",
      "Şizoid Kişilik Bozukluğu",
    ],
    answer: "Şizotipal Kişilik Bozukluğu",
    why: "Neden? Tuhaf inançlar (mistisizm, telepati), sosyal anksiyete, alışılmadık davranışlar ve garip konuşmalar şizotipal kişiliğin tipik göstergeleridir.",
  },
  {
    q: "Kemal, arkadaşlarının sosyal medyada paylaştığı şeylerin aslında ona gönderme olduğunu düşünüyor. “Bugün hava çok soğuk” yazan bir arkadaşının aslında ona mesaj verdiğine inanıyor. Kimseye güvenmiyor ve özel hayatını herkesten saklıyor.",
    options: [
      "Paranoid Kişilik Bozukluğu",
      "Şizotipal Kişilik Bozukluğu",
      "Şizoid Kişilik Bozukluğu",
    ],
    answer: "Paranoid Kişilik Bozukluğu",
    why: " Neden? Kendisini merkeze alarak başkalarının eylemlerini tehdit olarak algılaması, aşırı güvensizlik ve kendini korumaya yönelik tutumlar bu bozukluğa özgüdür.",
  },
  {
    q: 'Derya, çocukluğundan beri en iyi vakti kendiyle geçirdiğini söylüyor. Ne flört etmek ne de arkadaşlık ilgisini çekiyor. Günlük hayatında mekanik şekilde davranıyor, insanlar ona "robot gibisin" diyor. Duygularını anlamakta ve ifade etmekte zorlanıyor.',
    options: [
      "Paranoid Kişilik Bozukluğu",
      "Şizotipal Kişilik Bozukluğu",
      "Şizoid Kişilik Bozukluğu",
    ],
    answer: "Şizoid Kişilik Bozukluğu",
    why: 'Neden? Şizoid kişiler sosyal izolasyon ister, duygularını göstermekten çekinmez çünkü bu duygular zaten çok zayıftır. "Robot gibi" tanımlamalar klinikte sık kullanılır.',
  },
  {
    q: 'Ali, “insanların düşüncelerini zaman zaman okuyabildiğini” söylüyor. Üzerine yoğunlaştığında insanların ruh hallerini görebildiğine inanıyor. Giyim tarzı sıra dışı, takıları sembolik anlamlar taşıyor. İnsanlar onu biraz "garip" buluyor.',
    options: [
      "Paranoid Kişilik Bozukluğu",
      "Şizotipal Kişilik Bozukluğu",
      "Şizoid Kişilik Bozukluğu",
    ],
    answer: "Şizotipal Kişilik Bozukluğu",
    why: "Neden? Şizotipal bozuklukta batıl inançlar, olağandışı düşünce biçimleri, tuhaf görünüm ve garip davranışlar belirgindir. Sosyal uyumsuzlukla birleştiğinde bu tabloyu verir.",
  },
  {
    q: "Nihan, iş yerindeki herkesin ona düşman olduğuna inanıyor. Kendi pozisyonuna göz dikildiğini düşünüyor. Küçük bir eleştiriyi bile ağır saldırı gibi algılıyor ve hemen savunmaya geçiyor. Kimseye açık değil, sürekli diken üstünde yaşıyor.",
    options: [
      "Paranoid Kişilik Bozukluğu",
      "Şizotipal Kişilik Bozukluğu",
      "Şizoid Kişilik Bozukluğu",
    ],
    answer: "Paranoid Kişilik Bozukluğu",
    why: "Neden? Aşırı hassasiyet, zarar görme beklentisi ve eleştirileri tehdit gibi algılama paranoid kişilikte sık görülür. Kişi sürekli savunma halindedir.",
  },
];

let score = 0;

const quizEl = document.getElementById("quiz");
const scoreEl = document.getElementById("score");

questions.forEach((item, index) => {
  const box = document.createElement("div");
  box.className = "question-box";

  const q = document.createElement("p");
  q.textContent = `${index + 1}. ${item.q}`;
  box.appendChild(q);

  item.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt;
    btn.addEventListener("click", function () {
      const allBtns = box.querySelectorAll(".option");
      allBtns.forEach((b) => (b.disabled = true));

      if (opt === item.answer) {
        btn.classList.add("correct");
        feedback.textContent = "✅ Doğru!";
        feedback.style.color = "#28a745";
        score++;
        scoreEl.textContent = `Skor: ${score} / 10`;
      } else {
        btn.classList.add("wrong");
        feedback.textContent = `❌ Yanlış! Doğru cevap: ${item.answer}. ${item.why}`;
        feedback.style.color = "#dc3545";
      }
    });
    box.appendChild(btn);
  });

  const feedback = document.createElement("p");
  feedback.className = "feedback";
  box.appendChild(feedback);

  quizEl.appendChild(box);
});
