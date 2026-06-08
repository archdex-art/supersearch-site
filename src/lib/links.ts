// Central place for outbound links so the release version lives in one spot.
export const REPO = "https://github.com/archdex-art/SuperSearch";

// Latest published release. Update VERSION when a new release is cut.
export const VERSION = "0.1.0";

// Direct macOS download (universal — Intel + Apple Silicon). Clicking this
// streams the .dmg straight down rather than opening the Releases page.
export const DMG_MACOS = `${REPO}/releases/download/v${VERSION}/SuperSearch_${VERSION}_universal.dmg`;

// All installers (macOS / Linux / Windows) for the current release.
export const RELEASE = `${REPO}/releases/tag/v${VERSION}`;
