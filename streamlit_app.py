import streamlit as st

st.set_page_config(
    page_title="産業財産権",
    page_icon="🛡️",
    layout="wide"
)

def step1_introduction():
    st.title("産業財産権")
    st.caption("Created by Dit-Lab.(Daiki ITO)")
    st.caption("Supported by Tomoaki ATSUMI")
    
    st.subheader("君のアイデアを守る「盾」を手に入れよう！🛡️")
    
    st.write("""
    すばらしい発明をしても、誰かにマネされてしまったら悲しいですよね。
    
    産業財産権は、そんな悲劇からあなたの「新しい技術」や「デザイン」「ブランド名」を守るための、法的な「盾」です。
    
    **さあ、盾の種類と使い方をマスターしに行きましょう！**
    """)

def step2_product_introduction():
    st.header("これが君の最高傑作！AIペンケース『インテリ・ペンシル』")
    
    col1, col2 = st.columns([1, 2])
    
    with col1:
        st.image("https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400", 
                caption="AIペンケース『インテリ・ペンシル』", 
                width=300)
    
    with col2:
        st.subheader("✨ 特徴")
        
        with st.container():
            st.write("🤖 **すごい技術**")
            st.write("AIが内蔵されていて、授業内容を予測し、最適なペンを光って教えてくれる【世界初の技術】")
            
            st.write("🎨 **クールな見た目**")
            st.write("手にフィットする、未来的な流線型の【オリジナルデザイン】")
            
            st.write("⚙️ **便利な工夫**")
            st.write("ケースの横からワンタッチで定規が飛び出す【便利な構造】")
            
            st.write("📝 **かっこいい名前**")
            st.write("『インテリ・ペンシル』という【製品名とロゴ】")
    
    st.info("このペンケースには、守るべき「宝」がたくさん詰まっています。一つずつ盾で守っていきましょう！")

def step3_four_shields():
    st.header("どの盾で、何を守る？")
    st.write("産業財産権には、主に4種類の盾があります。あなたの発明品のどの部分を、どの盾で守るか考えてみましょう。")
    
    tab1, tab2, tab3, tab4 = st.tabs(["① すごい技術", "② クールな見た目", "③ 名前とロゴ", "④ 便利な工夫"])
    
    with tab1:
        st.subheader("【特許権】で守る！")
        st.write("""
        **「世界初のAI機能」のような、高度な技術的アイデア（発明）を守るのが特許権です。**
        
        取得すれば、一定期間その技術を独占できます。スマートフォンや医薬品の多くがこの盾で守られています。
        """)
        
        st.write("**🧠 ミニクイズ**")
        quiz1_answer = st.radio(
            "自動車の「自動ブレーキ」のような安全技術。これは主にどの権利で守られている？",
            ["特許権", "意匠権", "商標権"],
            key="quiz1"
        )
        
        if quiz1_answer == "特許権":
            st.success("正解！技術的な発明は特許権で守られます。")
        elif quiz1_answer:
            st.error("不正解。自動ブレーキは技術的な発明なので、特許権が最適です。")
    
    with tab2:
        st.subheader("【意匠権】で守る！")
        st.write("""
        **製品の「見た目」、つまり物品の形状や模様、色彩などのデザインを守るのが意匠権です。**
        
        機能は同じでも、見た目が魅力的でなければ売れませんよね。自動車のボディデザインや、ペットボトルの形などがこの盾で守られます。
        """)
        
        col1, col2 = st.columns(2)
        with col1:
            st.image("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300", 
                    caption="特徴的なデザインの椅子", width=250)
        with col2:
            st.image("https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300", 
                    caption="普通の椅子", width=250)
        
        st.write("デザインがユニークなほど、意匠権で守る価値が高まります。")
    
    with tab3:
        st.subheader("【商標権】で守る！")
        st.write("""
        **『インテリ・ペンシル』という名前やロゴマーク。これは製品やサービスの「顔」です。**
        
        このような商品名やロゴを他人にマネされないように守るのが商標権です。更新すれば、半永久的に権利を持ち続けることも可能です。
        """)
        
        st.info("💡 コンビニのロゴや商品名、スマートフォンのリンゴのマークなど、街中には商標権であふれています！")
    
    with tab4:
        st.subheader("【実用新案権】で守る！")
        st.write("""
        **「ワンタッチで飛び出す定規」は便利な工夫ですが、AI技術ほど「高度な発明」ではないかもしれません。**
        
        このような物品の形状や構造に関するちょっとしたアイデア（考案）を守るのが実用新案権です。「プチ特許」のようなイメージです。
        """)

def step4_practice():
    st.header("実践問題：新しいマスクを発明した！")
    st.write("あなたが新しいマスクを発明しました。以下のa〜dの特徴は、それぞれどの権利で守るのが最も適切でしょうか？")
    
    with st.container():
        st.write("**a.** マスクの立体的な形状が、今までにない美しさのデザインになっている。")
        answer_a = st.selectbox("aの権利は？", ["選択してください", "意匠権", "特許権", "商標権", "実用新案権"], key="a")
        
        st.write("**b.** 息をすると発電する、世界初のフィルター技術を搭載した。")
        answer_b = st.selectbox("bの権利は？", ["選択してください", "特許権", "意匠権", "商標権", "実用新案権"], key="b")
        
        st.write("**c.** マスクに『エア・シールド』という名前とロゴを付けた。")
        answer_c = st.selectbox("cの権利は？", ["選択してください", "商標権", "意匠権", "特許権", "実用新案権"], key="c")
        
        st.write("**d.** 耳にかけるゴム紐がずり落ちない、新しいフックの構造を考えた。")
        answer_d = st.selectbox("dの権利は？", ["選択してください", "実用新案権", "意匠権", "特許権", "商標権"], key="d")
    
    _, col2, _ = st.columns([1, 1, 1])
    with col2:
        check_answer = st.button("答え合わせをする", type="primary")
    
    if check_answer:
        st.write("---")
        st.subheader("📊 答え合わせ")
        
        correct_answers = {"a": "意匠権", "b": "特許権", "c": "商標権", "d": "実用新案権"}
        user_answers = {"a": answer_a, "b": answer_b, "c": answer_c, "d": answer_d}
        
        score = 0
        for question in ["a", "b", "c", "d"]:
            if user_answers[question] == correct_answers[question]:
                st.success(f"**{question}.** {correct_answers[question]} ✅ 正解！")
                score += 1
            elif user_answers[question] == "選択してください":
                st.warning(f"**{question}.** 未回答です。正解は {correct_answers[question]} です。")
            else:
                st.error(f"**{question}.** 不正解。正解は {correct_answers[question]} です。")
        
        st.write("---")
        
        if score == 4:
            st.balloons()
            st.success("🎉 **全問正解！これで君も産業財産権マスターだ！**")
        elif score >= 3:
            st.success(f"🌟 **{score}/4問正解！とても良くできました！**")
        elif score >= 2:
            st.info(f"👍 **{score}/4問正解！もう少しです！**")
        else:
            st.warning(f"📝 **{score}/4問正解。復習して再チャレンジしてみましょう！**")
        
        with st.expander("📚 解説を確認する"):
            st.write("""
            **答えの理由：**
            - **a: 意匠権** - 見た目のデザインだから
            - **b: 特許権** - 高度な技術だから
            - **c: 商標権** - 名前とロゴだから
            - **d: 実用新案権** - 物品の構造の工夫だから
            """)

def main():
    st.sidebar.write("") # サイドバーは使用しないが、念のため空要素を配置
    
    # 各ステップを順番に表示
    step1_introduction()
    st.write("---")
    
    step2_product_introduction()
    st.write("---")
    
    step3_four_shields()
    st.write("---")
    
    step4_practice()
    
    # フッター
    st.write("---")
    st.write("💡 **産業財産権をもっと詳しく知りたい場合は、特許庁のウェブサイトを参考にしてください！**")

if __name__ == "__main__":
    main()