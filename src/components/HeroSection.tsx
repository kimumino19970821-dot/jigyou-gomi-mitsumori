import Image from "next/image";

// Industry icons for the grid (using item icons from the reference assets)
const bizIcons = [
  { src: "/images/ref/item/1.png", label: "飲食店" },
  { src: "/images/ref/item/2.png", label: "ホテル" },
  { src: "/images/ref/item/3.png", label: "病院" },
  { src: "/images/ref/item/4.png", label: "介護施設" },
  { src: "/images/ref/item/5.png", label: "オフィスビル" },
  { src: "/images/ref/item/6.png", label: "食品工場" },
  { src: "/images/ref/item/7.png", label: "スーパー" },
  { src: "/images/ref/item/8.png", label: "店舗" },
  { src: "/images/ref/item/9.png", label: "その他" },
];

export function HeroSection() {
  return (
    <section className="relative bg-[#ffde35] overflow-hidden">
      <div className="max-w-[640px] mx-auto px-4 pt-4 pb-8 relative">
        {/* Header logo */}
        <div className="mb-3 flex items-center gap-2">
          <div className="bg-[#0aac1d] text-white font-black text-sm px-3 py-1.5 rounded">
            ECO
          </div>
          <div className="font-black text-xl text-[#141413] tracking-tight">
            事業ごみ<span className="text-[#4abfd7]">一括見積</span>.com
          </div>
        </div>

        {/* Cyan content card */}
        <div className="relative bg-[#4abfd7] rounded-2xl px-5 py-8 text-white">
          <p className="text-[#ffde35] font-black text-3xl leading-tight mb-1">
            全国対応
          </p>
          <p className="text-white font-bold text-base mb-5">
            事業系一般廃棄物・産業廃棄物<br />一括見積サイト
          </p>

          <div className="inline-block bg-black text-white rounded-full px-5 py-2 mb-4 text-sm font-bold">
            事業ごみの処理費、高くないですか？
          </div>

          <p className="text-white text-sm font-bold mb-3">
            厳選された収集運搬・処分業者から一度に見積
          </p>

          <h1 className="text-white text-5xl font-black leading-[1.15] mb-6">
            <span className="text-[#ffde35]">平均30%削減</span>の<br />
            実績があります
          </h1>

          {/* New opening support banner */}
          <div className="bg-white/20 border-2 border-[#ffde35] rounded-xl p-3 mb-6">
            <p className="text-[11px] text-white/90 font-bold mb-1">
              🏢 新規オープン・新店舗オープン準備中の方へ
            </p>
            <p className="text-sm text-white font-black leading-snug">
              開業時の廃棄物処理業者選定も<br />
              <span className="text-[#ffde35]">まとめてご相談OK</span>
            </p>
          </div>

          {/* Industry grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {bizIcons.map((icon, i) => (
              <div
                key={i}
                className="aspect-square bg-white/20 rounded-lg flex flex-col items-center justify-center p-1"
              >
                <Image
                  src={icon.src}
                  alt={icon.label}
                  width={60}
                  height={60}
                  className="w-2/3 h-2/3 object-contain"
                />
                <span className="text-[9px] text-white font-bold mt-0.5">
                  {icon.label}
                </span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-1 mb-6 bg-white/15 rounded-xl p-3">
            <div className="text-center">
              <p className="text-[10px] text-white/90 font-bold">対応エリア</p>
              <p className="text-2xl font-black text-[#ffde35] leading-none">47<span className="text-xs">都道府県</span></p>
            </div>
            <div className="text-center border-x border-white/30">
              <p className="text-[10px] text-white/90 font-bold">加盟業者</p>
              <p className="text-2xl font-black text-[#ffde35] leading-none">300<span className="text-xs">社+</span></p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-white/90 font-bold">平均削減率</p>
              <p className="text-2xl font-black text-[#ffde35] leading-none">30<span className="text-xs">%</span></p>
            </div>
          </div>

          {/* CTA button */}
          <a
            href="#form"
            className="block bg-[#ff6b35] hover:bg-[#e85a24] transition-colors text-white text-center font-black text-lg rounded-full py-4 shadow-lg shadow-black/20"
          >
            無料で一括見積りする
          </a>
          <p className="text-center text-[10px] text-white/90 mt-2 font-bold">
            60秒で入力完了・相見積もり無料
          </p>
        </div>
      </div>
    </section>
  );
}
