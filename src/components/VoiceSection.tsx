import Image from "next/image";

const voices = [
  {
    title: "新店舗オープン時の業者選定にも対応",
    city: "飲食チェーン本部／新規5店舗オープン",
    text: "新店舗のオープン準備で、地域ごとに一般廃棄物の収集業者を探すのが大変でした。立地に合う業者を一括紹介してもらえ、既存店の見直しと合わせて年25万円→18万円に。開業サポートまで心強かったです。",
    before: "25",
    after: "18",
    unit: "万円/年",
    reduction: "28",
    img: "/images/illustrations/businessman.svg",
  },
  {
    title: "古い取引業者からの脱却で適正価格に",
    city: "ビルメンテナンス会社／関東エリア",
    text: "長年の付き合いで値上げに応じるしかありませんでした。一括見積で地域の許可業者を比較でき、事業系一般廃棄物のサービス品質そのままで年80万円→56万円に圧縮できました。",
    before: "80",
    after: "56",
    unit: "万円/年",
    reduction: "30",
    img: "/images/illustrations/buildings.svg",
  },
  {
    title: "産廃マニフェスト対応もまとめて依頼",
    city: "医療法人／複数クリニック運営",
    text: "感染性廃棄物や医療系産廃の法令対応は必須で不安でした。電子マニフェスト対応業者を紹介してもらえ、内部監査もスムーズ。コストも年35万円→24万円に下がりました。",
    before: "35",
    after: "24",
    unit: "万円/年",
    reduction: "31",
    img: "/images/illustrations/worker.svg",
  },
  {
    title: "食品残渣のリサイクル率向上",
    city: "食品工場／従業員150名規模",
    text: "産廃処分費の高さとリサイクル率の低さが課題でした。リサイクル対応の優良業者とマッチングしてもらい、年120万円→84万円に。SDGs対応の社内報告にも使えています。",
    before: "120",
    after: "84",
    unit: "万円/年",
    reduction: "30",
    img: "/images/illustrations/factory-trucks.svg",
  },
];

export function VoiceSection() {
  return (
    <section className="bg-white py-12">
      <div className="w-full px-4">
        <h2 className="text-center mb-2">
          <span className="inline-block bg-[#4abfd7] text-white font-black text-lg px-6 py-2 rounded-full">
            導入事例・お客様の声
          </span>
        </h2>
        <p className="text-center text-xs text-[#666] mb-8">
          実際にご利用いただいた法人様のコスト削減事例
        </p>

        <div className="space-y-5">
          {voices.map((v, i) => (
            <div
              key={i}
              className="bg-[#e4f5f9] rounded-2xl p-5 border-2 border-[#4abfd7]"
            >
              <div className="flex gap-3 mb-3 items-start">
                <div className="w-16 h-16 flex-shrink-0 rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <Image
                    src={v.img}
                    alt=""
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-[#4abfd7] text-base leading-tight mb-1">
                    {v.title}
                  </h3>
                  <p className="text-[11px] text-[#666] font-bold">{v.city}</p>
                </div>
              </div>

              <p className="text-[#333] text-xs leading-relaxed mb-4">
                {v.text}
              </p>

              {/* Before / After */}
              <div className="flex items-center gap-2 bg-white rounded-xl p-3">
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-[#666] font-bold">BEFORE</p>
                  <p className="text-xl font-black text-[#333] line-through decoration-[#f84b6c] decoration-2">
                    {v.before}
                    <span className="text-[10px]">{v.unit}</span>
                  </p>
                </div>
                <div className="text-[#f84b6c] text-2xl font-black">→</div>
                <div className="flex-1 text-center">
                  <p className="text-[10px] text-[#f84b6c] font-bold">AFTER</p>
                  <p className="text-2xl font-black text-[#f84b6c]">
                    {v.after}
                    <span className="text-[10px]">{v.unit}</span>
                  </p>
                </div>
                <div className="bg-[#ffde35] text-black font-black text-[10px] px-2 py-1 rounded-full rotate-6 whitespace-nowrap">
                  ▲{v.reduction}%<br />DOWN
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
