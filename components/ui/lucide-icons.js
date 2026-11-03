// The Lucide glyphs the site uses (everything else is brand art in lib/icons.js). Named imports keep the bundle to these only.
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, ChevronRight, Maximize2, Menu, Pause, Play, Search, X } from 'lucide-react';

const LUCIDE = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  check: Check,
  'check-circle-2': CheckCircle2,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  'maximize-2': Maximize2,
  menu: Menu,
  pause: Pause,
  play: Play,
  // Not 'search': that name is brand art in lib/icons.js. This is the plain glyph for search inputs.
  'search-field': Search,
  x: X,
};

export default LUCIDE;
