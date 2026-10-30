// Clovity Federal line icons: drawn on a 48px grid in the brand style (navy outline at a constant 1.5px, one red accent).
// The <Icon> component (components/ui/Icon.jsx) draws this artwork for any name listed here, so pages keep their
// original icon names. Small UI glyphs (checks, chevrons, arrows, menu, play/pause) stay on Lucide.
// Parts with class "a" are the accent stroke, "af" the accent fill; site.css colours them and swaps them on dark or red fills.
export const CF_ICONS = {
  // Platform and products
  'layers': '<path d="M24 8 42 17 24 26 6 17Z"/><path d="M6 24 24 33 42 24"/><path class="a" d="M6 31 24 40 42 31"/>',
  'kanban-square': '<rect x="7" y="7" width="34" height="34" rx="4"/><path d="M17 14v14M24 14v8"/><path class="a" d="M31 14v20"/>',
  'book-lock': '<path d="M10 9h22a4 4 0 0 1 4 4v26H14a4 4 0 0 1-4-4Z"/><path d="M10 35a4 4 0 0 1 4-4h22"/><rect class="a" x="18" y="18" width="10" height="8" rx="1.5"/><path class="a" d="M20 18v-2a3 3 0 0 1 6 0v2"/>',
  'git-branch': '<circle cx="15" cy="10" r="4"/><circle cx="15" cy="38" r="4"/><path d="M15 14v20"/><circle class="a" cx="33" cy="16" r="4"/><path class="a" d="M33 20c0 8-18 6-18 14"/>',
  'git-pull-request': '<circle cx="14" cy="11" r="4"/><circle cx="14" cy="37" r="4"/><path d="M14 15v18"/><circle class="a" cx="34" cy="37" r="4"/><path class="a" d="M34 33V19a5 5 0 0 0-5-5h-7m4-4-4 4 4 4"/>',
  'layout-grid': '<rect x="8" y="8" width="13" height="13" rx="2"/><rect x="27" y="8" width="13" height="13" rx="2"/><rect x="8" y="27" width="13" height="13" rx="2"/><rect class="a" x="27" y="27" width="13" height="13" rx="2"/>',
  'landmark': '<path d="M6 17 24 7l18 10Z"/><path d="M10 21v14M18 21v14M30 21v14M38 21v14M6 40h36"/><path class="a" d="M24 21v14"/><circle class="af" cx="24" cy="13.5" r="1.6"/>',
  'server': '<rect x="8" y="8" width="32" height="13" rx="3"/><rect x="8" y="27" width="32" height="13" rx="3"/><path d="M14 14.5h8M14 33.5h8"/><circle class="af" cx="33" cy="14.5" r="1.8"/><circle class="af" cx="33" cy="33.5" r="1.8"/>',
  'network': '<rect x="18" y="6" width="12" height="10" rx="2"/><rect x="6" y="32" width="12" height="10" rx="2"/><rect x="30" y="32" width="12" height="10" rx="2"/><path class="a" d="M24 16v8M12 32v-8h24v8"/>',
  'package': '<path d="M24 6 40 14v20L24 42 8 34V14Z"/><path d="M8 14 24 22l16-8M24 22v20"/><path class="a" d="m16 10 16 8"/>',
  'cloud-upload': '<path d="M15 35h-2a8 8 0 0 1-1-15.9A11 11 0 0 1 33 16a8 8 0 0 1 2 19h-2"/><path class="a" d="M24 40V24m-6 6 6-6 6 6"/>',

  // Service and support
  'headset': '<path d="M9 28v-4a15 15 0 0 1 30 0v4"/><rect x="7" y="26" width="7" height="11" rx="2.5"/><rect x="34" y="26" width="7" height="11" rx="2.5"/><path class="a" d="M37.5 37c0 4-4 5-9 5h-3"/>',
  'life-buoy': '<circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="7"/><path class="a" d="m13 13 6 6M29 29l6 6M35 13l-6 6M19 29l-6 6"/>',
  'inbox': '<path d="M8 27 13 11h22l5 16v10a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3Z"/><path class="a" d="M8 27h9l3 5h8l3-5h9"/>',
  'siren': '<path d="M15 34V24a9 9 0 0 1 18 0v10"/><rect x="11" y="34" width="26" height="6" rx="2"/><path class="a" d="M24 6v4M10 12l3 3M38 12l-3 3M6 24h3M39 24h3"/>',
  'wrench': '<path d="M29 9a9 9 0 0 0-8 12L9 33a3.5 3.5 0 0 0 5 5l12-12a9 9 0 0 0 12-8l-6 2-4-4Z"/><circle class="af" cx="11.5" cy="35.5" r="1.6"/>',
  'settings-2': '<path d="M8 15h16M34 15h6M8 33h6M24 33h16"/><circle cx="29" cy="15" r="5"/><circle class="a" cx="19" cy="33" r="5"/>',
  'replace': '<rect x="7" y="7" width="15" height="15" rx="2"/><rect class="a" x="26" y="26" width="15" height="15" rx="2"/><path d="M28 10h6a4 4 0 0 1 4 4v6m-3-3 3 3 3-3M20 38h-6a4 4 0 0 1-4-4v-6m3 3-3-3-3 3"/>',
  'refresh-cw': '<path d="M38 20A15 15 0 0 0 11 15M10 28a15 15 0 0 0 27 5"/><path class="a" d="M11 7v8h8M37 41v-8h-8"/>',
  'history': '<path d="M9 24a15 15 0 1 0 4.4-10.6L9 18"/><path d="M9 10v8h8"/><path class="a" d="M24 16v9l6 4"/>',
  'workflow': '<rect x="6" y="8" width="14" height="11" rx="2"/><rect x="28" y="29" width="14" height="11" rx="2"/><path class="a" d="M13 19v8a4 4 0 0 0 4 4h11m-4-4 4 4-4 4"/>',
  'rocket': '<path d="M28 9c6-3 11-2 11-2s1 5-2 11L25 30l-7-7Z"/><path d="m18 23-6 1-4 5 8 1M25 30l-1 6-5 4-1-8"/><circle class="a" cx="30" cy="17" r="3"/><path class="a" d="M13 35c-2 1-4 4-4 4s3-2 4-4"/>',
  'gauge': '<path d="M8 32a16 16 0 1 1 32 0"/><path d="M12 32h4M32 32h4M24 16v3"/><path class="a" d="m24 32 8-9"/><circle class="af" cx="24" cy="32" r="2"/>',

  // Security and identity
  'shield': '<path d="M24 6 39 11v12c0 9-6 16-15 19C15 39 9 32 9 23V11Z"/><path class="a" d="M24 14v20"/>',
  'shield-check': '<path d="M24 6 39 11v12c0 9-6 16-15 19C15 39 9 32 9 23V11Z"/><path class="a" d="m17 24 5 5 9-10"/>',
  'lock': '<rect x="10" y="21" width="28" height="20" rx="3"/><path d="M16 21v-6a8 8 0 0 1 16 0v6"/><circle class="af" cx="24" cy="30" r="2"/><path class="a" d="M24 32v4"/>',
  'key-round': '<circle cx="17" cy="31" r="9"/><path d="m23.5 24.5 15-15M33 15l4 4M29 19l3 3"/><circle class="af" cx="15" cy="33" r="2"/>',
  'fingerprint': '<path d="M14 36c2-4 3-8 3-12a7 7 0 0 1 14 0c0 5-1 10-3 14M10 30c1-2 1-4 1-6a13 13 0 0 1 22-9.5M37 20c.6 1.2 1 2.6 1 4 0 4-.5 8-2 12"/><path class="a" d="M24 24c0 6-1.5 11-4 15"/>',
  'eye': '<path d="M5 24s7-13 19-13 19 13 19 13-7 13-19 13S5 24 5 24Z"/><circle class="a" cx="24" cy="24" r="6"/><circle class="af" cx="24" cy="24" r="2"/>',
  'scan-search': '<path d="M7 15V9a2 2 0 0 1 2-2h6M33 7h6a2 2 0 0 1 2 2v6M41 33v6a2 2 0 0 1-2 2h-6M15 41H9a2 2 0 0 1-2-2v-6"/><circle cx="22" cy="22" r="7"/><path class="a" d="m27 27 7 7"/>',
  'search': '<circle cx="21" cy="21" r="12"/><path class="a" d="m30 30 10 10"/><path d="M15 18a7 7 0 0 1 5-4"/>',
  'file-lock-2': '<path d="M12 6h16l10 10v24a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/><path d="M28 6v10h10"/><rect class="a" x="18" y="27" width="12" height="9" rx="1.5"/><path class="a" d="M20.5 27v-3a3.5 3.5 0 0 1 7 0v3"/>',
  'accessibility': '<circle cx="24" cy="24" r="17"/><circle class="af" cx="24" cy="14" r="2.2"/><path d="M15 20h18M24 20v8"/><path class="a" d="m18 36 6-8 6 8"/>',
  'scale': '<path d="M24 7v34M14 41h20M10 13h28"/><path d="m10 13-5 13a5 5 0 0 0 10 0Z"/><path class="a" d="m38 13-5 13a5 5 0 0 0 10 0Z"/>',

  // Records and documents
  'file-text': '<path d="M12 6h16l10 10v24a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/><path d="M28 6v10h10M16 26h16M16 32h12"/><path class="a" d="M16 20h6"/>',
  'file-search': '<path d="M12 6h16l10 10v24a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/><path d="M28 6v10h10"/><circle class="a" cx="22" cy="27" r="5"/><path class="a" d="m26 31 5 5"/>',
  'file-check-2': '<path d="M12 6h16l10 10v24a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/><path d="M28 6v10h10"/><path class="a" d="m17 29 5 5 9-10"/>',
  'file-badge': '<path d="M12 6h16l10 10v24a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/><path d="M28 6v10h10"/><circle class="a" cx="22" cy="26" r="5"/><path class="a" d="m19 30-2 8 5-2 5 2-2-8"/>',
  'scroll-text': '<path d="M14 40h20a4 4 0 0 0 4-4V8H18a4 4 0 0 0-4 4v24a4 4 0 0 1-8 0v-4h8"/><path d="M22 16h10M22 22h10"/><path class="a" d="M22 28h7"/>',
  'clipboard-check': '<rect x="10" y="10" width="28" height="32" rx="3"/><rect x="17" y="6" width="14" height="7" rx="2"/><path class="a" d="m17 27 5 5 9-10"/>',
  'clipboard-list': '<rect x="10" y="10" width="28" height="32" rx="3"/><rect x="17" y="6" width="14" height="7" rx="2"/><path d="M22 22h10M22 30h10"/><circle class="af" cx="17" cy="22" r="1.6"/><circle class="af" cx="17" cy="30" r="1.6"/>',
  'receipt': '<path d="M11 6h26v36l-4-3-4 3-5-3-5 3-4-3-4 3Z"/><path d="M17 16h14M17 23h14"/><path class="a" d="M17 30h8"/>',
  'newspaper': '<rect x="10" y="8" width="30" height="32" rx="3"/><path d="M10 15H7v21a4 4 0 0 0 4 4M16 26h18M16 32h18"/><rect class="a" x="16" y="14" width="18" height="6" rx="1"/>',
  'mail': '<rect x="6" y="11" width="36" height="26" rx="3"/><path class="a" d="m7 13 17 13 17-13"/>',
  'send': '<path d="M42 6 6 21l14 6 6 14Z"/><path class="a" d="M42 6 20 27"/>',
  'badge-check': '<path d="M24 5l5 4 6-1 2 6 6 3-2 6 2 6-6 3-2 6-6-1-5 4-5-4-6 1-2-6-6-3 2-6-2-6 6-3 2-6 6 1Z"/><path class="a" d="m17 24 5 5 9-10"/>',
  'circle-alert': '<circle cx="24" cy="24" r="17"/><path class="a" d="M24 15v11"/><circle class="af" cx="24" cy="32" r="1.8"/>',
  'flag': '<path d="M11 42V7"/><path d="M11 9c8-4 13 4 21 0v17c-8 4-13-4-21 0"/><circle class="af" cx="11" cy="6" r="2"/>',

  // People, places and planning
  'users': '<circle cx="18" cy="16" r="6"/><path d="M6 38c0-7 5-12 12-12s12 5 12 12"/><circle class="a" cx="33" cy="17" r="5"/><path class="a" d="M33 26c5 0 9 4 9 10"/>',
  'handshake': '<path d="M4 17h6v15H4M44 17h-6v15h6"/><path d="M10 20l7-5h6l3 2 4-2h4l4 4v8l-8 7a3 3 0 0 1-4 0L10 30"/><path class="a" d="m26 17-6 6a2.5 2.5 0 0 0 3.5 3.5L28 23l5 5"/>',
  'building-2': '<path d="M8 42V12l16-6v36M24 18h14a2 2 0 0 1 2 2v22M5 42h38"/><path d="M14 16v2M14 24v2M14 32v2"/><path class="a" d="M30 26h4M30 33h4"/>',
  'building': '<rect x="10" y="6" width="28" height="36" rx="2"/><path d="M17 14h3M28 14h3M17 22h3M28 22h3M17 30h3M28 30h3"/><path class="a" d="M21 42v-6h6v6"/>',
  'map-pin': '<path d="M24 42s13-12 13-23a13 13 0 0 0-26 0c0 11 13 23 13 23Z"/><circle class="a" cx="24" cy="19" r="5"/>',
  'map': '<path d="m6 11 12-5 12 5 12-5v31l-12 5-12-5-12 5Z"/><path d="M18 6v31"/><path class="a" d="M30 11v31"/>',
  'compass': '<circle cx="24" cy="24" r="17"/><path d="m17 31 4-10 10-4-4 10Z"/><path class="a" d="m21 21 10-4-4 10"/><circle class="af" cx="24" cy="24" r="1.6"/>',
  'graduation-cap': '<path d="M24 9 4 19l20 10 20-10Z"/><path d="M12 23v9c0 3 5 6 12 6s12-3 12-6v-9"/><path class="a" d="M44 19v11"/>',
  'calendar': '<rect x="7" y="10" width="34" height="31" rx="3"/><path d="M7 19h34M16 6v8M32 6v8"/><rect class="a" x="15" y="26" width="7" height="7" rx="1"/>',
  'calendar-clock': '<path d="M26 41H10a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h28a3 3 0 0 1 3 3v9M7 19h34M16 6v8M32 6v8"/><circle class="a" cx="35" cy="35" r="8"/><path class="a" d="M35 31v4l3 2"/>',
  'sparkles': '<path d="M20 8c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12Z"/><path class="a" d="M36 28c.5 4 2 5.5 6 6-4 .5-5.5 2-6 6-.5-4-2-5.5-6-6 4-.5 5.5-2 6-6Z"/><circle class="af" cx="37" cy="10" r="2"/>',
};

// Colour family per icon, by topic. site.css gives each family its accent colour and a light tile tint; icons not listed stay blue.
export const CF_ICON_TONES = {
  teal: ['headset', 'life-buoy', 'inbox', 'wrench', 'settings-2', 'replace', 'refresh-cw', 'history', 'workflow', 'rocket', 'gauge'],
  violet: ['shield', 'shield-check', 'lock', 'key-round', 'fingerprint', 'eye', 'scan-search', 'search', 'file-lock-2', 'siren', 'book-lock'],
  amber: ['file-text', 'file-search', 'file-check-2', 'file-badge', 'scroll-text', 'clipboard-check', 'clipboard-list', 'receipt', 'newspaper', 'scale', 'badge-check', 'flag', 'circle-alert', 'accessibility'],
  green: ['users', 'handshake', 'building-2', 'building', 'map-pin', 'map', 'compass', 'graduation-cap', 'calendar', 'calendar-clock', 'mail', 'send', 'sparkles'],
};
