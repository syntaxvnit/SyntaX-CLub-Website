type RegistrationPayload = {
  registrationId: string; teamSize: number; member1: string; member2: string;
  member3: string; member4: string; year: string; hostel: string;
  leaderName: string; leaderEmail: string; leaderContact: string;
  transactionId: string; screenshotName: string; screenshotMimeType: string;
  screenshotBase64: string;
};
type AppsScriptMessage = { source: "syntax-registration"; success: boolean; message: string; registrationId?: string };

const SCRIPT_URL = "YOUR_APPS_SCRIPT_WEB_APP_URL";
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];

export function initRegistrationForm(): void {
  const form = document.querySelector<HTMLFormElement>("#registrationForm");
  const teamSize = document.querySelector<HTMLSelectElement>("#teamSize");
  const member4Field = document.querySelector<HTMLDivElement>("#member4Field");
  const member4 = document.querySelector<HTMLInputElement>("#member4");
  const screenshot = document.querySelector<HTMLInputElement>("#screenshot");
  const preview = document.querySelector<HTMLDivElement>("#screenshotPreview");
  const previewImage = document.querySelector<HTMLImageElement>("#previewImage");
  const previewName = document.querySelector<HTMLElement>("#previewName");
  const previewSize = document.querySelector<HTMLElement>("#previewSize");
  const uploadMain = document.querySelector<HTMLElement>("#uploadMain");
  const uploadSub = document.querySelector<HTMLElement>("#uploadSub");
  const removeImage = document.querySelector<HTMLButtonElement>("#removeImage");
  const submitButton = document.querySelector<HTMLButtonElement>("#submitBtn");
  const submitButtonText = document.querySelector<HTMLElement>("#submitButtonText");
  const message = document.querySelector<HTMLElement>("#message");
  const responseFrame = document.querySelector<HTMLIFrameElement>("#appsScriptFrame");

  if (!form || !teamSize || !member4Field || !member4 || !screenshot || !preview || !previewImage ||
      !previewName || !previewSize || !uploadMain || !uploadSub || !removeImage ||
      !submitButton || !submitButtonText || !message || !responseFrame) return;

  let previewUrl: string | null = null;
  let submitting = false;
  let responseTimer = 0;

  const showMessage = (text: string, state: "success" | "error") => {
    message.textContent = text;
    message.dataset.state = state;
  };
  const updateTeamSize = () => {
    const showFourth = teamSize.value === "4";
    member4Field.hidden = !showFourth;
    member4.required = showFourth;
    if (!showFourth) member4.value = "";
  };
  teamSize.addEventListener("change", updateTeamSize);
  updateTeamSize();

  const clearPreview = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = null;
    screenshot.value = "";
    preview.hidden = true;
    previewImage.removeAttribute("src");
    uploadMain.textContent = "Choose payment screenshot";
    uploadSub.textContent = "PNG, JPG or WEBP · Maximum 2 MB";
  };
  screenshot.addEventListener("change", () => {
    const file = screenshot.files?.[0];
    if (!file) return;
    if (!ALLOWED_TYPES.includes(file.type)) { clearPreview(); showMessage("Please upload a PNG, JPG or WEBP image.", "error"); return; }
    if (file.size > MAX_FILE_SIZE) { clearPreview(); showMessage("The screenshot must be 2 MB or smaller.", "error"); return; }
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = URL.createObjectURL(file);
    previewImage.src = previewUrl;
    previewName.textContent = file.name;
    previewSize.textContent = `${(file.size / 1024).toFixed(0)} KB`;
    uploadMain.textContent = "Screenshot selected";
    uploadSub.textContent = "You can remove it and choose another image.";
    preview.hidden = false;
    message.textContent = "";
    delete message.dataset.state;
  });
  removeImage.addEventListener("click", clearPreview);

  const readBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const comma = result.indexOf(",");
      comma < 0 ? reject(new Error("Could not read the screenshot.")) : resolve(result.slice(comma + 1));
    };
    reader.onerror = () => reject(new Error("Could not read the screenshot."));
    reader.readAsDataURL(file);
  });
  const setSubmitting = (value: boolean) => {
    submitting = value;
    submitButton.disabled = value;
    submitButtonText.textContent = value ? "Submitting..." : "Submit team registration";
  };

  window.addEventListener("message", (event: MessageEvent<AppsScriptMessage>) => {
    const data = event.data;
    if (!data || data.source !== "syntax-registration" || !submitting) return;
    window.clearTimeout(responseTimer);
    setSubmitting(false);
    if (data.success) {
      showMessage(`Registration submitted successfully. Registration ID: ${data.registrationId || "generated"}. Payment status: Pending.`, "success");
      form.reset();
      updateTeamSize();
      clearPreview();
    } else {
      showMessage(data.message || "Submission failed. Please try again.", "error");
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitting) return;
    if (SCRIPT_URL === "YOUR_APPS_SCRIPT_WEB_APP_URL") {
      showMessage("Add your deployed Google Apps Script Web App URL in registration.ts before accepting registrations.", "error");
      return;
    }
    if (!form.reportValidity()) return;
    const file = screenshot.files?.[0];
    if (!file || !ALLOWED_TYPES.includes(file.type) || file.size > MAX_FILE_SIZE) {
      showMessage("Upload a PNG, JPG or WEBP screenshot of 2 MB or less.", "error");
      return;
    }

    try {
      setSubmitting(true);
      message.textContent = "Preparing your registration...";
      delete message.dataset.state;
      const values = new FormData(form);
      const contact = String(values.get("leaderContact") || "").trim();
      if (!/^[0-9]{10}$/.test(contact)) throw new Error("Enter a valid 10-digit team leader contact number.");

      const payload: RegistrationPayload = {
        registrationId: crypto.randomUUID(),
        teamSize: Number(values.get("teamSize")),
        member1: String(values.get("member1") || "").trim(),
        member2: String(values.get("member2") || "").trim(),
        member3: String(values.get("member3") || "").trim(),
        member4: String(values.get("member4") || "").trim(),
        year: String(values.get("year") || ""),
        hostel: String(values.get("hostel") || "").trim(),
        leaderName: String(values.get("leaderName") || "").trim(),
        leaderEmail: String(values.get("leaderEmail") || "").trim(),
        leaderContact: contact,
        transactionId: String(values.get("transactionId") || "").trim(),
        screenshotName: file.name,
        screenshotMimeType: file.type,
        screenshotBase64: await readBase64(file)
      };

      const postForm = document.createElement("form");
      postForm.method = "POST";
      postForm.action = SCRIPT_URL;
      postForm.target = "appsScriptFrame";
      postForm.style.display = "none";
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "payload";
      input.value = JSON.stringify(payload);
      postForm.appendChild(input);
      document.body.appendChild(postForm);
      postForm.submit();
      postForm.remove();

      message.textContent = "Submitting your details. Please keep this page open...";
      responseTimer = window.setTimeout(() => {
        if (submitting) {
          setSubmitting(false);
          showMessage("No response received. Check your connection. If the row was already added, do not resubmit with the same transaction number.", "error");
        }
      }, 60000);
    } catch (error) {
      setSubmitting(false);
      showMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.", "error");
    }
  });
}
