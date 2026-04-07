const industries = [
  "飲食店・レストラン",
  "ホテル・宿泊施設",
  "病院・クリニック",
  "介護施設",
  "オフィスビル",
  "食品工場",
  "スーパー・小売",
  "その他",
];

const wasteTypes = [
  { label: "事業系一般廃棄物", sub: "紙・段ボール・生ごみ・厨房ごみなど" },
  { label: "産業廃棄物", sub: "廃プラ・金属くず・木くず・廃油など" },
  { label: "感染性・医療系廃棄物", sub: "特別管理産業廃棄物" },
  { label: "食品残渣", sub: "厨房残渣・食品ロス・リサイクル対応" },
  { label: "機密文書", sub: "溶解処理・シュレッダー" },
  { label: "混合・その他", sub: "種類がわからない場合もOK" },
];

const volumes = [
  "月50kg未満（45Lごみ袋 約5袋）",
  "月50〜200kg（45Lごみ袋 約5〜20袋）",
  "月200〜500kg（45Lごみ袋 約20〜50袋）",
  "月500kg〜1t（45Lごみ袋 約50〜100袋）",
  "月1t以上（大規模・多拠点）",
  "わからない・新規オープンのため未定",
];

export function FormSection() {
  return (
    <section id="form" className="bg-[#4abfd7] py-12">
      <div className="max-w-[640px] mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-[#ffde35] font-black text-2xl leading-tight">
            60秒で完了・無料一括見積
          </p>
          <p className="text-white text-sm font-bold mt-1">
            既存店舗・新規オープンもOK・しつこい営業なし
          </p>
        </div>

        <form className="bg-white rounded-2xl p-5 shadow-xl space-y-6">
          {/* Industry */}
          <div>
            <label className="block font-black text-sm text-[#333] mb-2">
              業種 <span className="text-[#f84b6c]">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {industries.map((s) => (
                <label
                  key={s}
                  className="flex items-center gap-2 border-2 border-[#e4f5f9] rounded-lg px-3 py-2 text-xs font-bold text-[#333] cursor-pointer hover:border-[#4abfd7] transition-colors"
                >
                  <input type="radio" name="industry" className="accent-[#4abfd7]" />
                  {s}
                </label>
              ))}
            </div>
          </div>

          {/* Waste type */}
          <div>
            <label className="block font-black text-sm text-[#333] mb-2">
              廃棄物の種類 <span className="text-[#f84b6c]">*</span>
              <span className="text-[10px] text-[#666] font-normal ml-2">
                （複数選択可）
              </span>
            </label>
            <div className="space-y-2">
              {wasteTypes.map((w) => (
                <label
                  key={w.label}
                  className="flex items-start gap-2 border-2 border-[#e4f5f9] rounded-lg px-3 py-2 text-xs cursor-pointer hover:border-[#4abfd7] transition-colors"
                >
                  <input
                    type="checkbox"
                    name="waste"
                    className="accent-[#4abfd7] mt-0.5"
                  />
                  <div>
                    <div className="font-bold text-[#333]">{w.label}</div>
                    <div className="text-[10px] text-[#666]">{w.sub}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Volume */}
          <div>
            <label className="block font-black text-sm text-[#333] mb-2">
              月間の廃棄物量（目安）<span className="text-[#f84b6c]">*</span>
            </label>
            <select className="w-full border-2 border-[#e4f5f9] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4abfd7] bg-white">
              <option>選択してください</option>
              {volumes.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>

          {/* Status (existing or new opening) */}
          <div>
            <label className="block font-black text-sm text-[#333] mb-2">
              現在の状況 <span className="text-[#f84b6c]">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "既存の事業所で切替検討",
                "新規オープン準備中",
                "まだ検討段階",
                "その他",
              ].map((n) => (
                <label
                  key={n}
                  className="flex items-center gap-2 border-2 border-[#e4f5f9] rounded-lg px-3 py-2 text-xs font-bold text-[#333] cursor-pointer hover:border-[#4abfd7] transition-colors"
                >
                  <input type="radio" name="status" className="accent-[#4abfd7]" />
                  {n}
                </label>
              ))}
            </div>
          </div>

          {/* Number of locations */}
          <div>
            <label className="block font-black text-sm text-[#333] mb-2">
              対象の事業所・拠点数 <span className="text-[#f84b6c]">*</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {["1拠点", "2〜5拠点", "6〜20拠点", "21拠点〜"].map((n) => (
                <label
                  key={n}
                  className="border-2 border-[#e4f5f9] rounded-lg px-2 py-2 text-xs font-bold text-center text-[#333] cursor-pointer hover:border-[#4abfd7] transition-colors"
                >
                  <input
                    type="radio"
                    name="locations"
                    className="sr-only peer"
                  />
                  <span className="peer-checked:text-[#4abfd7]">{n}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Postal code */}
          <div>
            <label className="block font-black text-sm text-[#333] mb-2">
              事業所の郵便番号 <span className="text-[#f84b6c]">*</span>
            </label>
            <input
              type="text"
              placeholder="000-0000"
              className="w-full border-2 border-[#e4f5f9] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4abfd7]"
            />
            <p className="text-[10px] text-[#666] mt-1">
              複数拠点の場合は代表拠点の郵便番号でOKです
            </p>
          </div>

          {/* Company name */}
          <div>
            <label className="block font-black text-sm text-[#333] mb-2">
              事業者名・店舗名 <span className="text-[#f84b6c]">*</span>
            </label>
            <input
              type="text"
              placeholder="例：〇〇レストラン／株式会社〇〇"
              className="w-full border-2 border-[#e4f5f9] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4abfd7]"
            />
            <p className="text-[10px] text-[#666] mt-1">
              法人・個人事業主・屋号どちらでもOKです
            </p>
          </div>

          {/* Name */}
          <div>
            <label className="block font-black text-sm text-[#333] mb-2">
              ご担当者名 <span className="text-[#f84b6c]">*</span>
            </label>
            <input
              type="text"
              placeholder="山田 太郎"
              className="w-full border-2 border-[#e4f5f9] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4abfd7]"
            />
          </div>

          {/* Tel */}
          <div>
            <label className="block font-black text-sm text-[#333] mb-2">
              連絡先電話番号 <span className="text-[#f84b6c]">*</span>
            </label>
            <input
              type="tel"
              placeholder="03-0000-0000"
              className="w-full border-2 border-[#e4f5f9] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4abfd7]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-black text-sm text-[#333] mb-2">
              メールアドレス <span className="text-[#f84b6c]">*</span>
            </label>
            <input
              type="email"
              placeholder="example@company.co.jp"
              className="w-full border-2 border-[#e4f5f9] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4abfd7]"
            />
            <p className="text-[10px] text-[#666] mt-1">
              見積結果はこちらのメールアドレスにお送りします
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#ff6b35] hover:bg-[#e85a24] transition-colors text-white font-black text-lg rounded-full py-4 shadow-lg"
          >
            無料で一括見積りする
          </button>

          <p className="text-[10px] text-[#666] text-center leading-relaxed">
            ご入力いただいた情報は見積業者への連絡以外には使用しません。
            <br />
            しつこい営業電話の心配はありません。
          </p>
        </form>
      </div>
    </section>
  );
}
