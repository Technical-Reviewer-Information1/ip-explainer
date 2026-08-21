(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const RIGHTS = ['特許権', '実用新案権', '意匠権', '商標権'];

  function drawTree() {
    $('treeBox').innerHTML =
      '<div class="lv1">知的財産権</div><ul>' +
      '<li><strong>産業財産権</strong>（特許庁に出願・登録）<ul>' +
      '<li class="ip">特許権</li><li class="ip">実用新案権</li><li class="ip">意匠権</li><li class="ip">商標権</li></ul></li>' +
      '<li><strong>著作権</strong>（登録は不要。創作した時点で発生）<ul>' +
      '<li>著作者人格権</li><li>著作財産権</li><li>著作隣接権</li></ul></li></ul>';
  }

  const GOODS = [
    { k: 'a', t: '乳酸菌飲料のボトルの形状', a: '商標権', why: 'その形を見ただけで商品名やブランドが思い浮かぶため、<strong>立体商標</strong>として商標権で守られています。デザインとして守るなら意匠権ですが、この例は「商品を区別する目印」としての保護です。' },
    { k: 'b', t: 'スマートフォンの液晶画面に関する高度な発明', a: '特許権', why: '「高度な発明」は特許権です。' },
    { k: 'c', t: '筆記使用の際に同時に多数の色彩が描出される多色鉛筆', a: '実用新案権', why: '物品の形状・構造の工夫（考案）は実用新案権です。特許ほど高度ではない小さな工夫が対象。' },
    { k: 'd', t: '立体的なマスクの形状', a: '意匠権', why: '視覚的に特徴のあるデザインなので<strong>意匠権</strong>で守られます。a と d は形の話でまぎらわしいので、「ブランドの目印か（商標）／見た目のデザインか（意匠）」で見分けます。' }
  ];
  let gAns = {};
  function drawGoods() {
    $('goodsBox').innerHTML = GOODS.map((g, i) =>
      '<div class="g"><div class="t">' + g.k + '　' + g.t + '</div>' +
      '<div class="choice4" data-i="' + i + '" style="grid-template-columns:1fr 1fr">' + RIGHTS.map(r =>
        '<button class="btn" data-i="' + i + '" data-c="' + r + '" style="text-align:center;padding:8px 6px">' + r + '</button>').join('') + '</div>' +
      '<div class="note" id="gfb' + i + '" hidden style="margin-top:8px"></div></div>').join('');
    $('goodsBox').querySelectorAll('button[data-c]').forEach(b => b.addEventListener('click', () => {
      const i = +b.dataset.i, g = GOODS[i], ok = b.dataset.c === g.a;
      const row = $('goodsBox').querySelector('.choice4[data-i="' + i + '"]');
      row.classList.add('locked');
      [...row.children].forEach(x => { if (x.dataset.c === g.a) x.classList.add('correct'); else if (x === b) x.classList.add('wrong'); });
      const fb = $('gfb' + i); fb.hidden = false; fb.className = 'note ' + (ok ? 'ok' : 'ng');
      fb.innerHTML = '<strong>' + g.a + '</strong>　' + g.why;
      gAns[i] = ok;
      const done = Object.keys(gAns).length, right = Object.values(gAns).filter(Boolean).length;
      const n = $('goodsNote');
      n.className = 'note ' + (done === GOODS.length ? (right === done ? 'ok' : 'warn') : 'info');
      n.innerHTML = done + ' / ' + GOODS.length + ' 問（正解 ' + right + ' 問）' +
        (done === GOODS.length ? '<br>a＝商標権、b＝特許権、c＝実用新案権、d＝意匠権。この組合せが本文の【ウ】＝<strong>②</strong>です。' : '');
    }));
    $('goodsNote').className = 'note info'; $('goodsNote').textContent = '0 / ' + GOODS.length + ' 問';
  }

  const PERIOD = [
    { nm: '特許権', y: 20, t: '出願から20年' },
    { nm: '実用新案権', y: 10, t: '出願から10年' },
    { nm: '意匠権', y: 25, t: '出願から25年' },
    { nm: '商標権', y: 10, t: '登録から10年（更新可）', renew: true }
  ];
  function drawPeriod() {
    $('periodBox').innerHTML = PERIOD.map(p =>
      '<div class="periodbar' + (p.renew ? ' renew' : '') + '"><span class="nm">' + p.nm + '</span>' +
      '<span class="tr"><i style="width:' + (p.renew ? 100 : p.y / 25 * 100) + '%"></i></span>' +
      '<span class="yr">' + p.y + '年</span></div>').join('');
    $('ipTable').innerHTML = '<thead><tr><th>権利</th><th>守るもの</th><th>保護期間</th></tr></thead><tbody>' +
      '<tr><td><strong>特許権</strong></td><td>高度な技術的アイデア・発明</td><td>出願から20年</td></tr>' +
      '<tr><td><strong>実用新案権</strong></td><td>物品の形状・構造などの考案</td><td>出願から10年</td></tr>' +
      '<tr><td><strong>意匠権</strong></td><td>物品の形状・模様・色彩などのデザイン</td><td>出願から25年</td></tr>' +
      '<tr><td><strong>商標権</strong></td><td>商品やサービスを区別するマーク・ネーミング</td><td>登録から10年（<strong>更新すれば永続</strong>）</td></tr></tbody>';
  }

  function init() {
    drawTree(); drawGoods(); drawPeriod();
    Quiz.judge('jBox', 'jNote', [
      { k: '⓪', t: '産業財産権は、主に産業や工業製品の製造などに関係する権利であり、消費者庁に出願し登録されることによって、一定期間、その権利を独占することができる。', ok: false,
        why: '出願先は<strong>特許庁</strong>です。消費者庁ではありません。' },
      { k: '①', t: '意匠権は、物品の形状や構造などの考案を保護する権利であり、出願から10年保護される。', ok: false,
        why: 'これは<strong>実用新案権</strong>の説明です。意匠権はデザインを守る権利で、期間は出願から25年です。' },
      { k: '②', t: '商標権は、商品やサービスを区別するために使用するマークやネーミングを保護する権利であり、保護期間は登録から10年であり、更新し続けることにより、永続的に権利を保持できる。', ok: true,
        why: '4つの中で<strong>商標権だけが更新できます</strong>。' },
      { k: '③', t: '実用新案権は、美感・新規性・創作性のある物品の形状・模様・色彩に関するデザインを独占的に利用できる権利である。', ok: false,
        why: 'これは<strong>意匠権</strong>の説明です。①と③で説明が入れかわっています。' },
      { k: '④', t: '特許権は、高度な技術的アイデアや発明を保護する権利であり、権利の所有者は一定期間、他者に利用を許可する際に、ライセンス料を取ることができる。', ok: true,
        why: '特許権の正しい説明です。' }
    ], '適当なのは <strong>②と④</strong> の2つなので、本文の答えは【ア】・【イ】＝<strong>②・④</strong>（順不同）です。');
    Quiz.choice('q2Box', 'q2Note', [
      { k: 'ウ', q: 'a〜d を保護する権利の組合せとして最も適当なものは',
        ch: ['a 商標権／b 実用新案権／c 特許権／d 意匠権', 'a 意匠権／b 実用新案権／c 特許権／d 商標権', 'a 商標権／b 特許権／c 実用新案権／d 意匠権', 'a 意匠権／b 特許権／c 実用新案権／d 商標権'],
        a: 2, why: 'ボトルの形状は立体商標（商標権）、高度な発明は特許権、多色鉛筆のちょっとした技術的改良は実用新案権、立体的なマスクの形状はデザイン（意匠権）です。' }
    ], '本文の答えは【ウ】② です。');
    window.Terms.glossary($('glossBox'), ['知的財産権', '産業財産権', '特許権', '実用新案権', '意匠権', '商標権', '著作権']);
    Worksheet.make('wsBox', {
      name: 'ip-explainer',
      fields: [
        { id: 'i1', label: '① アイデア・作品', hint: '道具、仕組み、見た目、名前など。', rows: 2, ph: '例：片手で開けられる筆箱' },
        { id: 'i2', label: '② 新しいのはどこか', hint: '技術か、見た目か、名前か。ここで権利の種類が決まる。', rows: 3,
          ph: '例：ふたを開ける仕組み（技術）が新しい。形もこれまでにない' },
        { id: 'i3', label: '③ あてはまりそうな権利と理由', hint: '特許権／実用新案権／意匠権／商標権。', rows: 3,
          ph: '例：仕組み→特許権（または実用新案権）、形→意匠権、商品名→商標権' },
        { id: 'i4', label: '④ 守られないもの', hint: 'アイデアそのもの、単なる思いつき、すでにあるもの。', rows: 2,
          ph: '例：「片手で使えると便利」という考え自体は守られない' },
        { id: 'i5', label: '⑤ 出願する前に気をつけること', hint: '公表すると新しさが失われることがある。', rows: 2,
          ph: '例：SNSに写真を上げる前に出願を検討する' }
      ],
      build: function (v, e) {
        return '<h4>産業財産権シート</h4><dl>' +
          '<dt>① アイデア・作品</dt><dd>' + e(v.i1) + '</dd>' +
          '<dt>② 新しい点</dt><dd>' + e(v.i2) + '</dd>' +
          '<dt>③ あてはまる権利と理由</dt><dd>' + e(v.i3) + '</dd>' +
          '<dt>④ 守られないもの</dt><dd>' + e(v.i4) + '</dd>' +
          '<dt>⑤ 出願前の注意</dt><dd>' + e(v.i5) + '</dd></dl>';
      },
      note: '「技術は特許・形は意匠・名前は商標」。1つのものに複数の権利が同時にかかることもあります。'
    });

    window.Terms.attach();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
