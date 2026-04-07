export function FooterSection() {
  return (
    <footer className="bg-[#141413] text-white py-8">
      <div className="max-w-[640px] mx-auto px-4 text-center">
        <div className="mb-4">
          <div className="inline-flex items-center gap-2">
            <div className="bg-[#0aac1d] text-white font-black text-xs px-2 py-1 rounded">
              ECO
            </div>
            <div className="font-black text-base">
              事業ごみ<span className="text-[#4abfd7]">一括見積</span>.com
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs mb-4">
          <a href="#company" className="hover:text-[#ffde35]">運営会社</a>
          <a href="#" className="hover:text-[#ffde35]">サービス案内</a>
          <a href="#" className="hover:text-[#ffde35]">料金について</a>
          <a href="#" className="hover:text-[#ffde35]">加盟業者募集</a>
          <a href="#" className="hover:text-[#ffde35]">利用規約</a>
          <a href="#" className="hover:text-[#ffde35]">プライバシーポリシー</a>
          <a href="#form" className="hover:text-[#ffde35]">お問い合わせ</a>
        </nav>
        <p className="text-[10px] text-white/60">
          運営：株式会社GOLDER
        </p>
        <p className="text-[10px] text-white/60 mt-1">
          © GOLDER Co., Ltd. — 事業系一般廃棄物・産業廃棄物の業者マッチングサービス
        </p>
      </div>
    </footer>
  );
}
