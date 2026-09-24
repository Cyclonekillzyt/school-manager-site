import Container from "./Container.jsx";
import DownloadIcon from "./icons/DownloadIcon.jsx";
import { DOWNLOAD_URL, REPO_URL } from "../constants.js";

export default function DownloadPanel() {
  return (
    <Container as="section" id="download" className="py-16 md:py-[68px]">
      <div className="rounded-3xl border border-violet/15 bg-gradient-to-br from-violet/10 to-transparent px-6 py-11 text-center dark:border-white/10 dark:from-violet-dark/15 sm:px-11">
        <div className="mb-2.5 text-[13px] font-semibold text-violet dark:text-violet-dark">
          Ready when you are
        </div>
        <h2 className="mb-3.5 font-display text-[25px] font-medium leading-[1.18] tracking-tight sm:text-[33px]">
          Get School Manager on your phone.
        </h2>
        <p className="mx-auto mb-[30px] max-w-[500px] text-[15.5px] leading-relaxed text-ink-soft dark:text-ink-dark-soft">
          One download, four minutes to set up, and Kwabenya MA2's gradebook is
          off paper for good.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href={DOWNLOAD_URL}
            className="inline-flex items-center gap-2.5 rounded-2xl bg-violet px-6 py-[15px] text-[15px] font-bold text-white shadow-soft transition-transform hover:-translate-y-0.5 dark:bg-violet-dark dark:text-paper-dark dark:shadow-soft-dark"
          >
            <DownloadIcon />
            Download for Android
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-b border-violet/15 pb-0.5 text-[14px] font-semibold text-ink-soft dark:border-white/10 dark:text-ink-dark-soft"
          >
            View source on GitHub
          </a>
        </div>
        <p className="mt-5 text-[12px] text-muted dark:text-muted-dark">
          v1.0 · Android APK, ~93MB · Published by the school's IT team
        </p>
      </div>
    </Container>
  );
}
