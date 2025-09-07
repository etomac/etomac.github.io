const CONTENT = {
	
    "Trading": {	
		
		
      "Fixed Income": [
        {
          id: "fi-treasury-net-issuances",
          title: "Treasury Net Issuances",
          summary: "Compute net supply and interpret its macro/market impact.",
          html: `
            <p><strong>Definition.</strong> Net issuance ≈ <code>Gross Issuance − Redemptions − Buybacks</code>. For a specific period (e.g., monthly/quarterly), you can sum by tenor or bill/note/bond buckets.</p>
            <ol>
              <li><strong>Collect</strong> auction calendars & results (CUSIPs, sizes, tenors) + maturity schedules.</li>
              <li><strong>Aggregate</strong> gross issuance for the period; sum <em>redemptions</em> maturing in the same period; subtract any <em>buybacks</em>.</li>
              <li><strong>Slice</strong> by bills vs. coupons; map to duration buckets if needed.</li>
              <li><strong>Interpretation</strong>: higher net supply (esp. coupons) can steepen curves and pressure risk assets if duration supply rises absent offsetting demand (e.g., QE).</li>
            </ol>
            <p class="mb-1"><strong>Example (toy numbers):</strong></p>
            <pre class="mb-2">Gross: $1,000bn | Redemptions: $750bn | Buybacks: $0bn → Net ≈ $250bn</pre>
            <p class="mb-0">Context matters: bill-heavy net supply impacts front-end funding; coupon-heavy shifts duration and term premium.</p>
          `
        },
        {
          id: "fi-yield-curve-primer",
          title: "Yield Curve Primer",
          summary: "Shapes (normal, flat, inverted), drivers, and typical signals.",
          html: `
            <ul>
              <li><strong>Shapes:</strong> Normal (growth), Flat (transition), Inverted (tight policy/recession risk).</li>
              <li><strong>Drivers:</strong> Policy rate path, term premium, supply/demand, inflation expectations.</li>
              <li><strong>Watch:</strong> 2s10s, 5s30s, OIS vs. UST, breakevens vs. reals.</li>
            </ul>
          `
        },
        {
          id: "fi-duration-convexity",
          title: "Duration & Convexity (Quick Ref)",
          summary: "Key formulas and when to trust linear DV01.",
          html: `
            <p>Approx P/L ≈ <code>-Duration × Δy + 0.5 × Convexity × (Δy)^2</code>. For large moves, include convexity; for callable/ MBS, be mindful of negative convexity.</p>
          `
        }
      ],
      "Technical Analysis": [
        {
          id: "ta-breakout-checklist",
          title: "Breakout Checklist",
          summary: "Structure, volume, context, and risk plan.",
          html: `
            <ul>
              <li>Structure: compression/coil, volatility contraction, clean level.</li>
              <li>Volume: expansion on break, no overhead supply.</li>
              <li>Context: trend alignment across timeframes.</li>
              <li>Risk: invalidate level, position sizing, slippage plan.</li>
            </ul>
          `
        },
        {
          id: "ta-r-multiples",
          title: "R-Multiples & Position Sizing",
          summary: "Turn setups into distribution-aware bets.",
          html: `
            <p>Define stop (1R). Expectancy <code>E = p×R_w − (1−p)×R_l</code>. Focus on <em>edge</em> + <em>variance control</em> (size, correlation).</p>
          `
        }
      ],
      "Macro": [
        {
          id: "macro-liquidity-dash",
          title: "Liquidity Dashboard (Concept)",
          summary: "TGA, RRP, reserves, issuance mix → risk impulse.",
          html: `
            <p>Track Treasury General Account, RRP balances, bank reserves, and coupon vs. bill mix. Shifts between RRP ↔ banking system often map to risk appetite.</p>
          `
        }
      ],
	  "Preservation of capital" : [
	  
        {
          id: "pc-introduction",
          title: "Introduction",
          summary: "Preserve capital",
          html: `
            <p class="text-center"> 	You are not getting your priorities right</p>
	<p>
This quote should act as a constant alert to recalibrate and mean-revert yourself to your ultimate objective. If my life path is a Hull-White model, I probably have a stochastic mean reversion parameters and it happen to be very low right now because even with a huge gap between the forward curve (expected as of the 2010s days) and the current spot, there is a huge gap and is just not been reverting. But like all stochastic models the probability of hitting a tail risk event is either from a highly volatile move (say high mean reversion), or with ... time! Hence worth to be hopeful because a change is probabilstically always in our favour.</p>

	<p>
 Sitting and typing at the moment present me with the enjoyment of spending time on my own, and cultivating hope and higher purpose which all adds up to my pool of joy (Although I should be handling admin tasks for my family *laugh*). Still, allocation of my leisure hours to heighten ability to endure pain and torture (through sports, for exmaple) should undoubtly be a higher priority and strengthen oneself. A scenario is given a optimistic and positive sportsman or military man with my body and my background (or my cards), I trust they could play it very well. There is never an excuse to not try. Never! </p></p>
          `
        }
	  ]
    },

    "Life": {
      "Operating System": [
        {
          id: "life-energy",
          title: "Energy > Time",
          summary: "Guard sleep, nutrition, movement; schedule hard work in peak energy blocks.",
          html: `<p>Time is fixed; energy is variable. Protect 7–8h sleep, sunlight AM, protein-forward meals, and a daily walk. Batch meetings; leave creative blocks intact.</p>`
        },
        {
          id: "life-weekly-review",
          title: "Weekly Review (30–45m)",
          summary: "Close loops, plan experiments, set constraints.",
          html: `<ol><li>Inbox to zero</li><li>Review goals</li><li>Pick 1–2 experiments</li><li>Block calendar</li><li>Write a short strategy note</li></ol>`
        },
        {
          id: "life-id259a",
          title: "Item 0",
          summary: "First entry",
          html: `<p>
		  
		  Staring into the eyes of my year-and-a-half old boy, I realise that no two moments are identical. His smile truly makes me want to ensure that his life will be ok. And most of it is mindset, and being around with people of good mindset. And the right mindset is always having a "That's ok" mentality. Facing adversity or when one have to question themselves, one needs to know that it is ok. There is no need to change, doing better or self-improvement is a luxury, just like having the latest Nintendo Switch or something. The perfect individual pitched by some of the best sellers down in the bookshop asile is imaginery, all humans are flawed, and no, no authors truly about you, they are truly for their bank account and their insecurity of running out people who subscribe to their Podcast, like their comments or befriend with them. So do not let 'society' put you down because (1) they do not care, (2) having 'good' access to society is a add-on service that could come at a cost for some. [It is late (12:02am) but I am glad to start this upcoming project]
		  
		  </p> <p>
		  
		  Again - Priorities. No one's priority should be about reading self-help book or be with people you do not geuinely love to be with. No one priority should be wasted of thing which neither yield short-term or long-term healty, benefit or happiness. Please re-align. You do not need a "Trading Cockpit", you need rather a "life improving cockpit"
		  
		  </p>`
        }
      ]
    },
    "Mathematics": {
		
      "Probability": [
        {
          id: "math-bayes",
          title: "Bayes’ Theorem (Trading Lens)",
          summary: "Update priors with new signals; watch base rates.",
          html: `<p><code>P(A|B) = P(B|A)P(A)/P(B)</code>. In markets, treat signals as <em>noisy</em>. Calibrate false positives/negatives using out-of-sample tests.</p>`
        },
        {
          id: "math-ev",
          title: "Expected Value & Kelly (Lite)",
          summary: "Sizing under uncertainty; volatility caveats.",
          html: `<p>EV = Σ p_i x_i. Kelly <em>fraction</em> is fragile to estimation error; consider half/quarter Kelly.</p>`
        }
      ],
      "Linear Algebra": [
        {
          id: "math-eigen",
          title: "Eigen Stuff in Risk",
          summary: "PCA for curve moves; beware regime shifts.",
          html: `<p>PCA extracts principal modes (level, slope, curvature). Refit often; rolling windows, shrinkage, and robust scaling help.</p>`
        }
      ]
    }
  };

  /*****************************************************************
   * 2) RENDERING HELPERS
   *****************************************************************/
  const $B = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const enc = encodeURIComponent;
  const dec = decodeURIComponent;

  function makeId(str) {
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  // EC 2501 ::  
  // :: ${} is like f'string in Python, enc() turns spaces to %20
  // :: function turns categories to a string (or a 'hash'(#)' string) which suffixes the URL
  function hashFor(cat, sub, sectionId="") {
    // Format: #cat=Trading&sub=Fixed%20Income&sec=fi-treasury-net-issuances
    const base = `#cat=${enc(cat)}&sub=${enc(sub)}`;
    return sectionId ? `${base}&sec=${enc(sectionId)}` : base;
  }
  // EC 2501 :: split the string after "#" in the URL to look up params
  function parseHash() {
    const h = location.hash.slice(1);
    const params = new URLSearchParams(h);
    const cat = params.get('cat') ? dec(params.get('cat')) : null;
    const sub = params.get('sub') ? dec(params.get('sub')) : null;
    const sec = params.get('sec') ? dec(params.get('sec')) : null;
    return { cat, sub, sec };
  }

  /*****************************************************************
   * 3) SIDEBAR RENDERING
   *****************************************************************/
  function renderSidebar(data) {
    const host = document.getElementById('sidebarContent');
    host.innerHTML = '';
	
	  let homeLink = document.createElement('a');
	  homeLink.href = '#intro';
	  homeLink.className = 'list-group-item';  
	  homeLink.textContent = 'Home';//'🏠 Home';
	  host.appendChild(homeLink);
	  
    Object.entries(data).forEach(([topic, subtopics], i) => {
      const topicId = `topic-${makeId(topic)}-${i}`;
      const accId = `acc-${topicId}`;

      const header = document.createElement('div');
      header.className = 'section-title';
      header.textContent = topic;
      host.appendChild(header);

      const list = document.createElement('div');
      list.className = 'list-group list-group-flush';

      Object.keys(subtopics).forEach((sub, j) => {
        const item = document.createElement('a');
        item.href = hashFor(topic, sub);
        item.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
        item.innerHTML = `<span>${sub}</span><span class="badge bg-secondary">${subtopics[sub].length}</span>`;
        list.appendChild(item);
      });

      host.appendChild(list);
    });
  }

  function highlightActive(cat, sub) {
    $$('#sidebarContent a.list-group-item').forEach(a => a.classList.remove('active'));
    const selector = `a[href^="${CSS.escape(hashFor(cat, sub))}"]`;
    const link = $B(selector, $B('#sidebarContent'));
    if (link) link.classList.add('active');
  }

  /*****************************************************************
   * 4) MAIN CONTENT RENDERING
   *****************************************************************/
  function renderMain(cat, sub, sec) {
	  	document.getElementById('clearMemoryBtn').addEventListener('click', () => {
  clearLast();
});
    const title = document.getElementById('pageTitle');
    const intro = document.getElementById('intro');
    const host = document.getElementById('content');

    if (!cat || !sub || !CONTENT[cat] || !CONTENT[cat][sub]) {
      title.textContent = 'Welcome';
      intro.style.display = '';
      host.innerHTML = '';
      return;
    }

    title.textContent = `${cat} / ${sub}`;
    intro.style.display = 'none';

    const cards = CONTENT[cat][sub];
    host.innerHTML = '';

    cards.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card shadow-sm mb-3';
      card.dataset.title = item.title.toLowerCase();
      card.dataset.text = (item.summary + ' ' + item.html.replace(/<[^>]+>/g, ' ')).toLowerCase();

      const anchor = hashFor(cat, sub, item.id);
      card.innerHTML = `
        <div class="card-header d-flex align-items-center justify-content-between">
          <h2 class="h6 mb-0">${item.title}</h2>
          <a href="${anchor}" class="small text-decoration-none">#</a>
        </div>
        <div class="card-body">
          ${item.summary ? `<p class="muted small mb-2 truncate-2">${item.summary}</p>` : ''}
          <div>${item.html}</div>
        </div>
      `;
      host.appendChild(card);
    });

    // Scroll to section if specified
    if (sec) {
      const target = $B(`a[href$="sec=${enc(sec)}"]`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  /*****************************************************************
   * 5) FILTERING + COPY LINK + STATE
   *****************************************************************/
  function attachFiltering() {
    const input = document.getElementById('search');
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      const cards = $$('#content .card');
      cards.forEach(c => {
        const hit = !q || c.dataset.title.includes(q) || c.dataset.text.includes(q);
        c.style.display = hit ? '' : 'none';
      });
    });
  }

  function attachCopyLink() {
    const btn = document.getElementById('copyLinkBtn');
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        btn.textContent = 'Copied!';
        setTimeout(() => (btn.textContent = 'Copy link'), 1200);
      } catch (e) {
        alert('Could not copy to clipboard.');
      }
    });
  }

  function attachExpandAll() {
    const btn = document.getElementById('expandAllBtn');
    btn.addEventListener('click', () => {
      // This example uses simple groups, so nothing collapsible to expand.
      // Kept for future: turn subtopics into accordions if you want nested collapses.
      btn.classList.toggle('active');
    });
  }

  function saveLast(cat, sub) {
    try { localStorage.setItem('lastCat', cat); localStorage.setItem('lastSub', sub); } catch {}
  }
  function loadLast() {
    try { return { cat: localStorage.getItem('lastCat'), sub: localStorage.getItem('lastSub') }; } catch { return {}; }
  }
	function clearLast() {
	  try {
		localStorage.removeItem('lastCat');
		localStorage.removeItem('lastSub');
	  } catch {}
	}
	

  /*****************************************************************
   * 6) ROUTING
   *****************************************************************/
  function navigateFromHash() {
    const { cat, sub, sec } = parseHash();
    if (cat && sub) saveLast(cat, sub);
    highlightActive(cat, sub);
    renderMain(cat, sub, sec);
  }

  function firstLoad() {
    renderSidebar(CONTENT);

    clearLast();
    const { cat, sub } = parseHash();
    if (cat && sub) {
      navigateFromHash();
    } else {
      const last = loadLast();
	  
      if (last.cat && last.sub && CONTENT[last.cat] && CONTENT[last.cat][last.sub]) {
        location.hash = hashFor(last.cat, last.sub);
      }
	  
    }

    attachFiltering();
    attachCopyLink();
    attachExpandAll();
  }

  window.addEventListener('hashchange', navigateFromHash);
  window.addEventListener('DOMContentLoaded', firstLoad);