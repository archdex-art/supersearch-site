// Central place for outbound links so the release version lives in one spot.
export const REPO = "https://github.com/archdex-art/SuperSearch";

// Latest published release. Update VERSION when a new release is cut.
export const VERSION = "0.1.0";

// Direct platform downloads — each streams the installer straight down
// rather than opening the Releases page.
const DL = (file: string) => `${REPO}/releases/download/v${VERSION}/${file}`;

// macOS universal (Intel + Apple Silicon)
export const DMG_MACOS = DL(`SuperSearch_${VERSION}_universal.dmg`);
// Windows x64 (NSIS installer)
export const EXE_WINDOWS = DL(`SuperSearch_${VERSION}_x64-setup.exe`);
// Windows x64 (MSI)
export const MSI_WINDOWS = DL(`SuperSearch_${VERSION}_x64_en-US.msi`);
// Linux x64 (Debian/Ubuntu .deb)
export const DEB_LINUX = DL(`SuperSearch_${VERSION}_amd64.deb`);

// All installers for the current release (the GitHub Releases page).
export const RELEASE = `${REPO}/releases/tag/v${VERSION}`;
