import DownloadChip from "../components/chips/DownloadChip.jsx";
import PermissionChip from "../components/chips/PermissionChip.jsx";
import InstallDialogChip from "../components/chips/InstallDialogChip.jsx";
import SignInChip from "../components/chips/SignInChip.jsx";

export const STEPS = [
  {
    title: "Download the app",
    body: (
      <>
        Tap the <strong className="text-ink dark:text-ink-dark">Download for Android</strong> button below, in your
        phone's browser. It downloads one file named{" "}
        <code className="rounded-md bg-violet/10 px-1.5 py-0.5 font-mono text-[12.5px] text-violet-deep dark:bg-violet-dark/15 dark:text-violet-dark">
          school-manager.apk
        </code>
        .
      </>
    ),
    Chip: DownloadChip,
  },
  {
    title: "Allow installs from this source",
    body: (
      <>
        The first time, Android blocks the install and offers a{" "}
        <strong className="text-ink dark:text-ink-dark">Settings</strong> button — tap it, then turn on{" "}
        <em>Allow from this source</em>. You only do this once, ever.
      </>
    ),
    Chip: PermissionChip,
  },
  {
    title: "Open the file and install",
    body: (
      <>
        Go back to the downloaded file — usually in your <strong className="text-ink dark:text-ink-dark">Downloads</strong>{" "}
        folder, or the notification that appeared — tap it, then tap{" "}
        <strong className="text-ink dark:text-ink-dark">Install</strong>.
      </>
    ),
    Chip: InstallDialogChip,
  },
  {
    title: "Sign in",
    body: (
      <>
        Open School Manager and sign in with the email and password your admin set up for you. Forgot it? Use{" "}
        <strong className="text-ink dark:text-ink-dark">Forgot Password</strong> on the sign-in screen.
      </>
    ),
    Chip: SignInChip,
  },
];
