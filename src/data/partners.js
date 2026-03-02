// Partner logos central registry.
// You placed logo image files under: rus-college/src/data/logo/
// This file imports them and exposes an ordered array used by the Home page marquee.
// If you later move logos to a more conventional folder (e.g. src/assets/partners), just update the import paths.

// IMPORTS (relative to this file). Rename files if you want cleaner names.
import bajajLogo from './logo/475-4752255_bajaj-motorcycle-logo-png-bajaj-group-logo-transparent.png';
import heroLogo from './logo/Hero_MotoCorp-Logo.wine.svg';
import tvsLogo from './logo/TVS_Motor_Company-Logo.wine.png';
import tataLogo from './logo/TATA-logo-vector-01.svg';
import hondaLogo from './logo/Honda_Logo.svg';
import eastmanLogo from './logo/Eastman-logo.jpg';
// The following files are ambiguous; assign them when you know which company they represent.
import downloadPng from './logo/download.png'; // TODO: identify (possibly Suzuki?)
import imagesJpg from './logo/images.jpg';     // TODO: identify (possibly Adani or Solar?)

// Helper to wrap unknown logos later
const unknown = null; // keep as null so fallback text shows

export const partners = [
  { name: 'Bajaj',   logo: bajajLogo },
  { name: 'Suzuki',  logo: downloadPng }, // Replace with actual Suzuki logo when available
  { name: 'Hero',    logo: heroLogo },
  { name: 'TATA',    logo: tataLogo },
  { name: 'Honda',   logo: hondaLogo },
  { name: 'TVS',     logo: tvsLogo },
  { name: 'Adani',   logo: imagesJpg },   // Replace with real Adani logo if different
  { name: 'Solar',   logo: unknown },     // Add a solar company logo file then import & assign
  { name: 'Eastmen', logo: eastmanLogo }, // File name uses Eastman; display text stays Eastmen
  { name: 'Honda',   logo: hondaLogo },   // Duplicate for longer scroll loop
];

// HOW TO UPDATE:
// 1. Place new logo image in ./logo/ (png / svg / jpg)
// 2. Add an import above.
// 3. Replace the corresponding object's 'logo' value.
// 4. If you remove duplication, ensure marquee still feels balanced.

// OPTIONAL IMPROVEMENTS:
// - Export a map keyed by name if you need quick lookup elsewhere.
// - Validate image load errors and fallback to text (current Home.jsx already falls back when logo === null).
