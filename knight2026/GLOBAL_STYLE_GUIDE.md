# K-Night Global Style Guide

Tech Event 웹사이트 **K-Night**의 디자인 시스템입니다.  
소스 오브 트루스: [Figma — K-Night (`node 386:1659`)](https://www.figma.com/design/yE5MQhsYjlrM8SxIUD1vpj/K-Night?node-id=386-1659)

관련 구현: [`tailwind.config.js`](./tailwind.config.js), [`src/index.css`](./src/index.css)

> **분석 메모**  
> Figma 캔버스를 직접 열어 시각 분석 + 픽셀 샘플링으로 추출했습니다.  
> Dev Mode / Figma API 토큰이 없어 Inspect 패널의 *정확한* 스타일 수치는 가져오지 못했습니다.  
> 타이포·간격은 **데스크톱 메인 프레임(~1440px 가정) 기준의 캘리브레이션 값**입니다.  
> Figma Inspect와 1px이라도 다르면 이 문서를 Inspect 값으로 덮어쓰세요.

---

## Brand

| 항목 | 값 |
|------|-----|
| Name | K-Night |
| Character | Tech Event — 블랙 베이스 + 파스텔 칩 그래픽, 미니멀·하이엔드 |
| Default theme | Dark (pure black) |
| Light theme | `html.dark` 제거 시 `:root` 라이트 토큰 적용 (추후) |

### Figma vs 이전 구두 브리프 (확인 필요)

| 항목 | 이전 구두 브리프 | Figma 실측 |
|------|------------------|------------|
| 배경 | slate-900 / gray-900 | **순흑 `#000000`** |
| 본문 텍스트 | 톤 다운 라이트 그레이 | **헤딩은 거의 순백 `#FFFFFF`**, 본문·라벨은 그레이 |
| 액센트 | 뮤트 쿨 사이언 단일 | **파스텔 핑크 / 라벤더 / 아이스·민트** 멀티 칩 + 민트 CTA |

이 가이드는 **Figma를 우선**합니다. 구두 브리프로 되돌리려면 알려주세요.

---

## Theme & Dark Mode

- Tailwind `darkMode: 'class'`
- 기본: `<html class="dark">`
- 컴포넌트는 hex 하드코딩 대신 **시맨틱 토큰** 사용

```tsx
<div className="bg-surface text-ink" />
<button className="bg-accent text-surface">VIEW MORE</button>
```

---

## 1. Color Palette

RGB 채널 CSS 변수 → Tailwind (`rgb(var(--token) / <alpha-value>)`).

### Core semantic (UI)

| Token | Tailwind | Hex (dark) | RGB | Usage |
|-------|----------|------------|-----|-------|
| Surface | `bg-surface` | `#000000` | `0 0 0` | 페이지 배경 |
| Surface elevated | `bg-surface-elevated` | `#0C0C0C` | `12 12 12` | 미세 레이어 / Coming Soon 글로우 하단 |
| Surface muted | `bg-surface-muted` | `#1C1C1C` | `28 28 28` | 호버 웰, 약한 패널 |
| Ink | `text-ink` | `#FFFFFF` | `255 255 255` | 헤딩, 핵심 정보 |
| Ink muted | `text-ink-muted` | `#A1A1AA` | `161 161 170` | 본문, 보조 카피 |
| Ink subtle | `text-ink-subtle` | `#71717A` | `113 113 122` | DATE/TIME 라벨, 메타 |
| Accent | `bg-accent` / `text-accent` | `#B8D4D0` | `184 212 208` | VIEW MORE 등 filled CTA |
| Accent hover | `bg-accent-hover` | `#C9E0DC` | `201 224 220` | CTA hover |
| Accent muted | `bg-accent-muted` | `#1A2A28` | `26 42 40` | 소프트 액센트 면 (다크) |
| Line | `border-line` | `#2A2A2A` | `42 42 42` | 구분선, 아웃라인, 태그 보더 |

### Brand chip / graphic accents (Hero collage, marquee)

Figma Hero의 컬러 블록·실루엣에 사용. **넓은 UI 면 전체를 이 색으로 채우지 말 것.**

| Token | Tailwind | Hex | Usage |
|-------|----------|-----|-------|
| Chip pink | `bg-chip-pink` | `#D894A8` | Hero 텍스트 칩, 마퀴 바 |
| Chip lavender | `bg-chip-lavender` | `#B0B8D8` | Hero 칩 (날짜/장소 등) |
| Chip lilac | `bg-chip-lilac` | `#D0C4E8` | Hero 칩 / 그래픽 |
| Chip ice | `bg-chip-ice` | `#D8E4EC` | Hero 칩 (아이스 블루) |
| Chip mint | `bg-chip-mint` | `#B0D0CC` | Hero 칩, CTA와 가까운 민트 |

### Graphic mosaic (참고)

하이라이트 위 인물 실루엣 모자이크는 반투명 퍼플 / 블루 / 코랄 / 티일이 섞입니다.  
재현 시 별도 에셋·그라디언트로 처리하고, UI 토큰으로 승격하지 않습니다.

### Rules

1. 페이지 베이스는 항상 `bg-surface` (`#000`)
2. 텍스트 계층: `ink` → `ink-muted` → `ink-subtle`
3. 인터랙션 CTA fill = `accent` (민트). Ghost CTA = `border-ink` + `text-ink`
4. 핑크/라벤더 칩은 **브랜드 그래픽 전용**

---

## 2. Typography System

### Family

| Role | Font stack | Class |
|------|------------|-------|
| H1–H2 | **Stack Sans Notch** Light | `type-h1` `type-h2` |
| H3–H5 / Body / Footer | **Pretendard** Regular | `type-h3`–`type-h5` `type-body` `type-footer` |
| Caption / Button / Nav | **JetBrains Mono** | `type-caption` `type-button` |

### Type scale (desktop 기준)

| Class | 용도 | Size | Weight | Line-height | Letter-spacing |
|-------|------|------|--------|-------------|----------------|
| `type-h1` | XL display (hero, About title, Coming Soon) | ~96px | 300 | 1 | -0.05px |
| `type-h2` | Section titles + K-Night stats | 56px | 300 | 1.14 | -0.05px |
| `type-h3` | Sans titles | 32px | 400 | 1.25 | -0.01em |
| `type-h4` | Smaller sans | 26px | 400 | 1.23 | -0.01em |
| `type-h5` | Small titles | 24px | 400 | 1.25 | -0.01em |
| `type-body` | Body | 16px | 400 | **1.5** | 0 |
| `type-caption` | Mono labels | 14px / 20px | 400 | 1.25rem | 1px · uppercase |
| `type-button` | Nav / CTA / chips | 16px / 24px | 400 | 1.5rem | 1px · uppercase |
| `type-footer` | Copyright / legal note | 14px | 400 | 2.25rem | 0 |

### Typography rules

1. Use semantic `type-*` classes — do not inline `fontSize` / `lineHeight` clamps.
2. H1–H2: Stack Sans Notch Light. H3–H5 / Body: Pretendard.
3. Caption / Button: JetBrains Mono, weight 400, uppercase.
4. Body line-height is always **1.5**.

```tsx
<p className="type-caption text-text-muted">Date</p>
<dd className="type-h4 text-text">September 12, Saturday</dd>
<p className="type-body text-text">BAKG 홈페이지에서…</p>
```

---

## 3. Spacing & Components

Base unit: **4px**.

### Layout

| Token | Value | Tailwind | Use |
|-------|-------|----------|-----|
| Page max width | 1280px | `max-w-content` (80rem) | 메인 셸 |
| Narrow measure | 480px | `max-w-narrow` (30rem) | 짧은 본문 칼럼 |
| Page gutter (mobile) | 24px | `px-6` | 좌우 여백 |
| Page gutter (desktop) | 48–80px | `px-12` / `px-20` | 좌우 여백 |
| Section Y (default) | 120px | `py-30` | 섹션 간격 |
| Section Y (hero band) | 160px | `py-40` | Hero / 메이저 밴드 |
| Section Y (compact) | 80px | `py-20` | 조밀 구간 |
| Stack gap (default) | 16px | `gap-4` | 제목–본문 |
| Stack gap (loose) | 24–32px | `gap-6` / `gap-8` | 블록 간 |
| Grid gap (highlights) | 12–16px | `gap-3` / `gap-4` | 이미지 갤러리 |
| Info column pad | 24–32px | `px-6` / `px-8` | DATE/TIME/LOCATION 셀 |

### Buttons

| Variant | Figma 예 | Spec |
|---------|----------|------|
| Ghost / Outline | `GET A TICKET` | `rounded-[4px]`, border, `type-button` uppercase |
| Filled accent | `VIEW MORE` | `rounded-sm` (4px), `bg-accent`, `text-surface`, `px-5 py-2`, `text-label` uppercase + trailing `→` |
| Text link | 푸터/인라인 | underline 없음, hover 시 `text-ink` |

### Cards & media

| Rule | Value |
|------|-------|
| Highlight 이미지 radius | **0** (`rounded-none`) |
| 카드 섀도우 | 없음 (플랫) |
| 이미지–캡션 간격 | 12–16px |
| Coming Soon | 중앙 soft radial glow (`surface-elevated` 계열), 카드 보더 없음 |

### Dividers & grids

| Rule | Value |
|------|-------|
| Info 3-col divider | `1px` `border-line` 수직선 |
| Agenda row divider | `1px` `border-line` 수평선 |
| Tag chip (`K-NIGHT 2024`) | `border border-line`, `px-3 py-1`, `text-label` |

### Nav

| Rule | Value |
|------|-------|
| Height | ~72–80px |
| Logo | 좌측 |
| Links | 중앙 또는 로고 우측, `gap-8`~`gap-10`, uppercase `type-button` |
| CTA | 우측 Outline 버튼 |

### Marquee

| Rule | Value |
|------|-------|
| Background | `bg-chip-pink` |
| Text | `text-surface` (흑), bold, uppercase |
| Height | ~48–56px |

---

## Component Checklist

- [ ] `bg-surface` / `text-ink*` / `accent` / `chip-*` / `border-line` 사용
- [ ] 타입 스케일 테이블의 size·weight·leading 준수
- [ ] 섹션 세로 리듬 `py-30` / `py-40` 계열
- [ ] Highlight 이미지 `rounded-none`
- [ ] CTA: Outline(티켓) vs Filled mint(뷰모어) 구분
- [ ] 칩 컬러는 Hero/그래픽에만

---

## Folder Conventions

| Path | Purpose |
|------|---------|
| `src/pages/` | Route-level screens |
| `src/components/layout/` | Shell, header, footer |
| `src/components/ui/` | Button 등 프리미티브 |
| `src/components/common/` | 공통 컴포지트 |
| `src/hooks/` | Hooks |
| `src/lib/` | Helpers |
| `src/assets/` | Images, icons |
| `src/types/` | Shared types |

Import alias: `@/` → `src/`.

---

## Change log

| Date | Change |
|------|--------|
| 2026-07-16 | Figma `386:1659` 시각/픽셀 분석 기반으로 전면 재작성 (블랙 베이스 + 파스텔 칩 팔레트) |
