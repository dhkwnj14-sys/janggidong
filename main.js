const restaurants = [
  {
    id: 1,
    name: '청도시골밥상',
    category: 'korean',
    categoryLabel: '한식 · 쌈밥',
    address: '달서구 달구벌대로291길 49, 2층',
    hours: '매일 11:00 – 20:30',
    highlight: '쌈 채소 무한리필 · 1인 식사 전용 메뉴',
    soloFriendly: true,
    menus: [
      { name: '우렁이쌈밥', price: 10000, popular: true },
      { name: '추어탕', price: 10000 },
      { name: '고디탕', price: 10000 },
      { name: '청국장', price: 10000 },
      { name: '고등어구이', price: 5000 },
      { name: '정구지찌짐', price: 5000 }
    ]
  },
  {
    id: 2,
    name: '장기동막창마을',
    category: 'meat',
    categoryLabel: '고기 · 막창',
    address: '달서구 장기동 먹자골목 일대',
    hours: '매일 17:00 – 02:00 (변동 가능)',
    highlight: '혼밥/혼술 1인 세트 · 셀프바 무한',
    soloFriendly: true,
    menus: [
      { name: '혼밥 1인 (생 삼겹살 구이)', price: 12900, popular: true },
      { name: '혼밥 1인 (생 막창 구이)', price: 12900, popular: true },
      { name: '혼밥 1인 (황금막창 구이)', price: 12900 },
      { name: '삼겹살 김치찌개 혼밥', price: 12900 },
      { name: '버섯 된장찌개 혼밥', price: 12900 },
      { name: '실속 생 막창 (200g)', price: 15900 }
    ]
  },
  {
    id: 3,
    name: '지산골가마솥국밥',
    category: 'soup',
    categoryLabel: '국밥 · 한우',
    address: '달서구 용산로 62',
    hours: '평일 08:00 – 22:00 / 주말 07:00 – 22:00',
    highlight: '가마솥 솥밥 포함 · 셀프 반찬 코너',
    soloFriendly: true,
    menus: [
      { name: '소고기국밥 (솥밥 포함)', price: 12000, popular: true },
      { name: '한우육회비빔밥 (솥밥 포함)', price: 17000, popular: true },
      { name: '한우불고기덮밥', price: 12000 },
      { name: '한우육국수', price: 12000 },
      { name: '한우설렁탕 (솥밥 포함)', price: 13000 },
      { name: '물냉면 (계절)', price: 10000 },
      { name: 'A세트 (소고기국밥+돌판떡갈비)', price: 18000 }
    ]
  },
  {
    id: 4,
    name: '진짜돼지국밥',
    category: 'soup',
    categoryLabel: '국밥 · 돼지',
    address: '달서구 달구벌대로276길 10',
    hours: '매일 (점심·저녁 영업)',
    highlight: '바 테이블 · 착한 가격 · 혼밥 최적',
    soloFriendly: true,
    menus: [
      { name: '돼지국밥', price: 7000, popular: true },
      { name: '섞어국밥', price: 7000 },
      { name: '내장국밥', price: 7000 },
      { name: '순대국밥', price: 7500 },
      { name: '얼큰이국밥', price: 8000 }
    ]
  },
  {
    id: 5,
    name: '뚱스삼겹살 장기점',
    category: 'meat',
    categoryLabel: '고기 · 삼겹살',
    address: '달서구 용산로 58',
    hours: '매일 17:00 – 02:00',
    highlight: '1인 150g 주문 가능 · 고기 직접 구워드림',
    soloFriendly: true,
    menus: [
      { name: '생삼겹살 (150g)', price: 10000, popular: true },
      { name: '생목살 (150g)', price: 10000 },
      { name: '항정살 (120g)', price: 11000 },
      { name: '가브리살 (120g)', price: 11000 },
      { name: '비빔국수', price: 6000 },
      { name: '뚱스국수', price: 7000 },
      { name: '김치전골 (小)', price: 15000 }
    ]
  },
  {
    id: 6,
    name: '빠빠식당 초밥&돈까스',
    category: 'japanese',
    categoryLabel: '일식 · 초밥',
    address: '달서구 장기동 886-2',
    hours: '11:30 – 21:00 (브레이크 15:00–17:00)',
    highlight: '1인 세트 · 조용한 분위기 · 간단한 혼술',
    soloFriendly: true,
    menus: [
      { name: '빠초밥 모듬 (10p+국물)', price: 12500, popular: true },
      { name: '숙성수제빠까스 (등심)', price: 10500, popular: true },
      { name: '항정살덮밥', price: 10000 },
      { name: '경양식빠까스', price: 11000 },
      { name: '타레카츠', price: 11500 },
      { name: '생연어초밥 10p (국물)', price: 16000 },
      { name: '장어모듬초밥 10p', price: 18500 }
    ]
  }
];

const categoryLabels = {
  all: '전체',
  korean: '한식',
  meat: '고기',
  soup: '국밥',
  japanese: '일식'
};

function formatPrice(price) {
  return price.toLocaleString('ko-KR') + '원';
}

function renderRestaurants(filter = 'all', search = '') {
  const grid = document.getElementById('restaurantGrid');
  const query = search.trim().toLowerCase();

  const filtered = restaurants.filter((r) => {
    const matchCategory = filter === 'all' || r.category === filter;
    const matchSearch =
      !query ||
      r.name.toLowerCase().includes(query) ||
      r.categoryLabel.toLowerCase().includes(query) ||
      r.menus.some((m) => m.name.toLowerCase().includes(query));

    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <p style="font-size: 2rem; margin-bottom: 12px;">🔍</p>
        <p>검색 결과가 없습니다.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (r, index) => `
    <article class="restaurant-card" data-id="${r.id}" style="animation-delay: ${index * 0.08}s">
      <div class="card-header">
        <div class="card-tags">
          <span class="tag tag-category">${r.categoryLabel}</span>
          ${r.soloFriendly ? '<span class="tag tag-solo">혼밥 OK</span>' : ''}
        </div>
        <h3>${r.name}</h3>
        <p class="card-address">📍 ${r.address}</p>
        <p class="card-hours">🕐 ${r.hours}</p>
      </div>
      <div class="card-body">
        <p class="card-highlight">${r.highlight}</p>
        <ul class="menu-list collapsed" id="menu-${r.id}">
          ${r.menus
            .map(
              (m) => `
            <li>
              <span class="menu-name">
                ${m.name}
                ${m.popular ? '<span class="popular">인기</span>' : ''}
              </span>
              <span class="menu-price">${formatPrice(m.price)}</span>
            </li>
          `
            )
            .join('')}
        </ul>
      </div>
      ${
        r.menus.length > 4
          ? `
      <div class="card-footer">
        <button class="toggle-menu" data-id="${r.id}" aria-expanded="false">
          메뉴 더보기 (+${r.menus.length - 4}개)
        </button>
      </div>
      `
          : ''
      }
    </article>
  `
    )
    .join('');

  attachMenuToggles();
}

function attachMenuToggles() {
  document.querySelectorAll('.toggle-menu').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const menuList = document.getElementById(`menu-${id}`);
      const isCollapsed = menuList.classList.contains('collapsed');

      menuList.classList.toggle('collapsed', !isCollapsed);
      btn.setAttribute('aria-expanded', isCollapsed);
      btn.textContent = isCollapsed ? '메뉴 접기' : `메뉴 더보기 (+${menuList.querySelectorAll('li').length - 4}개)`;
    });
  });
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');
  let currentFilter = 'all';

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentFilter = btn.dataset.filter;
      renderRestaurants(currentFilter, searchInput.value);
    });
  });

  searchInput.addEventListener('input', () => {
    renderRestaurants(currentFilter, searchInput.value);
  });
}

function initHeader() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

function initScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderRestaurants();
  initFilters();
  initHeader();
  initScrollTop();
});
